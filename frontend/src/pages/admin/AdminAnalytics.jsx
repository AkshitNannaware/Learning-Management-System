import React from 'react'
import { Search, Upload, Filter, CalendarDays } from 'lucide-react'

const AVATAR_RAHUL = 'https://www.figma.com/api/mcp/asset/5b24609b-97ad-4bea-af20-b4f4df404b75'

function Header() {
  return (
    <header className="flex h-[76px] items-center justify-between border-b border-black/[0.08] bg-white px-7">
      <div>
        <p className="text-[13px] font-medium text-[#94a3b8]">Client admin panel</p>
        <h1 className="text-2xl font-bold leading-tight text-[#0f172a]">Analytics</h1>
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

function Stat({ label, value, chip, chipCls }) {
  return (
    <div className="rounded-[8px] border border-black/[0.08] bg-white p-[16px]">
      <p className="text-[11px] text-[#94a3b8]">{label}</p>
      <p className="mt-2 text-[36px] font-bold leading-none text-[#111827]">{value}</p>
      <span className={`mt-2 inline-flex rounded-[12px] px-2 py-1 text-[10px] font-medium ${chipCls}`}>{chip}</span>
    </div>
  )
}

export default function AdminAnalytics() {
  const bars = [50, 61, 71, 75, 74, 73, 72]
  return (
    <div className="min-h-full bg-[#f6f8fa]">
      <Header />
      <div className="space-y-4 p-5">
        <section className="grid grid-cols-[1.7fr_1fr] gap-3 rounded-[8px] border border-black/[0.08] bg-[#eaf2fb] p-4">
          <div>
            <span className="inline-flex rounded-[12px] bg-[#ffd966] px-[10px] py-[5px] text-[11px] font-medium text-[#4b2e00]">Analytics overview</span>
            <h2 className="mt-3 max-w-[760px] text-[28px] font-bold leading-tight text-[#0f172a]">Track course performance, learner engagement, and revenue momentum from one analytics workspace.</h2>
            <p className="mt-2 max-w-[760px] text-[14px] text-[#94a3b8]">Review weekly trends, spot drop-offs early, and compare top-performing programs without leaving the institute dashboard.</p>
            <div className="mt-4 flex gap-2">
              <button className="inline-flex h-9 items-center gap-1 rounded-[7px] bg-[#5b3df6] px-3 text-[12px] font-semibold text-white"><Filter className="h-4 w-4" />Apply Filters</button>
              <button className="inline-flex h-9 items-center gap-1 rounded-[7px] border border-black/[0.08] bg-white px-3 text-[12px] font-semibold text-[#111827]"><CalendarDays className="h-4 w-4" />Last 30 days</button>
            </div>
          </div>
          <div className="space-y-2">
            <div className="rounded-[8px] border border-black/[0.08] bg-white p-3">
              <p className="text-[10px] text-[#94a3b8]">Reporting freshness</p>
              <p className="text-[42px] font-bold leading-none text-[#111827]">09:15</p>
              <p className="text-[11px] text-[#94a3b8]">Last synced today</p>
            </div>
            <div className="rounded-[8px] border border-black/[0.08] bg-white p-3">
              <p className="text-[10px] text-[#94a3b8]">Warnings</p>
              <p className="text-[22px] font-bold text-[#111827]">3 courses need attention</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-4 gap-3">
          <Stat label="Weekly active learners" value="6,248" chip="+4.1% vs last week" chipCls="bg-[#2dd4bf] text-[#023b33]" />
          <Stat label="Average completion rate" value="78%" chip="+5 points" chipCls="bg-[#2dd4bf] text-[#023b33]" />
          <Stat label="Avg. watch time" value="42 min" chip="Steady this week" chipCls="bg-[#f0f4f8] text-[#64748b]" />
          <Stat label="Revenue from enrollments" value="₹2.4L" chip="+2 funding flagged" chipCls="bg-[#ffd966] text-[#4b2e00]" />
        </div>

        <div className="grid grid-cols-[1.6fr_1fr] gap-3">
          <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h3 className="text-[22px] font-bold text-[#111827]">Performance trend</h3>
                <p className="text-[12px] text-[#94a3b8]">Enrollment and engagement trend across the last 7 days.</p>
              </div>
              <div className="flex gap-1 text-[11px]">
                <button className="rounded-[7px] border border-black/[0.08] bg-[#ede7ff] px-2 py-1">Weekly</button>
                <button className="rounded-[7px] border border-black/[0.08] bg-white px-2 py-1">Monthly</button>
                <button className="rounded-[7px] border border-black/[0.08] bg-white px-2 py-1">By course</button>
              </div>
            </div>
            <div className="flex h-[190px] items-end justify-between rounded-[8px] bg-[#f8fafc] px-4 pb-4">
              {bars.map((v, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className="w-10 rounded-t-[4px] bg-gradient-to-b from-[#f7b267] to-[#5b3df6]" style={{ height: `${v * 1.2}px` }} />
                  <span className="text-[9px] text-[#94a3b8]">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="rounded-[8px] bg-[#f1f5f9] p-2"><p className="text-[10px] text-[#94a3b8]">Peak day</p><p className="text-[16px] font-bold text-[#111827]">Saturday</p></div>
              <div className="rounded-[8px] bg-[#f1f5f9] p-2"><p className="text-[10px] text-[#94a3b8]">Best conversion</p><p className="text-[16px] font-bold text-[#111827]">14.8%</p></div>
              <div className="rounded-[8px] bg-[#f1f5f9] p-2"><p className="text-[10px] text-[#94a3b8]">Active learners</p><p className="text-[16px] font-bold text-[#111827]">186</p></div>
            </div>
          </section>

          <div className="space-y-3">
            <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
              <h3 className="text-[20px] font-bold text-[#111827]">Learner segments</h3>
              <p className="text-[12px] text-[#94a3b8]">Where active learners are spending most time.</p>
              <div className="mx-auto mt-3 grid w-[170px] place-items-center">
                <div className="grid h-[130px] w-[130px] place-items-center rounded-full" style={{ background: 'conic-gradient(#5b3df6 0 68%, #9ca3af 68% 87%, #f7b267 87% 100%)' }}>
                  <div className="grid h-[86px] w-[86px] place-items-center rounded-full bg-white text-center">
                    <p className="text-[32px] font-bold leading-none text-[#111827]">68%</p>
                    <p className="text-[10px] text-[#94a3b8]">highly engaged</p>
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1 text-[11px]">
                <div className="flex justify-between"><span className="text-[#5b3df6]">● Highly engaged</span><span>68%</span></div>
                <div className="flex justify-between"><span className="text-[#9ca3af]">● Needs nudges</span><span>19%</span></div>
                <div className="flex justify-between"><span className="text-[#f7b267]">● Inactive</span><span>13%</span></div>
              </div>
            </section>

            <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
              <h3 className="text-[20px] font-bold text-[#111827]">Course scorecards</h3>
              <p className="text-[12px] text-[#94a3b8]">Completion health by top programs.</p>
              {[
                ['STEM Explorers', 94],
                ['Coding for Kids', 82],
                ['Creative English', 88],
                ['Math Mastery Live', 67],
              ].map(([name, pct]) => (
                <div key={name} className="mt-3">
                  <div className="mb-1 flex justify-between text-[11px]"><span>{name}</span><span>{pct}%</span></div>
                  <div className="h-2 rounded-full bg-[#edf2ff]"><div className="h-2 rounded-full bg-[#5b3df6]" style={{ width: `${pct}%` }} /></div>
                </div>
              ))}
            </section>
          </div>
        </div>

        <div className="grid grid-cols-[1.6fr_1fr] gap-3">
          <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
            <div className="mb-3 flex items-start justify-between">
              <div>
                <h3 className="text-[22px] font-bold text-[#111827]">Course performance table</h3>
                <p className="text-[12px] text-[#94a3b8]">Compare engagement, completion, and revenue by course.</p>
              </div>
              <button className="h-8 rounded-[7px] border border-black/[0.08] bg-[#f1f5f9] px-3 text-[11px] font-medium">View all courses</button>
            </div>
            <div className="overflow-hidden rounded-[8px] border border-black/[0.08]">
              <table className="w-full text-left text-[11px]">
                <thead className="bg-[#f8fafc] text-[#94a3b8]">
                  <tr><th className="px-3 py-2">Course</th><th className="px-3 py-2">Learners</th><th className="px-3 py-2">Completion</th><th className="px-3 py-2">Revenue</th></tr>
                </thead>
                <tbody>
                  {[
                    ['STEM Explorers Program', '1,867', '94%', '₹78L', 'Top performer this month'],
                    ['Coding for Kids Bootcamp', '1,356', '82%', '₹54L', 'Strong week-over-week growth'],
                    ['Creative English Club', '934', '88%', '₹24L', 'Weekend sessions perform best'],
                    ['Math Mastery Live', '718', '67%', '₹28L', 'Drop-off detected after module 4'],
                  ].map(([c, l, cp, r, s]) => (
                    <tr key={c} className="border-t border-black/[0.06]">
                      <td className="px-3 py-2"><p className="font-semibold text-[#111827]">{c}</p><p className="text-[10px] text-[#94a3b8]">{s}</p></td>
                      <td className="px-3 py-2">{l}</td>
                      <td className="px-3 py-2"><span className={`rounded-[12px] px-2 py-1 ${cp === '94%' || cp === '88%' ? 'bg-[#2dd4bf]/25 text-[#0b7d66]' : cp === '82%' ? 'bg-[#ffd966]/45 text-[#7a5a00]' : 'bg-[#f0f4f8] text-[#64748b]'}`}>{cp}</span></td>
                      <td className="px-3 py-2">{r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
            <h3 className="text-[20px] font-bold text-[#111827]">Key insights</h3>
            <p className="text-[12px] text-[#94a3b8]">Which changes matter this week</p>
            <div className="mt-3 space-y-2">
              {[
                ['Weekend engagement is climbing', 'Saturday sessions are up 18% week over week, led by STEM and coding cohorts.'],
                ['Math Mastery needs intervention', 'Completion dropped after module 4. Consider adding a live recap session this week.'],
                ['Revenue remains healthy', 'New enrollment offset refunds, keeping net revenue this week ahead of plan.'],
              ].map(([t, d]) => (
                <div key={t} className="rounded-[8px] border border-black/[0.06] bg-[#f8fafc] p-3">
                  <p className="text-[12px] font-semibold text-[#111827]">{t}</p>
                  <p className="mt-1 text-[10px] text-[#94a3b8]">{d}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

