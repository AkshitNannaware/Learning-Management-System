// import React from 'react'
// import { NavLink, Outlet } from 'react-router-dom'
// import {
//   Shield,
//   LayoutDashboard,
//   Building2,
//   DollarSign,
//   Users,
//   FileText,
//   CreditCard,
//   Settings,
// } from 'lucide-react'

// const links = [
//   { to: '/superadmin', label: 'Overview', end: true, icon: LayoutDashboard },
//   { to: '/superadmin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
//   { to: '/superadmin/tenant-management', label: 'Tenant Management', icon: Building2 },
//   { to: '/superadmin/revenue', label: 'Revenue', icon: DollarSign },
//   { to: '/superadmin/user-management', label: 'User Management', icon: Users },
//   { to: '/superadmin/reports', label: 'Reports', icon: FileText },
//   { to: '/superadmin/plans-billing', label: 'Plans & Billing', icon: CreditCard },
//   { to: '/superadmin/platform-settings', label: 'Platform Settings', icon: Settings },
// ]

// export default function SuperAdminLayout() {
//   return (
//     <div className="flex h-screen min-w-[1280px] bg-gray-50 text-gray-900">
//       <aside className="w-[180px] border-r border-gray-200 bg-white">
//         <div className="border-b border-gray-200 p-4">
//           <div className="flex items-center gap-2">
//             <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-lg font-bold text-indigo-600">
//               <Shield className="h-5 w-5" />
//             </div>
//             <div>
//               <div className="text-sm font-semibold">LMS</div>
//               <div className="text-xs text-gray-500">Super Admin</div>
//             </div>
//           </div>
//         </div>

//         <nav className="space-y-1 p-3">
//           <div className="mb-1 px-3 text-xs text-gray-500">Overview</div>
//           {links.slice(0, 1).map((link) => (
//             <NavLink
//               key={link.to}
//               to={link.to}
//               end={link.end}
//               className={({ isActive }) =>
//                 `flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm ${
//                   isActive
//                     ? 'bg-indigo-50 font-semibold text-indigo-600'
//                     : 'text-gray-700 hover:bg-gray-100'
//                 }`
//               }
//             >
//               <link.icon className="h-4 w-4" />
//               {link.label}
//             </NavLink>
//           ))}

//           {links.slice(1, 6).map((link) => (
//             <NavLink
//               key={link.to}
//               to={link.to}
//               end={link.end}
//               className={({ isActive }) =>
//                 `flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm ${
//                   isActive
//                     ? 'bg-indigo-50 font-semibold text-indigo-600'
//                     : 'text-gray-700 hover:bg-gray-100'
//                 }`
//               }
//             >
//               <link.icon className="h-4 w-4" />
//               {link.label}
//             </NavLink>
//           ))}

//           <div className="mb-1 mt-3 px-3 text-xs text-gray-500">System</div>
//           {links.slice(6).map((link) => (
//             <NavLink
//               key={link.to}
//               to={link.to}
//               end={link.end}
//               className={({ isActive }) =>
//                 `flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm ${
//                   isActive
//                     ? 'bg-indigo-50 font-semibold text-indigo-600'
//                     : 'text-gray-700 hover:bg-gray-100'
//                 }`
//               }
//             >
//               <link.icon className="h-4 w-4" />
//               {link.label}
//             </NavLink>
//           ))}
//         </nav>
//       </aside>
//       <main className="flex-1 overflow-auto">
//         <div className="p-8">
//           <Outlet />
//         </div>
//       </main>
//     </div>
//   )
// }















import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {
  Shield,
  LayoutDashboard,
  Building2,
  DollarSign,
  Users,
  FileText,
  CreditCard,
  Settings,
} from 'lucide-react'

const links = [
  { to: '/superadmin', label: 'Overview', end: true, icon: LayoutDashboard },
  { to: '/superadmin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/superadmin/tenant-management', label: 'Tenant Management', icon: Building2 },
  { to: '/superadmin/revenue', label: 'Revenue', icon: DollarSign },
  { to: '/superadmin/user-management', label: 'User Management', icon: Users },
  { to: '/superadmin/reports', label: 'Reports', icon: FileText },
  { to: '/superadmin/plans-billing', label: 'Plans & Billing', icon: CreditCard },
  { to: '/superadmin/platform-settings', label: 'Platform Settings', icon: Settings },
]

export default function SuperAdminLayout() {
  return (
    <div className="flex h-screen min-w-[1280px] bg-[#f6f8fa] text-[#0f172a]">
      <aside className="flex w-[240px] shrink-0 flex-col border-r border-black/[0.08] bg-white">
        <div className="flex items-center gap-3 px-[18px] pt-4 pb-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#ede7ff]">
            <Shield className="h-5 w-5 text-[#5b3df6]" strokeWidth={2} />
          </div>
          <div>
            <div className="text-xl font-bold leading-[22px]">LMS</div>
            <div className="text-[13px] text-[#94a3b8]">Super Admin</div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-[18px]">
          <div className="px-2.5 pb-1 text-xs font-semibold text-[#94a3b8]">Overview</div>
          {links.slice(0, 1).map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `flex items-center gap-[2px] rounded-md px-3 py-2.5 text-[13.5px] font-medium transition-colors ${
                  isActive
                    ? 'bg-[#ede7ff] text-[#5b3df6]'
                    : 'text-[#0f172a] hover:bg-slate-100'
                }`
              }
            >
              <link.icon className="h-5 w-5 shrink-0 pr-1" strokeWidth={2} />
              {link.label}
            </NavLink>
          ))}

          <div className="px-2.5 pb-1 pt-2 text-xs font-semibold text-[#94a3b8]">Management</div>
          {links.slice(1, 6).map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `flex items-center gap-[2px] rounded-md px-3 py-2.5 text-[13.5px] font-medium transition-colors ${
                  isActive
                    ? 'bg-[#ede7ff] text-[#5b3df6]'
                    : 'text-[#0f172a] hover:bg-slate-100'
                }`
              }
            >
              <link.icon className="h-5 w-5 shrink-0 pr-1" strokeWidth={2} />
              {link.label}
            </NavLink>
          ))}

          <div className="px-2.5 pb-1 pt-2 text-xs font-semibold text-[#94a3b8]">System</div>
          {links.slice(6).map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `flex items-center gap-[1.5px] rounded-md px-3 py-2.5 text-[13.5px] font-medium transition-colors ${
                  isActive
                    ? 'bg-[#ede7ff] text-[#5b3df6]'
                    : 'text-[#0f172a] hover:bg-slate-100'
                }`
              }
            >
              <link.icon className="h-5 w-5 shrink-0 pr-1" strokeWidth={2} />
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="px-[18px] pb-4 pt-4">
          <div className="rounded-lg border border-black/[0.08] bg-[#e8f5ff] p-[17px]">
            <div className="text-sm font-semibold text-[#0f172a]">Platform Overview</div>
            <p className="mt-1 text-[13px] leading-snug text-[#94a3b8]">
              Total active tenants and revenue
            </p>
            <div className="mt-2 h-2.5 w-full overflow-hidden rounded-xl bg-[#f0f4f8]">
              <div className="h-full w-[82%] rounded-xl bg-[#5b3df6]" />
            </div>
            <p className="mt-2 text-[13px] text-[#94a3b8]">82% of quarterly target achieved</p>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}