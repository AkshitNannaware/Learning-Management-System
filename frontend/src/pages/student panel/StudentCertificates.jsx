import React, { useEffect, useMemo, useState } from 'react'
import { Search, Award, Download } from 'lucide-react'
import { api } from '../../lib/api'

const COURSE_PROGRESS_KEY = 'student-course-progress'
const COURSE_CERTIFICATES_KEY = 'student-course-certificates'

export default function StudentCertificates() {
  const [q, setQ] = useState('')
  const [courses, setCourses] = useState([])
  const [enrolledIds, setEnrolledIds] = useState(new Set())
  const [progressMap, setProgressMap] = useState({})
  const [certMap, setCertMap] = useState({})

  useEffect(() => {
    const p = JSON.parse(localStorage.getItem(COURSE_PROGRESS_KEY) || '{}')
    const c = JSON.parse(localStorage.getItem(COURSE_CERTIFICATES_KEY) || '{}')
    setProgressMap(p)
    setCertMap(c)
    Promise.all([
      api('/lms/enrollments?limit=300').catch(() => ({ items: [] })),
      api('/lms/courses?limit=500').catch(() => ({ items: [] })),
    ]).then(([enr, crs]) => {
      const ids = new Set((enr.items || []).map((x) => x.course_id))
      setEnrolledIds(ids)
      setCourses(crs.items || [])
    })
  }, [])

  const list = useMemo(() => {
    return courses
      .filter((c) => enrolledIds.has(c._id))
      .map((c) => {
        const p = Number(progressMap[c._id]?.progressPct || 0)
        const cert = certMap[c._id]
        const certUrl = typeof cert === 'string' ? cert : cert?.url
        return { ...c, progress: p, certUrl, completed: p >= 100 }
      })
      .filter((c) => c.completed || c.certUrl)
      .filter((c) => (c.title || '').toLowerCase().includes(q.toLowerCase()))
  }, [courses, enrolledIds, progressMap, certMap, q])

  return (
    <div className="min-h-full bg-[#F7FAFD] p-4 sm:p-6">
      <div className="rounded-[8px] border border-black/[0.08] bg-white p-4">
        <h1 className="text-[24px] font-bold text-[#0f172a]">My Certificates</h1>
        <p className="text-[13px] text-[#94a3b8]">Certificates for completed courses</p>
        <div className="mt-3 flex h-10 items-center gap-2 rounded-[8px] border border-black/[0.08] px-3">
          <Search className="h-4 w-4 text-[#94a3b8]" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search certificate..." className="w-full bg-transparent text-[13px] outline-none" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {list.map((c) => (
          <div key={c._id} className="rounded-[10px] border border-black/[0.08] bg-white p-4">
            <div className="flex items-center gap-2"><Award className="h-4 w-4 text-[#5b3df6]" /><h3 className="font-semibold">{c.title}</h3></div>
            <p className="mt-2 text-[12px] text-[#64748b]">Progress: {c.progress}%</p>
            {c.certUrl ? (
              <a href={c.certUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex h-9 w-full items-center justify-center gap-1 rounded-[8px] bg-[#5b3df6] text-[12px] font-semibold text-white">
                <Download className="h-4 w-4" />Download
              </a>
            ) : (
              <button disabled className="mt-3 h-9 w-full rounded-[8px] border border-black/[0.08] text-[12px] font-semibold text-[#94a3b8]">
                Awaiting certificate upload
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
