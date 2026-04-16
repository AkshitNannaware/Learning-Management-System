import React, { useEffect, useMemo, useState } from 'react'
import { PlusCircle, Save, IndianRupee } from 'lucide-react'
import { api } from '../../lib/api'

function toUiPlan(plan) {
  return {
    id: plan?._id,
    name: plan?.name || '',
    duration: plan?.billing_period || '',
    price: Number(plan?.price || 0),
    enabled: Boolean(plan?.active ?? true),
  }
}

function formatDateTime(value) {
  if (!value) return '-'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return '-'
  return date.toLocaleString([], {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default function AdminSubscription() {
  const [plans, setPlans] = useState([])
  const [payments, setPayments] = useState([])
  const [users, setUsers] = useState([])
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [adminShare, setAdminShare] = useState(30)
  const [newPlanName, setNewPlanName] = useState('')
  const [newDuration, setNewDuration] = useState('')
  const [newPrice, setNewPrice] = useState('')
  const [newActive, setNewActive] = useState(true)
  const [billsPage, setBillsPage] = useState(1)
  const [billsPerPage, setBillsPerPage] = useState(10)

  const instructorShare = useMemo(() => Math.max(0, 100 - adminShare), [adminShare])
  const sampleCoursePrice = 500
  const adminAmount = useMemo(() => Math.round((sampleCoursePrice * adminShare) / 100), [adminShare])
  const instructorAmount = useMemo(() => Math.max(0, sampleCoursePrice - adminAmount), [adminAmount])

  const userMap = useMemo(() => {
    const map = new Map()
    users.forEach((u) => map.set(u?._id, u))
    return map
  }, [users])

  const courseMap = useMemo(() => {
    const map = new Map()
    courses.forEach((c) => map.set(c?._id, c))
    return map
  }, [courses])

  const billRows = useMemo(() => {
    return payments.map((p) => {
      const user = userMap.get(p?.user_id)
      const targetCourse = courseMap.get(p?.target_id)
      return {
        id: p?._id || `${p?.order_id || ''}-${p?.user_id || ''}`,
        userName: user?.full_name || user?.name || user?.email || 'Unknown user',
        userEmail: user?.email || '-',
        userRole: user?.role || '-',
        amount: Number(p?.amount || 0),
        status: p?.status || 'created',
        orderId: p?.order_id || '-',
        paymentId: p?.payment_id || '-',
        billingType: p?.enrollment_type || 'subscription',
        itemName: targetCourse?.title || p?.target_id || '-',
        createdAt: p?.created_at,
        capturedAt: p?.captured_at,
      }
    })
  }, [payments, userMap, courseMap])

  const totalBillPages = useMemo(() => {
    const total = Math.max(1, Math.ceil(billRows.length / billsPerPage))
    return total
  }, [billRows.length, billsPerPage])

  const paginatedBillRows = useMemo(() => {
    const start = (billsPage - 1) * billsPerPage
    return billRows.slice(start, start + billsPerPage)
  }, [billRows, billsPage, billsPerPage])

  const billRangeText = useMemo(() => {
    if (billRows.length === 0) return 'Showing 0 of 0'
    const start = (billsPage - 1) * billsPerPage + 1
    const end = Math.min(billsPage * billsPerPage, billRows.length)
    return `Showing ${start}-${end} of ${billRows.length}`
  }, [billRows.length, billsPage, billsPerPage])

  const loadPlans = async () => {
    setLoading(true)
    setError('')
    try {
      const [plansRes, paymentsRes, usersRes, coursesRes] = await Promise.all([
        api('/lms/plans?limit=300').catch(() => ({ items: [] })),
        api('/lms/payments?limit=1000').catch(() => ({ items: [] })),
        api('/lms/users?limit=1000').catch(() => ({ items: [] })),
        api('/lms/courses?limit=500').catch(() => ({ items: [] })),
      ])

      setPlans((plansRes?.items || []).map(toUiPlan))
      setPayments(paymentsRes?.items || [])
      setUsers(usersRes?.items || [])
      setCourses(coursesRes?.items || [])
    } catch (err) {
      setPlans([])
      setPayments([])
      setUsers([])
      setCourses([])
      setError(err?.message || 'Unable to load plans.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadPlans()
  }, [])

  useEffect(() => {
    setBillsPage(1)
  }, [billRows.length, billsPerPage])

  const addPlan = async () => {
    setError('')
    setSuccess('')

    if (!newPlanName.trim() || !newDuration.trim()) {
      setError('Plan name and duration are required.')
      return
    }

    const parsedPrice = Number(newPrice)
    if (!Number.isFinite(parsedPrice) || parsedPrice < 0) {
      setError('Enter a valid price.')
      return
    }

    try {
      setSaving(true)
      await api('/lms/plans', {
        method: 'POST',
        body: JSON.stringify({
          name: newPlanName.trim(),
          billing_period: newDuration.trim(),
          price: parsedPrice,
          active: newActive,
        }),
      })
      setNewPlanName('')
      setNewDuration('')
      setNewPrice('')
      setNewActive(true)
      setSuccess('Plan saved successfully.')
      await loadPlans()
    } catch (err) {
      setError(err?.message || 'Unable to create plan.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="min-h-full bg-[#F7FAFD] p-4 sm:p-6 lg:p-7">
      <section className="rounded-[8px] border border-black/[0.08] bg-gradient-to-br from-white to-[#e8f5ff] p-5 sm:p-6">
        <h2 className="text-[26px] font-bold text-[#0f172a] sm:text-[30px]">Course Subscription Management</h2>
        <p className="mt-2 text-[14px] text-[#64748b]">
          The plans that the admin uploads from here will appear in the student enrollment flow.
        </p>
      </section>

      <section className="mt-6 rounded-[8px] border border-black/[0.08] bg-white p-5 sm:p-6">
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <h3 className="text-[18px] font-bold text-[#0f172a]">Saved subscription plans</h3>
          <span className="rounded-[12px] bg-[#eef2ff] px-3 py-1 text-[12px] font-medium text-[#4338ca]">Live from database</span>
        </div>

        {error ? <p className="mt-3 text-[13px] text-red-600">{error}</p> : null}
        {success ? <p className="mt-3 text-[13px] text-green-700">{success}</p> : null}

        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[760px] border-separate border-spacing-y-2">
            <thead>
              <tr className="text-left text-[12px] font-semibold text-[#64748b]">
                <th className="px-3 py-2">Plan</th>
                <th className="px-3 py-2">Duration</th>
                <th className="px-3 py-2">Price (INR)</th>
                <th className="px-3 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={4} className="px-3 py-4 text-[13px] text-[#64748b]">
                    Loading plans...
                  </td>
                </tr>
              ) : plans.length > 0 ? (
                plans.map((plan) => (
                  <tr key={plan.id} className="rounded-[6px] border border-black/[0.08] bg-[#f8fafc]">
                    <td className="px-3 py-2 text-[13px] text-[#0f172a]">{plan.name || 'Untitled plan'}</td>
                    <td className="px-3 py-2 text-[13px] text-[#0f172a]">{plan.duration || 'Not set'}</td>
                    <td className="px-3 py-2 text-[13px] font-semibold text-[#0f172a]">Rs. {plan.price.toLocaleString()}</td>
                    <td className="px-3 py-2 text-[12px]">
                      <span className={`rounded-full px-2.5 py-1 font-medium ${plan.enabled ? 'bg-[#dcfce7] text-[#166534]' : 'bg-[#fee2e2] text-[#991b1b]'}`}>
                        {plan.enabled ? 'Enabled' : 'Disabled'}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-3 py-4 text-[13px] text-[#64748b]">
                    No plans created yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 rounded-[8px] border border-dashed border-black/[0.15] bg-[#fcfdff] p-4 sm:grid-cols-[1.3fr_1fr_0.7fr_0.8fr_auto]">
          <input
            value={newPlanName}
            onChange={(e) => setNewPlanName(e.target.value)}
            placeholder="New plan name"
            className="h-10 rounded-[6px] border border-black/[0.08] px-3 text-[13px]"
          />
          <input
            value={newDuration}
            onChange={(e) => setNewDuration(e.target.value)}
            placeholder="Duration / billing period"
            className="h-10 rounded-[6px] border border-black/[0.08] px-3 text-[13px]"
          />
          <input
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            type="number"
            min="0"
            placeholder="Price"
            className="h-10 rounded-[6px] border border-black/[0.08] px-3 text-[13px]"
          />
          <select
            value={newActive ? 'enabled' : 'disabled'}
            onChange={(e) => setNewActive(e.target.value === 'enabled')}
            className="h-10 rounded-[6px] border border-black/[0.08] px-3 text-[13px]"
          >
            <option value="enabled">Enabled</option>
            <option value="disabled">Disabled</option>
          </select>
          <button
            onClick={addPlan}
            disabled={saving}
            className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-[6px] bg-[#5b3df6] px-4 text-[13px] font-medium text-white hover:bg-[#4c2dd9] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            <PlusCircle className="h-4 w-4" />
            {saving ? 'Saving...' : 'Add plan'}
          </button>
        </div>
      </section>

      <section className="mt-6 rounded-[8px] border border-black/[0.08] bg-white p-5 sm:p-6">
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <h3 className="text-[18px] font-bold text-[#0f172a]">All bills & subscriptions</h3>
          <span className="rounded-[12px] bg-[#f1f5f9] px-3 py-1 text-[12px] font-medium text-[#334155]">
            Total records: {billRows.length}
          </span>
        </div>

        <p className="mt-2 text-[13px] text-[#64748b]">Yahan aapko saare bills/subscription payments user details ke saath milenge.</p>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[1180px] border-separate border-spacing-y-2">
            <thead>
              <tr className="text-left text-[12px] font-semibold text-[#64748b]">
                <th className="px-3 py-2">User</th>
                <th className="px-3 py-2">Role</th>
                <th className="px-3 py-2">Type</th>
                <th className="px-3 py-2">Item</th>
                <th className="px-3 py-2">Amount (INR)</th>
                <th className="px-3 py-2">Status</th>
                <th className="px-3 py-2">Order ID</th>
                <th className="px-3 py-2">Payment ID</th>
                <th className="px-3 py-2">Created</th>
                <th className="px-3 py-2">Captured</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={10} className="px-3 py-4 text-[13px] text-[#64748b]">
                    Loading bills and subscriptions...
                  </td>
                </tr>
              ) : billRows.length > 0 ? (
                paginatedBillRows.map((row) => (
                  <tr key={row.id} className="rounded-[6px] border border-black/[0.08] bg-[#f8fafc]">
                    <td className="px-3 py-2">
                      <p className="text-[13px] font-medium text-[#0f172a]">{row.userName}</p>
                      <p className="text-[12px] text-[#64748b]">{row.userEmail}</p>
                    </td>
                    <td className="px-3 py-2 text-[13px] text-[#0f172a]">{row.userRole}</td>
                    <td className="px-3 py-2 text-[13px] text-[#0f172a]">{row.billingType}</td>
                    <td className="px-3 py-2 text-[13px] text-[#0f172a]">{row.itemName}</td>
                    <td className="px-3 py-2 text-[13px] font-semibold text-[#0f172a]">Rs. {row.amount.toLocaleString()}</td>
                    <td className="px-3 py-2 text-[12px]">
                      <span className={`rounded-full px-2.5 py-1 font-medium ${row.status === 'captured' ? 'bg-[#dcfce7] text-[#166534]' : row.status === 'failed' ? 'bg-[#fee2e2] text-[#991b1b]' : 'bg-[#fef9c3] text-[#854d0e]'}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-[12px] text-[#0f172a]">{row.orderId}</td>
                    <td className="px-3 py-2 text-[12px] text-[#0f172a]">{row.paymentId}</td>
                    <td className="px-3 py-2 text-[12px] text-[#0f172a]">{formatDateTime(row.createdAt)}</td>
                    <td className="px-3 py-2 text-[12px] text-[#0f172a]">{formatDateTime(row.capturedAt)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={10} className="px-3 py-4 text-[13px] text-[#64748b]">
                    No bills/subscriptions found yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {!loading && billRows.length > 0 ? (
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[12px] text-[#64748b]">{billRangeText}</p>
            <div className="flex items-center gap-2">
              <select
                value={billsPerPage}
                onChange={(e) => setBillsPerPage(Number(e.target.value || 10))}
                className="h-9 rounded-[7px] border border-black/[0.08] bg-white px-2 text-[12px] text-[#334155]"
              >
                {[5, 10, 20, 50].map((size) => (
                  <option key={size} value={size}>{size} / page</option>
                ))}
              </select>
              <button
                onClick={() => setBillsPage((p) => Math.max(1, p - 1))}
                disabled={billsPage <= 1}
                className="h-9 rounded-[7px] border border-black/[0.08] bg-white px-3 text-[12px] font-medium text-[#334155] disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-[12px] text-[#334155]">Page {billsPage} / {totalBillPages}</span>
              <button
                onClick={() => setBillsPage((p) => Math.min(totalBillPages, p + 1))}
                disabled={billsPage >= totalBillPages}
                className="h-9 rounded-[7px] border border-black/[0.08] bg-white px-3 text-[12px] font-medium text-[#334155] disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        ) : null}
      </section>

      <section className="mt-6 rounded-[8px] border border-black/[0.08] bg-white p-5 sm:p-6">
        <h3 className="text-[18px] font-bold text-[#0f172a]">Revenue share (Admin vs Instructor)</h3>
        <p className="mt-1 text-[13px] text-[#94a3b8]">
          Configure how course payment gets split. Example below uses a Rs. 500 course price.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="rounded-[8px] border border-black/[0.08] bg-[#f8fafc] p-4">
            <label className="text-[13px] font-semibold text-[#0f172a]">Admin share (%)</label>
            <input
              type="number"
              min="0"
              max="100"
              value={adminShare}
              onChange={(e) => setAdminShare(Math.min(100, Math.max(0, Number(e.target.value))))}
              className="mt-2 h-10 w-full rounded-[6px] border border-black/[0.08] px-3 text-[13px]"
            />
            <p className="mt-2 text-[12px] text-[#64748b]">Instructor share auto-calculated: {instructorShare}%</p>
          </div>

          <div className="rounded-[8px] border border-black/[0.08] bg-[#eef2ff] p-4">
            <p className="text-[13px] font-semibold text-[#0f172a]">Example calculation for Rs. 500 course</p>
            <p className="mt-2 text-[13px] text-[#334155]">Admin ({adminShare}%): Rs. {adminAmount}</p>
            <p className="mt-1 text-[13px] text-[#334155]">Instructor ({instructorShare}%): Rs. {instructorAmount}</p>
            <button className="mt-3 inline-flex h-9 items-center gap-2 rounded-[6px] bg-[#5b3df6] px-3 text-[12px] font-medium text-white hover:bg-[#4c2dd9]">
              <Save className="h-4 w-4" />
              Save split settings
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
