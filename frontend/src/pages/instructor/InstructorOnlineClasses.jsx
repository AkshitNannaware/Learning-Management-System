import React from 'react'
import { Search, Calendar, Upload, PlayCircle, Users } from 'lucide-react'

const AVATAR = 'https://www.figma.com/api/mcp/asset/5b24609b-97ad-4bea-af20-b4f4df404b75'

function Header() {
  return (
    <header className="flex h-[72px] items-center justify-between border-b border-black/[0.08] bg-white px-5">
      <div>
        <p className="text-[11px] text-[#94a3b8]">Instructor panel / Online Classes</p>
        <h1 className="text-[34px] font-bold leading-none text-[#111827]">Online classes</h1>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex h-9 min-w-[280px] items-center gap-2 rounded-[7px] border border-black/[0.08] bg-white px-3">
          <Search className="h-4 w-4 text-[#94a3b8]" />
          <input className="min-w-0 flex-1 bg-transparent text-[12px] placeholder:text-[#94a3b8] focus:outline-none" placeholder="Search live classes, recordings..." />
        </div>
        <button className="inline-flex h-9 items-center gap-1 rounded-[7px] border border-black/[0.08] bg-white px-3 text-[12px] font-semibold"><Calendar className="h-4 w-4" />Weekly view</button>
        <div className="flex items-center gap-2 rounded-[7px] border border-black/[0.08] bg-white px-2 py-1">
          <img src={AVATAR} alt="" className="h-8 w-8 rounded-full object-cover" />
          <div><p className="text-[12px] font-semibold leading-none">Aarohi Shah</p><p className="text-[10px] text-[#94a3b8]">Instructor</p></div>
        </div>
      </div>
    </header>
  )
}

export default function InstructorOnlineClasses() {
  const items = [
    ['Live class • Chemical reactions and equations', 'Today • 10:00 AM to 10:45 AM', 'Meeting starts with quick warmup, clarity explanation, and a short concept check at the end of class.', 'Starting soon', 'Open class room'],
    ['Practical demo • Separation techniques', 'Tomorrow • 11:30 AM to 12:15 PM', 'Teacher-led demonstration with filtration, evaporation, and magnetic separation using daily life examples.', 'Virtual lab', 'View details'],
    ['Revision room • Weekly recap and doubt solving', 'Friday • 4:00 PM to 4:45 PM', 'Focused revision session covering key diagrams, short-answer patterns, and common misconceptions before the weekly assessment.', 'Scheduled', 'Share invite'],
    ['Recorded lecture • Matter and its states', 'Uploaded yesterday • 38 min replay', 'Previous theory class recording with clear chapter markers, downloadable notes, and a short assignment reminder for absent learners.', 'Recording live', 'Open recording'],
  ]

  return (
    <div className="min-h-full bg-[#f6f8fa]">
      <Header />
      <div className="space-y-4 p-3">
        <section className="rounded-[8px] border border-black/[0.08] bg-[#eef6ff] p-5">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex gap-2"><span className="rounded-[12px] bg-[#ede7ff] px-2 py-1 text-[10px] font-semibold text-[#5b3df6]">Class 9 • Science</span><span className="rounded-[12px] bg-[#ffeecf] px-2 py-1 text-[10px] font-semibold text-[#7a5a00]">Live now in 12 mins</span></div>
              <h2 className="mt-3 text-[44px] font-bold leading-[1.05]">Integrated Science Foundation • Online classes</h2>
              <p className="mt-2 max-w-[880px] text-[13px] text-[#7f8ea6]">Manage upcoming live sessions, revision rooms, and recorded lectures for the current science batch. Keep learners on schedule with class timings, session notes, and replay access.</p>
              <div className="mt-3 flex gap-4 text-[12px] text-[#94a3b8]">
                <span className="inline-flex items-center gap-1"><Users className="h-4 w-4 text-[#6b6bff]" />124 students this batch</span>
                <span>4 classes this week</span>
                <span>28 recordings available</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="rounded-[7px] bg-[#5b3df6] px-4 py-2 text-[12px] font-semibold text-white">Start class</button>
              <button className="inline-flex rounded-[7px] border border-black/[0.08] bg-white px-4 py-2 text-[12px] font-semibold"><Upload className="mr-1 h-4 w-4" />Upload recording</button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-[1.7fr_1fr] gap-3">
          <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
            <h3 className="text-[28px] font-bold">Class overview</h3>
            <p className="text-[12px] text-[#94a3b8]">Monitor live session quality, attendance, and recording coverage.</p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="rounded-[8px] border border-black/[0.08] bg-[#f8fafc] p-3"><p className="text-[10px] text-[#94a3b8]">Live attendance</p><p className="text-[36px] font-bold">89%</p></div>
              <div className="rounded-[8px] border border-black/[0.08] bg-[#f8fafc] p-3"><p className="text-[10px] text-[#94a3b8]">Replay rate</p><p className="text-[36px] font-bold">63%</p></div>
              <div className="rounded-[8px] border border-black/[0.08] bg-[#f8fafc] p-3"><p className="text-[10px] text-[#94a3b8]">Classes completed</p><p className="text-[36px] font-bold">18</p></div>
            </div>
          </section>
          <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
            <h3 className="text-[28px] font-bold">Teaching progress</h3>
            <p className="text-[12px] text-[#94a3b8]">Live delivery completed this month.</p>
            <p className="mt-2 text-[44px] font-bold">72%</p>
            <div className="h-2 rounded-full bg-[#edf2ff]"><div className="h-2 w-[72%] rounded-full bg-[#5b3df6]" /></div>
            <div className="mt-3 flex gap-2"><span className="rounded-[12px] bg-[#f1f5f9] px-2 py-1 text-[10px] font-semibold">18 classes done</span><span className="rounded-[12px] bg-[#dff7ea] px-2 py-1 text-[10px] font-semibold text-[#1d9c64]">7 pending</span></div>
          </section>
        </div>

        <div className="grid grid-cols-[1.7fr_1fr] gap-3">
          <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
            <div className="mb-3 flex items-start justify-between">
              <div><h3 className="text-[28px] font-bold">Upcoming and recent sessions</h3><p className="text-[12px] text-[#94a3b8]">Live lectures, revision classes, and practical demos for this week.</p></div>
              <button className="h-8 rounded-[7px] border border-black/[0.08] bg-[#f1f5f9] px-3 text-[11px] font-semibold">All sessions</button>
            </div>
            <div className="space-y-2">
              {items.map(([t, time, desc, st, cta]) => (
                <div key={t} className="flex items-center justify-between rounded-[8px] border border-black/[0.06] p-3">
                  <div className="flex min-w-0 items-start gap-2">
                    <PlayCircle className="mt-0.5 h-4 w-4 text-[#5b3df6]" />
                    <div className="min-w-0">
                      <p className="truncate text-[12px] font-semibold">{t}</p>
                      <p className="text-[10px] text-[#9aa9c0]">{time}</p>
                      <p className="truncate text-[10px] text-[#9aa9c0]">{desc}</p>
                    </div>
                  </div>
                  <div className="ml-2 flex items-center gap-2">
                    <span className={`rounded-[12px] px-2 py-1 text-[10px] font-semibold ${st.includes('Starting') ? 'bg-[#ffd966] text-[#7a5a00]' : st.includes('Virtual') ? 'bg-[#edf2ff] text-[#5b3df6]' : st.includes('Scheduled') ? 'bg-[#f0f4f8] text-[#64748b]' : 'bg-[#dff7ea] text-[#1d9c64]'}`}>{st}</span>
                    <button className="rounded-[7px] border border-black/[0.08] bg-white px-3 py-1 text-[10px] font-semibold">{cta}</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="space-y-3">
            <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
              <h3 className="text-[28px] font-bold">Today's queue</h3>
              <p className="text-[12px] text-[#94a3b8]">Tasks lined up for today's live sessions.</p>
              <div className="mt-2 space-y-2">
                {['Share reaction worksheet', 'Check audio and camera', 'Post join reminder'].map((x) => (
                  <div key={x} className="rounded-[8px] border border-black/[0.06] p-3"><p className="text-[12px] font-semibold">{x}</p><p className="text-[10px] text-[#9aa9c0]">Pending action</p></div>
                ))}
              </div>
            </section>
            <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
              <h3 className="text-[28px] font-bold">Recent recordings</h3>
              <p className="text-[12px] text-[#94a3b8]">Most viewed class replays this week.</p>
              <div className="mt-2 space-y-2">
                {['Matter and its states', 'Acids, bases, and salts', 'Revision room highlights'].map((x) => (
                  <div key={x} className="rounded-[8px] border border-black/[0.06] p-3"><p className="text-[12px] font-semibold">{x}</p><p className="text-[10px] text-[#9aa9c0]">Top replay content</p></div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

