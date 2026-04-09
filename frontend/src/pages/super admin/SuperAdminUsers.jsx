// import React from 'react'
// import { useState } from 'react'
// import { Search, Shield, ShieldOff } from 'lucide-react'
// import { Modal } from '../../components/superadmin/Ui'

// const userList = [
//   { id: 1, name: 'Daniel Ross', tenant: 'Bright Minds Academy', role: 'Instructor', status: 'active', email: 'daniel@example.com', lastActive: '2 hours ago' },
//   { id: 2, name: 'Nisha Patel', tenant: 'LearnNest Studio', role: 'Student', status: 'active', email: 'nisha@example.com', lastActive: '5 min ago' },
//   { id: 3, name: 'Carlos Dega', tenant: 'FuturePrep Center', role: 'Admin', status: 'active', email: 'carlos@example.com', lastActive: '1 day ago' },
//   { id: 4, name: 'Amara Brown', tenant: 'SkillSpring Kids', role: 'Student', status: 'blocked', email: 'amara@example.com', lastActive: '2 weeks ago' },
// ]

// export default function SuperAdminUsers() {
//   const [query, setQuery] = useState('')
//   const [selectedUser, setSelectedUser] = useState(null)
//   const [users, setUsers] = useState(userList)
//   const rows = users.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()))

//   const toggleStatus = (id) => {
//     setUsers((prev) =>
//       prev.map((u) => (u.id === id ? { ...u, status: u.status === 'active' ? 'blocked' : 'active' } : u))
//     )
//   }

//   return (
//     <div>
//       <header className="mb-8 border-b border-gray-200 bg-white px-8 py-4">
//         <h1 className="text-2xl font-semibold">User Management</h1>
//         <p className="mt-1 text-sm text-gray-500">View and moderate users across all tenants</p>
//       </header>

//       <div className="mb-8 grid grid-cols-4 gap-6">
//         <MiniStat title="Total Users" value="54,832" meta="+5.4% growth" />
//         <MiniStat title="Active Users" value="52,156" meta="95.1% of total" />
//         <MiniStat title="Blocked Users" value="2,676" meta="4.9% of total" />
//         <MiniStat title="New This Month" value="3,482" meta="Above target" />
//       </div>

//       <div className="mb-8 rounded-xl border border-gray-200 bg-white p-6">
//         <div className="relative">
//           <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
//           <input
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Search by name, email, or tenant..."
//             className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4"
//           />
//         </div>
//       </div>

//       <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
//         <table className="w-full">
//           <thead className="bg-gray-50">
//             <tr>
//               <Th>User</Th>
//               <Th>Tenant</Th>
//               <Th>Role</Th>
//               <Th>Status</Th>
//               <Th>Last Active</Th>
//               <Th>Actions</Th>
//             </tr>
//           </thead>
//           <tbody>
//             {rows.map((user) => (
//               <tr key={user.id} className="border-t border-gray-100">
//                 <Td>
//                   <div className="font-medium">{user.name}</div>
//                   <div className="text-xs text-gray-500">{user.email}</div>
//                 </Td>
//                 <Td>{user.tenant}</Td>
//                 <Td>{user.role}</Td>
//                 <Td>
//                   <span className={`rounded-full px-3 py-1 text-xs ${
//                     user.status === 'active' ? 'bg-teal-100 text-teal-700' : 'bg-red-100 text-red-700'
//                   }`}>
//                     {user.status}
//                   </span>
//                 </Td>
//                 <Td className="text-gray-500">{user.lastActive}</Td>
//                 <Td>
//                   <div className="flex items-center gap-2">
//                     <button
//                       onClick={() => toggleStatus(user.id)}
//                       className={`rounded p-2 ${user.status === 'active' ? 'text-red-600' : 'text-green-600'}`}
//                     >
//                       {user.status === 'active' ? <ShieldOff className="h-4 w-4" /> : <Shield className="h-4 w-4" />}
//                     </button>
//                     <button onClick={() => setSelectedUser(user)} className="rounded border border-gray-300 px-3 py-1 text-sm">
//                       View
//                     </button>
//                   </div>
//                 </Td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <Modal
//         open={Boolean(selectedUser)}
//         onClose={() => setSelectedUser(null)}
//         title="User Details"
//         description="View and manage user details"
//       >
//         {selectedUser ? (
//           <div className="space-y-2 text-sm">
//             <div><strong>Name:</strong> {selectedUser.name}</div>
//             <div><strong>Email:</strong> {selectedUser.email}</div>
//             <div><strong>Tenant:</strong> {selectedUser.tenant}</div>
//             <div><strong>Role:</strong> {selectedUser.role}</div>
//             <div><strong>Status:</strong> {selectedUser.status}</div>
//           </div>
//         ) : null}
//       </Modal>
//     </div>
//   )
// }

// function Th({ children }) {
//   return <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">{children}</th>
// }
// function Td({ children }) {
//   return <td className="px-6 py-4 text-sm">{children}</td>
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
import { useEffect, useMemo, useState } from 'react'
import { Search, Shield, ShieldOff, Users, Download, Calendar, Plus, Upload, Eye } from 'lucide-react'
import { Modal } from '../../components/superadmin/Ui'
import { api } from '../../lib/api'

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
      : variant === 'blocked'
        ? 'bg-[#ffd966] text-[#4b2e00]'
        : 'bg-[#f1f5f9] text-[#0f172a]'

  return <span className={`inline-flex h-[28px] items-center px-[10px] rounded-[12px] text-[12px] font-medium ${style}`}>{children}</span>
}

export default function SuperAdminUsers() {
  const [query, setQuery] = useState('')
  const [selectedUser, setSelectedUser] = useState(null)
  const [users, setUsers] = useState([])
  const [tenantMap, setTenantMap] = useState({})
  const [page, setPage] = useState(0)
  const limit = 20
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [busyUserId, setBusyUserId] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    setError('')
    Promise.all([
      api(`/lms/users?skip=${page * limit}&limit=${limit}&q=${encodeURIComponent(query)}`).catch(() => ({ items: [], total: 0 })),
      api('/lms/tenants').catch(() => ({ items: [] })),
    ]).then(([userRes, tenantRes]) => {
      const userRows = userRes.items || []
      setTotal(userRes.total || 0)
      setUsers(userRows.map((u) => ({
        id: u._id,
        name: u.full_name || 'User',
        tenant: u.tenant_id || '-',
        role: (u.role || '').replace('_', ' '),
        role_key: String(u.role || '').toLowerCase(),
        status: u.is_active ? 'active' : 'blocked',
        email: u.email || '-',
        lastActive: u.created_at ? new Date(u.created_at).toLocaleDateString() : '-',
      })))
      const map = {}
      ;((tenantRes.items || tenantRes) || []).forEach((t) => { map[t._id] = t.name })
      setTenantMap(map)
    }).catch((err) => {
      setError(err?.message || 'Unable to load users')
      setUsers([])
      setTotal(0)
    }).finally(() => setLoading(false))
  }, [page, query])

  const rows = useMemo(() => users, [users])

  const toggleStatus = async (user) => {
    if (!user?.id) return
    if (user.role_key === 'super_admin') {
      setError('Super admin users cannot be blocked from this panel')
      return
    }
    const nextActive = user.status !== 'active'
    try {
      setBusyUserId(user.id)
      setError('')
      await api(`/lms/users/${user.id}`, {
        method: 'PATCH',
        body: JSON.stringify({ is_active: nextActive }),
      })
      setUsers((prev) =>
        prev.map((u) => (u.id === user.id ? { ...u, status: nextActive ? 'active' : 'blocked' } : u))
      )
      setSelectedUser((prev) => {
        if (!prev || prev.id !== user.id) return prev
        return { ...prev, status: nextActive ? 'active' : 'blocked' }
      })
    } catch (err) {
      setError(err?.message || 'Unable to update user status')
    } finally {
      setBusyUserId('')
    }
  }

  // Get avatar initials
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  return (
    <div className="min-h-full bg-[#F7FAFD]">
      {/* Header */}
      <header className="flex h-[76px] items-center justify-between border-b border-black/[0.08] bg-white px-[28px]">
        <div className="relative shrink-0">
          <div className="flex flex-col font-medium h-[16px] justify-center leading-[0] text-[#94a3b8] text-[13px]">
            Super admin panel
          </div>
          <div className="flex flex-col font-bold h-[29px] justify-center leading-[0] text-[#0f172a] text-[24px]">
            User Management
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
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search users by name, email, or tenant..."
                className="w-full bg-transparent text-[14px] text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none"
              />
            </div>
          </div>

          <div className="bg-[#e8f5ff] border border-black/[0.08] flex items-center gap-[8px] h-[40px] justify-center px-[17px] py-[0.25px] rounded-[6px] shrink-0">
            <Download className="h-[18px] w-[18px] text-[#0f172a]" />
            <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">
              Export Users
            </div>
          </div>

          <div className="bg-[#5b3df6] flex items-center gap-[8px] h-[40px] justify-center px-[16px] rounded-[6px] shrink-0">
            <Plus className="h-[18px] w-[18px] text-white" />
            <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-white text-[14px]">
              Add User
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
                User management overview
              </div>
            </div>

            <div className="flex flex-col font-bold h-[31.59px] justify-center leading-[0] text-[#0f172a] text-[28px]">
              View and moderate users across all tenants
            </div>

            <div className="flex flex-col font-normal h-[17px] justify-center leading-[0] text-[#94a3b8] text-[14px]">
              Monitor user activity, manage access, and ensure platform security.
            </div>
          </div>

          <div className="mt-4 flex items-center gap-[12px]">
            <div className="bg-[#5b3df6] flex items-center gap-[8px] h-[40px] justify-center px-[16px] rounded-[6px] shrink-0">
              <Users className="h-[18px] w-[18px] text-white" />
              <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-white text-[14px]">
                Bulk Import
              </div>
            </div>
            <div className="border border-black/[0.08] flex gap-[8px] h-[40px] items-center justify-center px-[17px] py-[0.25px] rounded-[6px] shrink-0 bg-white">
              <Calendar className="h-[18px] w-[18px] text-[#94a3b8]" />
              <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">
                This month
              </div>
            </div>
          </div>
        </section>

        {/* Stats row */}
        <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))]">
          <StatCard 
            title="Total Users" 
            value={String(total || users.length)} 
            meta="Live total" 
            icon={<Users className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
          <StatCard 
            title="Active Users" 
            value={String(users.filter((u) => u.status === 'active').length)} 
            meta="Currently active" 
            icon={<Users className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
          <StatCard 
            title="Blocked Users" 
            value={String(users.filter((u) => u.status !== 'active').length)} 
            meta="Blocked/inactive" 
            icon={<ShieldOff className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
          <StatCard 
            title="New This Month" 
            value={String(users.length)} 
            meta="Synced users" 
            icon={<Users className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
        </div>

        {error ? <p className="text-[13px] text-red-600">{error}</p> : null}

        {/* Users Table */}
        <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-[4px]">
              <div className="font-bold text-[18px] text-[#0f172a]">All Users</div>
              <div className="text-[13px] text-[#94a3b8]">View and manage users across all tenant organizations</div>
            </div>
            <div className="bg-[#e8f5ff] border border-black/[0.08] flex items-center gap-[8px] h-[40px] justify-center px-[17px] py-[0.25px] rounded-[6px] shrink-0">
              <Upload className="h-[18px] w-[18px] text-[#5b3df6]" />
              <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">
                Import CSV
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#94a3b8]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, email, or tenant..."
              className="w-full border border-black/[0.08] rounded-[6px] py-[10px] pl-[38px] pr-[15px] text-[14px] focus:outline-none focus:border-[#5b3df6]"
            />
          </div>

          {/* Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-black/[0.08]">
                <tr>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">User</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Tenant</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Role</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Status</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Last Active</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-6 text-center text-[13px] text-[#94a3b8]">Loading users...</td>
                  </tr>
                ) : null}
                {rows.map((user, idx) => (
                  <tr key={user.id} className={`border-b border-black/[0.08] ${idx === rows.length - 1 ? 'border-b-0' : ''}`}>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-[12px]">
                        <div className="bg-[#e8f5ff] flex h-[40px] w-[40px] items-center justify-center rounded-[6px] text-[14px] font-semibold text-[#5b3df6]">
                          {getInitials(user.name)}
                        </div>
                        <div>
                          <div className="font-semibold text-[14px] text-[#0f172a]">{user.name}</div>
                          <div className="text-[12px] text-[#94a3b8] mt-[2px]">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-[14px] text-[#0f172a]">{tenantMap[user.tenant] || user.tenant}</td>
                    <td className="px-4 py-4">
                      <span className="text-[14px] text-[#0f172a]">{user.role}</span>
                    </td>
                    <td className="px-4 py-4">
                      <Pill variant={user.status}>
                        {user.status === 'active' ? 'Active' : 'Blocked'}
                      </Pill>
                    </td>
                    <td className="px-4 py-4 text-[14px] text-[#94a3b8]">{user.lastActive}</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-[8px]">
                        <button
                          onClick={() => toggleStatus(user)}
                          disabled={busyUserId === user.id || user.role_key === 'super_admin'}
                          className={`border border-black/[0.08] flex h-[36px] w-[36px] items-center justify-center rounded-[6px] hover:bg-[#f1f5f9] transition-colors ${
                            user.status === 'active' ? 'text-[#ffd966]' : 'text-[#2dd4bf]'
                          } disabled:opacity-50`}
                          title={
                            user.role_key === 'super_admin'
                              ? 'Super admin cannot be blocked'
                              : user.status === 'active'
                                ? 'Block User'
                                : 'Unblock User'
                          }
                        >
                          {user.status === 'active' ? <ShieldOff className="h-[16px] w-[16px]" /> : <Shield className="h-[16px] w-[16px]" />}
                        </button>
                        <button 
                          onClick={() => setSelectedUser(user)} 
                          className="border border-black/[0.08] flex h-[36px] w-[36px] items-center justify-center rounded-[6px] hover:bg-[#f1f5f9] transition-colors"
                          title="View Details"
                        >
                          <Eye className="h-[16px] w-[16px] text-[#94a3b8]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {!loading && rows.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-6 text-center text-[13px] text-[#94a3b8]">No users found.</td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {rows.length === 0 && (
            <div className="w-full py-[48px] text-center">
              <div className="text-[14px] text-[#94a3b8]">No users found matching your search.</div>
            </div>
          )}
          <div className="w-full flex items-center justify-between pt-2">
            <span className="text-xs text-[#94a3b8]">{Math.min(total, page * limit + 1)}-{Math.min(total, (page + 1) * limit)} of {total}</span>
            <div className="flex gap-2">
              <button onClick={() => setPage((p) => Math.max(0, p - 1))} className="border border-black/[0.08] rounded-[6px] px-3 py-1 text-xs">Prev</button>
              <button onClick={() => setPage((p) => ((p + 1) * limit < total ? p + 1 : p))} className="border border-black/[0.08] rounded-[6px] px-3 py-1 text-xs">Next</button>
            </div>
          </div>
        </div>

        {/* User Activity Summary */}
        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-2">
          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex flex-col gap-[4px] w-full">
              <div className="font-bold text-[18px] text-[#0f172a]">User Activity</div>
              <div className="text-[13px] text-[#94a3b8]">Recent user actions and engagement metrics</div>
            </div>
            <div className="flex flex-col w-full gap-[16px]">
              <div className="flex items-center justify-between pb-[12px] border-b border-black/[0.08]">
                <div>
                  <div className="font-semibold text-[14px] text-[#0f172a]">Daily Active Users</div>
                  <div className="text-[12px] text-[#94a3b8]">Average over last 7 days</div>
                </div>
                <div className="text-[20px] font-bold text-[#0f172a]">12,847</div>
              </div>
              <div className="flex items-center justify-between pb-[12px] border-b border-black/[0.08]">
                <div>
                  <div className="font-semibold text-[14px] text-[#0f172a]">Weekly Active Users</div>
                  <div className="text-[12px] text-[#94a3b8]">Last 7 days</div>
                </div>
                <div className="text-[20px] font-bold text-[#0f172a]">38,421</div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-[14px] text-[#0f172a]">Monthly Active Users</div>
                  <div className="text-[12px] text-[#94a3b8]">Last 30 days</div>
                </div>
                <div className="text-[20px] font-bold text-[#0f172a]">52,156</div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex flex-col gap-[4px] w-full">
              <div className="font-bold text-[18px] text-[#0f172a]">Role Distribution</div>
              <div className="text-[13px] text-[#94a3b8]">Users by role across all tenants</div>
            </div>
            <div className="flex flex-col w-full gap-[16px]">
              <div>
                <div className="flex justify-between mb-[8px]">
                  <span className="text-[14px] font-medium text-[#0f172a]">Students</span>
                  <span className="text-[14px] text-[#94a3b8]">42,156</span>
                </div>
                <div className="h-[8px] rounded-full bg-[#f1f5f9]">
                  <div className="h-[8px] rounded-full bg-gradient-to-r from-[#5b3df6] to-[#2dd4bf]" style={{ width: '77%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-[8px]">
                  <span className="text-[14px] font-medium text-[#0f172a]">Instructors</span>
                  <span className="text-[14px] text-[#94a3b8]">8,234</span>
                </div>
                <div className="h-[8px] rounded-full bg-[#f1f5f9]">
                  <div className="h-[8px] rounded-full bg-gradient-to-r from-[#5b3df6] to-[#2dd4bf]" style={{ width: '15%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-[8px]">
                  <span className="text-[14px] font-medium text-[#0f172a]">Admins</span>
                  <span className="text-[14px] text-[#94a3b8]">4,442</span>
                </div>
                <div className="h-[8px] rounded-full bg-[#f1f5f9]">
                  <div className="h-[8px] rounded-full bg-gradient-to-r from-[#5b3df6] to-[#2dd4bf]" style={{ width: '8%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User Details Modal */}
      <Modal
        open={Boolean(selectedUser)}
        onClose={() => setSelectedUser(null)}
        title="User Details"
        description="View and manage user information"
      >
        {selectedUser ? (
          <div className="space-y-[16px]">
            <div className="flex items-center gap-[12px] pb-[12px] border-b border-black/[0.08]">
              <div className="bg-[#e8f5ff] flex h-[48px] w-[48px] items-center justify-center rounded-[8px] text-[18px] font-semibold text-[#5b3df6]">
                {getInitials(selectedUser.name)}
              </div>
              <div>
                <div className="font-bold text-[16px] text-[#0f172a]">{selectedUser.name}</div>
                <div className="text-[13px] text-[#94a3b8]">{selectedUser.email}</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[12px]">
              <div>
                <div className="text-[12px] text-[#94a3b8] mb-[4px]">Tenant</div>
                <div className="text-[14px] font-medium text-[#0f172a]">{tenantMap[selectedUser.tenant] || selectedUser.tenant}</div>
              </div>
              <div>
                <div className="text-[12px] text-[#94a3b8] mb-[4px]">Role</div>
                <div className="text-[14px] font-medium text-[#0f172a]">{selectedUser.role}</div>
              </div>
              <div>
                <div className="text-[12px] text-[#94a3b8] mb-[4px]">Status</div>
                <div className="mt-[4px]">
                  <Pill variant={selectedUser.status}>
                    {selectedUser.status === 'active' ? 'Active' : 'Blocked'}
                  </Pill>
                </div>
              </div>
              <div>
                <div className="text-[12px] text-[#94a3b8] mb-[4px]">Last Active</div>
                <div className="text-[14px] font-medium text-[#0f172a]">{selectedUser.lastActive}</div>
              </div>
            </div>
            <div className="flex gap-[12px] pt-[12px] border-t border-black/[0.08]">
              <button
                onClick={() => {
                  toggleStatus(selectedUser.id)
                  setSelectedUser(null)
                }}
                className={`flex-1 h-[40px] rounded-[6px] text-[14px] font-medium ${
                  selectedUser.status === 'active'
                    ? 'bg-[#ffd966] text-[#4b2e00]'
                    : 'bg-[#2dd4bf] text-[#023b33]'
                }`}
              >
                {selectedUser.status === 'active' ? 'Block User' : 'Unblock User'}
              </button>
              <button
                onClick={() => setSelectedUser(null)}
                className="flex-1 border border-black/[0.08] h-[40px] rounded-[6px] text-[14px] font-medium text-[#0f172a]"
              >
                Close
              </button>
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  )
}
