import React, { useEffect, useMemo, useState } from 'react'
import { Video, Search, CalendarDays, Clock, Users } from 'lucide-react'
import { api } from '../../lib/api'

const FILTERS = ['All', 'Upcoming', 'Completed', 'Cancelled']

export default function InstructorOnlineClasses() {
  const [classes, setClasses] = useState([])
  const [q, setQ] = useState('')
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    api('/lms/live-classes?limit=300').then((r) => setClasses(r.items || [])).catch(() => {})
  }, [])

  const filtered = useMemo(() => {
    return classes.filter((c) => {
      const status = (c.status || 'upcoming').toLowerCase()
      const matchFilter = filter === 'All' || status === filter.toLowerCase()
      const matchQ = (c.title || '').toLowerCase().includes(q.toLowerCase())
      return matchFilter && matchQ
    })
  }, [classes, filter, q])

  return (
    <div className="min-h-full bg-[#F7FAFD] p-4 sm:p-6">
      <div className="rounded-[8px] border border-black/[0.08] bg-white p-4">
        <h1 className="text-[24px] font-bold text-[#0f172a]">Instructor Online Classes</h1>
        <p className="text-[13px] text-[#94a3b8]">Assigned live classes from backend</p>
      </div>

      <div className="mt-4 rounded-[8px] border border-black/[0.08] bg-white p-4">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="flex h-10 flex-1 items-center gap-2 rounded-[8px] border border-black/[0.08] px-3">
            <Search className="h-4 w-4 text-[#94a3b8]" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search class title..." className="w-full bg-transparent text-[13px] outline-none" />
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button key={f} onClick={() => setFilter(f)} className={`h-9 rounded-[8px] px-3 text-[12px] font-medium ${filter === f ? 'bg-[#5b3df6] text-white' : 'border border-black/[0.08] bg-white'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((c) => (
          <div key={c._id} className="rounded-[10px] border border-black/[0.08] bg-white p-4">
            <div className="flex items-center gap-2"><Video className="h-4 w-4 text-[#5b3df6]" /><h3 className="font-semibold">{c.title}</h3></div>
            <div className="mt-2 space-y-1 text-[12px] text-[#64748b]">
              <div className="flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> {c.start_at ? new Date(c.start_at).toLocaleString() : '-'}</div>
              <div className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {c.duration_minutes || 60} mins</div>
              <div className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> Status: {c.status || 'upcoming'}</div>
              {c.join_url && (
                <a className="text-[#5b3df6] underline" href={c.join_url} target="_blank" rel="noreferrer">
                  Join Link
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
