import React from 'react'
import { Search, Upload, Plus, Calendar, Video, Users, Clock, UserCheck } from 'lucide-react'

const AVATAR_RAHUL = 'https://www.figma.com/api/mcp/asset/5b24609b-97ad-4bea-af20-b4f4df404b75'
const A1 = 'https://www.figma.com/api/mcp/asset/3e187a9c-3e48-41dc-8f03-5affd73e7e5f'
const A2 = 'https://www.figma.com/api/mcp/asset/ccc04c84-4ac7-4c6c-b67f-2ff1887c4b83'
const A3 = 'https://www.figma.com/api/mcp/asset/9834fb2c-3d16-47cd-9e85-eaf390f7183a'

function Header() {
  return (
    <header className="flex h-[76px] items-center justify-between border-b border-black/[0.08] bg-white px-7">
      <div>
        <p className="text-[13px] font-medium text-[#94a3b8]">Client admin panel</p>
        <h1 className="text-2xl font-bold leading-tight text-[#0f172a]">Live Classes</h1>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex h-10 min-w-[280px] items-center gap-2.5 rounded-md border border-black/[0.08] bg-white px-[15px]">
          <Search className="h-[18px] w-[18px] text-[#94a3b8]" />
          <input className="min-w-0 flex-1 bg-transparent text-sm placeholder:text-[#94a3b8] focus:outline-none" placeholder="Search students, courses, or classes" />
        </div>
        <button className="inline-flex h-10 items-center gap-2 rounded-md border border-black/[0.08] bg-[#e8f5ff] px-[17px] text-sm font-medium text-[#0f172a]">
          <Upload className="h-[18px] w-[18px]" />
          Bulk Upload
        </button>
        <div className="flex items-center gap-3 rounded-md border border-black/[0.08] bg-white px-2.5 py-2">
          <img src={AVATAR_RAHUL} alt="" className="h-9 w-9 rounded-md object-cover" />
          <div>
            <div className="text-sm font-semibold leading-tight">Rahul Mehta</div>
            <div className="text-[13px] text-[#94a3b8]">Institute Owner</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default function AdminLiveClasses() {
  const sessions = [
    ['Math Mastery Live', 'Today • 4:00 PM • Zoom link ready • Aisha Verma', 'Ready', 'bg-[#2dd4bf] text-[#023b33]', 'Open'],
    ['Science Lab Workshop', 'Tomorrow • 11:00 AM • Google Meet pending • Liam Carter', 'Pending link', 'bg-[#ffd966] text-[#4b2e00]', 'Assign link'],
    ['English Speaking Club', 'Fri • 5:30 PM • Meet ready • Nadia Brown', 'Scheduled', 'bg-[#2dd4bf] text-[#023b33]', 'Modify'],
    ['Coding for Kids Bootcamp', 'Sat • 10:00 AM • Zoom ready • Arjun Singh batch', 'Link expired', 'bg-[#f0f4f8] text-[#64748b]', 'Resolve'],
  ]

  const faculty = [
    ['Aisha Verma', 'Math Mastery Live • Slides uploaded • Waiting room enabled', A1, 'Ready', 'bg-[#2dd4bf] text-[#023b33]'],
    ['Liam Carter', 'Science Lab Workshop • Meet link missing • Needs setup', A2, 'Action needed', 'bg-[#ffd966] text-[#4b2e00]'],
    ['Nadia Brown', 'English Speaking Club • Notes shared • Attendance template ready', A3, 'Prepared', 'bg-[#2dd4bf] text-[#023b33]'],
  ]

  return (
    <div className="min-h-full bg-[#f6f8fa]">
      <Header />
      <div className="space-y-4 p-5">
        <section className="grid grid-cols-[1.7fr_1fr] gap-3 rounded-[8px] border border-black/[0.08] bg-[#eaf2fb] p-4">
          <div>
            <span className="inline-flex rounded-[12px] bg-[#ffd966] px-[10px] py-[5px] text-[11px] font-medium text-[#4b2e00]">Today’s live teaching operations</span>
            <h2 className="mt-3 max-w-[700px] text-[28px] font-bold leading-tight text-[#0f172a]">Schedule, track, and manage every live session from one class operations workspace.</h2>
            <p className="mt-2 max-w-[700px] text-[14px] text-[#94a3b8]">Monitor upcoming Zoom and Meet sessions, manage teachers, review attendance, and quickly resolve link or timing issues before class starts.</p>
            <div className="mt-4 flex gap-2">
              <button className="inline-flex h-9 items-center gap-1 rounded-[7px] bg-[#5b3df6] px-3 text-[12px] font-semibold text-white"><Plus className="h-4 w-4" />Create live batch</button>
              <button className="h-9 rounded-[7px] border border-black/[0.08] bg-white px-3 text-[12px] font-semibold text-[#111827]">This week</button>
            </div>
          </div>
          <div className="rounded-[8px] border border-black/[0.08] bg-white p-3">
            <p className="text-[10px] text-[#94a3b8]">Next class</p>
            <p className="text-[22px] font-bold text-[#111827]">Math Mastery Live</p>
            <p className="text-[11px] text-[#94a3b8]">Today • 4:00 PM to 5:30 PM • Zoom</p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              <div className="rounded-[6px] bg-[#f1f5f9] p-2"><p className="text-[9px] text-[#94a3b8]">Students</p><p className="text-[16px] font-bold">124</p></div>
              <div className="rounded-[6px] bg-[#f1f5f9] p-2"><p className="text-[9px] text-[#94a3b8]">Expected</p><p className="text-[16px] font-bold">98</p></div>
              <div className="rounded-[6px] bg-[#f1f5f9] p-2"><p className="text-[9px] text-[#94a3b8]">Teacher</p><p className="text-[13px] font-semibold">Aisha…</p></div>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <button className="h-8 rounded-[7px] border border-black/[0.08] bg-[#f1f5f9] text-[11px] font-medium">Open Zoom Link</button>
              <button className="h-8 rounded-[7px] border border-black/[0.08] bg-[#f1f5f9] text-[11px] font-medium">Notify Students</button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-4 gap-3">
          <div className="rounded-[8px] border border-black/[0.08] bg-white p-[16px]"><p className="text-[11px] text-[#94a3b8]">Classes today</p><p className="mt-2 text-[34px] font-bold">12</p><span className="mt-2 inline-flex rounded-[12px] bg-[#2dd4bf] px-2 py-1 text-[10px] font-medium text-[#023b33]">+3 starting in 1 hour</span></div>
          <div className="rounded-[8px] border border-black/[0.08] bg-white p-[16px]"><p className="text-[11px] text-[#94a3b8]">Attendance rate</p><p className="mt-2 text-[34px] font-bold">89%</p><span className="mt-2 inline-flex rounded-[12px] bg-[#f0f4f8] px-2 py-1 text-[10px] font-medium text-[#64748b]">Up +5% from last week</span></div>
          <div className="rounded-[8px] border border-black/[0.08] bg-white p-[16px]"><p className="text-[11px] text-[#94a3b8]">Links pending</p><p className="mt-2 text-[34px] font-bold">2</p><span className="mt-2 inline-flex rounded-[12px] bg-[#ffd966] px-2 py-1 text-[10px] font-medium text-[#4b2e00]">Needs follow-up</span></div>
          <div className="rounded-[8px] border border-black/[0.08] bg-white p-[16px]"><p className="text-[11px] text-[#94a3b8]">Faculty live now</p><p className="mt-2 text-[34px] font-bold">5</p><span className="mt-2 inline-flex rounded-[12px] bg-[#2dd4bf] px-2 py-1 text-[10px] font-medium text-[#023b33]">All sessions stable</span></div>
        </div>

        <div className="grid grid-cols-[1.7fr_1fr] gap-3">
          <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
            <div className="mb-3 flex items-start justify-between">
              <div>
                <h3 className="text-[22px] font-bold text-[#111827]">Upcoming sessions</h3>
                <p className="text-[12px] text-[#94a3b8]">Track links, status, instructor assignment, and upcoming timings.</p>
              </div>
              <div className="flex gap-2">
                <button className="h-8 rounded-[7px] border border-black/[0.08] bg-[#f1f5f9] px-3 text-[11px] font-medium">Bulk reminders</button>
                <button className="h-8 rounded-[7px] bg-[#5b3df6] px-3 text-[11px] font-medium text-white">Add session</button>
              </div>
            </div>
            <div className="space-y-2">
              {sessions.map(([title, meta, status, cls, action]) => (
                <div key={title} className="flex items-center justify-between rounded-[8px] border border-black/[0.06] p-3">
                  <div className="flex items-start gap-2">
                    <Video className="mt-0.5 h-4 w-4 text-[#5b3df6]" />
                    <div>
                      <p className="text-[12px] font-semibold text-[#111827]">{title}</p>
                      <p className="text-[10px] text-[#9aa9c0]">{meta}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`rounded-[12px] px-2 py-1 text-[10px] font-medium ${cls}`}>{status}</span>
                    <button className="rounded-[7px] border border-black/[0.08] bg-white px-2 py-1 text-[10px] font-semibold">{action}</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
            <h3 className="text-[22px] font-bold text-[#111827]">This week</h3>
            <p className="text-[12px] text-[#94a3b8]">Quick view of the next teaching schedule.</p>
            <div className="mt-3 grid grid-cols-5 gap-2">
              {[
                ['12', 'Mon', 'Math 5PM'],
                ['13', 'Tue', 'STEM 4PM'],
                ['14', 'Wed', 'Eng 6PM'],
                ['15', 'Thu', 'Robotics'],
                ['16', 'Fri', 'Workshop'],
              ].map(([d, wd, s]) => (
                <div key={d} className="rounded-[8px] border border-black/[0.08] bg-[#f8fafc] p-2 text-center">
                  <p className="text-[18px] font-bold text-[#111827]">{d}</p>
                  <p className="text-[10px] text-[#94a3b8]">{wd}</p>
                  <p className="mt-1 text-[9px] text-[#7a84a1]">{s}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="grid grid-cols-[1.35fr_1fr] gap-3">
          <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h3 className="text-[22px] font-bold text-[#111827]">Faculty readiness</h3>
                <p className="text-[12px] text-[#94a3b8]">See which instructors are prepared for their next session.</p>
              </div>
              <button className="h-8 rounded-[7px] border border-black/[0.08] bg-[#f1f5f9] px-3 text-[11px] font-medium">Assign substitutes</button>
            </div>
            <div className="space-y-2">
              {faculty.map(([name, meta, img, tag, cls]) => (
                <div key={name} className="flex items-center justify-between rounded-[8px] border border-black/[0.06] p-3">
                  <div className="flex items-center gap-2">
                    <img src={img} alt="" className="h-8 w-8 rounded-full object-cover" />
                    <div>
                      <p className="text-[12px] font-semibold text-[#111827]">{name}</p>
                      <p className="text-[10px] text-[#9aa9c0]">{meta}</p>
                    </div>
                  </div>
                  <span className={`rounded-[12px] px-2 py-1 text-[10px] font-medium ${cls}`}>{tag}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
            <h3 className="text-[22px] font-bold text-[#111827]">Attendance trend</h3>
            <p className="text-[12px] text-[#94a3b8]">Daily join rate across recent live sessions.</p>
            <div className="mt-4 flex h-[120px] items-end justify-center gap-4">
              {[44, 62, 53, 76, 84].map((v, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className="w-7 rounded-t-[4px] bg-gradient-to-b from-[#f7b267] to-[#5b3df6]" style={{ height: `${v}px` }} />
                  <span className="text-[9px] text-[#94a3b8]">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri'][i]}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between rounded-[8px] bg-[#f1f5f9] p-2">
                <span className="text-[11px] text-[#64748b]">Best performing batch</span>
                <span className="rounded-[12px] bg-[#2dd4bf] px-2 py-1 text-[10px] font-semibold text-[#023b33]">96%</span>
              </div>
              <div className="flex items-center justify-between rounded-[8px] bg-[#f1f5f9] p-2">
                <span className="text-[11px] text-[#64748b]">Average session duration</span>
                <span className="rounded-[12px] bg-[#e8f5ff] px-2 py-1 text-[10px] font-semibold text-[#0f172a]">52 min</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
