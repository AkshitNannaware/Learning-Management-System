// import React from 'react'
// import { useState } from 'react'
// import { Search, Plus, MoreVertical, Building2, Users, BookOpen } from 'lucide-react'
// import { Modal } from '../../components/superadmin/Ui'

// const tenants = [
//   { id: 1, name: 'Bright Minds Academy', plan: 'Pro Plan', users: 4230, courses: 142, revenue: '₹3.2L', status: 'active' },
//   { id: 2, name: 'FuturePrep Center', plan: 'Enterprise', users: 8380, courses: 436, revenue: '₹6.8L', status: 'active' },
//   { id: 3, name: 'LearnNest Studio', plan: 'Basic Plan', users: 880, courses: 54, revenue: '₹45K', status: 'review' },
//   { id: 4, name: 'SkillSpring Kids', plan: 'Pro Plan', users: 2340, courses: 128, revenue: '₹1.8L', status: 'inactive' },
// ]

// export default function SuperAdminTenantManagement() {
//   const [query, setQuery] = useState('')
//   const [showAdd, setShowAdd] = useState(false)
//   const rows = tenants.filter((tenant) => tenant.name.toLowerCase().includes(query.toLowerCase()))

//   return (
//     <div>
//       <header className="mb-8 flex items-center justify-between border-b border-gray-200 bg-white px-8 py-4">
//         <div>
//           <h1 className="text-2xl font-semibold">Tenant Management</h1>
//           <p className="mt-1 text-sm text-gray-500">Manage all client organizations and subscriptions</p>
//         </div>
//         <button
//           onClick={() => setShowAdd(true)}
//           className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white"
//         >
//           <Plus className="h-4 w-4" />
//           Add Tenant
//         </button>
//       </header>

//       <div className="mb-8 grid grid-cols-4 gap-6">
//         <MiniStat title="Total Tenants" value="128" meta="+12 this month" />
//         <MiniStat title="Active Tenants" value="112" meta="87.5% of total" />
//         <MiniStat title="Under Review" value="8" meta="Pending approval" />
//         <MiniStat title="Inactive" value="8" meta="6.25% of total" />
//       </div>

//       <div className="mb-8 rounded-xl border border-gray-200 bg-white p-6">
//         <div className="relative">
//           <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
//           <input
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Search tenants by name..."
//             className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4"
//           />
//         </div>
//       </div>

//       <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
//         <table className="w-full">
//           <thead className="bg-gray-50">
//             <tr>
//               <Th>Tenant</Th>
//               <Th>Plan</Th>
//               <Th>Users</Th>
//               <Th>Courses</Th>
//               <Th>Revenue</Th>
//               <Th>Status</Th>
//               <Th>Joined</Th>
//               <Th>Actions</Th>
//             </tr>
//           </thead>
//           <tbody>
//             {rows.map((tenant) => (
//               <tr key={tenant.id} className="border-t border-gray-100">
//                 <Td>
//                   <div className="flex items-center gap-3">
//                     <div className="rounded-lg bg-indigo-100 p-2">
//                       <Building2 className="h-5 w-5 text-indigo-600" />
//                     </div>
//                     <span className="font-medium">{tenant.name}</span>
//                   </div>
//                 </Td>
//                 <Td>{tenant.plan}</Td>
//                 <Td>
//                   <div className="flex items-center gap-2">
//                     <Users className="h-4 w-4 text-gray-400" />
//                     {tenant.users.toLocaleString()}
//                   </div>
//                 </Td>
//                 <Td>
//                   <div className="flex items-center gap-2">
//                     <BookOpen className="h-4 w-4 text-gray-400" />
//                     {tenant.courses}
//                   </div>
//                 </Td>
//                 <Td className="font-medium">{tenant.revenue}</Td>
//                 <Td>
//                   <span className={`rounded-full px-3 py-1 text-xs ${
//                     tenant.status === 'active'
//                       ? 'bg-teal-100 text-teal-700'
//                       : tenant.status === 'review'
//                       ? 'bg-yellow-100 text-yellow-700'
//                       : 'bg-gray-100 text-gray-700'
//                   }`}>
//                     {tenant.status}
//                   </span>
//                 </Td>
//                 <Td className="text-gray-500">2025</Td>
//                 <Td>
//                   <button className="rounded p-1 hover:bg-gray-100">
//                     <MoreVertical className="h-4 w-4 text-gray-500" />
//                   </button>
//                 </Td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <Modal open={showAdd} onClose={() => setShowAdd(false)} title="Add New Tenant">
//         <div className="space-y-3">
//           <input className="w-full rounded-lg border border-gray-200 px-3 py-2" placeholder="Tenant name" />
//           <input className="w-full rounded-lg border border-gray-200 px-3 py-2" placeholder="Contact email" />
//           <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white">Create Tenant</button>
//         </div>
//       </Modal>
//     </div>
//   )
// }

// function Th({ children }) {
//   return <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">{children}</th>
// }
// function Td({ children, className = '' }) {
//   return <td className={`px-6 py-4 text-sm ${className}`}>{children}</td>
// }

// function MiniStat({ title, value, meta }) {
//   return (
//     <div className="rounded-xl border border-gray-200 bg-white p-6">
//       <div className="mb-1 text-sm text-gray-500">{title}</div>
//       <div className="mb-2 text-3xl font-semibold">{value}</div>
//       <div className="text-xs text-teal-600">{meta}</div>
//     </div>
//   )
// }















import React from 'react'
import { useState } from 'react'
import { Search, Plus, MoreVertical, Building2, Users, BookOpen, Calendar, Upload, Download } from 'lucide-react'
import { Modal } from '../../components/superadmin/Ui'

const tenants = [
  { id: 1, name: 'Bright Minds Academy', plan: 'Pro Plan', users: 4230, courses: 142, revenue: '₹3.2L', status: 'active' },
  { id: 2, name: 'FuturePrep Center', plan: 'Enterprise', users: 8380, courses: 436, revenue: '₹6.8L', status: 'active' },
  { id: 3, name: 'LearnNest Studio', plan: 'Basic Plan', users: 880, courses: 54, revenue: '₹45K', status: 'review' },
  { id: 4, name: 'SkillSpring Kids', plan: 'Pro Plan', users: 2340, courses: 128, revenue: '₹1.8L', status: 'inactive' },
]

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
    variant === 'active'
      ? 'bg-[#2dd4bf] text-[#023b33]'
      : variant === 'review'
        ? 'bg-[#ffd966] text-[#4b2e00]'
        : variant === 'inactive'
          ? 'bg-[#f1f5f9] text-[#94a3b8]'
          : 'bg-[#f1f5f9] text-[#0f172a]'

  return <span className={`inline-flex h-[28px] items-center px-[10px] rounded-[12px] text-[12px] font-medium ${style}`}>{children}</span>
}

export default function SuperAdminTenantManagement() {
  const [query, setQuery] = useState('')
  const [showAdd, setShowAdd] = useState(false)
  const rows = tenants.filter((tenant) => tenant.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="min-h-full bg-[#F7FAFD]">
      {/* Header */}
      <header className="flex h-[76px] items-center justify-between border-b border-black/[0.08] bg-white px-[28px]">
        <div className="relative shrink-0">
          <div className="flex flex-col font-medium h-[16px] justify-center leading-[0] text-[#94a3b8] text-[13px]">
            Super admin panel
          </div>
          <div className="flex flex-col font-bold h-[29px] justify-center leading-[0] text-[#0f172a] text-[24px]">
            Tenant Management
          </div>
        </div>

        <div className="flex items-center gap-[12px]">
          <div className="bg-white border border-black/[0.08] flex items-center gap-[10px] h-[40px] min-w-[280px] px-[15px] py-[0.25px] relative rounded-[6px]">
            <div className="relative shrink-0 size-[18px] flex items-center justify-center">
              <div className="absolute inset-[0] flex items-center justify-center">
                <Search className="h-[18px] w-[18px] text-[#94a3b8]" />
              </div>
            </div>
            <div className="flex flex-col font-normal h-[17px] justify-center leading-[0] text-[#94a3b8] text-[14px]">
              Search tenants by name...
            </div>
          </div>

          <div className="bg-[#e8f5ff] border border-black/[0.08] flex items-center gap-[8px] h-[40px] justify-center px-[17px] py-[0.25px] rounded-[6px] shrink-0">
            <Download className="h-[18px] w-[18px] text-[#0f172a]" />
            <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">
              Export
            </div>
          </div>

          <button
            onClick={() => setShowAdd(true)}
            className="bg-[#5b3df6] flex items-center gap-[8px] h-[40px] justify-center px-[16px] rounded-[6px] shrink-0"
          >
            <Plus className="h-[18px] w-[18px] text-white" />
            <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-white text-[14px]">
              Add Tenant
            </div>
          </button>
        </div>
      </header>

      <div className="bg-gradient-to-b flex flex-col from-[#f6f8fa] gap-[24px] h-full p-[28px] to-[#f7fcff]">
        {/* Hero Section */}
        <section className="border border-black/[0.08] border-solid content-stretch flex flex-col items-start pb-[23px] pt-[25px] px-[25px] relative rounded-[8px] shrink-0 w-full bg-gradient-to-br from-white to-[#e8f5ff]">
          <div className="flex flex-col gap-[11px] items-start relative shrink-0">
            <div className="bg-[#ffd966] flex items-center px-[10px] py-[6.5px] rounded-[12px] shrink-0">
              <div className="flex flex-col font-medium h-[15px] justify-center leading-[0] text-[#4b2e00] text-[12px]">
                Tenant management overview
              </div>
            </div>

            <div className="flex flex-col font-bold h-[31.59px] justify-center leading-[0] text-[#0f172a] text-[28px]">
              Manage all client organizations and subscriptions
            </div>

            <div className="flex flex-col font-normal h-[17px] justify-center leading-[0] text-[#94a3b8] text-[14px]">
              View, add, and manage tenant organizations across the platform.
            </div>
          </div>

          <div className="mt-4 flex items-center gap-[12px]">
            <button
              onClick={() => setShowAdd(true)}
              className="bg-[#5b3df6] flex items-center gap-[8px] h-[40px] justify-center px-[16px] rounded-[6px] shrink-0"
            >
              <Plus className="h-[18px] w-[18px] text-white" />
              <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-white text-[14px]">
                Add Tenant
              </div>
            </button>
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
            title="Total Tenants" 
            value="128" 
            meta="+12 this month" 
            icon={<Building2 className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
          <StatCard 
            title="Active Tenants" 
            value="112" 
            meta="87.5% of total" 
            icon={<Building2 className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
          <StatCard 
            title="Under Review" 
            value="8" 
            meta="Pending approval" 
            icon={<Building2 className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
          <StatCard 
            title="Inactive" 
            value="8" 
            meta="6.25% of total" 
            icon={<Building2 className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
        </div>

        {/* Tenants Table */}
        <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-[4px]">
              <div className="font-bold text-[18px] text-[#0f172a]">All Tenants</div>
              <div className="text-[13px] text-[#94a3b8]">Manage all client organizations across the platform</div>
            </div>
            <div className="bg-[#e8f5ff] border border-black/[0.08] flex items-center gap-[8px] h-[40px] justify-center px-[17px] py-[0.25px] rounded-[6px] shrink-0">
              <Upload className="h-[18px] w-[18px] text-[#5b3df6]" />
              <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">
                Bulk Import
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#94a3b8]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tenants by name..."
              className="w-full border border-black/[0.08] rounded-[6px] py-[10px] pl-[38px] pr-[15px] text-[14px] focus:outline-none focus:border-[#5b3df6]"
            />
          </div>

          {/* Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-black/[0.08]">
                <tr>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Tenant</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Plan</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Users</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Courses</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Revenue</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Status</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Joined</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((tenant, idx) => (
                  <tr key={tenant.id} className={`border-b border-black/[0.08] ${idx === rows.length - 1 ? 'border-b-0' : ''}`}>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-[12px]">
                        <div className="bg-[#e8f5ff] flex items-center justify-center rounded-[6px] shrink-0 size-[40px]">
                          <Building2 className="h-[18px] w-[18px] text-[#5b3df6]" />
                        </div>
                        <span className="font-semibold text-[14px] text-[#0f172a]">{tenant.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-[14px] text-[#0f172a]">{tenant.plan}</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-[8px]">
                        <Users className="h-[16px] w-[16px] text-[#94a3b8]" />
                        <span className="text-[14px] text-[#0f172a]">{tenant.users.toLocaleString()}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-[8px]">
                        <BookOpen className="h-[16px] w-[16px] text-[#94a3b8]" />
                        <span className="text-[14px] text-[#0f172a]">{tenant.courses}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 font-semibold text-[14px] text-[#0f172a]">{tenant.revenue}</td>
                    <td className="px-4 py-4">
                      <Pill variant={tenant.status}>
                        {tenant.status === 'active' ? 'Active' : tenant.status === 'review' ? 'Review' : 'Inactive'}
                      </Pill>
                    </td>
                    <td className="px-4 py-4 text-[14px] text-[#94a3b8]">2025</td>
                    <td className="px-4 py-4">
                      <button className="border border-black/[0.08] flex h-[36px] w-[36px] items-center justify-center rounded-[6px] hover:bg-[#f1f5f9]">
                        <MoreVertical className="h-[16px] w-[16px] text-[#94a3b8]" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Tenant Modal */}
      <Modal open={showAdd} onClose={() => setShowAdd(false)} title="Add New Tenant" description="Create a new tenant organization">
        <div className="space-y-[12px]">
          <input 
            className="w-full border border-black/[0.08] rounded-[6px] px-[15px] py-[10px] text-[14px] focus:outline-none focus:border-[#5b3df6]" 
            placeholder="Tenant name" 
          />
          <input 
            className="w-full border border-black/[0.08] rounded-[6px] px-[15px] py-[10px] text-[14px] focus:outline-none focus:border-[#5b3df6]" 
            placeholder="Contact email" 
          />
          <select className="w-full border border-black/[0.08] rounded-[6px] px-[15px] py-[10px] text-[14px] focus:outline-none focus:border-[#5b3df6]">
            <option>Select Plan</option>
            <option>Basic Plan</option>
            <option>Pro Plan</option>
            <option>Enterprise</option>
          </select>
          <button className="bg-[#5b3df6] rounded-[6px] px-[16px] py-[10px] text-[14px] font-medium text-white w-full">
            Create Tenant
          </button>
        </div>
      </Modal>
    </div>
  )
}
