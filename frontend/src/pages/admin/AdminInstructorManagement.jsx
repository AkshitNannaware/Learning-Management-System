import React, { useEffect, useState } from 'react'
import { UserPlus, Trash2, Users } from 'lucide-react'
import { api } from '../../lib/api'

export default function AdminInstructorManagement() {
  const [users, setUsers] = useState([])
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const load = () => api('/lms/users?role=instructor&limit=200').then((r) => setUsers(r.items || [])).catch(() => {})
  useEffect(() => { load() }, [])

  const create = async () => {
    if (!fullName.trim() || !email.trim() || !password.trim()) return
    await api('/lms/users', {
      method: 'POST',
      body: JSON.stringify({ full_name: fullName.trim(), email: email.trim(), password, role: 'instructor' }),
    }).catch(() => {})
    setFullName('')
    setEmail('')
    setPassword('')
    load()
  }

  const remove = async (id) => {
    await api(`/lms/users/${id}`, { method: 'DELETE' }).catch(() => {})
    load()
  }

  return (
    <div className="min-h-full bg-[#F7FAFD] p-4 sm:p-6">
      <div className="rounded-[8px] border border-black/[0.08] bg-white p-4">
        <h1 className="text-[24px] font-bold text-[#0f172a]">Instructor Management</h1>
        <p className="text-[13px] text-[#94a3b8]">Manage instructors from live backend users API</p>
      </div>

      <div className="mt-5 rounded-[8px] border border-black/[0.08] bg-white p-4">
        <h2 className="text-[16px] font-semibold">Create Instructor</h2>
        <div className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-2">
          <input className="h-10 rounded-[8px] border border-black/[0.08] px-3 text-[13px]" placeholder="Full name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <input className="h-10 rounded-[8px] border border-black/[0.08] px-3 text-[13px]" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="h-10 rounded-[8px] border border-black/[0.08] px-3 text-[13px] md:col-span-2" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={create} className="h-10 rounded-[8px] bg-[#5b3df6] text-[13px] font-semibold text-white md:col-span-2">
            <span className="inline-flex items-center gap-2"><UserPlus className="h-4 w-4" />Create Instructor</span>
          </button>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {users.map((u) => (
          <div key={u._id} className="rounded-[10px] border border-black/[0.08] bg-white p-4">
            <div className="flex items-center gap-2"><Users className="h-4 w-4 text-[#5b3df6]" /><h3 className="font-semibold">{u.full_name || u.email}</h3></div>
            <p className="mt-2 text-[12px] text-[#64748b]">{u.email}</p>
            <p className="mt-1 text-[12px] text-[#64748b]">Status: {u.is_active ? 'Active' : 'Blocked'}</p>
            <button onClick={() => remove(u._id)} className="mt-3 h-9 w-full rounded-[8px] border border-[#fecaca] bg-[#fff1f2] text-[12px] font-semibold text-[#b91c1c]">
              <span className="inline-flex items-center gap-1"><Trash2 className="h-4 w-4" />Delete</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
