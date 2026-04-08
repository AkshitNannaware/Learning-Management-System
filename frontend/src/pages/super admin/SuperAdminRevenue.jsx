// import React from 'react'
// import { DollarSign, TrendingUp, Download, Calendar } from 'lucide-react'
// import {
//   BarChart,
//   Bar,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   ResponsiveContainer,
//   Tooltip,
//   Legend,
// } from 'recharts'

// const monthlyRevenue = [
//   { month: 'Jan', revenue: 280000, expenses: 120000, profit: 160000 },
//   { month: 'Feb', revenue: 350000, expenses: 140000, profit: 210000 },
//   { month: 'Mar', revenue: 420000, expenses: 150000, profit: 270000 },
//   { month: 'Apr', revenue: 480000, expenses: 160000, profit: 320000 },
//   { month: 'May', revenue: 550000, expenses: 170000, profit: 380000 },
//   { month: 'Jun', revenue: 620000, expenses: 180000, profit: 440000 },
//   { month: 'Jul', revenue: 700000, expenses: 190000, profit: 510000 },
// ]

// const revenueByPlan = [
//   { plan: 'Basic', revenue: 185000 },
//   { plan: 'Pro', revenue: 842000 },
//   { plan: 'Enterprise', revenue: 813000 },
// ]

// const topTenants = [
//   { name: 'CodeMaster Institute', revenue: 940000, growth: 15.2 },
//   { name: 'FuturePrep Center', revenue: 680000, growth: 12.8 },
//   { name: 'Bright Minds Academy', revenue: 320000, growth: 8.5 },
//   { name: 'Creative Arts Hub', revenue: 210000, growth: 6.2 },
//   { name: 'SkillSpring Kids', revenue: 180000, growth: 4.1 },
// ]

// const formatInLakhs = (value) => `₹${(value / 100000).toFixed(1)}L`
// const maxRevenue = Math.max(...monthlyRevenue.map((item) => item.revenue))
// const maxPlanRevenue = Math.max(...revenueByPlan.map((item) => item.revenue))

// export default function SuperAdminRevenue() {
//   return (
//     <>
//       <header className="mb-7 flex items-center justify-between border-b border-gray-200 bg-white px-8 py-4">
//         <div>
//           <h1 className="text-2xl font-semibold">Revenue</h1>
//           <p className="mt-1 text-sm text-gray-500">
//             Track income, expenses, and financial performance
//           </p>
//         </div>
//         <div className="flex gap-3">
//           <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium">
//             <Calendar className="h-4 w-4" />
//             Last 7 months
//           </button>
//           <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white">
//             <Download className="h-4 w-4" />
//             Export Report
//           </button>
//         </div>
//       </header>

//       <section className="mb-7 grid grid-cols-4 gap-5">
//         <div className="rounded-xl border border-gray-200 bg-white p-5">
//           <div className="mb-3 flex items-center justify-between">
//             <div className="rounded-lg bg-green-100 p-2">
//               <DollarSign className="h-5 w-5 text-green-600" />
//             </div>
//             <span className="flex items-center gap-1 text-xs text-green-600">
//               <TrendingUp className="h-3 w-3" />
//               12.8%
//             </span>
//           </div>
//           <div className="mb-2 text-sm text-gray-500">Total Revenue</div>
//           <div className="text-2xl font-semibold">₹18.4L</div>
//         </div>
//         <div className="rounded-xl border border-gray-200 bg-white p-5">
//           <div className="mb-3 flex items-center justify-between">
//             <div className="rounded-lg bg-blue-100 p-2">
//               <TrendingUp className="h-5 w-5 text-blue-600" />
//             </div>
//             <span className="flex items-center gap-1 text-xs text-green-600">
//               <TrendingUp className="h-3 w-3" />
//               8.2%
//             </span>
//           </div>
//           <div className="mb-2 text-sm text-gray-500">This Month</div>
//           <div className="text-2xl font-semibold">₹7.0L</div>
//         </div>
//         <div className="rounded-xl border border-gray-200 bg-white p-5">
//           <div className="mb-2 text-sm text-gray-500">Monthly Avg</div>
//           <div className="text-2xl font-semibold">₹2.6L</div>
//           <div className="mt-2 text-xs text-gray-500">Average</div>
//         </div>
//         <div className="rounded-xl border border-gray-200 bg-white p-5">
//           <div className="mb-2 text-sm text-gray-500">Success Rate</div>
//           <div className="text-2xl font-semibold">98.7%</div>
//           <div className="mt-2 text-xs text-green-600">Healthy</div>
//         </div>
//       </section>

//       <section className="mb-7 rounded-xl border border-gray-200 bg-white p-6">
//         <h2 className="text-lg font-semibold">Revenue Overview</h2>
//         <p className="mb-6 text-sm text-gray-500">Monthly revenue, expenses, and profit trends</p>
//         <ResponsiveContainer width="100%" height={350}>
//           <LineChart data={monthlyRevenue}>
//             <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
//             <XAxis dataKey="month" axisLine={false} tickLine={false} />
//             <YAxis axisLine={false} tickLine={false} />
//             <Tooltip formatter={(value) => `₹${(value / 1000).toFixed(1)}K`} />
//             <Legend />
//             <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} name="Revenue" />
//             <Line type="monotone" dataKey="profit" stroke="#6366f1" strokeWidth={2} name="Profit" />
//             <Line
//               type="monotone"
//               dataKey="expenses"
//               stroke="#ef4444"
//               strokeWidth={2}
//               strokeDasharray="5 5"
//               name="Expenses"
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </section>

//       <section className="grid grid-cols-2 gap-6">
//         <div className="rounded-xl border border-gray-200 bg-white p-6">
//           <h3 className="text-lg font-semibold">Revenue by Plan</h3>
//           <p className="mb-5 text-sm text-gray-500">Distribution across subscription tiers</p>
//           <ResponsiveContainer width="100%" height={250}>
//             <BarChart data={revenueByPlan}>
//               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
//               <XAxis dataKey="plan" axisLine={false} tickLine={false} />
//               <YAxis axisLine={false} tickLine={false} />
//               <Tooltip formatter={(value) => `₹${(value / 1000).toFixed(1)}K`} />
//               <Bar dataKey="revenue" fill="#818cf8" radius={[8, 8, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="rounded-xl border border-gray-200 bg-white p-6">
//           <h3 className="text-lg font-semibold">Top Revenue Tenants</h3>
//           <p className="mb-5 text-sm text-gray-500">Highest contributing clients</p>
//           <div className="space-y-4">
//             {topTenants.map((tenant) => (
//               <div key={tenant.name} className="border-b border-gray-100 pb-3 last:border-b-0">
//                 <div className="mb-1 flex items-center justify-between">
//                   <span className="text-sm font-medium">{tenant.name}</span>
//                   <span className="text-xs text-green-600">+{tenant.growth}%</span>
//                 </div>
//                 <div className="mb-1 text-xs text-gray-500">₹{(tenant.revenue / 1000).toFixed(1)}K</div>
//                 <div className="h-2 rounded-full bg-gray-200">
//                   <div
//                     className="h-2 rounded-full bg-indigo-600"
//                     style={{ width: `${(tenant.growth / 20) * 100}%` }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }



















import React, { useEffect, useMemo, useState } from 'react'
import { DollarSign, TrendingUp, Download, Calendar, Upload, BarChart3, Wallet, Users, BookOpen } from 'lucide-react'
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
  Legend,
} from 'recharts'
import { api } from '../../lib/api'

const monthlyRevenue = [
  { month: 'Jan', revenue: 280000, expenses: 120000, profit: 160000 },
  { month: 'Feb', revenue: 350000, expenses: 140000, profit: 210000 },
  { month: 'Mar', revenue: 420000, expenses: 150000, profit: 270000 },
  { month: 'Apr', revenue: 480000, expenses: 160000, profit: 320000 },
  { month: 'May', revenue: 550000, expenses: 170000, profit: 380000 },
  { month: 'Jun', revenue: 620000, expenses: 180000, profit: 440000 },
  { month: 'Jul', revenue: 700000, expenses: 190000, profit: 510000 },
]

const revenueByPlan = [
  { plan: 'Basic', revenue: 185000 },
  { plan: 'Pro', revenue: 842000 },
  { plan: 'Enterprise', revenue: 813000 },
]

const topTenants = [
  { name: 'CodeMaster Institute', revenue: 940000, growth: 15.2 },
  { name: 'FuturePrep Center', revenue: 680000, growth: 12.8 },
  { name: 'Bright Minds Academy', revenue: 320000, growth: 8.5 },
  { name: 'Creative Arts Hub', revenue: 210000, growth: 6.2 },
  { name: 'SkillSpring Kids', revenue: 180000, growth: 4.1 },
]

const formatInLakhs = (value) => `₹${(value / 100000).toFixed(1)}L`
const maxRevenue = Math.max(...monthlyRevenue.map((item) => item.revenue))
const maxPlanRevenue = Math.max(...revenueByPlan.map((item) => item.revenue))

function StatCard({ title, value, meta, icon, trend, trendValue }) {
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
      {trend ? (
        <div className="bg-[#2dd4bf] h-[28px] rounded-[12px] relative flex items-center px-[10px]">
          <div className="flex flex-col font-medium h-[15px] justify-center leading-[0] text-[#023b33] text-[12px]">
            {trendValue}
          </div>
        </div>
      ) : (
        <div className="bg-[#f0f4f8] h-[28px] rounded-[12px] relative flex items-center px-[10px]">
          <div className="flex flex-col font-medium h-[15px] justify-center leading-[0] text-[#94a3b8] text-[12px]">
            {meta}
          </div>
        </div>
      )}
    </div>
  )
}

function Pill({ children, variant }) {
  const style =
    variant === 'success'
      ? 'bg-[#2dd4bf] text-[#023b33]'
      : variant === 'growth'
        ? 'bg-[#2dd4bf] text-[#023b33]'
        : 'bg-[#e8f5ff] text-[#0f172a]'

  return <span className={`inline-flex h-[28px] items-center px-[10px] rounded-[12px] text-[12px] font-medium ${style}`}>{children}</span>
}

export default function SuperAdminRevenue() {
  const [dashboard, setDashboard] = useState({ revenue: 0, total_users: 0, active_courses: 0, active_subscriptions: 0 })
  const [payments, setPayments] = useState([])

  useEffect(() => {
    Promise.all([api('/lms/dashboard/super-admin').catch(() => ({})), api('/lms/payments').catch(() => ({ items: [] }))]).then(([d, p]) => {
      setDashboard(d || {})
      setPayments(p.items || p || [])
    })
  }, [])

  const thisMonthRevenue = useMemo(() => {
    const now = new Date()
    return payments
      .filter((p) => {
        const dt = new Date(p.created_at || 0)
        return p.status === 'captured' && dt.getMonth() === now.getMonth() && dt.getFullYear() === now.getFullYear()
      })
      .reduce((acc, cur) => acc + Number(cur.amount || 0), 0)
  }, [payments])

  return (
    <div className="min-h-full bg-[#F7FAFD]">
      {/* Header */}
      <header className="flex h-[76px] items-center justify-between border-b border-black/[0.08] bg-white px-[28px]">
        <div className="relative shrink-0">
          <div className="flex flex-col font-medium h-[16px] justify-center leading-[0] text-[#94a3b8] text-[13px]">
            Super admin panel
          </div>
          <div className="flex flex-col font-bold h-[29px] justify-center leading-[0] text-[#0f172a] text-[24px]">
            Revenue
          </div>
        </div>

        <div className="flex items-center gap-[12px]">
          <div className="bg-white border border-black/[0.08] flex items-center gap-[10px] h-[40px] min-w-[200px] px-[15px] py-[0.25px] relative rounded-[6px]">
            <Calendar className="h-[18px] w-[18px] text-[#94a3b8]" />
            <div className="flex flex-col font-normal h-[17px] justify-center leading-[0] text-[#94a3b8] text-[14px]">
              Last 7 months
            </div>
          </div>

          <div className="bg-[#e8f5ff] border border-black/[0.08] flex items-center gap-[8px] h-[40px] justify-center px-[17px] py-[0.25px] rounded-[6px] shrink-0">
            <Download className="h-[18px] w-[18px] text-[#0f172a]" />
            <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">
              Export Report
            </div>
          </div>
        </div>
      </header>

      <div className="bg-gradient-to-b flex flex-col from-[#f6f8fa] gap-[24px] h-full p-[28px] to-[#f7fcff]">
        {/* Hero Section */}
        <section className="border border-black/[0.08] border-solid content-stretch flex flex-col items-start pb-[23px] pt-[25px] px-[25px] relative rounded-[8px] shrink-0 w-full bg-gradient-to-br from-white to-[#e8f5ff]">
          <div className="flex flex-col gap-[11px] items-start relative shrink-0">
            <div className="bg-[#ffd966] flex items-center px-[10px] py-[6.5px] rounded-[12px] shrink-0">
              <div className="flex flex-col font-medium h-[15px] justify-center leading-[0] text-[#4b2e00] text-[12px]">
                Financial overview
              </div>
            </div>

            <div className="flex flex-col font-bold h-[31.59px] justify-center leading-[0] text-[#0f172a] text-[28px]">
              Track income, expenses, and financial performance
            </div>

            <div className="flex flex-col font-normal h-[17px] justify-center leading-[0] text-[#94a3b8] text-[14px]">
              Monitor revenue streams, plan distribution, and top-performing tenants.
            </div>
          </div>

          <div className="mt-4 flex items-center gap-[12px]">
            <div className="bg-[#5b3df6] flex items-center gap-[8px] h-[40px] justify-center px-[16px] rounded-[6px] shrink-0">
              <BarChart3 className="h-[18px] w-[18px] text-white" />
              <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-white text-[14px]">
                Generate Report
              </div>
            </div>
            <div className="border border-black/[0.08] flex gap-[8px] h-[40px] items-center justify-center px-[17px] py-[0.25px] rounded-[6px] shrink-0 bg-white">
              <Calendar className="h-[18px] w-[18px] text-[#94a3b8]" />
              <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">
                This year
              </div>
            </div>
          </div>
        </section>

        {/* Stats row */}
        <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))]">
          <StatCard 
            title="Total Revenue" 
            value={`₹${Number(dashboard.revenue || 0).toLocaleString('en-IN')}`} 
            trend={true}
            trendValue="↑ 12.8% vs last month"
            icon={<DollarSign className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
          <StatCard 
            title="This Month" 
            value={`₹${thisMonthRevenue.toLocaleString('en-IN')}`} 
            trend={true}
            trendValue="↑ 8.2% vs last month"
            icon={<TrendingUp className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
          <StatCard 
            title="Monthly Average" 
            value={`₹${Math.round(Number(dashboard.revenue || 0) / 12).toLocaleString('en-IN')}`} 
            meta="Average revenue per month"
            icon={<Wallet className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
          <StatCard 
            title="Success Rate" 
            value={`${payments.length ? Math.round((payments.filter((p) => p.status === 'captured').length / payments.length) * 100) : 0}%`} 
            meta="Payment success rate"
            icon={<Users className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
        </div>

        {/* Revenue Overview Chart */}
        <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-[4px]">
              <div className="font-bold text-[18px] text-[#0f172a]">Revenue Overview</div>
              <div className="text-[13px] text-[#94a3b8]">Monthly revenue, expenses, and profit trends</div>
            </div>
            <div className="bg-[#e8f5ff] border border-black/[0.08] flex items-center gap-[8px] h-[40px] justify-center px-[17px] py-[0.25px] rounded-[6px] shrink-0">
              <Upload className="h-[18px] w-[18px] text-[#5b3df6]" />
              <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">
                Export Chart
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
              <Tooltip 
                formatter={(value) => `₹${(value / 1000).toFixed(1)}K`}
                contentStyle={{ borderRadius: '8px', border: '1px solid rgba(0,0,0,0.08)', backgroundColor: 'white' }}
              />
              <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '16px' }} />
              <Line type="monotone" dataKey="revenue" stroke="#2dd4bf" strokeWidth={2} name="Revenue" dot={{ fill: '#2dd4bf', r: 4 }} />
              <Line type="monotone" dataKey="profit" stroke="#5b3df6" strokeWidth={2} name="Profit" dot={{ fill: '#5b3df6', r: 4 }} />
              <Line
                type="monotone"
                dataKey="expenses"
                stroke="#ffd966"
                strokeWidth={2}
                strokeDasharray="5 5"
                name="Expenses"
                dot={{ fill: '#ffd966', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue by Plan + Top Tenants */}
        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-2">
          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex flex-col gap-[4px] w-full">
              <div className="font-bold text-[18px] text-[#0f172a]">Revenue by Plan</div>
              <div className="text-[13px] text-[#94a3b8]">Distribution across subscription tiers</div>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={revenueByPlan}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="plan" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <Tooltip 
                  formatter={(value) => `₹${(value / 1000).toFixed(1)}K`}
                  contentStyle={{ borderRadius: '8px', border: '1px solid rgba(0,0,0,0.08)', backgroundColor: 'white' }}
                />
                <Bar dataKey="revenue" fill="#5b3df6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex flex-col gap-[4px] w-full">
              <div className="font-bold text-[18px] text-[#0f172a]">Top Revenue Tenants</div>
              <div className="text-[13px] text-[#94a3b8]">Highest contributing clients</div>
            </div>
            <div className="flex flex-col w-full gap-[16px]">
              {topTenants.map((tenant, idx) => (
                <div key={tenant.name} className={`${idx === 0 ? '' : 'border-t border-black/[0.08]'} pt-[12px] first:pt-0`}>
                  <div className="flex items-center justify-between mb-[8px]">
                    <span className="font-semibold text-[14px] text-[#0f172a]">{tenant.name}</span>
                    <Pill variant="growth">
                      ↑ {tenant.growth}%
                    </Pill>
                  </div>
                  <div className="text-[13px] text-[#94a3b8] mb-[8px]">₹{(tenant.revenue / 1000).toFixed(1)}K</div>
                  <div className="h-[8px] rounded-full bg-[#f1f5f9]">
                    <div
                      className="h-[8px] rounded-full bg-gradient-to-r from-[#5b3df6] to-[#2dd4bf]"
                      style={{ width: `${(tenant.growth / 20) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Revenue Insights */}
        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-2">
          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex flex-col gap-[4px] w-full">
              <div className="font-bold text-[18px] text-[#0f172a]">Revenue Insights</div>
              <div className="text-[13px] text-[#94a3b8]">Key metrics and performance indicators</div>
            </div>
            <div className="grid grid-cols-2 gap-[16px] w-full">
              <div className="bg-[#e8f5ff] rounded-[8px] p-[16px]">
                <div className="text-[13px] text-[#94a3b8] mb-[8px]">Average Revenue per Tenant</div>
                <div className="text-[24px] font-bold text-[#0f172a]">₹1.44L</div>
                <div className="text-[11px] text-[#2dd4bf] mt-[8px]">↑ 5.2% growth</div>
              </div>
              <div className="bg-[#e8f5ff] rounded-[8px] p-[16px]">
                <div className="text-[13px] text-[#94a3b8] mb-[8px]">Projected Q3 Revenue</div>
                <div className="text-[24px] font-bold text-[#0f172a]">₹22.5L</div>
                <div className="text-[11px] text-[#2dd4bf] mt-[8px]">↑ 12.3% from Q2</div>
              </div>
              <div className="bg-[#e8f5ff] rounded-[8px] p-[16px]">
                <div className="text-[13px] text-[#94a3b8] mb-[8px]">Payment Success Rate</div>
                <div className="text-[24px] font-bold text-[#0f172a]">98.7%</div>
                <div className="text-[11px] text-[#2dd4bf] mt-[8px]">↑ 0.5% improvement</div>
              </div>
              <div className="bg-[#e8f5ff] rounded-[8px] p-[16px]">
                <div className="text-[13px] text-[#94a3b8] mb-[8px]">Active Subscriptions</div>
                <div className="text-[24px] font-bold text-[#0f172a]">2,846</div>
                <div className="text-[11px] text-[#2dd4bf] mt-[8px]">↑ 124 this month</div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex flex-col gap-[4px] w-full">
              <div className="font-bold text-[18px] text-[#0f172a]">Recent Transactions</div>
              <div className="text-[13px] text-[#94a3b8]">Latest payments across the platform</div>
            </div>
            <div className="flex flex-col w-full gap-[12px]">
              <div className="flex items-center justify-between pb-[12px] border-b border-black/[0.08]">
                <div>
                  <div className="font-semibold text-[14px] text-[#0f172a]">CodeMaster Institute</div>
                  <div className="text-[12px] text-[#94a3b8]">Razorpay - Today, 10:23 AM</div>
                </div>
                <div className="bg-[#2dd4bf] h-[28px] rounded-[12px] flex items-center px-[10px]">
                  <div className="text-[12px] font-medium text-[#023b33]">₹24,000</div>
                </div>
              </div>
              <div className="flex items-center justify-between pb-[12px] border-b border-black/[0.08]">
                <div>
                  <div className="font-semibold text-[14px] text-[#0f172a]">FuturePrep Center</div>
                  <div className="text-[12px] text-[#94a3b8]">Stripe - Yesterday, 3:45 PM</div>
                </div>
                <div className="bg-[#2dd4bf] h-[28px] rounded-[12px] flex items-center px-[10px]">
                  <div className="text-[12px] font-medium text-[#023b33]">₹68,000</div>
                </div>
              </div>
              <div className="flex items-center justify-between pb-[12px] border-b border-black/[0.08]">
                <div>
                  <div className="font-semibold text-[14px] text-[#0f172a]">Bright Minds Academy</div>
                  <div className="text-[12px] text-[#94a3b8]">Razorpay - Yesterday, 11:12 AM</div>
                </div>
                <div className="bg-[#2dd4bf] h-[28px] rounded-[12px] flex items-center px-[10px]">
                  <div className="text-[12px] font-medium text-[#023b33]">₹32,000</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-[14px] text-[#0f172a]">SkillSpring Kids</div>
                  <div className="text-[12px] text-[#94a3b8]">Stripe - Yesterday, 9:30 AM</div>
                </div>
                <div className="bg-[#ffd966] h-[28px] rounded-[12px] flex items-center px-[10px]">
                  <div className="text-[12px] font-medium text-[#4b2e00]">Pending</div>
                </div>
              </div>
            </div>
            <div className="border-t border-black/[0.08] w-full pt-[15px] mt-[8px]">
              <button className="bg-[#5b3df6] h-[40px] rounded-[6px] flex items-center justify-center px-[16px] w-full">
                <div className="text-[14px] font-medium text-white text-center">View All Transactions</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
