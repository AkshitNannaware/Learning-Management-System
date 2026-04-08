import React, { useEffect, useMemo, useState } from 'react'
import { BookOpen, IndianRupee, Users, Video } from 'lucide-react'
import { api } from '../../lib/api'
import useRealtime from '../../hooks/useRealtime'

function Card({ title, value }) {
  return (
    <div className="rounded-[8px] border border-black/[0.08] bg-white p-4">
      <p className="text-[12px] text-[#94a3b8]">{title}</p>
      <p className="mt-1 text-[28px] font-bold text-[#0f172a]">{value}</p>
    </div>
  )
}

export default function AdminDashboard() {
  const tenantId = localStorage.getItem('lms_tenant_id')
  const [stats, setStats] = useState({
    total_students: 0,
    total_instructors: 0,
    total_courses: 0,
    total_live_classes: 0,
    total_revenue: 0,
  })
  const [courses, setCourses] = useState([])
  const [liveClasses, setLiveClasses] = useState([])
  const [students, setStudents] = useState([])
  const [payments, setPayments] = useState([])

  const loadAll = async () => {
    const [dash, c, lc, s, p] = await Promise.all([
      api('/lms/dashboard/admin').catch(() => ({})),
      api('/lms/courses?limit=5').catch(() => ({ items: [] })),
      api('/lms/live-classes?limit=5').catch(() => ({ items: [] })),
      api('/lms/users?role=student&limit=5').catch(() => ({ items: [] })),
      api('/lms/payments?limit=5').catch(() => ({ items: [] })),
    ])
    setStats(dash || {})
    setCourses(c.items || [])
    setLiveClasses(lc.items || [])
    setStudents(s.items || [])
    setPayments(p.items || [])
  }

  useEffect(() => {
    loadAll()
  }, [])

  useRealtime(tenantId ? `tenant:${tenantId}` : '', () => loadAll())

  const recentRevenue = useMemo(
    () => payments.filter((x) => x.status === 'captured').reduce((sum, x) => sum + Number(x.amount || 0), 0),
    [payments],
  )

  return (
    <div className="min-h-full bg-[#F7FAFD] p-4 sm:p-6">
      <section className="rounded-[8px] border border-black/[0.08] bg-white p-5">
        <h1 className="text-[24px] font-bold text-[#0f172a]">Admin Dashboard</h1>
        <p className="text-[13px] text-[#94a3b8]">All widgets below use live API data.</p>
      </section>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
        <Card title="Students" value={stats.total_students || 0} />
        <Card title="Instructors" value={stats.total_instructors || 0} />
        <Card title="Courses" value={stats.total_courses || 0} />
        <Card title="Live Classes" value={stats.total_live_classes || 0} />
        <Card title="Revenue" value={`₹${Number(stats.total_revenue || 0).toLocaleString('en-IN')}`} />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-2">
        <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
          <div className="mb-2 flex items-center gap-2 text-[14px] font-semibold text-[#0f172a]">
            <BookOpen className="h-4 w-4 text-[#5b3df6]" /> Recent Courses
          </div>
          <div className="space-y-2">
            {courses.map((c) => (
              <div key={c._id} className="rounded-[6px] border border-black/[0.08] p-2 text-[13px]">
                <div className="font-medium text-[#0f172a]">{c.title}</div>
                <div className="text-[11px] text-[#94a3b8]">₹{Number(c.price || 0).toLocaleString('en-IN')}</div>
              </div>
            ))}
            {courses.length === 0 && <p className="text-[12px] text-[#94a3b8]">No courses found.</p>}
          </div>
        </section>

        <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
          <div className="mb-2 flex items-center gap-2 text-[14px] font-semibold text-[#0f172a]">
            <Video className="h-4 w-4 text-[#5b3df6]" /> Upcoming Live Classes
          </div>
          <div className="space-y-2">
            {liveClasses.map((lc) => (
              <div key={lc._id} className="rounded-[6px] border border-black/[0.08] p-2 text-[13px]">
                <div className="font-medium text-[#0f172a]">{lc.title}</div>
                <div className="text-[11px] text-[#94a3b8]">
                  {lc.start_at ? new Date(lc.start_at).toLocaleString() : 'No start time'}
                </div>
              </div>
            ))}
            {liveClasses.length === 0 && <p className="text-[12px] text-[#94a3b8]">No live classes found.</p>}
          </div>
        </section>

        <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
          <div className="mb-2 flex items-center gap-2 text-[14px] font-semibold text-[#0f172a]">
            <Users className="h-4 w-4 text-[#5b3df6]" /> New Students
          </div>
          <div className="space-y-2">
            {students.map((s) => (
              <div key={s._id} className="rounded-[6px] border border-black/[0.08] p-2 text-[13px]">
                <div className="font-medium text-[#0f172a]">{s.full_name || 'Student'}</div>
                <div className="text-[11px] text-[#94a3b8]">{s.email}</div>
              </div>
            ))}
            {students.length === 0 && <p className="text-[12px] text-[#94a3b8]">No students found.</p>}
          </div>
        </section>

        <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
          <div className="mb-2 flex items-center gap-2 text-[14px] font-semibold text-[#0f172a]">
            <IndianRupee className="h-4 w-4 text-[#5b3df6]" /> Latest Payments
          </div>
          <p className="mb-2 text-[12px] text-[#94a3b8]">
            Captured total in this list: ₹{recentRevenue.toLocaleString('en-IN')}
          </p>
          <div className="space-y-2">
            {payments.map((p) => (
              <div key={p._id} className="rounded-[6px] border border-black/[0.08] p-2 text-[13px]">
                <div className="font-medium text-[#0f172a]">₹{Number(p.amount || 0).toLocaleString('en-IN')}</div>
                <div className="text-[11px] text-[#94a3b8]">{p.status || 'created'}</div>
              </div>
            ))}
            {payments.length === 0 && <p className="text-[12px] text-[#94a3b8]">No payments found.</p>}
          </div>
        </section>
      </div>
    </div>
  )
}
