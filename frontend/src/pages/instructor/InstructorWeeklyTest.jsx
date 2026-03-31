import React from 'react'
import { Search, CalendarDays, PlusCircle, FileCheck, ClipboardList } from 'lucide-react'

const AVATAR = 'https://www.figma.com/api/mcp/asset/5b24609b-97ad-4bea-af20-b4f4df404b75'

function Header() {
  return (
    <header className="flex h-[72px] items-center justify-between border-b border-black/[0.08] bg-white px-5">
      <div>
        <p className="text-[11px] text-[#94a3b8]">Instructor panel / Weekly Tests</p>
        <h1 className="text-[34px] font-bold leading-none text-[#111827]">Weekly tests</h1>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex h-9 min-w-[280px] items-center gap-2 rounded-[7px] border border-black/[0.08] bg-white px-3">
          <Search className="h-4 w-4 text-[#94a3b8]" />
          <input className="min-w-0 flex-1 bg-transparent text-[12px] placeholder:text-[#94a3b8] focus:outline-none" placeholder="Search tests, question sets..." />
        </div>
        <button className="inline-flex h-9 items-center gap-1 rounded-[7px] border border-black/[0.08] bg-white px-3 text-[12px] font-semibold"><CalendarDays className="h-4 w-4" />This month</button>
        <div className="flex items-center gap-2 rounded-[7px] border border-black/[0.08] bg-white px-2 py-1">
          <img src={AVATAR} alt="" className="h-8 w-8 rounded-full object-cover" />
          <div><p className="text-[12px] font-semibold leading-none">Aarohi Shah</p><p className="text-[10px] text-[#94a3b8]">Instructor</p></div>
        </div>
      </div>
    </header>
  )
}

export default function InstructorWeeklyTest() {
  const tests = [
    ['Weekly MCQ test • Chemical reactions and equations', 'Saturday • 9:00 AM to 9:30 AM', 'A timed 25-question assessment covering balancing equations, reaction types, and concept-based application problems for this week chapter.', ['25 questions', '30 mins', 'Auto evaluation'], 'Scheduled', 'Open test setup'],
    ['Concept check • Separation techniques recap', 'Published yesterday • 10-minute quiz', 'Short recap quiz used after practical lab to confirm understanding of filtration, evaporation, sedimentation, and magnetic separation.', ['18 questions', 'Instant score', 'Retry enabled'], '92% attempted', 'View analytics'],
    ['Revision quiz • Matter and its states', 'Result published today • Retry window open till 5:00 PM', 'Revision assessment designed for absent learners and slow scorers, with randomized questions from first two chapters and answer review after submission.', ['32 attempts', 'Avg score 78%', 'Question bank'], 'Retake active', 'Review results'],
    ['Chapter assessment • Acids, bases, and salts', 'Scheduled on Monday • Performance summary ready', 'Comprehensive chapter test with MCQs, match-the-following, and short-answer responses used to identify students needing extra support in the next revision class.', ['41 questions', '84% class avg', '18 flagged learners'], 'Results shared', 'Open report'],
  ]

  return (
    <div className="min-h-full bg-[#f6f8fa]">
      <Header />
      <div className="space-y-4 p-3">
        <section className="rounded-[8px] border border-black/[0.08] bg-[#eef6ff] p-5">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex gap-2"><span className="rounded-[12px] bg-[#ede7ff] px-2 py-1 text-[10px] font-semibold text-[#5b3df6]">Class 9 • Science</span><span className="rounded-[12px] bg-[#ffeecf] px-2 py-1 text-[10px] font-semibold text-[#7a5a00]">Next test on Saturday</span></div>
              <h2 className="mt-3 text-[44px] font-bold leading-[1.05]">Integrated Science Foundation • Weekly tests</h2>
              <p className="mt-2 max-w-[860px] text-[13px] text-[#7f8ea6]">Plan chapter-wise assessments, track student attempts, and review performance trends across MCQ tests, revision quizzes, and concept checks for the current science batch.</p>
              <div className="mt-3 flex gap-4 text-[12px] text-[#94a3b8]"><span>124 students assigned</span><span>12 tests published</span><span>84% average score</span></div>
            </div>
            <div className="flex gap-2">
              <button className="inline-flex rounded-[7px] bg-[#5b3df6] px-4 py-2 text-[12px] font-semibold text-white"><PlusCircle className="mr-1 h-4 w-4" />Create test</button>
              <button className="rounded-[7px] border border-black/[0.08] bg-white px-4 py-2 text-[12px] font-semibold">Export results</button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-[1.7fr_1fr] gap-3">
          <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
            <h3 className="text-[28px] font-bold">Test overview</h3>
            <p className="text-[12px] text-[#94a3b8]">Monitor participation, average scores, and review turnaround for weekly assessments.</p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="rounded-[8px] border border-black/[0.08] bg-[#f8fafc] p-3"><p className="text-[10px] text-[#94a3b8]">Attempt rate</p><p className="text-[36px] font-bold">93%</p></div>
              <div className="rounded-[8px] border border-black/[0.08] bg-[#f8fafc] p-3"><p className="text-[10px] text-[#94a3b8]">Class average</p><p className="text-[36px] font-bold">84%</p></div>
              <div className="rounded-[8px] border border-black/[0.08] bg-[#f8fafc] p-3"><p className="text-[10px] text-[#94a3b8]">Pending review</p><p className="text-[36px] font-bold">18</p></div>
            </div>
          </section>
          <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
            <h3 className="text-[28px] font-bold">Assessment progress</h3>
            <p className="text-[12px] text-[#94a3b8]">Weekly tests cycle completed for this month.</p>
            <p className="mt-2 text-[44px] font-bold">76%</p>
            <div className="h-2 rounded-full bg-[#edf2ff]"><div className="h-2 w-[76%] rounded-full bg-[#5b3df6]" /></div>
            <div className="mt-3 flex gap-2"><span className="rounded-[12px] bg-[#f1f5f9] px-2 py-1 text-[10px] font-semibold">9 published</span><span className="rounded-[12px] bg-[#dff7ea] px-2 py-1 text-[10px] font-semibold text-[#1d9c64]">3 pending</span></div>
          </section>
        </div>

        <div className="grid grid-cols-[1.7fr_1fr] gap-3">
          <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
            <div className="mb-3 flex items-start justify-between">
              <div><h3 className="text-[28px] font-bold">Upcoming and recent tests</h3><p className="text-[12px] text-[#94a3b8]">Scheduled assessments, auto-graded quizzes, and recently published results.</p></div>
              <button className="h-8 rounded-[7px] border border-black/[0.08] bg-[#f1f5f9] px-3 text-[11px] font-semibold">All tests</button>
            </div>
            <div className="space-y-2">
              {tests.map(([title, time, desc, tags, status, cta]) => (
                <div key={title} className="flex items-center justify-between rounded-[8px] border border-black/[0.06] p-3">
                  <div className="flex min-w-0 items-start gap-2">
                    <FileCheck className="mt-0.5 h-4 w-4 text-[#5b3df6]" />
                    <div className="min-w-0">
                      <p className="truncate text-[12px] font-semibold">{title}</p>
                      <p className="text-[10px] text-[#9aa9c0]">{time}</p>
                      <p className="truncate text-[10px] text-[#9aa9c0]">{desc}</p>
                      <div className="mt-1 flex gap-1">
                        {tags.map((t) => <span key={t} className="rounded-[12px] bg-[#f1f5f9] px-2 py-1 text-[9px]">{t}</span>)}
                      </div>
                    </div>
                  </div>
                  <div className="ml-2 flex items-center gap-2">
                    <span className={`rounded-[12px] px-2 py-1 text-[10px] font-semibold ${status.includes('Scheduled') ? 'bg-[#ffeecf] text-[#7a5a00]' : status.includes('attempted') ? 'bg-[#dff7ea] text-[#1d9c64]' : status.includes('Retake') ? 'bg-[#edf2ff] text-[#5b3df6]' : 'bg-[#f0f4f8] text-[#64748b]'}`}>{status}</span>
                    <button className="rounded-[7px] border border-black/[0.08] bg-white px-3 py-1 text-[10px] font-semibold">{cta}</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <div className="space-y-3">
            <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
              <h3 className="text-[28px] font-bold">This week's checklist</h3>
              <p className="text-[12px] text-[#94a3b8]">Tasks lined up for the weekly test cycle.</p>
              <div className="mt-2 space-y-2">{['Finalize question set', 'Verify answer key', 'Send test reminder'].map((x) => <div key={x} className="rounded-[8px] border border-black/[0.06] p-3"><p className="text-[12px] font-semibold">{x}</p><p className="text-[10px] text-[#9aa9c0]">Pending action</p></div>)}</div>
            </section>
            <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
              <h3 className="text-[28px] font-bold">Recent result highlights</h3>
              <p className="text-[12px] text-[#94a3b8]">Top trends from published tests this week.</p>
              <div className="mt-2 space-y-2">{['Separation techniques recap', 'Matter and its states revision', 'Acids, bases, and salts'].map((x) => <div key={x} className="rounded-[8px] border border-black/[0.06] p-3"><p className="text-[12px] font-semibold">{x}</p><p className="text-[10px] text-[#9aa9c0]">Insights available</p></div>)}</div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

