import React from 'react'
import { Search, Share2, Plus, CalendarDays, MapPin, Users } from 'lucide-react'

const AVATAR = 'https://www.figma.com/api/mcp/asset/5b24609b-97ad-4bea-af20-b4f4df404b75'

function Header() {
  return (
    <header className="flex h-[72px] items-center justify-between border-b border-black/[0.08] bg-white px-5">
      <div>
        <p className="text-[11px] text-[#94a3b8]">Instructor panel / School Events</p>
        <h1 className="text-[34px] font-bold leading-none text-[#111827]">School events</h1>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex h-9 min-w-[280px] items-center gap-2 rounded-[7px] border border-black/[0.08] bg-white px-3">
          <Search className="h-4 w-4 text-[#94a3b8]" />
          <input className="min-w-0 flex-1 bg-transparent text-[12px] placeholder:text-[#94a3b8] focus:outline-none" placeholder="Search events, classes..." />
        </div>
        <button className="inline-flex h-9 items-center gap-1 rounded-[7px] border border-black/[0.08] bg-white px-3 text-[12px] font-semibold"><Share2 className="h-4 w-4" />Share</button>
        <div className="flex items-center gap-2 rounded-[7px] border border-black/[0.08] bg-white px-2 py-1">
          <img src={AVATAR} alt="" className="h-8 w-8 rounded-full object-cover" />
          <div><p className="text-[12px] font-semibold leading-none">Aarohi Shah</p><p className="text-[10px] text-[#94a3b8]">Instructor</p></div>
        </div>
      </div>
    </header>
  )
}

export default function InstructorSchoolEvents() {
  const events = [
    ['Annual Science Fair', 'Student project showcase with live judging, invited parents, and inter-class innovation awards.', 'Apr 12', '7:00 AM to 2:00 PM', 'Main auditorium', '420 attendees', 'View'],
    ['Parent teacher meeting', 'Grade-wise meetings for progress review, attendance feedback, and individual parent discussions.', 'Apr 18', '8:30 AM to 12:30 PM', 'Senior block classrooms', '280 families', 'Review'],
    ['Inter-house sports day', 'Track events, team points, house announcements, and volunteer allocation across the school ground.', 'Apr 24', '7:30 AM to 1:30 PM', 'School ground', '680 students', 'Open'],
    ['Student council induction', 'New council onboarding, leadership briefing, and student representative introductions.', 'May 03', '11:00 AM to 12:00 PM', 'Assembly hall', '95 invitees', 'Edit'],
  ]

  return (
    <div className="min-h-full bg-[#f6f8fa]">
      <Header />
      <div className="space-y-4 p-3">
        <section className="rounded-[8px] border border-black/[0.08] bg-[#eef6ff] p-5">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex gap-2"><span className="rounded-[12px] bg-[#ede7ff] px-2 py-1 text-[10px] font-semibold text-[#5b3df6]">Academic year 2025</span><span className="rounded-[12px] bg-[#dff7ea] px-2 py-1 text-[10px] font-semibold text-[#1d9c64]">12 upcoming events</span></div>
              <h2 className="mt-3 text-[44px] font-bold leading-[1.05]">Annual school events and activities</h2>
              <p className="mt-2 max-w-[850px] text-[13px] text-[#7f8ea6]">Plan assemblies, competitions, parent meetings, and celebration days across the term. Track status, coordinators, and participation from a single schedule view.</p>
              <div className="mt-3 flex gap-4 text-[12px] text-[#94a3b8]"><span>1,240 expected participants this month</span><span>8 major events in the next 30 days</span><span>Auditorium, sports ground, and main hall booked</span></div>
            </div>
            <div className="flex gap-2">
              <button className="inline-flex rounded-[7px] bg-[#5b3df6] px-4 py-2 text-[12px] font-semibold text-white"><Plus className="mr-1 h-4 w-4" />Create event</button>
              <button className="rounded-[7px] border border-black/[0.08] bg-white px-4 py-2 text-[12px] font-semibold">Export calendar</button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-[1.7fr_1fr] gap-3">
          <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
            <h3 className="text-[28px] font-bold">Events overview</h3>
            <p className="text-[12px] text-[#94a3b8]">Monitor planned activities, approvals, and venue coordination.</p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="rounded-[8px] border border-black/[0.08] bg-[#f8fafc] p-3"><p className="text-[10px] text-[#94a3b8]">Scheduled events</p><p className="text-[36px] font-bold">18</p></div>
              <div className="rounded-[8px] border border-black/[0.08] bg-[#f8fafc] p-3"><p className="text-[10px] text-[#94a3b8]">Pending approvals</p><p className="text-[36px] font-bold">4</p></div>
              <div className="rounded-[8px] border border-black/[0.08] bg-[#f8fafc] p-3"><p className="text-[10px] text-[#94a3b8]">Confirmed venues</p><p className="text-[36px] font-bold">11</p></div>
            </div>
          </section>
          <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
            <h3 className="text-[28px] font-bold">This month</h3>
            <p className="text-[12px] text-[#94a3b8]">Current readiness and event execution pace.</p>
            <p className="mt-2 text-[44px] font-bold">76%</p>
            <div className="h-2 rounded-full bg-[#edf2ff]"><div className="h-2 w-[76%] rounded-full bg-[#5b3df6]" /></div>
            <div className="mt-3 flex gap-2"><span className="rounded-[12px] bg-[#f1f5f9] px-2 py-1 text-[10px] font-semibold">14 planned</span><span className="rounded-[12px] bg-[#dff7ea] px-2 py-1 text-[10px] font-semibold text-[#1d9c64]">5 fully ready</span></div>
          </section>
        </div>

        <div className="grid grid-cols-[1.7fr_1fr] gap-3">
          <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
            <div className="mb-3 flex items-start justify-between">
              <div><h3 className="text-[28px] font-bold">Upcoming events</h3><p className="text-[12px] text-[#94a3b8]">Key school activities, celebrations, and meetings planned this term.</p></div>
              <button className="h-8 rounded-[7px] border border-black/[0.08] bg-[#f1f5f9] px-3 text-[11px] font-semibold">All events</button>
            </div>
            <div className="space-y-2">
              {events.map(([t, d, date, time, venue, count, cta]) => (
                <div key={t} className="flex items-center justify-between rounded-[8px] border border-black/[0.06] p-3">
                  <div className="flex items-start gap-3">
                    <div className="rounded-[6px] bg-[#f8fafc] px-2 py-1 text-center"><p className="text-[9px] text-[#94a3b8]">{date.split(' ')[0]}</p><p className="text-[18px] font-bold">{date.split(' ')[1]}</p></div>
                    <div>
                      <p className="text-[12px] font-semibold">{t}</p>
                      <p className="max-w-[520px] truncate text-[10px] text-[#9aa9c0]">{d}</p>
                      <div className="mt-1 flex gap-3 text-[10px] text-[#9aa9c0]"><span className="inline-flex items-center gap-1"><CalendarDays className="h-3 w-3" />{time}</span><span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{venue}</span><span className="inline-flex items-center gap-1"><Users className="h-3 w-3" />{count}</span></div>
                    </div>
                  </div>
                  <button className="rounded-[7px] border border-black/[0.08] bg-white px-3 py-1 text-[10px] font-semibold">{cta}</button>
                </div>
              ))}
            </div>
          </section>
          <div className="space-y-3">
            <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
              <h3 className="text-[28px] font-bold">Quick actions</h3>
              <p className="text-[12px] text-[#94a3b8]">Frequently used event management shortcuts.</p>
              <div className="mt-2 space-y-2">{['Create a new event', 'Check venue availability', 'Assign staff coordinators'].map((x) => <div key={x} className="rounded-[8px] border border-black/[0.06] p-3"><p className="text-[12px] font-semibold">{x}</p><p className="text-[10px] text-[#9aa9c0]">Action shortcut</p></div>)}</div>
            </section>
            <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
              <h3 className="text-[28px] font-bold">Notices</h3>
              <p className="text-[12px] text-[#94a3b8]">Important reminders before the next event cycle.</p>
              <div className="mt-2 space-y-2">{['Volunteer briefing due today', 'Science fair booths approved', 'Transport request pending'].map((x) => <div key={x} className="rounded-[8px] border border-black/[0.06] p-3"><p className="text-[12px] font-semibold">{x}</p><p className="text-[10px] text-[#9aa9c0]">Review and confirm</p></div>)}</div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

