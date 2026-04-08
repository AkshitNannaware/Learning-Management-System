import React, { useEffect, useMemo, useState } from 'react'
import { Search, BookOpen } from 'lucide-react'
import { api } from '../../lib/api'

export default function StudentELibrary() {
  const [items, setItems] = useState([])
  const [q, setQ] = useState('')

  useEffect(() => {
    api('/lms/library-resources?limit=300').then((r) => setItems(r.items || [])).catch(() => {})
  }, [])

  const filtered = useMemo(() => items.filter((i) => (i.title || '').toLowerCase().includes(q.toLowerCase())), [items, q])

  return (
    <div className="min-h-full bg-[#F7FAFD] p-4 sm:p-6">
      <div className="rounded-[8px] border border-black/[0.08] bg-white p-4">
        <h1 className="text-[24px] font-bold text-[#0f172a]">Student E-Library</h1>
        <p className="text-[13px] text-[#94a3b8]">Published resources from backend</p>
        <div className="mt-3 flex h-10 items-center gap-2 rounded-[8px] border border-black/[0.08] px-3">
          <Search className="h-4 w-4 text-[#94a3b8]" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search resource..." className="w-full bg-transparent text-[13px] outline-none" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((r) => (
          <div key={r._id} className="rounded-[10px] border border-black/[0.08] bg-white p-4">
            <div className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-[#5b3df6]" /><h3 className="font-semibold">{r.title}</h3></div>
            <p className="mt-2 text-[12px] text-[#64748b]">Grade: {r.grade || '-'}</p>
            <p className="text-[12px] text-[#64748b]">Format: {r.format || '-'}</p>
            <p className="text-[12px] text-[#64748b]">Published: {r.created_at ? new Date(r.created_at).toLocaleString() : '-'}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
