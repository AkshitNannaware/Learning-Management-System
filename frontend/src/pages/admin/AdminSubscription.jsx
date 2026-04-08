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

export default function AdminSubscription() {
  const [plans, setPlans] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [adminShare, setAdminShare] = useState(30)
  const [newPlanName, setNewPlanName] = useState('')
  const [newDuration, setNewDuration] = useState('')
  const [newPrice, setNewPrice] = useState('')
  const [newActive, setNewActive] = useState(true)

  const instructorShare = useMemo(() => Math.max(0, 100 - adminShare), [adminShare])
  const sampleCoursePrice = 500
  const adminAmount = useMemo(() => Math.round((sampleCoursePrice * adminShare) / 100), [adminShare])
  const instructorAmount = useMemo(() => Math.max(0, sampleCoursePrice - adminAmount), [adminAmount])

  const loadPlans = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await api('/lms/plans?limit=300')
      setPlans((res?.items || []).map(toUiPlan))
    } catch (err) {
      setPlans([])
      setError(err?.message || 'Unable to load plans.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadPlans()
  }, [])

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
          Yahan se admin jo plans upload karega wahi student enrollment flow me show honge.
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
