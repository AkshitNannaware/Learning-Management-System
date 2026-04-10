import React, { useEffect, useMemo, useState } from 'react'
import { DollarSign, TrendingUp, Download, Calendar, Upload, BarChart3, Wallet, Users } from 'lucide-react'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { api } from '../../lib/api'

function formatCurrency(value) {
  return `₹${Number(value || 0).toLocaleString('en-IN')}`
}

function monthLabel(date) {
  return date.toLocaleString('en-US', { month: 'short' })
}

function percentageDelta(current, previous) {
  if (!previous) return 0
  return Math.round(((current - previous) / previous) * 100)
}

function StatCard({ title, value, meta, icon }) {
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
      <div className="bg-[#f0f4f8] h-[28px] rounded-[12px] relative flex items-center px-[10px]">
        <div className="flex flex-col font-medium h-[15px] justify-center leading-[0] text-[#64748b] text-[12px]">
          {meta}
        </div>
      </div>
    </div>
  )
}

function Pill({ children, variant = 'default' }) {
  const style =
    variant === 'success'
      ? 'bg-[#2dd4bf] text-[#023b33]'
      : variant === 'warning'
      ? 'bg-[#ffd966] text-[#4b2e00]'
      : 'bg-[#e8f5ff] text-[#0f172a]'

  return <span className={`inline-flex h-[28px] items-center px-[10px] rounded-[12px] text-[12px] font-medium ${style}`}>{children}</span>
}

export default function SuperAdminRevenue() {
  const [dashboard, setDashboard] = useState({
    revenue: 0,
    total_users: 0,
    active_courses: 0,
    active_subscriptions: 0,
  })
  const [payments, setPayments] = useState([])
  const [tenants, setTenants] = useState([])
  const [plans, setPlans] = useState([])
  const [admins, setAdmins] = useState([])
  const [selectedAdminId, setSelectedAdminId] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadRevenueData() {
      try {
        setLoading(true)
        setError('')
        const [dashRes, paymentsRes, tenantsRes, plansRes, adminsRes] = await Promise.all([
          api('/lms/dashboard/super-admin').catch(() => ({})),
          api('/lms/payments?skip=0&limit=1000').catch(() => ({ items: [] })),
          api('/lms/tenants?skip=0&limit=500').catch(() => ({ items: [] })),
          api('/lms/plans?skip=0&limit=500').catch(() => ({ items: [] })),
          api('/lms/users?role=admin&skip=0&limit=500').catch(() => ({ items: [] })),
        ])

        setDashboard(dashRes || {})
        setPayments(paymentsRes.items || paymentsRes || [])
        setTenants(tenantsRes.items || tenantsRes || [])
        setPlans(plansRes.items || plansRes || [])
        const adminRows = (adminsRes.items || adminsRes || []).map((user) => ({
          id: user._id,
          name: user.full_name || 'Admin',
          email: user.email || '-',
          tenantId: user.tenant_id || '',
        }))
        setAdmins(adminRows)
        setSelectedAdminId((prev) => prev || adminRows[0]?.id || '')
      } catch (err) {
        setError(err?.message || 'Unable to load revenue data')
      } finally {
        setLoading(false)
      }
    }

    loadRevenueData()
  }, [])

  const tenantMap = useMemo(() => {
    const map = {}
    tenants.forEach((t) => {
      map[t._id] = t.name
    })
    return map
  }, [tenants])

  const capturedPayments = useMemo(() => payments.filter((p) => p.status === 'captured'), [payments])

  const monthlyRevenueData = useMemo(() => {
    const now = new Date()
    const months = []
    for (let i = 6; i >= 0; i -= 1) {
      const dt = new Date(now.getFullYear(), now.getMonth() - i, 1)
      months.push({
        key: `${dt.getFullYear()}-${dt.getMonth()}`,
        month: monthLabel(dt),
        revenue: 0,
      })
    }

    const indexByKey = Object.fromEntries(months.map((m, idx) => [m.key, idx]))
    capturedPayments.forEach((payment) => {
      const dt = new Date(payment.created_at || 0)
      const key = `${dt.getFullYear()}-${dt.getMonth()}`
      const idx = indexByKey[key]
      if (idx !== undefined) {
        months[idx].revenue += Number(payment.amount || 0)
      }
    })

    return months
  }, [capturedPayments])

  const thisMonthRevenue = monthlyRevenueData[6]?.revenue || 0
  const lastMonthRevenue = monthlyRevenueData[5]?.revenue || 0
  const monthGrowth = percentageDelta(thisMonthRevenue, lastMonthRevenue)

  const successRate = payments.length
    ? Math.round((capturedPayments.length / payments.length) * 100)
    : 0

  const monthlyAverage = monthlyRevenueData.length
    ? Math.round(monthlyRevenueData.reduce((sum, item) => sum + item.revenue, 0) / monthlyRevenueData.length)
    : 0

  const revenueByPlanData = useMemo(() => {
    const grouped = {}
    plans.forEach((plan) => {
      const name = plan.name || 'Unnamed'
      grouped[name] = (grouped[name] || 0) + Number(plan.price || 0)
    })
    return Object.entries(grouped).map(([plan, revenue]) => ({ plan, revenue }))
  }, [plans])

  const topTenantsData = useMemo(() => {
    const grouped = {}
    capturedPayments.forEach((payment) => {
      const tenantId = payment.tenant_id || 'unknown'
      grouped[tenantId] = (grouped[tenantId] || 0) + Number(payment.amount || 0)
    })

    return Object.entries(grouped)
      .map(([tenantId, revenue]) => ({
        tenantId,
        name: tenantMap[tenantId] || 'Unknown Tenant',
        revenue,
      }))
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 5)
  }, [capturedPayments, tenantMap])

  const selectedAdmin = useMemo(() => admins.find((admin) => admin.id === selectedAdminId) || null, [admins, selectedAdminId])

  const selectedAdminTransactions = useMemo(
    () =>
      [...payments]
        .filter((payment) => payment.user_id === selectedAdminId)
        .sort((a, b) => new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime()),
    [payments, selectedAdminId]
  )

  return (
    <div className="min-h-full bg-[#F7FAFD]">
      <div className="bg-gradient-to-b flex flex-col from-[#f6f8fa] gap-[24px] h-full p-[28px] to-[#f7fcff]">
        <section className="border border-black/[0.08] border-solid content-stretch flex flex-col items-start pb-[23px] pt-[25px] px-[25px] relative rounded-[8px] shrink-0 w-full bg-gradient-to-br from-white to-[#e8f5ff]">
          <div className="flex flex-col gap-[11px] items-start relative shrink-0">
            <div className="bg-[#ffd966] flex items-center px-[10px] py-[6.5px] rounded-[12px] shrink-0">
              <div className="flex flex-col font-medium h-[15px] justify-center leading-[0] text-[#4b2e00] text-[12px]">
                Financial overview
              </div>
            </div>

            <div className="flex flex-col font-bold h-[31.59px] justify-center leading-[0] text-[#0f172a] text-[28px]">
              Track income and financial performance
            </div>

            <div className="flex flex-col font-normal h-[17px] justify-center leading-[0] text-[#94a3b8] text-[14px]">
              All values shown here are loaded from live API data.
            </div>
          </div>

          <div className="mt-4 flex items-center gap-[12px]">
            <div className="bg-[#5b3df6] flex items-center gap-[8px] h-[40px] justify-center px-[16px] rounded-[6px] shrink-0">
              <BarChart3 className="h-[18px] w-[18px] text-white" />
              <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-white text-[14px]">
                Live Revenue Data
              </div>
            </div>
          </div>
        </section>

        {error ? <p className="text-[13px] text-red-600">{error}</p> : null}

        <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))]">
          <StatCard
            title="Total Revenue"
            value={formatCurrency(dashboard.revenue || dashboard.total_revenue || 0)}
            meta={`${capturedPayments.length} captured payments`}
            icon={<DollarSign className="h-[18px] w-[18px] text-[#5b3df6]" />}
          />
          <StatCard
            title="This Month"
            value={formatCurrency(thisMonthRevenue)}
            meta={`${monthGrowth >= 0 ? '↑' : '↓'} ${Math.abs(monthGrowth)}% vs last month`}
            icon={<TrendingUp className="h-[18px] w-[18px] text-[#5b3df6]" />}
          />
          <StatCard
            title="Monthly Average"
            value={formatCurrency(monthlyAverage)}
            meta="Based on last 7 months"
            icon={<Wallet className="h-[18px] w-[18px] text-[#5b3df6]" />}
          />
          <StatCard
            title="Success Rate"
            value={`${successRate}%`}
            meta={`${payments.length} total transactions`}
            icon={<Users className="h-[18px] w-[18px] text-[#5b3df6]" />}
          />
        </div>

        <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-[4px]">
              <div className="font-bold text-[18px] text-[#0f172a]">Revenue Overview</div>
              <div className="text-[13px] text-[#94a3b8]">Captured revenue by month (last 7 months)</div>
            </div>
            <div className="bg-[#e8f5ff] border border-black/[0.08] flex items-center gap-[8px] h-[40px] justify-center px-[17px] py-[0.25px] rounded-[6px] shrink-0">
              <Upload className="h-[18px] w-[18px] text-[#5b3df6]" />
              <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">
                Export Chart
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={monthlyRevenueData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
              <Tooltip
                formatter={(value) => formatCurrency(value)}
                contentStyle={{ borderRadius: '8px', border: '1px solid rgba(0,0,0,0.08)', backgroundColor: 'white' }}
              />
              <Line type="monotone" dataKey="revenue" stroke="#2dd4bf" strokeWidth={2} name="Revenue" dot={{ fill: '#2dd4bf', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-2">
          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex flex-col gap-[4px] w-full">
              <div className="font-bold text-[18px] text-[#0f172a]">Revenue by Plan</div>
              <div className="text-[13px] text-[#94a3b8]">Total plan prices from live plan records</div>
            </div>
            {revenueByPlanData.length === 0 ? (
              <div className="w-full py-8 text-center text-[13px] text-[#94a3b8]">No plan data found.</div>
            ) : (
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={revenueByPlanData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="plan" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <Tooltip
                    formatter={(value) => formatCurrency(value)}
                    contentStyle={{ borderRadius: '8px', border: '1px solid rgba(0,0,0,0.08)', backgroundColor: 'white' }}
                  />
                  <Bar dataKey="revenue" fill="#5b3df6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>

          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex flex-col gap-[4px] w-full">
              <div className="font-bold text-[18px] text-[#0f172a]">Top Revenue Tenants</div>
              <div className="text-[13px] text-[#94a3b8]">Based on captured payment totals</div>
            </div>
            {topTenantsData.length === 0 ? (
              <div className="w-full py-8 text-center text-[13px] text-[#94a3b8]">No tenant revenue found.</div>
            ) : (
              <div className="flex flex-col w-full gap-[16px]">
                {topTenantsData.map((tenant, idx) => (
                  <div key={tenant.tenantId || idx} className={`${idx === 0 ? '' : 'border-t border-black/[0.08]'} pt-[12px] first:pt-0`}>
                    <div className="flex items-center justify-between mb-[8px]">
                      <span className="font-semibold text-[14px] text-[#0f172a]">{tenant.name}</span>
                      <Pill variant="success">{formatCurrency(tenant.revenue)}</Pill>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-2">
          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex flex-col gap-[4px] w-full">
              <div className="font-bold text-[18px] text-[#0f172a]">Admins</div>
              <div className="text-[13px] text-[#94a3b8]">Click admin to view all transactions</div>
            </div>
            {loading ? <div className="w-full py-6 text-center text-[13px] text-[#94a3b8]">Loading admins...</div> : null}
            {!loading && admins.length === 0 ? (
              <div className="w-full py-6 text-center text-[13px] text-[#94a3b8]">No admins found.</div>
            ) : (
              <div className="w-full flex flex-col gap-[10px]">
                {admins.map((admin) => (
                  <button
                    key={admin.id}
                    onClick={() => setSelectedAdminId(admin.id)}
                    className={`w-full text-left border rounded-[8px] px-[12px] py-[10px] transition-colors ${
                      selectedAdminId === admin.id
                        ? 'border-[#5b3df6] bg-[#f4f0ff]'
                        : 'border-black/[0.08] hover:bg-[#f8fafc]'
                    }`}
                  >
                    <div className="font-semibold text-[14px] text-[#0f172a]">{admin.name}</div>
                    <div className="text-[12px] text-[#94a3b8]">{admin.email}</div>
                    <div className="text-[11px] text-[#94a3b8] mt-[2px]">{tenantMap[admin.tenantId] || '-'}</div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex flex-col gap-[4px] w-full">
              <div className="font-bold text-[18px] text-[#0f172a]">Admin Transactions</div>
              <div className="text-[13px] text-[#94a3b8]">
                {selectedAdmin ? `Showing all transactions for ${selectedAdmin.name}` : 'Select an admin to view transactions'}
              </div>
            </div>

            {!selectedAdmin ? (
              <div className="w-full py-6 text-center text-[13px] text-[#94a3b8]">No admin selected.</div>
            ) : selectedAdminTransactions.length === 0 ? (
              <div className="w-full py-6 text-center text-[13px] text-[#94a3b8]">No transactions for this admin.</div>
            ) : (
              <div className="flex flex-col w-full gap-[12px] max-h-[460px] overflow-auto pr-1">
                {selectedAdminTransactions.map((payment, idx) => {
                  const isCaptured = payment.status === 'captured'
                  return (
                    <div
                      key={payment._id || idx}
                      className={`flex items-center justify-between ${idx !== selectedAdminTransactions.length - 1 ? 'pb-[12px] border-b border-black/[0.08]' : ''}`}
                    >
                      <div>
                        <div className="font-semibold text-[14px] text-[#0f172a]">{tenantMap[payment.tenant_id] || 'Unknown Tenant'}</div>
                        <div className="text-[12px] text-[#94a3b8]">
                          {payment.order_id || 'Order'} - {payment.created_at ? new Date(payment.created_at).toLocaleString() : '-'}
                        </div>
                      </div>
                      <Pill variant={isCaptured ? 'success' : 'warning'}>
                        {isCaptured ? formatCurrency(payment.amount) : payment.status || 'pending'}
                      </Pill>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
