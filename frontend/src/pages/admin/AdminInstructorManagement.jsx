import React, { useState } from 'react'
import {
  Search,
  Upload,
  Plus,
  Users,
  Calendar,
  Star,
  UserPlus,
  ChevronDown
} from 'lucide-react'

// Figma avatar assets
const AVATAR_RAHUL = 'https://www.figma.com/api/mcp/asset/5b24609b-97ad-4bea-af20-b4f4df404b75'
const AVATAR_AISHA = 'https://www.figma.com/api/mcp/asset/3e187a9c-3e48-41dc-8f03-5affd73e7e5f'
const AVATAR_LIAM = 'https://www.figma.com/api/mcp/asset/ccc04c84-4ac7-4c6c-b67f-2ff1887c4b83'
const AVATAR_NADIA = 'https://www.figma.com/api/mcp/asset/9834fb2c-3d16-47cd-9e85-eaf390f7183a'
const AVATAR_OMAR = 'https://www.figma.com/api/mcp/asset/36623965-019b-4b68-bd68-2bf7a2e38748'

function Avatar({ src, alt = '', className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`h-[36px] w-[36px] rounded-[6px] object-cover ${className}`}
      onError={(e) => {
        e.target.style.display = 'none'
        e.target.nextSibling.style.display = 'flex'
      }}
    />
  )
}

function Pill({ children, variant }) {
  const style =
    variant === 'success'
      ? 'bg-[#2dd4bf] text-[#023b33]'
      : variant === 'warning'
        ? 'bg-[#ffd966] text-[#4b2e00]'
        : variant === 'secondary'
          ? 'bg-[#e8f5ff] text-[#0f172a]'
          : 'bg-[#f1f5f9] text-[#0f172a]'

  return <span className={`inline-flex h-[28px] items-center px-[10px] rounded-[12px] text-[12px] font-medium ${style}`}>{children}</span>
}

function Header() {
  return (
    <header className="flex h-[76px] items-center justify-between border-b border-black/[0.08] bg-white px-7">
        <div>
          <p className="text-[13px] font-medium text-[#94a3b8]">Admin panel</p>
          <h1 className="text-2xl font-bold leading-tight text-[#0f172a]">Instructor Management</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-10 min-w-[280px] items-center gap-2.5 rounded-md border border-black/[0.08] bg-white px-[15px]">
            <Search className="h-[18px] w-[18px] shrink-0 text-[#94a3b8]" />
            <input
              type="search"
              placeholder="Search students, courses, or classes"
              className="min-w-0 flex-1 bg-transparent text-sm text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none"
            />
          </div>
          <button
            type="button"
            className="inline-flex h-10 items-center gap-2 rounded-md border border-black/[0.08] bg-[#e8f5ff] px-[17px] text-sm font-medium text-[#0f172a]"
          >
            <Upload className="h-[18px] w-[18px]" />
            Bulk Upload
          </button>
          <div className="flex items-center gap-3 rounded-md border border-black/[0.08] bg-white px-2.5 py-2">
            <img
              src={AVATAR_RAHUL}
              alt=""
              className="h-9 w-9 shrink-0 rounded-md object-cover"
            />
            <div className="text-left">
              <div className="text-sm font-semibold leading-tight">Rahul Mehta</div>
              <div className="text-[13px] text-[#94a3b8]">Institute Owner</div>
            </div>
          </div>
        </div>
      </header>
  )
}

export default function AdminInstructorManagement() {
  const [activeFilter, setActiveFilter] = useState('All instructors')
  const [availability, setAvailability] = useState({})

  const filters = ['All instructors', 'Pending onboarding', 'High workload', 'Unassigned']

  const instructors = [
    {
      id: 1,
      name: 'Aisha Verma',
      role: 'STEM Explorers • 3 active batches',
      course: 'STEM Explorers',
      courseSub: 'Robotics, Science Lab',
      load: '16 hrs / week',
      capacity: 'Capacity 82%',
      status: 'Active',
      statusVariant: 'success',
      avatar: AVATAR_AISHA,
      actions: ['View', 'Assign'],
    },
    {
      id: 2,
      name: 'Liam Carter',
      role: 'Coding for Kids • 2 active batches',
      course: 'Coding for Kids',
      courseSub: 'Scratch, Python Basics',
      load: '19 hrs / week',
      capacity: 'Capacity 94%',
      status: 'High workload',
      statusVariant: 'warning',
      avatar: AVATAR_LIAM,
      actions: ['Reassign', 'Profile'],
    },
    {
      id: 3,
      name: 'Nadia Brown',
      role: 'Creative English • Pending course mapping',
      course: 'Not assigned',
      courseSub: 'Ready for spoken English',
      load: '0 hrs / week',
      capacity: 'Capacity open',
      status: 'Onboarding',
      statusVariant: 'secondary',
      avatar: AVATAR_NADIA,
      actions: ['Map Course'],
    },
    {
      id: 4,
      name: 'Omar Saleh',
      role: 'Math Mastery • Evening batches',
      course: 'Math Mastery Live',
      courseSub: 'Algebra, Olympiad prep',
      load: '12 hrs / week',
      capacity: 'Capacity 61%',
      status: 'Available',
      statusVariant: 'success',
      avatar: AVATAR_OMAR,
      actions: ['Schedule', 'Assign'],
    },
  ]

  const onboardingSteps = [
    {
      num: 1,
      title: 'Create profile',
      desc: 'Add basic details, subject expertise, and contact information for shortlisted instructors.',
    },
    {
      num: 2,
      title: 'Verify credentials',
      desc: 'Review demo class notes, teaching experience, and curriculum familiarity before approval.',
    },
    {
      num: 3,
      title: 'Assign courses and batches',
      desc: 'Map the instructor to appropriate courses, set capacity, and publish their upcoming schedule.',
    },
    {
      num: 4,
      title: 'Enable live class tools',
      desc: 'Grant access to Zoom or Meet setup, shared resources, and classroom communication templates.',
    },
  ]

  const availabilityDays = ['Mon PM', 'Wed PM', 'Fri AM', 'Sat AM', 'Sat PM', 'Sun PM']

  return (
    <div className="min-h-full bg-[#F7FAFD]">
      <Header />

      <div className="flex flex-col gap-[24px] p-[28px]">
        {/* Hero Section */}
        <section className="border border-black/[0.08] rounded-[8px] bg-gradient-to-br from-white to-[#e8f5ff] p-[25px]">
          <div className="flex flex-col gap-[11px]">
            <div className="bg-[#ffd966] inline-flex items-center px-[10px] py-[6.5px] rounded-[12px] w-fit">
              <span className="text-[12px] font-medium text-[#4b2e00]">Instructor workspace</span>
            </div>

            <h1 className="text-[28px] font-bold text-[#0f172a] leading-tight">
              Create, onboard, and assign instructors across all active programs.
            </h1>

            <p className="text-[14px] text-[#94a3b8] max-w-2xl">
              Review availability, teaching load, learner ratings, and course mapping from one dedicated inner screen. 
              The page is optimized for quickly creating new instructor profiles and assigning them to the right batches.
            </p>
          </div>

          <div className="mt-4 flex items-center gap-[12px]">
            <button className="bg-[#5b3df6] flex items-center gap-[8px] h-[40px] px-[16px] rounded-[6px] text-white text-[14px] font-medium hover:bg-[#4a2ed8]">
              <Plus className="h-[18px] w-[18px]" />
              Create Instructor
            </button>
            <button className="border border-black/[0.08] bg-white h-[40px] px-[17px] rounded-[6px] text-[14px] font-medium text-[#0f172a] hover:bg-gray-50">
              Assign Courses
            </button>
            <button className="border border-black/[0.08] bg-white h-[40px] px-[17px] rounded-[6px] text-[14px] font-medium text-[#0f172a] hover:bg-gray-50">
              This week
            </button>
          </div>
        </section>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white border border-black/[0.08] rounded-[8px] p-[19px]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-[14px] font-medium text-[#94a3b8]">Total Instructors</div>
                <div className="text-[30px] font-bold text-[#0f172a]">42</div>
              </div>
              <div className="bg-[#e8f5ff] rounded-[6px] p-2">
                <Users className="h-[18px] w-[18px] text-[#5b3df6]" />
              </div>
            </div>
            <div className="bg-[#2dd4bf] inline-flex items-center px-[10px] py-1 rounded-[12px]">
              <span className="text-[12px] font-medium text-[#023b33]">+4 this month</span>
            </div>
          </div>

          <div className="bg-white border border-black/[0.08] rounded-[8px] p-[19px]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-[14px] font-medium text-[#94a3b8]">Active Batches</div>
                <div className="text-[30px] font-bold text-[#0f172a]">31</div>
              </div>
              <div className="bg-[#e8f5ff] rounded-[6px] p-2">
                <Calendar className="h-[18px] w-[18px] text-[#5b3df6]" />
              </div>
            </div>
            <div className="bg-[#f0f4f8] inline-flex items-center px-[10px] py-1 rounded-[12px]">
              <span className="text-[12px] font-medium text-[#94a3b8]">7 shared across 2 teachers</span>
            </div>
          </div>

          <div className="bg-white border border-black/[0.08] rounded-[8px] p-[19px]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-[14px] font-medium text-[#94a3b8]">Average Rating</div>
                <div className="text-[30px] font-bold text-[#0f172a]">4.8</div>
              </div>
              <div className="bg-[#e8f5ff] rounded-[6px] p-2">
                <Star className="h-[18px] w-[18px] text-[#5b3df6]" />
              </div>
            </div>
            <div className="bg-[#f0f4f8] inline-flex items-center px-[10px] py-1 rounded-[12px]">
              <span className="text-[12px] font-medium text-[#94a3b8]">Based on 5,284 reviews</span>
            </div>
          </div>

          <div className="bg-white border border-black/[0.08] rounded-[8px] p-[19px]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-[14px] font-medium text-[#94a3b8]">User applications</div>
                <div className="text-[30px] font-bold text-[#0f172a]">14</div>
              </div>
              <div className="bg-[#e8f5ff] rounded-[6px] p-2">
                <UserPlus className="h-[18px] w-[18px] text-[#5b3df6]" />
              </div>
            </div>
            <div className="bg-[#ffd966] inline-flex items-center px-[10px] py-1 rounded-[12px]">
              <span className="text-[12px] font-medium text-[#4b2e00]">Pending onboarding</span>
            </div>
          </div>
        </div>

        {/* Additional Stats Row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white border border-black/[0.08] rounded-[8px] p-[19px]">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[14px] font-medium text-[#94a3b8]">Pending onboarding</div>
                <div className="text-[30px] font-bold text-[#0f172a]">5</div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-black/[0.08] rounded-[8px] p-[19px]">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[14px] font-medium text-[#94a3b8]">Unassigned courses</div>
                <div className="text-[30px] font-bold text-[#0f172a]">3</div>
              </div>
            </div>
            <div className="mt-2 text-[12px] text-orange-500">Need navigating today</div>
          </div>
        </div>

        {/* Instructor Directory */}
        <div className="bg-white border border-black/[0.08] rounded-[8px] p-[21px]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-[18px] font-bold text-[#0f172a]">Instructor directory</h2>
              <p className="text-[13px] text-[#94a3b8] mt-1">
                Monitor course mapping, teaching load, onboarding stage, and next actions from a single admin list.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="border border-black/[0.08] bg-white h-[40px] px-[17px] rounded-[6px] text-[14px] font-medium text-[#0f172a] hover:bg-gray-50">
                Bulk Invite
              </button>
              <button className="bg-[#5b3df6] h-[40px] px-[16px] rounded-[6px] text-[14px] font-medium text-white hover:bg-[#4a2ed8]">
                Create Instructor
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center justify-between border-b border-black/[0.08] pb-3 mb-4">
            <div className="flex gap-1">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-3 py-1 rounded-full text-[12px] transition-colors ${
                    activeFilter === f
                      ? 'bg-[#ede7ff] text-[#5b3df6] font-medium'
                      : 'text-[#94a3b8] hover:bg-gray-50'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="flex gap-1.5">
              <button className="px-2.5 py-1 border border-black/[0.08] rounded-lg text-[11px] text-[#64748b] hover:bg-gray-50">
                Availability
              </button>
              <button className="px-2.5 py-1 border border-black/[0.08] rounded-lg text-[11px] text-[#64748b] hover:bg-gray-50">
                Ratings
              </button>
            </div>
          </div>

          {/* Instructor Cards */}
          <div className="space-y-3">
            {instructors.map((inst) => (
              <div key={inst.id} className="flex items-center justify-between p-3 border border-black/[0.08] rounded-lg hover:bg-gray-50/50">
                <div className="flex items-center gap-3 flex-1">
                  <Avatar src={inst.avatar} alt={inst.name} className="h-[48px] w-[48px] rounded-full" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-[14px] text-[#0f172a]">{inst.name}</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <div>
                        <div className="text-[12px] font-medium text-[#0f172a]">{inst.course}</div>
                        <div className="text-[11px] text-[#94a3b8]">{inst.courseSub}</div>
                      </div>
                      <div className="border-l border-black/[0.08] pl-4">
                        <div className="text-[12px] font-medium text-[#0f172a]">{inst.load}</div>
                        <div className="text-[11px] text-[#94a3b8]">{inst.capacity}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Pill variant={inst.statusVariant}>{inst.status}</Pill>
                  <div className="flex gap-1.5">
                    {inst.actions.map((action) => (
                      <button
                        key={action}
                        className={`px-2 py-1 rounded text-[10px] font-medium transition-colors ${
                          action === 'Assign' || action === 'Map Course' || action === 'Schedule'
                            ? 'bg-[#ede7ff] text-[#5b3df6] hover:bg-[#e0d9ff]'
                            : 'border border-black/[0.08] text-[#64748b] hover:bg-gray-50'
                        }`}
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Create & Onboard Flow */}
        <div className="bg-white border border-black/[0.08] rounded-[8px] p-[21px]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-[18px] font-bold text-[#0f172a]">Create & onboard flow</h2>
              <p className="text-[13px] text-[#94a3b8] mt-1">
                A simple operational checklist for bringing new instructors into the institute.
              </p>
            </div>
            <div className="bg-[#ffd966] px-[10px] py-1 rounded-[12px]">
              <span className="text-[12px] font-medium text-[#4b2e00]">5 pending</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {onboardingSteps.map((step) => (
              <div key={step.num} className="flex flex-col gap-2">
                <div className="w-8 h-8 rounded-full bg-[#ede7ff] text-[#5b3df6] flex items-center justify-center text-sm font-bold">
                  {step.num}
                </div>
                <h3 className="font-semibold text-[14px] text-[#0f172a]">{step.title}</h3>
                <p className="text-[12px] text-[#94a3b8] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Create */}
        <div className="bg-white border border-black/[0.08] rounded-[8px] p-[21px]">
          <h2 className="text-[18px] font-bold text-[#0f172a] mb-1">Quick create</h2>
          <p className="text-[13px] text-[#94a3b8] mb-6">
            Prepare a new instructor record without leaving this page.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-[12px] font-medium text-[#0f172a] block mb-1">Instructor name</label>
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full px-3 py-2 border border-black/[0.08] rounded-[6px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
              />
            </div>
            <div>
              <label className="text-[12px] font-medium text-[#0f172a] block mb-1">Primary expertise</label>
              <div className="relative">
                <select className="w-full px-3 py-2 border border-black/[0.08] rounded-[6px] text-[13px] text-[#0f172a] bg-white focus:outline-none focus:ring-2 focus:ring-[#5b3df6] appearance-none">
                  <option>Coding, STEM, English, Math</option>
                  <option>Coding</option>
                  <option>STEM</option>
                  <option>English</option>
                  <option>Math</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94a3b8]" />
              </div>
            </div>
            <div>
              <label className="text-[12px] font-medium text-[#0f172a] block mb-1">Assigned course</label>
              <div className="relative">
                <select className="w-full px-3 py-2 border border-black/[0.08] rounded-[6px] text-[13px] text-[#0f172a] bg-white focus:outline-none focus:ring-2 focus:ring-[#5b3df6] appearance-none">
                  <option>Select course and initial batch</option>
                  <option>STEM Explorers</option>
                  <option>Coding for Kids</option>
                  <option>Math Mastery Live</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94a3b8]" />
              </div>
            </div>
            <div>
              <label className="text-[12px] font-medium text-[#0f172a] block mb-1">Availability</label>
              <div className="grid grid-cols-3 gap-2">
                {availabilityDays.map((day) => (
                  <button
                    key={day}
                    onClick={() => setAvailability((prev) => ({ ...prev, [day]: !prev[day] }))}
                    className={`py-1.5 rounded text-[11px] font-medium transition-colors ${
                      availability[day]
                        ? 'bg-[#ede7ff] text-[#5b3df6] border border-[#5b3df6]/30'
                        : 'border border-black/[0.08] text-[#64748b] hover:bg-gray-50'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button className="px-4 py-2 bg-[#5b3df6] text-white text-[13px] font-semibold rounded-[6px] hover:bg-[#4a2ed8]">
              Create Instructor
            </button>
            <button className="px-4 py-2 border border-black/[0.08] text-[13px] text-[#64748b] rounded-[6px] hover:bg-gray-50">
              Save as Draft
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}