import React from 'react'
import { Search, Share2, Users, Calendar, ClipboardCheck, PlayCircle } from 'lucide-react'

const AVATAR = 'https://www.figma.com/api/mcp/asset/5b24609b-97ad-4bea-af20-b4f4df404b75'

function Header() {
  return (
    <header className="flex h-[72px] items-center justify-between border-b border-black/[0.08] bg-white px-5">
      <div>
        <p className="text-[11px] text-[#94a3b8]">Instructor panel / My Courses</p>
        <h1 className="text-[34px] font-bold leading-none text-[#111827]">Course details</h1>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex h-9 min-w-[280px] items-center gap-2 rounded-[7px] border border-black/[0.08] bg-white px-3">
          <Search className="h-4 w-4 text-[#94a3b8]" />
          <input className="min-w-0 flex-1 bg-transparent text-[12px] placeholder:text-[#94a3b8] focus:outline-none" placeholder="Search modules, tests..." />
        </div>
        <button className="inline-flex h-9 items-center gap-1 rounded-[7px] border border-black/[0.08] bg-white px-3 text-[12px] font-semibold text-[#111827]">
          <Share2 className="h-4 w-4" />
          Share
        </button>
        <div className="flex items-center gap-2 rounded-[7px] border border-black/[0.08] bg-white px-2 py-1">
          <img src={AVATAR} alt="" className="h-8 w-8 rounded-full object-cover" />
          <div>
            <p className="text-[12px] font-semibold leading-none text-[#111827]">Aarohi Shah</p>
            <p className="text-[10px] text-[#94a3b8]">Instructor</p>
          </div>
        </div>
      </div>
    </header>
  )
}

const modules = [
  ['Module 1 • Matter and its states', 'Recorded lessons, chapter notes, and recap exercises covering solids, liquids, gases, and particle behavior.', ['6 lessons', '2 resources'], 'Completed', 'View module'],
  ['Module 2 • Practical lab: Separation techniques', 'Hands-on virtual lab with practical sessions for filtration, evaporation, and magnetic separation with teacher demonstrations.', ['3 lab sessions', 'Live + recorded'], 'Live lab tomorrow', 'Join prep'],
  ['Module 3 • Live revision class', 'Teacher-led revision focused on diagrams, short answers, and doubt-solving before the weekly MCQ test.', ['Friday', '45 min'], 'Scheduled', 'View schedule'],
  ['Module 4 • Weekly MCQ assessment', 'A 25-question live MCQ test with automatic evaluation and same-day result visibility on the student dashboard.', ['25 questions', 'Auto evaluation'], 'Results by evening', 'View results'],
]

export default function InstructorMycourses() {
  return (
    <div className="min-h-full bg-[#f6f8fa]">
      <Header />
      <div className="space-y-4 p-3">
        <section className="rounded-[8px] border border-black/[0.08] bg-[#eef6ff] p-5">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex gap-2">
                <span className="rounded-[12px] bg-[#ede7ff] px-2 py-1 text-[10px] font-semibold text-[#5b3df6]">Class 9 • Science</span>
                <span className="rounded-[12px] bg-[#dff7ea] px-2 py-1 text-[10px] font-semibold text-[#1d9c64]">Active course</span>
              </div>
              <h2 className="mt-3 text-[44px] font-bold leading-[1.05] text-[#111827]">Integrated Science Foundation</h2>
              <p className="mt-2 max-w-[860px] text-[13px] text-[#7f8ea6]">A blended course with online theory classes, practical lab sessions, weekly MCQ tests, and teacher-led revision support for the current academic term.</p>
              <div className="mt-3 flex flex-wrap gap-4 text-[12px] text-[#94a3b8]">
                <span className="inline-flex items-center gap-1"><Users className="h-4 w-4 text-[#6b6bff]" />124 students enrolled</span>
                <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4 text-[#6b6bff]" />Mon, Wed, Fri • 10:00 AM</span>
                <span className="inline-flex items-center gap-1"><ClipboardCheck className="h-4 w-4 text-[#6b6bff]" />Weekly tests every Saturday</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="rounded-[7px] bg-[#5b3df6] px-4 py-2 text-[12px] font-semibold text-white">Join live class</button>
              <button className="rounded-[7px] border border-black/[0.08] bg-white px-4 py-2 text-[12px] font-semibold text-[#111827]">Open tests</button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-[1.7fr_1fr] gap-3">
          <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
            <h3 className="text-[28px] font-bold text-[#111827]">Course overview</h3>
            <p className="text-[12px] text-[#94a3b8]">Track progress, learner participation, and upcoming activities.</p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="rounded-[8px] border border-black/[0.08] bg-[#f8fafc] p-3"><p className="text-[10px] text-[#94a3b8]">Completion</p><p className="text-[36px] font-bold">68%</p><p className="text-[10px] text-[#94a3b8]">8 of 12 modules finished</p></div>
              <div className="rounded-[8px] border border-black/[0.08] bg-[#f8fafc] p-3"><p className="text-[10px] text-[#94a3b8]">Attendance</p><p className="text-[36px] font-bold">91%</p><p className="text-[10px] text-[#94a3b8]">Average live class participation</p></div>
              <div className="rounded-[8px] border border-black/[0.08] bg-[#f8fafc] p-3"><p className="text-[10px] text-[#94a3b8]">Weekly test score</p><p className="text-[36px] font-bold">84%</p><p className="text-[10px] text-[#94a3b8]">Latest class average</p></div>
            </div>
          </section>
          <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
            <h3 className="text-[28px] font-bold text-[#111827]">Your progress</h3>
            <p className="text-[12px] text-[#94a3b8]">Current course completion and learning pace.</p>
            <p className="mt-2 text-[44px] font-bold leading-none text-[#111827]">68%</p>
            <p className="text-[11px] text-[#94a3b8]">You are on track for this month.</p>
            <div className="mt-3 h-2 rounded-full bg-[#edf2ff]"><div className="h-2 w-[68%] rounded-full bg-[#5b3df6]" /></div>
            <div className="mt-3 flex gap-2">
              <span className="rounded-[12px] bg-[#f1f5f9] px-2 py-1 text-[10px] font-semibold">8 modules complete</span>
              <span className="rounded-[12px] bg-[#dff7ea] px-2 py-1 text-[10px] font-semibold text-[#1d9c64]">4 upcoming</span>
            </div>
          </section>
        </div>

        <div className="grid grid-cols-[1.7fr_1fr] gap-3">
          <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
            <div className="mb-3 flex items-start justify-between">
              <div>
                <h3 className="text-[28px] font-bold text-[#111827]">Course modules</h3>
                <p className="text-[12px] text-[#94a3b8]">Theory lessons, practical labs, revision classes, and test checkpoints.</p>
              </div>
              <button className="h-8 rounded-[7px] border border-black/[0.08] bg-[#f1f5f9] px-3 text-[11px] font-semibold">All modules</button>
            </div>
            <div className="space-y-2">
              {modules.map(([t, d, tags, state, cta]) => (
                <div key={t} className="flex items-center justify-between rounded-[8px] border border-black/[0.06] p-3">
                  <div className="flex min-w-0 items-start gap-2">
                    <PlayCircle className="mt-0.5 h-4 w-4 text-[#5b3df6]" />
                    <div className="min-w-0">
                      <p className="truncate text-[12px] font-semibold">{t}</p>
                      <p className="truncate text-[10px] text-[#9aa9c0]">{d}</p>
                      <div className="mt-1 flex gap-1">
                        <span className="rounded-[12px] bg-[#f1f5f9] px-2 py-1 text-[9px]">{tags[0]}</span>
                        <span className="rounded-[12px] bg-[#edf2ff] px-2 py-1 text-[9px]">{tags[1]}</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-2 flex items-center gap-2">
                    <span className={`rounded-[12px] px-2 py-1 text-[10px] font-semibold ${state.includes('Completed') ? 'bg-[#dff7ea] text-[#1d9c64]' : state.includes('Live') ? 'bg-[#ffd966] text-[#4b2e00]' : state.includes('Scheduled') ? 'bg-[#f0f4f8] text-[#64748b]' : 'bg-[#ffeecf] text-[#7a5a00]'}`}>{state}</span>
                    <button className="rounded-[7px] border border-black/[0.08] bg-white px-3 py-1 text-[10px] font-semibold">{cta}</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <div className="space-y-3">
            <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
              <h3 className="text-[28px] font-bold text-[#111827]">Upcoming sessions</h3>
              <p className="text-[12px] text-[#94a3b8]">Next live classes and assessments.</p>
              <div className="mt-2 space-y-2">
                {['Live class • Chemical reactions', 'Practical lab • Filtration demo', 'Weekly MCQ test'].map((i) => (
                  <div key={i} className="rounded-[8px] border border-black/[0.06] p-3">
                    <p className="text-[12px] font-semibold">{i}</p>
                    <p className="text-[10px] text-[#9aa9c0]">Today • 10:00 AM to 10:45 AM</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
              <h3 className="text-[28px] font-bold text-[#111827]">Resources</h3>
              <p className="text-[12px] text-[#94a3b8]">Quick access to course materials.</p>
              <div className="mt-2 space-y-2">
                {['Chapter notes pack', 'Recorded class library', 'Ask your teacher'].map((i) => (
                  <div key={i} className="rounded-[8px] border border-black/[0.06] p-3">
                    <p className="text-[12px] font-semibold">{i}</p>
                    <p className="text-[10px] text-[#9aa9c0]">Tap to open</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

