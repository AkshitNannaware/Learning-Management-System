import React, { useEffect, useMemo, useState } from 'react'
import { CreditCard, TrendingUp, Download, Users, Wallet, Zap } from 'lucide-react'
import { api } from '../../lib/api'

function StatCard({ title, value, meta, icon, trend }) {
  return (
    <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[16px] items-start p-[19px] rounded-[8px]">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-start">
          <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#94a3b8] text-[14px]">
            {title}
          </div>
          <div className="flex flex-col font-bold h-[30px] justify-center leading-[0] text-[#0f172a] text-[30px] tracking-[-0.6px]">
            {value}
          </div>
        </div>
        <div className="bg-[#e8f5ff] flex items-center justify-center relative rounded-[6px] shrink-0 size-[40px]">
          {icon}
        </div>
      </div>
      <div className="bg-[#2dd4bf] h-[28px] rounded-[12px] relative flex items-center px-[10px]">
        <div className="flex flex-col font-medium h-[15px] justify-center leading-[0] text-[#023b33] text-[12px]">
          {meta}
        </div>
      </div>
    </div>
  )
}

function Pill({ children, variant }) {
  const style =
    variant === 'popular'
      ? 'bg-[#5b3df6] text-white'
      : variant === 'paid'
        ? 'bg-[#2dd4bf] text-[#023b33]'
        : variant === 'pending'
          ? 'bg-[#ffd966] text-[#4b2e00]'
          : 'bg-[#f1f5f9] text-[#0f172a]'

  return <span className={`inline-flex h-[28px] items-center px-[10px] rounded-[12px] text-[12px] font-medium ${style}`}>{children}</span>
}

export default function SuperAdminPlansBilling() {
  const [tenants, setTenants] = useState([])
  const [payments, setPayments] = useState([])
  const [plans, setPlans] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        setError('')
        const [t, p, pl] = await Promise.all([
          api('/lms/tenants').catch(() => ({ items: [] })),
          api('/lms/payments').catch(() => ({ items: [] })),
          api('/lms/plans').catch(() => ({ items: [] })),
        ])
        setTenants(t.items || t || [])
        setPayments(p.items || p || [])
        setPlans(pl.items || pl || [])
      } catch (err) {
        setTenants([])
        setPayments([])
        setPlans([])
        setError(err?.message || 'Unable to load plans and billing data')
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  const normalize = (value) => String(value || '').trim().toLowerCase()

  const tenantById = useMemo(() => {
    const map = new Map()
    tenants.forEach((tenant) => {
      map.set(String(tenant._id), tenant)
    })
    return map
  }, [tenants])

  const planStats = useMemo(() => {
    const rows = plans.map((plan) => ({
      ...plan,
      tenantCount: 0,
      revenue: 0,
    }))

    const indexByName = rows.reduce((acc, plan, idx) => {
      acc[normalize(plan.name)] = idx
      return acc
    }, {})

    tenants.forEach((tenant) => {
      const idx = indexByName[normalize(tenant.subscription_plan)]
      if (idx !== undefined) rows[idx].tenantCount += 1
    })

    payments
      .filter((payment) => payment.status === 'captured')
      .forEach((payment) => {
        const tenant = tenantById.get(String(payment.tenant_id || ''))
        const idx = indexByName[normalize(tenant?.subscription_plan)]
        if (idx !== undefined) rows[idx].revenue += Number(payment.amount || 0)
      })

    return rows
  }, [plans, tenants, payments, tenantById])

  const mrr = useMemo(
    () => payments.filter((p) => p.status === 'captured').reduce((acc, cur) => acc + Number(cur.amount || 0), 0),
    [payments],
  )
  const activeSubs = tenants.filter((t) => t.active).length
  const pendingPayments = payments.filter((p) => p.status !== 'captured').length
  const arpu = activeSubs ? Math.round(mrr / activeSubs) : 0

  const topPlanByTenant = useMemo(() => {
    if (!planStats.length) return null
    return [...planStats].sort((a, b) => b.tenantCount - a.tenantCount)[0]
  }, [planStats])

  const recentBilling = useMemo(() => {
    return payments.slice(0, 10).map((payment) => {
      const tenant = tenantById.get(String(payment.tenant_id || ''))
      return {
        id: payment._id || payment.order_id || payment.payment_id,
        tenant: tenant?.name || 'Unknown tenant',
        plan: tenant?.subscription_plan || '-',
        amount: Number(payment.amount || 0),
        createdAt: payment.created_at,
        status: payment.status || '-',
        invoice: payment.payment_id || payment.order_id || '-',
      }
    })
  }, [payments, tenantById])

  const totalPlanTenants = planStats.reduce((sum, plan) => sum + plan.tenantCount, 0)

  return (
    <div className="min-h-full bg-[#F7FAFD]">
      <div className="bg-gradient-to-b flex flex-col from-[#f6f8fa] gap-[24px] h-full p-[28px] to-[#f7fcff]">
        {/* Hero Section */}
        <section className="border border-black/[0.08] border-solid content-stretch flex flex-col items-start pb-[23px] pt-[25px] px-[25px] relative rounded-[8px] shrink-0 w-full bg-gradient-to-br from-white to-[#e8f5ff]">
          <div className="flex flex-col gap-[11px] items-start relative shrink-0">
            <div className="bg-[#ffd966] flex items-center px-[10px] py-[6.5px] rounded-[12px] shrink-0">
              <div className="flex flex-col font-medium h-[15px] justify-center leading-[0] text-[#4b2e00] text-[12px]">
                Subscription management
              </div>
            </div>

            <div className="flex flex-col font-bold h-[31.59px] justify-center leading-[0] text-[#0f172a] text-[28px]">
              Manage subscription plans and billing information
            </div>

            <div className="flex flex-col font-normal h-[17px] justify-center leading-[0] text-[#94a3b8] text-[14px]">
              Configure pricing plans, track subscriptions, and monitor billing activity across all tenants.
            </div>
          </div>

          <div className="mt-4 flex items-center gap-[12px]">
            <div className="bg-[#5b3df6] flex items-center gap-[8px] h-[40px] justify-center px-[16px] rounded-[6px] shrink-0">
              <Zap className="h-[18px] w-[18px] text-white" />
              <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-white text-[14px]">
                Upgrade Plan
              </div>
            </div>
            <div className="border border-black/[0.08] flex gap-[8px] h-[40px] items-center justify-center px-[17px] py-[0.25px] rounded-[6px] shrink-0 bg-white">
              <Wallet className="h-[18px] w-[18px] text-[#94a3b8]" />
              <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">
                Billing Settings
              </div>
            </div>
          </div>
        </section>

        {/* Stats row */}
        <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))]">
          <StatCard 
            title="MRR" 
            value={`₹${mrr.toLocaleString('en-IN')}`} 
            meta="Captured payments total" 
            icon={<TrendingUp className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
          <StatCard 
            title="Active Subscriptions" 
            value={String(activeSubs)} 
            meta="Across all plans" 
            icon={<Users className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
          <StatCard 
            title="Pending Payments" 
            value={String(pendingPayments)} 
            meta="Non-captured transactions" 
            icon={<Wallet className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
          <StatCard 
            title="ARPU" 
            value={`₹${arpu.toLocaleString('en-IN')}`} 
            meta="Per tenant" 
            icon={<CreditCard className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
        </div>

        {/* Plans Grid */}
        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-3">
          {planStats.map((plan) => (
            <div 
              key={plan._id || plan.name} 
              className={`bg-white border-2 border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px] relative ${
                topPlanByTenant && topPlanByTenant.name === plan.name ? 'border-[#5b3df6]' : 'border-black/[0.08]'
              }`}
            >
              {topPlanByTenant && topPlanByTenant.name === plan.name && (
                <div className="absolute right-[16px] top-[16px]">
                  <Pill variant="popular">Most Active</Pill>
                </div>
              )}
              <div className="bg-[#e8f5ff] flex items-center justify-center rounded-[8px] shrink-0 size-[48px]">
                <CreditCard className="h-[24px] w-[24px] text-[#5b3df6]" />
              </div>
              <div>
                <div className="font-bold text-[20px] text-[#0f172a]">{plan.name}</div>
                <div className="mt-[8px]">
                  <span className="font-bold text-[28px] text-[#0f172a]">₹{Number(plan.price || 0).toLocaleString('en-IN')}</span>
                  <span className="ml-[8px] text-[13px] text-[#94a3b8]">per {plan.billing_period || 'period'}</span>
                </div>
              </div>
              <div className="bg-[#f1f5f9] rounded-[6px] p-[12px] w-full">
                <div className="text-[13px] text-[#94a3b8] mb-[4px]">Active tenants</div>
                <div className="font-bold text-[20px] text-[#0f172a]">{plan.tenantCount}</div>
                <div className="text-[12px] text-[#2dd4bf] mt-[4px]">Revenue: ₹{Number(plan.revenue || 0).toLocaleString('en-IN')}</div>
              </div>
              <button className={`w-full h-[40px] rounded-[6px] text-[14px] font-medium mt-[8px] ${
                topPlanByTenant && topPlanByTenant.name === plan.name
                  ? 'bg-[#5b3df6] text-white' 
                  : 'border border-black/[0.08] text-[#0f172a]'
              }`}>
                {topPlanByTenant && topPlanByTenant.name === plan.name ? 'Manage Plan' : 'Edit Plan'}
              </button>
            </div>
          ))}
          {!loading && planStats.length === 0 && (
            <div className="col-span-3 bg-white border border-black/[0.08] rounded-[8px] p-[24px] text-[14px] text-[#94a3b8]">
              {error || 'No plans available yet.'}
            </div>
          )}
        </div>

        {/* Billing History Table */}
        <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-[4px]">
              <div className="font-bold text-[18px] text-[#0f172a]">Billing History</div>
              <div className="text-[13px] text-[#94a3b8]">Recent transactions and payment status</div>
            </div>
            <div className="bg-[#e8f5ff] border border-black/[0.08] flex items-center gap-[8px] h-[40px] justify-center px-[17px] py-[0.25px] rounded-[6px] shrink-0">
              <Download className="h-[18px] w-[18px] text-[#5b3df6]" />
              <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">
                Download All
              </div>
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-black/[0.08]">
                <tr>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Tenant</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Plan</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Amount</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Date</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Status</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Invoice</th>
                </tr>
              </thead>
              <tbody>
                {!loading && recentBilling.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-4 py-10 text-center text-[14px] text-[#94a3b8]">
                      {error || 'No billing records found.'}
                    </td>
                  </tr>
                )}
                {recentBilling.map((bill, idx) => (
                  <tr key={bill.id || idx} className={`border-b border-black/[0.08] ${idx === recentBilling.length - 1 ? 'border-b-0' : ''}`}>
                    <td className="px-4 py-4">
                      <div className="font-semibold text-[14px] text-[#0f172a]">{bill.tenant}</div>
                    </td>
                    <td className="px-4 py-4 text-[14px] text-[#0f172a]">{bill.plan}</td>
                    <td className="px-4 py-4 font-semibold text-[14px] text-[#0f172a]">₹{bill.amount.toLocaleString('en-IN')}</td>
                    <td className="px-4 py-4 text-[14px] text-[#94a3b8]">{bill.createdAt ? new Date(bill.createdAt).toLocaleString() : '-'}</td>
                    <td className="px-4 py-4">
                      <Pill variant={bill.status === 'captured' ? 'paid' : 'pending'}>
                        {bill.status === 'captured' ? 'Paid' : bill.status}
                      </Pill>
                    </td>
                    <td className="px-4 py-4 text-[12px] text-[#0f172a] font-medium">{bill.invoice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Subscription Insights */}
        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-2">
          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex flex-col gap-[4px] w-full">
              <div className="font-bold text-[18px] text-[#0f172a]">Plan Distribution</div>
              <div className="text-[13px] text-[#94a3b8]">Subscription breakdown by plan type</div>
            </div>
            <div className="flex flex-col w-full gap-[16px]">
              {planStats.map((plan) => {
                const percent = totalPlanTenants ? Math.round((plan.tenantCount / totalPlanTenants) * 100) : 0
                return (
                  <div key={plan._id || plan.name}>
                    <div className="flex justify-between mb-[8px]">
                      <span className="text-[14px] font-medium text-[#0f172a]">{plan.name}</span>
                      <span className="text-[14px] text-[#94a3b8]">{plan.tenantCount} tenants ({percent}%)</span>
                    </div>
                    <div className="h-[8px] rounded-full bg-[#f1f5f9]">
                      <div className="h-[8px] rounded-full bg-gradient-to-r from-[#5b3df6] to-[#2dd4bf]" style={{ width: `${percent}%` }} />
                    </div>
                  </div>
                )
              })}
              {!loading && planStats.length === 0 && <div className="text-[14px] text-[#94a3b8]">No plan distribution available.</div>}
            </div>
          </div>

          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex flex-col gap-[4px] w-full">
              <div className="font-bold text-[18px] text-[#0f172a]">Revenue by Plan</div>
              <div className="text-[13px] text-[#94a3b8]">Monthly recurring revenue breakdown</div>
            </div>
            <div className="grid grid-cols-2 gap-[12px] w-full">
              {planStats.map((plan) => {
                const percent = mrr ? Math.round((plan.revenue / mrr) * 100) : 0
                return (
                  <div key={`${plan._id || plan.name}-revenue`} className="bg-[#e8f5ff] rounded-[8px] p-[14px]">
                    <div className="text-[12px] text-[#94a3b8] mb-[8px]">{plan.name}</div>
                    <div className="font-bold text-[20px] text-[#0f172a]">₹{Number(plan.revenue || 0).toLocaleString('en-IN')}</div>
                    <div className="text-[11px] text-[#2dd4bf] mt-[4px]">{percent}% of MRR</div>
                  </div>
                )
              })}
              <div className="bg-[#e8f5ff] rounded-[8px] p-[14px]">
                <div className="text-[12px] text-[#94a3b8] mb-[8px]">Avg. Revenue/Tenant</div>
                <div className="font-bold text-[20px] text-[#0f172a]">₹{arpu.toLocaleString('en-IN')}</div>
                <div className="text-[11px] text-[#2dd4bf] mt-[4px]">Computed from live MRR</div>
              </div>
            </div>
            {!loading && planStats.length === 0 && <div className="text-[14px] text-[#94a3b8]">No revenue split available.</div>}
          </div>
        </div>
      </div>
    </div>
  )
}
