import React, { useEffect, useMemo, useState } from 'react'
import { Filter, CalendarDays } from 'lucide-react'
import { api } from '../../lib/api'
import useRealtime from '../../hooks/useRealtime'

function Stat({ label, value, chip, chipCls }) {
  return (
    <div className="rounded-[8px] border border-black/[0.08] bg-white p-[16px]">
      <p className="text-[11px] text-[#94a3b8]">{label}</p>
      <p className="mt-2 text-[36px] font-bold leading-none text-[#111827]">{value}</p>
      {chip ? <span className={`mt-2 inline-flex rounded-[12px] px-2 py-1 text-[10px] font-medium ${chipCls}`}>{chip}</span> : null}
    </div>
  )
}

export default function AdminAnalytics() {
  const tenantId = localStorage.getItem('lms_tenant_id')
  const [dashboard, setDashboard] = useState({})
  const [courses, setCourses] = useState([])
  const [payments, setPayments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const load = async () => {
    try {
      setLoading(true)
      setError('')
      const [d, c, p] = await Promise.all([
        api('/lms/dashboard/admin').catch(() => ({})),
        api('/lms/courses?limit=300').catch(() => ({ items: [] })),
        api('/lms/payments?limit=500').catch(() => ({ items: [] })),
      ])
      setDashboard(d || {})
      setCourses(c.items || [])
      setPayments(p.items || [])
    } catch (err) {
      setDashboard({})
      setCourses([])
      setPayments([])
      setError(err?.message || 'Unable to load analytics.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  useRealtime(tenantId ? `tenant:${tenantId}` : '', () => load())

  const capturedPayments = useMemo(() => payments.filter((p) => p.status === 'captured'), [payments])
  const failedPayments = useMemo(() => payments.filter((p) => p.status === 'failed'), [payments])
  const totalCaptured = useMemo(
    () => capturedPayments.reduce((sum, p) => sum + Number(p.amount || 0), 0),
    [capturedPayments],
  )
  const successRate = useMemo(
    () => (payments.length ? Math.round((capturedPayments.length / payments.length) * 100) : 0),
    [payments, capturedPayments],
  )
  const avgOrderValue = useMemo(
    () => (capturedPayments.length ? Math.round(totalCaptured / capturedPayments.length) : 0),
    [capturedPayments, totalCaptured],
  )

  const recentWeek = useMemo(() => {
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const dayIndexToLabel = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const today = new Date()
    const buckets = {}
    labels.forEach((l) => {
      buckets[l] = 0
    })

    capturedPayments.forEach((p) => {
      const d = p.created_at ? new Date(p.created_at) : null
      if (!d || Number.isNaN(d.getTime())) return
      const diffDays = Math.floor((today.getTime() - d.getTime()) / (1000 * 60 * 60 * 24))
      if (diffDays < 0 || diffDays > 6) return
      const lbl = dayIndexToLabel[d.getDay()]
      if (lbl in buckets) buckets[lbl] += Number(p.amount || 0)
    })

    const values = labels.map((l) => buckets[l])
    const maxValue = Math.max(...values, 1)
    return labels.map((label, idx) => ({
      label,
      value: values[idx],
      height: Math.max(12, Math.round((values[idx] / maxValue) * 100)),
    }))
  }, [capturedPayments])

  const topCourses = useMemo(() => {
    return [...courses]
      .sort((a, b) => Number(b.price || 0) - Number(a.price || 0))
      .slice(0, 6)
      .map((c) => ({
        name: c.title,
        type: c.course_type || 'n/a',
        price: Number(c.price || 0),
        youtube: Boolean(c.youtube_url),
      }))
  }, [courses])

  const learnerSegments = useMemo(() => {
    const total = payments.length || 1
    const paid = Math.round((capturedPayments.length / total) * 100)
    const failed = Math.round((failedPayments.length / total) * 100)
    const pending = Math.max(0, 100 - paid - failed)
    return { paid, pending, failed }
  }, [payments, capturedPayments, failedPayments])

  const insights = useMemo(() => {
    const list = []
    list.push([
      'Course inventory',
      `You currently have ${courses.length} courses and ${Number(dashboard.total_live_classes || 0)} live classes listed.`,
    ])
    list.push([
      'Revenue conversion',
      `Payment success rate is ${successRate}%, with captured revenue at Rs. ${totalCaptured.toLocaleString('en-IN')}.`,
    ])
    list.push([
      'Order value trend',
      `Average captured order value is Rs. ${avgOrderValue.toLocaleString('en-IN')}.`,
    ])
    return list
  }, [courses, dashboard, successRate, totalCaptured, avgOrderValue])

  return (
    <div className="min-h-full bg-[#f6f8fa]">
      <div className="space-y-4 p-4 sm:p-5">
        {error ? (
          <div className="rounded-[8px] border border-red-200 bg-red-50 p-3 text-[12px] text-red-700">{error}</div>
        ) : null}

        <section className="grid grid-cols-1 gap-3 rounded-[8px] border border-black/[0.08] bg-[#eaf2fb] p-4 lg:grid-cols-[1.7fr_1fr]">
          <div>
            <span className="inline-flex rounded-[12px] bg-[#ffd966] px-[10px] py-[5px] text-[11px] font-medium text-[#4b2e00]">Analytics overview</span>
            <h2 className="mt-3 max-w-[760px] text-[28px] font-bold leading-tight text-[#0f172a]">Track course performance, learner engagement, and revenue momentum from one analytics workspace.</h2>
            <p className="mt-2 max-w-[760px] text-[14px] text-[#94a3b8]">Review weekly trends, spot drop-offs early, and compare top-performing programs without leaving the institute dashboard.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button className="inline-flex h-9 items-center gap-1 rounded-[7px] bg-[#5b3df6] px-3 text-[12px] font-semibold text-white"><Filter className="h-4 w-4" />Apply Filters</button>
              <button className="inline-flex h-9 items-center gap-1 rounded-[7px] border border-black/[0.08] bg-white px-3 text-[12px] font-semibold text-[#111827]"><CalendarDays className="h-4 w-4" />Last 30 days</button>
            </div>
          </div>
          <div className="space-y-2">
            <div className="rounded-[8px] border border-black/[0.08] bg-white p-3">
              <p className="text-[10px] text-[#94a3b8]">Reporting freshness</p>
              <p className="text-[42px] font-bold leading-none text-[#111827]">{loading ? '...' : `${payments.length}`}</p>
              <p className="text-[11px] text-[#94a3b8]">Total payment records</p>
            </div>
            <div className="rounded-[8px] border border-black/[0.08] bg-white p-3">
              <p className="text-[10px] text-[#94a3b8]">Warnings</p>
              <p className="text-[22px] font-bold text-[#111827]">{failedPayments.length} failed payments</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <Stat label="Students" value={Number(dashboard.total_students || 0).toLocaleString('en-IN')} chip="From dashboard" chipCls="bg-[#2dd4bf] text-[#023b33]" />
          <Stat label="Instructors" value={Number(dashboard.total_instructors || 0).toLocaleString('en-IN')} chip="From dashboard" chipCls="bg-[#2dd4bf] text-[#023b33]" />
          <Stat label="Courses" value={Number(dashboard.total_courses || 0).toLocaleString('en-IN')} chip={`${courses.length} listed`} chipCls="bg-[#f0f4f8] text-[#64748b]" />
          <Stat label="Revenue from enrollments" value={`Rs. ${Number(totalCaptured || dashboard.total_revenue || 0).toLocaleString('en-IN')}`} chip={`${successRate}% success`} chipCls="bg-[#ffd966] text-[#4b2e00]" />
        </div>

        <div className="grid grid-cols-1 gap-3 xl:grid-cols-[1.6fr_1fr]">
          <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
            <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-[22px] font-bold text-[#111827]">Performance trend</h3>
                <p className="text-[12px] text-[#94a3b8]">Enrollment and engagement trend across the last 7 days.</p>
              </div>
              <div className="flex flex-wrap gap-1 text-[11px]">
                <button className="rounded-[7px] border border-black/[0.08] bg-[#ede7ff] px-2 py-1">Weekly</button>
                <button className="rounded-[7px] border border-black/[0.08] bg-white px-2 py-1">Monthly</button>
                <button className="rounded-[7px] border border-black/[0.08] bg-white px-2 py-1">By course</button>
              </div>
            </div>
            <div className="flex h-[190px] items-end justify-between rounded-[8px] bg-[#f8fafc] px-4 pb-4">
              {recentWeek.map((day) => (
                <div key={day.label} className="flex flex-col items-center gap-1">
                  <div className="w-7 rounded-t-[4px] bg-gradient-to-b from-[#f7b267] to-[#5b3df6] sm:w-10" style={{ height: `${day.height}px` }} />
                  <span className="text-[9px] text-[#94a3b8]">{day.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
              <div className="rounded-[8px] bg-[#f1f5f9] p-2"><p className="text-[10px] text-[#94a3b8]">Peak day</p><p className="text-[16px] font-bold text-[#111827]">{recentWeek.reduce((a, b) => (a.value > b.value ? a : b), { label: '-', value: 0 }).label}</p></div>
              <div className="rounded-[8px] bg-[#f1f5f9] p-2"><p className="text-[10px] text-[#94a3b8]">Success rate</p><p className="text-[16px] font-bold text-[#111827]">{successRate}%</p></div>
              <div className="rounded-[8px] bg-[#f1f5f9] p-2"><p className="text-[10px] text-[#94a3b8]">Avg order value</p><p className="text-[16px] font-bold text-[#111827]">Rs. {avgOrderValue.toLocaleString('en-IN')}</p></div>
            </div>
          </section>

          <div className="space-y-3">
            <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
              <h3 className="text-[20px] font-bold text-[#111827]">Learner segments</h3>
              <p className="text-[12px] text-[#94a3b8]">Where active learners are spending most time.</p>
              <div className="mx-auto mt-3 grid w-[170px] place-items-center">
                <div className="grid h-[130px] w-[130px] place-items-center rounded-full" style={{ background: `conic-gradient(#5b3df6 0 ${learnerSegments.paid}%, #9ca3af ${learnerSegments.paid}% ${learnerSegments.paid + learnerSegments.pending}%, #f7b267 ${learnerSegments.paid + learnerSegments.pending}% 100%)` }}>
                  <div className="grid h-[86px] w-[86px] place-items-center rounded-full bg-white text-center">
                    <p className="text-[32px] font-bold leading-none text-[#111827]">{learnerSegments.paid}%</p>
                    <p className="text-[10px] text-[#94a3b8]">captured</p>
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1 text-[11px]">
                <div className="flex justify-between"><span className="text-[#5b3df6]">● Captured</span><span>{learnerSegments.paid}%</span></div>
                <div className="flex justify-between"><span className="text-[#9ca3af]">● Pending/Other</span><span>{learnerSegments.pending}%</span></div>
                <div className="flex justify-between"><span className="text-[#f7b267]">● Failed</span><span>{learnerSegments.failed}%</span></div>
              </div>
            </section>

            <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
              <h3 className="text-[20px] font-bold text-[#111827]">Course scorecards</h3>
              <p className="text-[12px] text-[#94a3b8]">Completion health by top programs.</p>
              {topCourses.map((c) => {
                const pct = Math.max(5, Math.min(100, c.price ? Math.round((c.price / Math.max(topCourses[0]?.price || 1, 1)) * 100) : 5))
                return (
                  <div key={c.name} className="mt-3">
                    <div className="mb-1 flex justify-between text-[11px]"><span>{c.name}</span><span>{pct}%</span></div>
                    <div className="h-2 rounded-full bg-[#edf2ff]"><div className="h-2 rounded-full bg-[#5b3df6]" style={{ width: `${pct}%` }} /></div>
                  </div>
                )
              })}
              {topCourses.length === 0 ? <p className="mt-3 text-[11px] text-[#94a3b8]">No courses available.</p> : null}
            </section>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 xl:grid-cols-[1.6fr_1fr]">
          <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
            <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-[22px] font-bold text-[#111827]">Course performance table</h3>
                <p className="text-[12px] text-[#94a3b8]">Compare engagement, completion, and revenue by course.</p>
              </div>
              <button className="h-8 rounded-[7px] border border-black/[0.08] bg-[#f1f5f9] px-3 text-[11px] font-medium">View all courses</button>
            </div>
            <div className="overflow-x-auto rounded-[8px] border border-black/[0.08]">
              <table className="w-full min-w-[640px] text-left text-[11px]">
                <thead className="bg-[#f8fafc] text-[#94a3b8]">
                  <tr>
                    <th className="px-3 py-2">Course</th>
                    <th className="px-3 py-2">Learners</th>
                    <th className="px-3 py-2">Completion</th>
                    <th className="px-3 py-2">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {topCourses.map((c) => {
                    const score = Math.max(5, Math.min(100, c.price ? Math.round((c.price / Math.max(topCourses[0]?.price || 1, 1)) * 100) : 5))
                    return (
                    <tr key={c.name} className="border-t border-black/[0.06]">
                      <td className="px-3 py-2"><p className="font-semibold text-[#111827]">{c.name}</p><p className="text-[10px] text-[#94a3b8]">Type: {c.type}</p></td>
                      <td className="px-3 py-2">{c.youtube ? 'Has video' : 'No video'}</td>
                      <td className="px-3 py-2"><span className={`rounded-[12px] px-2 py-1 ${score >= 80 ? 'bg-[#2dd4bf]/25 text-[#0b7d66]' : score >= 50 ? 'bg-[#ffd966]/45 text-[#7a5a00]' : 'bg-[#f0f4f8] text-[#64748b]'}`}>{score}%</span></td>
                      <td className="px-3 py-2">Rs. {c.price.toLocaleString('en-IN')}</td>
                    </tr>
                  )})}
                </tbody>
              </table>
              {topCourses.length === 0 ? <p className="p-3 text-[11px] text-[#94a3b8]">No course data available.</p> : null}
            </div>
          </section>

          <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
            <h3 className="text-[20px] font-bold text-[#111827]">Key insights</h3>
            <p className="text-[12px] text-[#94a3b8]">Which changes matter this week</p>
            <div className="mt-3 space-y-2">
              {insights.map(([t, d]) => (
                <div key={t} className="rounded-[8px] border border-black/[0.06] bg-[#f8fafc] p-3">
                  <p className="text-[12px] font-semibold text-[#111827]">{t}</p>
                  <p className="mt-1 text-[10px] text-[#94a3b8]">{d}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
