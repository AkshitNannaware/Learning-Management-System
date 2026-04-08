import React, { useEffect, useState } from 'react'
import { Plus, BookOpen, Trash2 } from 'lucide-react'
import { api } from '../../lib/api'

export default function InstructorMycourses() {
  const [courses, setCourses] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('0')
  const [courseType, setCourseType] = useState('free')

  const load = () => api('/lms/courses?limit=200').then((r) => setCourses(r.items || [])).catch(() => {})
  useEffect(() => {
    load()
  }, [])

  const createCourse = async () => {
    if (!title.trim()) return
    await api('/lms/courses', {
      method: 'POST',
      body: JSON.stringify({
        title: title.trim(),
        description,
        price: Number(price || 0),
        course_type: courseType,
      }),
    }).catch(() => {})
    setTitle('')
    setDescription('')
    setPrice('0')
    setCourseType('free')
    load()
  }

  const removeCourse = async (id) => {
    await api(`/lms/courses/${id}`, { method: 'DELETE' }).catch(() => {})
    load()
  }

  return (
    <div className="min-h-full bg-[#F7FAFD] p-4 sm:p-6">
      <div className="rounded-[8px] border border-black/[0.08] bg-white p-4">
        <h1 className="text-[24px] font-bold text-[#0f172a]">Instructor My Courses</h1>
        <p className="text-[13px] text-[#94a3b8]">Manage your courses with real API data</p>
      </div>

      <div className="mt-5 rounded-[8px] border border-black/[0.08] bg-white p-4">
        <h2 className="text-[16px] font-semibold text-[#0f172a]">Create Course</h2>
        <div className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-2">
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="h-10 rounded-[8px] border border-black/[0.08] px-3 text-[13px]" />
          <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" className="h-10 rounded-[8px] border border-black/[0.08] px-3 text-[13px]" />
          <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="h-10 rounded-[8px] border border-black/[0.08] px-3 text-[13px] md:col-span-2" />
          <select value={courseType} onChange={(e) => setCourseType(e.target.value)} className="h-10 rounded-[8px] border border-black/[0.08] px-3 text-[13px]">
            <option value="free">free</option>
            <option value="paid">paid</option>
            <option value="demo">demo</option>
          </select>
          <button onClick={createCourse} className="h-10 rounded-[8px] bg-[#5b3df6] text-[13px] font-semibold text-white">
            <span className="inline-flex items-center gap-2"><Plus className="h-4 w-4" /> Create</span>
                </button>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <div key={course._id} className="rounded-[10px] border border-black/[0.08] bg-white p-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-[#5b3df6]" />
              <h3 className="font-semibold text-[#0f172a]">{course.title}</h3>
            </div>
            <p className="mt-2 text-[12px] text-[#64748b]">{course.description || 'No description'}</p>
            <div className="mt-2 text-[12px] text-[#0f172a]">Type: {course.course_type}</div>
            <div className="text-[12px] text-[#0f172a]">Price: Rs. {Number(course.price || 0)}</div>
            <button onClick={() => removeCourse(course._id)} className="mt-3 h-9 w-full rounded-[8px] border border-[#fecaca] bg-[#fff1f2] text-[12px] font-semibold text-[#b91c1c]">
              <span className="inline-flex items-center gap-1"><Trash2 className="h-4 w-4" /> Delete</span>
            </button>
              </div>
            ))}
      </div>
    </div>
  )
}
