import React, { useEffect, useState } from 'react'
import { Search, BookOpen } from 'lucide-react'
import { api, loadRazorpayScript } from '../../lib/api'

const ENROLLED_COURSES_KEY = 'student-enrolled-courses'

function saveEnrolledCourse(course) {
  const existing = JSON.parse(localStorage.getItem(ENROLLED_COURSES_KEY) || '[]')
  const deduped = existing.filter((c) => c._id !== course._id)
  localStorage.setItem(ENROLLED_COURSES_KEY, JSON.stringify([{ ...course, enrolledAt: new Date().toISOString() }, ...deduped]))
}

export default function StudentBrowseCourse() {
  const [courses, setCourses] = useState([])
  const [q, setQ] = useState('')
  const [me, setMe] = useState(null)
  const [loadingId, setLoadingId] = useState('')

  const load = () => api('/lms/courses?limit=200').then((r) => setCourses(r.items || [])).catch(() => {})
  useEffect(() => {
    load()
    api('/auth/me').then(setMe).catch(() => {})
  }, [])

  const enroll = async (course) => {
    if (!me?._id) return
    setLoadingId(course._id)
    try {
      const amount = Number(course.price || 0)
      if (amount <= 0 || course.course_type === 'free' || course.course_type === 'demo') {
        await api('/lms/enrollments', { method: 'POST', body: JSON.stringify({ course_id: course._id, student_id: me._id }) })
      } else {
        const ok = await loadRazorpayScript()
        if (!ok) throw new Error('Razorpay load failed')
        const order = await api('/lms/payments/order', { method: 'POST', body: JSON.stringify({ amount, coupon_code: null }) })
        await new Promise((resolve, reject) => {
          const rz = new window.Razorpay({
            key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_key',
            amount: order.amount,
            currency: order.currency,
            name: 'LMS',
            description: course.title,
            order_id: order.order_id,
            handler: async (resp) => {
              try {
                await api('/lms/payments/verify', { method: 'POST', body: JSON.stringify(resp) })
                await api('/lms/enrollments', { method: 'POST', body: JSON.stringify({ course_id: course._id, student_id: me._id }) })
                resolve()
              } catch (e) {
                reject(e)
              }
            },
          })
          rz.on('payment.failed', reject)
          rz.open()
        })
      }
      saveEnrolledCourse(course)
      alert('Enrolled successfully')
    } catch (e) {
      alert(e.message || 'Enrollment failed')
    } finally {
      setLoadingId('')
    }
  }

  const filtered = courses.filter((c) => (c.title || '').toLowerCase().includes(q.toLowerCase()))

  return (
    <div className="min-h-full bg-[#F7FAFD] p-4 sm:p-6">
      <div className="rounded-[8px] border border-black/[0.08] bg-white p-4">
        <h1 className="text-[24px] font-bold text-[#0f172a]">Browse Courses</h1>
        <p className="text-[13px] text-[#94a3b8]">Live courses from LMS backend</p>
        <div className="mt-3 flex h-10 items-center gap-2 rounded-[8px] border border-black/[0.08] px-3">
          <Search className="h-4 w-4 text-[#94a3b8]" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search course..." className="w-full bg-transparent text-[13px] outline-none" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((course) => (
          <div key={course._id} className="rounded-[10px] border border-black/[0.08] bg-white p-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-[#5b3df6]" />
              <h3 className="font-semibold text-[#0f172a]">{course.title}</h3>
            </div>
            <p className="mt-2 text-[12px] text-[#64748b]">{course.description || 'No description'}</p>
            <div className="mt-3 text-[12px] text-[#0f172a]">Type: {course.course_type || 'free'}</div>
            <div className="text-[12px] text-[#0f172a]">Price: Rs. {Number(course.price || 0)}</div>
            <button
              disabled={loadingId === course._id}
              onClick={() => enroll(course)}
              className="mt-4 h-9 w-full rounded-[8px] bg-[#5b3df6] text-[12px] font-semibold text-white disabled:opacity-60"
            >
              {loadingId === course._id ? 'Processing...' : 'Enroll'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
