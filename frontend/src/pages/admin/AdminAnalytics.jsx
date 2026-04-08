import React, { useEffect, useMemo, useState } from 'react'
import { api } from '../../lib/api'
import useRealtime from '../../hooks/useRealtime'

export default function AdminAnalytics() {
  const tenantId = localStorage.getItem('lms_tenant_id')
  const [dashboard, setDashboard] = useState({})
  const [courses, setCourses] = useState([])
  const [payments, setPayments] = useState([])

  const load = async () => {
    const [d, c, p] = await Promise.all([
      api('/lms/dashboard/admin').catch(() => ({})),
      api('/lms/courses?limit=50').catch(() => ({ items: [] })),
      api('/lms/payments?limit=200').catch(() => ({ items: [] })),
    ])
    setDashboard(d || {})
    setCourses(c.items || [])
    setPayments(p.items || [])
  }

  useEffect(() => {
    load()
  }, [])

  useRealtime(tenantId ? `tenant:${tenantId}` : '', () => load())

  const capturedPayments = payments.filter((p) => p.status === 'captured')
  const failedPayments = payments.filter((p) => p.status === 'failed')
  const totalCaptured = capturedPayments.reduce((sum, p) => sum + Number(p.amount || 0), 0)
  const avgOrderValue = capturedPayments.length ? Math.round(totalCaptured / capturedPayments.length) : 0
  const successRate = payments.length ? Math.round((capturedPayments.length / payments.length) * 100) : 0

  return (
    <div className="min-h-full bg-[#F7FAFD] p-4 sm:p-6">
      <section className="rounded-[8px] border border-black/[0.08] bg-white p-5">
        <h1 className="text-[24px] font-bold text-[#0f172a]">Analytics</h1>
        <p className="text-[13px] text-[#94a3b8]">All metrics and tables below are based on real LMS API data.</p>
      </section>

      <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-6">
        <Metric label="Students" value={dashboard.total_students || 0} />
        <Metric label="Instructors" value={dashboard.total_instructors || 0} />
        <Metric label="Courses" value={dashboard.total_courses || 0} />
        <Metric label="Live Classes" value={dashboard.total_live_classes || 0} />
        <Metric label="Revenue" value={`₹${Number(dashboard.total_revenue || 0).toLocaleString('en-IN')}`} />
        <Metric label="Success Rate" value={`${successRate}%`} />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-2">
        <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
          <h2 className="text-[16px] font-semibold text-[#0f172a]">Course List</h2>
          <div className="mt-3 space-y-2">
            {courses.slice(0, 12).map((c) => (
              <div key={c._id} className="rounded-[6px] border border-black/[0.08] p-3">
                <div className="text-[14px] font-semibold text-[#0f172a]">{c.title}</div>
                <div className="text-[12px] text-[#64748b]">
                  Price: ₹{Number(c.price || 0).toLocaleString('en-IN')} • Type: {c.pricing_type || 'n/a'}
                </div>
              </div>
            ))}
            {courses.length === 0 && <p className="text-[12px] text-[#94a3b8]">No courses found.</p>}
          </div>
        </section>

        <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
          <h2 className="text-[16px] font-semibold text-[#0f172a]">Payment Metrics</h2>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <Metric label="Captured Payments" value={capturedPayments.length} />
            <Metric label="Failed Payments" value={failedPayments.length} />
            <Metric label="Total Captured" value={`₹${totalCaptured.toLocaleString('en-IN')}`} />
            <Metric label="Avg Order Value" value={`₹${avgOrderValue.toLocaleString('en-IN')}`} />
          </div>
          <div className="mt-3 space-y-2">
            {payments.slice(0, 8).map((p) => (
              <div key={p._id} className="rounded-[6px] border border-black/[0.08] p-2 text-[12px]">
                ₹{Number(p.amount || 0).toLocaleString('en-IN')} • {p.status || 'created'}
              </div>
            ))}
            {payments.length === 0 && <p className="text-[12px] text-[#94a3b8]">No payments found.</p>}
          </div>
        </section>
      </div>
    </div>
  )
}

function Metric({ label, value }) {
  return (
    <div className="rounded-[8px] border border-black/[0.08] bg-white p-3">
      <div className="text-[11px] text-[#94a3b8]">{label}</div>
      <div className="mt-1 text-[20px] font-bold text-[#0f172a]">{value}</div>
    </div>
  )
}
