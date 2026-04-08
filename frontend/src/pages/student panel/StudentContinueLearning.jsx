import React, { useEffect, useMemo, useState } from 'react'
import { PlayCircle, BookOpen } from 'lucide-react'
import { api } from '../../lib/api'

const ENROLLED_COURSES_KEY = 'student-enrolled-courses'
const COURSE_PROGRESS_KEY = 'student-course-progress'

function getId(course) {
  return course?._id || `${course?.title || 'course'}-${course?.mentor || 'mentor'}`
}

export default function StudentContinueLearning() {
  const [courses, setCourses] = useState([])
  const [progressMap, setProgressMap] = useState({})
  const [selectedId, setSelectedId] = useState('')

  useEffect(() => {
    const progress = JSON.parse(localStorage.getItem(COURSE_PROGRESS_KEY) || '{}')
    setProgressMap(progress)
    Promise.all([
      api('/lms/enrollments?limit=200').catch(() => ({ items: [] })),
      api('/lms/courses?limit=500').catch(() => ({ items: [] })),
    ]).then(([enr, crs]) => {
      const enrolledIds = new Set((enr.items || []).map((x) => x.course_id))
      const mapped = (crs.items || []).filter((c) => enrolledIds.has(c._id))
      const fallback = JSON.parse(localStorage.getItem(ENROLLED_COURSES_KEY) || '[]')
      const finalCourses = mapped.length > 0 ? mapped : fallback
      setCourses(finalCourses)
      if (finalCourses[0]) setSelectedId(getId(finalCourses[0]))
    })
  }, [])

  const selected = useMemo(() => courses.find((c) => getId(c) === selectedId) || courses[0], [courses, selectedId])
  const pct = Math.max(0, Math.min(100, Number(progressMap[getId(selected)]?.progressPct || 25)))

  const markProgress = (next) => {
    if (!selected) return
    const id = getId(selected)
    const updated = { ...progressMap, [id]: { ...(progressMap[id] || {}), progressPct: next } }
    setProgressMap(updated)
    localStorage.setItem(COURSE_PROGRESS_KEY, JSON.stringify(updated))
  }

  return (
    <div className="min-h-full bg-[#F7FAFD] p-4 sm:p-6">
      <div className="rounded-[8px] border border-black/[0.08] bg-white p-4">
        <h1 className="text-[24px] font-bold text-[#0f172a]">Continue Learning</h1>
        <p className="text-[13px] text-[#94a3b8]">Continue from your enrolled courses</p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-[320px_1fr]">
        <div className="rounded-[8px] border border-black/[0.08] bg-white p-3">
          {courses.map((c) => (
            <button key={getId(c)} onClick={() => setSelectedId(getId(c))} className="mb-2 w-full rounded-[8px] border border-black/[0.08] p-3 text-left">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-[#5b3df6]" />
                <span className="text-[13px] font-semibold">{c.title}</span>
              </div>
            </button>
          ))}
          {courses.length === 0 && <p className="text-[12px] text-[#94a3b8]">No enrolled courses yet.</p>}
        </div>

        <div className="rounded-[8px] border border-black/[0.08] bg-white p-5">
          {selected ? (
            <>
              <h2 className="text-[20px] font-bold text-[#0f172a]">{selected.title}</h2>
              <p className="mt-1 text-[12px] text-[#64748b]">{selected.description || 'Course in progress'}</p>
              <div className="mt-4 h-2 rounded-full bg-[#e2e8f0]">
                <div className="h-2 rounded-full bg-[#5b3df6]" style={{ width: `${pct}%` }} />
              </div>
              <p className="mt-2 text-[12px] text-[#64748b]">Progress: {pct}%</p>
              <div className="mt-4 flex gap-2">
                <button onClick={() => markProgress(Math.min(100, pct + 10))} className="h-9 rounded-[8px] bg-[#5b3df6] px-3 text-[12px] font-semibold text-white">
                  <span className="inline-flex items-center gap-1"><PlayCircle className="h-4 w-4" /> Mark +10%</span>
                </button>
              </div>
            </>
          ) : (
            <p className="text-[13px] text-[#94a3b8]">Select a course to continue.</p>
          )}
        </div>
      </div>
    </div>
  )
}
