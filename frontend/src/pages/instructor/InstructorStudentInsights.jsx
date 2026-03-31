import React from 'react'
import { Search, Download, Filter, AlertTriangle } from 'lucide-react'

const AVATAR = 'https://www.figma.com/api/mcp/asset/5b24609b-97ad-4bea-af20-b4f4df404b75'
const A1 = 'https://www.figma.com/api/mcp/asset/36623965-019b-4d68-bd68-2bf7a2e38748'
const A2 = 'https://www.figma.com/api/mcp/asset/3d5af1bf-9fd8-4c28-aa30-a19dca037191'
const A3 = 'https://www.figma.com/api/mcp/asset/0fd37186-8019-4228-b5e5-7a28115bd2b6'

function Header() {
  return (
    <header className="flex h-[72px] items-center justify-between border-b border-black/[0.08] bg-white px-5">
      <div>
        <p className="text-[11px] text-[#94a3b8]">Instructor panel / Student Insights</p>
        <h1 className="text-[34px] font-bold leading-none text-[#111827]">Student insights</h1>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex h-9 min-w-[280px] items-center gap-2 rounded-[7px] border border-black/[0.08] bg-white px-3">
          <Search className="h-4 w-4 text-[#94a3b8]" />
          <input className="min-w-0 flex-1 bg-transparent text-[12px] placeholder:text-[#94a3b8] focus:outline-none" placeholder="Search students, classes..." />
        </div>
        <button className="inline-flex h-9 items-center gap-1 rounded-[7px] border border-black/[0.08] bg-white px-3 text-[12px] font-semibold"><Download className="h-4 w-4" />Export</button>
        <div className="flex items-center gap-2 rounded-[7px] border border-black/[0.08] bg-white px-2 py-1">
          <img src={AVATAR} alt="" className="h-8 w-8 rounded-full object-cover" />
          <div><p className="text-[12px] font-semibold leading-none">Aarohi Shah</p><p className="text-[10px] text-[#94a3b8]">Instructor</p></div>
        </div>
      </div>
    </header>
  )
}

export default function InstructorStudentInsights() {
  const students = [
    ['Anaya Mehta', 'Class 9 A • Science', 'Attendance 98%', 'Assignments 12/12 submitted', 'Engagement High participation', 'Top performer', 'bg-[#dff7ea] text-[#1d9c64]', A1],
    ['Ryan Cole', 'Class 9 C • Science', 'Attendance 79%', 'Assignments 10/12 submitted', 'Engagement Stable this week', 'On track', 'bg-[#edf2ff] text-[#5b3df6]', A2],
    ['Mina Park', 'Class 10 A • Math', 'Attendance 84%', 'Assignments 8/12 submitted', 'Engagement Needs check-in', 'Follow-up', 'bg-[#ffeecf] text-[#7a5a00]', A3],
    ['Noah Mensah', 'Class 10 B • English', 'Attendance 88%', 'Assignments 11/12 submitted', 'Engagement Improving trend', 'Improving', 'bg-[#ede7ff] text-[#5b3df6]', A2],
  ]

  return (
    <div className="min-h-full bg-[#f6f8fa]">
      <Header />
      <div className="space-y-4 p-3">
        <section className="rounded-[8px] border border-black/[0.08] bg-[#eef6ff] p-5">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex gap-2"><span className="rounded-[12px] bg-[#ede7ff] px-2 py-1 text-[10px] font-semibold text-[#5b3df6]">Class 9 to 10</span><span className="rounded-[12px] bg-[#dff7ea] px-2 py-1 text-[10px] font-semibold text-[#1d9c64]">128 active students</span></div>
              <h2 className="mt-3 text-[44px] font-bold leading-[1.05]">Student performance and engagement overview</h2>
              <p className="mt-2 max-w-[850px] text-[13px] text-[#7f8ea6]">Track attendance consistency, assignment completion, and class engagement to identify learners who need support and students who are leading this term.</p>
              <div className="mt-3 flex gap-4 text-[12px] text-[#94a3b8]"><span>92% average attendance across all tracked classes</span><span>87% assignment completion rate this month</span><span>16 students flagged for additional follow-up</span></div>
            </div>
            <div className="flex gap-2">
              <button className="inline-flex rounded-[7px] bg-[#5b3df6] px-4 py-2 text-[12px] font-semibold text-white"><Filter className="mr-1 h-4 w-4" />Filter insights</button>
              <button className="rounded-[7px] border border-black/[0.08] bg-white px-4 py-2 text-[12px] font-semibold">View reports</button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-[1.7fr_1fr] gap-3">
          <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
            <h3 className="text-[28px] font-bold">Student overview</h3>
            <p className="text-[12px] text-[#94a3b8]">Monitor engagement, attendance, and academic consistency across your current groups.</p>
            <div className="mt-3 grid grid-cols-4 gap-2">
              <div className="rounded-[8px] border border-black/[0.08] bg-[#f8fafc] p-3"><p className="text-[10px] text-[#94a3b8]">Students tracked</p><p className="text-[36px] font-bold">94</p></div>
              <div className="rounded-[8px] border border-black/[0.08] bg-[#f8fafc] p-3"><p className="text-[10px] text-[#94a3b8]">Needs support</p><p className="text-[36px] font-bold">16</p></div>
              <div className="rounded-[8px] border border-black/[0.08] bg-[#f8fafc] p-3"><p className="text-[10px] text-[#94a3b8]">Top performers</p><p className="text-[36px] font-bold">12</p></div>
              <div className="rounded-[8px] border border-black/[0.08] bg-[#f8fafc] p-3"><p className="text-[10px] text-[#94a3b8]">Missing submissions</p><p className="text-[36px] font-bold">21</p></div>
            </div>
          </section>
          <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
            <h3 className="text-[28px] font-bold">Class health</h3>
            <p className="text-[12px] text-[#94a3b8]">Current overall readiness and learning momentum.</p>
            <p className="mt-2 text-[44px] font-bold">84%</p>
            <p className="text-[11px] text-[#94a3b8]">Most student groups show steady attendance and assignment consistency.</p>
            <div className="mt-3 h-2 rounded-full bg-[#edf2ff]"><div className="h-2 w-[84%] rounded-full bg-[#5b3df6]" /></div>
            <div className="mt-3 flex gap-2"><span className="rounded-[12px] bg-[#f1f5f9] px-2 py-1 text-[10px] font-semibold">92% attendance</span><span className="rounded-[12px] bg-[#dff7ea] px-2 py-1 text-[10px] font-semibold text-[#1d9c64]">87% completion</span></div>
          </section>
        </div>

        <div className="grid grid-cols-[1.7fr_1fr] gap-3">
          <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
            <div className="mb-3 flex items-start justify-between">
              <div><h3 className="text-[28px] font-bold">Student highlights</h3><p className="text-[12px] text-[#94a3b8]">Quick scan of learners by attendance, assignment completion, and engagement.</p></div>
              <button className="h-8 rounded-[7px] border border-black/[0.08] bg-[#f1f5f9] px-3 text-[11px] font-semibold">All students</button>
            </div>
            <div className="space-y-2">
              {students.map(([n, c, a, as, e, tag, cls, img]) => (
                <div key={n} className="flex items-center justify-between rounded-[8px] border border-black/[0.06] p-3">
                  <div className="flex items-center gap-2">
                    <img src={img} alt="" className="h-8 w-8 rounded-full object-cover" />
                    <div>
                      <p className="text-[12px] font-semibold">{n}</p>
                      <p className="text-[10px] text-[#9aa9c0]">{c}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-[10px] text-[#64748b]">
                    <p>{a}</p><p>{as}</p><p>{e}</p>
                  </div>
                  <span className={`rounded-[12px] px-2 py-1 text-[10px] font-semibold ${cls}`}>{tag}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="space-y-3">
            <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
              <h3 className="text-[28px] font-bold">Priority actions</h3>
              <p className="text-[12px] text-[#94a3b8]">Recommended follow-ups based on recent student activity.</p>
              <div className="mt-2 space-y-2">{['Reach out to low-attendance students', 'Review pending assignment backlog', 'Recognize high performers'].map((x) => <div key={x} className="rounded-[8px] border border-black/[0.06] p-3"><p className="text-[12px] font-semibold">{x}</p><p className="text-[10px] text-[#9aa9c0]">Action required</p></div>)}</div>
            </section>
            <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
              <h3 className="text-[28px] font-bold">Recent signals</h3>
              <p className="text-[12px] text-[#94a3b8]">Key patterns spotted from the latest student data.</p>
              <div className="mt-2 space-y-2">{['Quiz performance improved', 'Peer participation is stronger', 'Late submissions are decreasing'].map((x) => <div key={x} className="rounded-[8px] border border-black/[0.06] p-3"><p className="text-[12px] font-semibold">{x}</p><p className="text-[10px] text-[#9aa9c0]">Trend snapshot</p></div>)}</div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

