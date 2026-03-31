// import React from 'react'
// import { CreditCard, Check, TrendingUp } from 'lucide-react'

// const plans = [
//   { id: 1, name: 'Basic Plan', price: '₹999', period: 'per month', tenants: 28, revenue: '₹27,972', features: ['Up to 500 users', '10 courses', 'Basic analytics'] },
//   { id: 2, name: 'Pro Plan', price: '₹2,999', period: 'per month', tenants: 64, revenue: '₹1,91,936', features: ['Up to 5,000 users', 'Unlimited courses', 'Advanced analytics'], popular: true },
//   { id: 3, name: 'Enterprise', price: 'Custom', period: 'contact sales', tenants: 36, revenue: '₹4,32,000', features: ['Unlimited users', 'Unlimited courses', '24/7 support'] },
// ]

// const billingHistory = [
//   { id: 1, tenant: 'CodeMaster Institute', plan: 'Enterprise', amount: '₹12,000', date: 'Mar 1, 2026', status: 'paid' },
//   { id: 2, tenant: 'Bright Minds Academy', plan: 'Pro Plan', amount: '₹2,999', date: 'Mar 1, 2026', status: 'paid' },
//   { id: 3, tenant: 'LearnNest Studio', plan: 'Basic Plan', amount: '₹999', date: 'Mar 1, 2026', status: 'pending' },
// ]

// export default function SuperAdminPlansBilling() {
//   return (
//     <div>
//       <header className="mb-8 border-b border-gray-200 bg-white px-8 py-4">
//         <h1 className="text-2xl font-semibold">Plans &amp; Billing</h1>
//         <p className="mt-1 text-sm text-gray-500">Manage subscription plans and billing information</p>
//       </header>

//       <div className="mb-8 grid grid-cols-4 gap-6">
//         <Card title="MRR" value="₹18.4L" meta="+12.5%" icon={<TrendingUp className="h-6 w-6 text-green-600" />} />
//         <Card title="Active Subscriptions" value="128" meta="Across all plans" />
//         <Card title="Pending Payments" value="12" meta="Require attention" />
//         <Card title="ARPU" value="₹1,438" meta="Per tenant" />
//       </div>

//       <div className="grid grid-cols-3 gap-6">
//         {plans.map((plan) => (
//           <div key={plan.id} className={`relative rounded-xl border-2 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.02)] ${plan.popular ? 'border-indigo-600' : 'border-gray-200'}`}>
//             {plan.popular ? (
//               <div className="absolute right-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs text-white">Most Popular</div>
//             ) : null}
//             <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
//               <CreditCard className="h-6 w-6" />
//             </div>
//             <h3 className="text-xl font-semibold">{plan.name}</h3>
//             <div className="mb-4 mt-1">
//               <span className="text-3xl font-bold">{plan.price}</span>
//               <span className="ml-2 text-sm text-gray-500">{plan.period}</span>
//             </div>
//             <div className="mb-5 text-sm text-gray-600">
//               {plan.tenants} active tenants - {plan.revenue}
//             </div>
//             <ul className="mb-6 space-y-2">
//               {plan.features.map((feature) => (
//                 <li key={feature} className="flex items-center gap-2 text-sm">
//                   <Check className="h-4 w-4 text-green-600" />
//                   {feature}
//                 </li>
//               ))}
//             </ul>
//             <button className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-white">Edit Plan</button>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-white">
//         <table className="w-full">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Tenant</th>
//               <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Plan</th>
//               <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Amount</th>
//               <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Date</th>
//               <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {billingHistory.map((bill) => (
//               <tr key={bill.id} className="border-t border-gray-100">
//                 <td className="px-6 py-4 text-sm font-medium">{bill.tenant}</td>
//                 <td className="px-6 py-4 text-sm">{bill.plan}</td>
//                 <td className="px-6 py-4 text-sm font-semibold">{bill.amount}</td>
//                 <td className="px-6 py-4 text-sm text-gray-500">{bill.date}</td>
//                 <td className="px-6 py-4">
//                   <span
//                     className={`rounded-full px-3 py-1 text-xs font-medium ${
//                       bill.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
//                     }`}
//                   >
//                     {bill.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// function Card({ title, value, meta, icon = null }) {
//   return (
//     <div className="rounded-xl border border-gray-200 bg-white p-6">
//       <div className="mb-2 flex items-center justify-between">
//         <div className="text-sm text-gray-500">{title}</div>
//         {icon}
//       </div>
//       <div className="text-3xl font-semibold">{value}</div>
//       <div className="mt-2 text-xs text-teal-600">{meta}</div>
//     </div>
//   )
// }























import React from 'react'
import { CreditCard, Check, TrendingUp, Plus, Calendar, Download, Users, Wallet, Zap } from 'lucide-react'

const plans = [
  { id: 1, name: 'Basic Plan', price: '₹999', period: 'per month', tenants: 28, revenue: '₹27,972', features: ['Up to 500 users', '10 courses', 'Basic analytics', 'Email support'] },
  { id: 2, name: 'Pro Plan', price: '₹2,999', period: 'per month', tenants: 64, revenue: '₹1,91,936', features: ['Up to 5,000 users', 'Unlimited courses', 'Advanced analytics', 'Priority support', 'API access'], popular: true },
  { id: 3, name: 'Enterprise', price: 'Custom', period: 'contact sales', tenants: 36, revenue: '₹4,32,000', features: ['Unlimited users', 'Unlimited courses', 'Custom analytics', '24/7 dedicated support', 'SLA guarantee'] },
]

const billingHistory = [
  { id: 1, tenant: 'CodeMaster Institute', plan: 'Enterprise', amount: '₹12,000', date: 'Mar 1, 2026', status: 'paid' },
  { id: 2, tenant: 'Bright Minds Academy', plan: 'Pro Plan', amount: '₹2,999', date: 'Mar 1, 2026', status: 'paid' },
  { id: 3, tenant: 'LearnNest Studio', plan: 'Basic Plan', amount: '₹999', date: 'Mar 1, 2026', status: 'pending' },
  { id: 4, tenant: 'FuturePrep Center', plan: 'Enterprise', amount: '₹12,000', date: 'Feb 28, 2026', status: 'paid' },
]

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
  return (
    <div className="min-h-full bg-[#F7FAFD]">
      {/* Header */}
      <header className="flex h-[76px] items-center justify-between border-b border-black/[0.08] bg-white px-[28px]">
        <div className="relative shrink-0">
          <div className="flex flex-col font-medium h-[16px] justify-center leading-[0] text-[#94a3b8] text-[13px]">
            Super admin panel
          </div>
          <div className="flex flex-col font-bold h-[29px] justify-center leading-[0] text-[#0f172a] text-[24px]">
            Plans &amp; Billing
          </div>
        </div>

        <div className="flex items-center gap-[12px]">
          <div className="bg-white border border-black/[0.08] flex items-center gap-[10px] h-[40px] min-w-[200px] px-[15px] py-[0.25px] relative rounded-[6px]">
            <Calendar className="h-[18px] w-[18px] text-[#94a3b8]" />
            <div className="flex flex-col font-normal h-[17px] justify-center leading-[0] text-[#94a3b8] text-[14px]">
              Last 30 days
            </div>
          </div>

          <div className="bg-[#e8f5ff] border border-black/[0.08] flex items-center gap-[8px] h-[40px] justify-center px-[17px] py-[0.25px] rounded-[6px] shrink-0">
            <Download className="h-[18px] w-[18px] text-[#0f172a]" />
            <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">
              Export Billing
            </div>
          </div>

          <div className="bg-[#5b3df6] flex items-center gap-[8px] h-[40px] justify-center px-[16px] rounded-[6px] shrink-0">
            <Plus className="h-[18px] w-[18px] text-white" />
            <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-white text-[14px]">
              Create Plan
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
            value="₹18.4L" 
            meta="↑ 12.5% vs last month" 
            icon={<TrendingUp className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
          <StatCard 
            title="Active Subscriptions" 
            value="128" 
            meta="Across all plans" 
            icon={<Users className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
          <StatCard 
            title="Pending Payments" 
            value="12" 
            meta="Require attention" 
            icon={<Wallet className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
          <StatCard 
            title="ARPU" 
            value="₹1,438" 
            meta="Per tenant" 
            icon={<CreditCard className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
        </div>

        {/* Plans Grid */}
        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-3">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`bg-white border-2 border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px] relative ${
                plan.popular ? 'border-[#5b3df6]' : 'border-black/[0.08]'
              }`}
            >
              {plan.popular && (
                <div className="absolute right-[16px] top-[16px]">
                  <Pill variant="popular">Most Popular</Pill>
                </div>
              )}
              <div className="bg-[#e8f5ff] flex items-center justify-center rounded-[8px] shrink-0 size-[48px]">
                <CreditCard className="h-[24px] w-[24px] text-[#5b3df6]" />
              </div>
              <div>
                <div className="font-bold text-[20px] text-[#0f172a]">{plan.name}</div>
                <div className="mt-[8px]">
                  <span className="font-bold text-[28px] text-[#0f172a]">{plan.price}</span>
                  <span className="ml-[8px] text-[13px] text-[#94a3b8]">{plan.period}</span>
                </div>
              </div>
              <div className="bg-[#f1f5f9] rounded-[6px] p-[12px] w-full">
                <div className="text-[13px] text-[#94a3b8] mb-[4px]">Active tenants</div>
                <div className="font-bold text-[20px] text-[#0f172a]">{plan.tenants}</div>
                <div className="text-[12px] text-[#2dd4bf] mt-[4px]">Revenue: {plan.revenue}</div>
              </div>
              <div className="flex flex-col gap-[12px] w-full">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-[10px]">
                    <div className="bg-[#2dd4bf] rounded-full p-[2px]">
                      <Check className="h-[10px] w-[10px] text-[#023b33]" />
                    </div>
                    <span className="text-[13px] text-[#0f172a]">{feature}</span>
                  </div>
                ))}
              </div>
              <button className={`w-full h-[40px] rounded-[6px] text-[14px] font-medium mt-[8px] ${
                plan.popular 
                  ? 'bg-[#5b3df6] text-white' 
                  : 'border border-black/[0.08] text-[#0f172a]'
              }`}>
                {plan.popular ? 'Manage Plan' : 'Edit Plan'}
              </button>
            </div>
          ))}
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
                {billingHistory.map((bill, idx) => (
                  <tr key={bill.id} className={`border-b border-black/[0.08] ${idx === billingHistory.length - 1 ? 'border-b-0' : ''}`}>
                    <td className="px-4 py-4">
                      <div className="font-semibold text-[14px] text-[#0f172a]">{bill.tenant}</div>
                    </td>
                    <td className="px-4 py-4 text-[14px] text-[#0f172a]">{bill.plan}</td>
                    <td className="px-4 py-4 font-semibold text-[14px] text-[#0f172a]">{bill.amount}</td>
                    <td className="px-4 py-4 text-[14px] text-[#94a3b8]">{bill.date}</td>
                    <td className="px-4 py-4">
                      <Pill variant={bill.status === 'paid' ? 'paid' : 'pending'}>
                        {bill.status === 'paid' ? 'Paid' : 'Pending'}
                      </Pill>
                    </td>
                    <td className="px-4 py-4">
                      <button className="border border-black/[0.08] flex items-center gap-[6px] h-[32px] justify-center px-[12px] rounded-[6px] hover:bg-[#f1f5f9] transition-colors">
                        <Download className="h-[12px] w-[12px] text-[#5b3df6]" />
                        <span className="text-[12px] font-medium text-[#0f172a]">PDF</span>
                      </button>
                    </td>
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
              <div>
                <div className="flex justify-between mb-[8px]">
                  <span className="text-[14px] font-medium text-[#0f172a]">Pro Plan</span>
                  <span className="text-[14px] text-[#94a3b8]">64 tenants (50%)</span>
                </div>
                <div className="h-[8px] rounded-full bg-[#f1f5f9]">
                  <div className="h-[8px] rounded-full bg-gradient-to-r from-[#5b3df6] to-[#2dd4bf]" style={{ width: '50%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-[8px]">
                  <span className="text-[14px] font-medium text-[#0f172a]">Enterprise</span>
                  <span className="text-[14px] text-[#94a3b8]">36 tenants (28%)</span>
                </div>
                <div className="h-[8px] rounded-full bg-[#f1f5f9]">
                  <div className="h-[8px] rounded-full bg-gradient-to-r from-[#5b3df6] to-[#2dd4bf]" style={{ width: '28%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-[8px]">
                  <span className="text-[14px] font-medium text-[#0f172a]">Basic Plan</span>
                  <span className="text-[14px] text-[#94a3b8]">28 tenants (22%)</span>
                </div>
                <div className="h-[8px] rounded-full bg-[#f1f5f9]">
                  <div className="h-[8px] rounded-full bg-gradient-to-r from-[#5b3df6] to-[#2dd4bf]" style={{ width: '22%' }} />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex flex-col gap-[4px] w-full">
              <div className="font-bold text-[18px] text-[#0f172a]">Revenue by Plan</div>
              <div className="text-[13px] text-[#94a3b8]">Monthly recurring revenue breakdown</div>
            </div>
            <div className="grid grid-cols-2 gap-[12px] w-full">
              <div className="bg-[#e8f5ff] rounded-[8px] p-[14px]">
                <div className="text-[12px] text-[#94a3b8] mb-[8px]">Enterprise</div>
                <div className="font-bold text-[20px] text-[#0f172a]">₹4.32L</div>
                <div className="text-[11px] text-[#2dd4bf] mt-[4px]">47% of MRR</div>
              </div>
              <div className="bg-[#e8f5ff] rounded-[8px] p-[14px]">
                <div className="text-[12px] text-[#94a3b8] mb-[8px]">Pro Plan</div>
                <div className="font-bold text-[20px] text-[#0f172a]">₹1.92L</div>
                <div className="text-[11px] text-[#2dd4bf] mt-[4px]">41% of MRR</div>
              </div>
              <div className="bg-[#e8f5ff] rounded-[8px] p-[14px]">
                <div className="text-[12px] text-[#94a3b8] mb-[8px]">Basic Plan</div>
                <div className="font-bold text-[20px] text-[#0f172a]">₹27,972</div>
                <div className="text-[11px] text-[#94a3b8] mt-[4px]">12% of MRR</div>
              </div>
              <div className="bg-[#e8f5ff] rounded-[8px] p-[14px]">
                <div className="text-[12px] text-[#94a3b8] mb-[8px]">Avg. Revenue/Tenant</div>
                <div className="font-bold text-[20px] text-[#0f172a]">₹1,438</div>
                <div className="text-[11px] text-[#2dd4bf] mt-[4px]">↑ 5.2% growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
