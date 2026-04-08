// import React from 'react'
// import { Search, Bell, PlayCircle, BookOpen, Video, Trophy, Users, BookOpen as BookIcon, GraduationCap, Wallet, BarChart3, Upload, Plus } from 'lucide-react'

// const AVATAR = 'https://www.figma.com/api/mcp/asset/5b24609b-97ad-4bea-af20-b4f4df404b75'

// function TopBar() {
//   return (
//     <header className="flex h-[76px] items-center justify-between border-b border-black/[0.08] bg-white px-[28px]">
//       <div className="relative shrink-0">
//         <div className="flex flex-col font-medium h-[16px] justify-center leading-[0] text-[#94a3b8] text-[13px]">
//           Student panel
//         </div>
//         <div className="flex flex-col font-bold h-[29px] justify-center leading-[0] text-[#0f172a] text-[24px]">
//           Learner experience
//         </div>
//       </div>
//       <div className="flex items-center gap-[12px]">
//         <div className="bg-white border border-black/[0.08] flex items-center gap-[10px] h-[40px] min-w-[280px] px-[15px] py-[0.25px] relative rounded-[6px]">
//           <Search className="h-[18px] w-[18px] text-[#94a3b8]" />
//           <input
//             className="min-w-0 flex-1 bg-transparent text-[14px] text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none"
//             placeholder="Search modules, tests..."
//           />
//         </div>
//         <button className="bg-white border border-black/[0.08] flex items-center gap-[8px] h-[40px] justify-center px-[17px] py-[0.25px] rounded-[6px] shrink-0">
//           <Bell className="h-[18px] w-[18px] text-[#0f172a]" />
//           <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">
//             Notifications
//           </div>
//         </button>
//         <div className="bg-white border border-black/[0.08] flex items-center gap-[12px] px-[11px] py-[9px] rounded-[6px]">
//           <img src={AVATAR} alt="" className="h-[36px] w-[36px] rounded-[6px] object-cover" />
//           <div className="flex flex-col gap-[0.01px] items-start">
//             <div className="flex flex-col font-semibold h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">
//               Aarohi Shah
//             </div>
//             <div className="flex flex-col font-normal h-[15px] justify-center leading-[0] text-[#94a3b8] text-[13px]">
//               Learner
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// function Pill({ children, variant }) {
//   const style =
//     variant === 'success'
//       ? 'bg-[#2dd4bf] text-[#023b33]'
//       : variant === 'warning'
//         ? 'bg-[#ffd966] text-[#4b2e00]'
//         : variant === 'primary'
//           ? 'bg-[#5b3df6] text-white'
//           : 'bg-[#e8f5ff] text-[#0f172a]'

//   return <span className={`inline-flex h-[28px] items-center px-[10px] rounded-[12px] text-[12px] font-medium ${style}`}>{children}</span>
// }

// export default function StudentDashboard() {
//   const stats = [
//     ['Courses in progress', '7', '3 due soon'],
//     ['Live classes this week', '4', '2 reminders now'],
//     ['Quiz attempts', '18', '5 pending review'],
//     ['Certificates earned', '5', '2 new this month'],
//     ['Learning streak', '12', 'days active'],
//   ]

//   return (
//     <div className="min-h-full bg-[#F7FAFD]">
//       <TopBar />
//       <div className="bg-gradient-to-b flex flex-col from-[#f6f8fa] gap-[24px] h-full p-[28px] to-[#f7fcff]">
        
//         {/* Hero Section */}
//         <section className="border border-black/[0.08] border-solid content-stretch flex flex-col items-start pb-[23px] pt-[25px] px-[25px] relative rounded-[8px] shrink-0 w-full bg-gradient-to-br from-white to-[#e8f5ff]">
//           <div className="flex flex-col gap-[11px] items-start relative shrink-0">
//             <div className="bg-[#ffd966] flex items-center px-[10px] py-[6.5px] rounded-[12px] shrink-0">
//               <div className="flex flex-col font-medium h-[15px] justify-center leading-[0] text-[#4b2e00] text-[12px]">
//                 Student journey • Updated
//               </div>
//             </div>
//             <div className="max-w-[850px] text-[35px] font-bold leading-[1.2] text-[#0f172a]">
//               Continue courses, access the new e-library, join live classes, and complete quizzes from one place.
//             </div>
//             <div className="max-w-[750px] text-[13.9px] text-[#94a3b8]">
//               A learner dashboard for course discovery, class schedule, progress tracking, saved courses, e-library resources, live class reminders, and next-step digital study pathways with time-based goals.
//             </div>
//           </div>
//           <div className="mt-4 flex items-center gap-[12px]">
//             <button className="bg-[#5b3df6] flex items-center gap-[8px] h-[40px] justify-center px-[16px] rounded-[6px] shrink-0">
//               <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-white text-[14px]">Continue Learning</div>
//             </button>
//             <button className="border border-black/[0.08] flex items-center gap-[8px] h-[40px] justify-center px-[17px] py-[0.25px] rounded-[6px] shrink-0 bg-white">
//               <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">Open E-Library</div>
//             </button>
//           </div>
//         </section>

//         {/* Stats Row */}
//         <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(5,minmax(0,1fr))]">
//           {stats.map(([title, value, meta]) => (
//             <div key={title} className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[12px] items-start p-[16px] rounded-[8px]">
//               <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#94a3b8] text-[13px]">
//                 {title}
//               </div>
//               <div className="flex flex-col font-bold h-[36px] justify-center leading-[0] text-[#0f172a] text-[32px] tracking-[-0.6px]">
//                 {value}
//               </div>
//               <div className="bg-[#2dd4bf] h-[28px] rounded-[12px] relative flex items-center px-[10px]">
//                 <div className="flex flex-col font-medium h-[15px] justify-center leading-[0] text-[#023b33] text-[11px]">
//                   {meta}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Content Grid */}
//         <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[1.45fr_1fr]">
//           {/* Left Column */}
//           <div className="flex flex-col gap-[24px]">
//             {/* Course browsing */}
//             <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
//               <div className="flex items-center justify-between w-full">
//                 <div>
//                   <h3 className="font-bold text-[18px] text-[#0f172a]">Course browsing</h3>
//                   <p className="text-[13px] text-[#94a3b8] mt-[4px]">Discover and resume your learning journey</p>
//                 </div>
//                 <button className="border border-black/[0.08] flex items-center gap-[8px] h-[36px] justify-center px-[14px] rounded-[6px] bg-white">
//                   <div className="flex flex-col font-medium h-[15px] justify-center leading-[0] text-[#5b3df6] text-[12px]">Explore</div>
//                 </button>
//               </div>
//               <div className="flex flex-col w-full gap-[12px]">
//                 {['Search courses', 'Filter by topic', 'Resume where I left', 'Enroll new pathway'].map((item) => (
//                   <div key={item} className="flex items-center justify-between p-[14px] border border-black/[0.08] rounded-[6px]">
//                     <p className="font-semibold text-[14px] text-[#0f172a]">{item}</p>
//                     <PlayCircle className="h-[18px] w-[18px] text-[#5b3df6]" />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* E-Library */}
//             <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
//               <div className="flex items-center justify-between w-full">
//                 <div>
//                   <h3 className="font-bold text-[18px] text-[#0f172a]">E-Library</h3>
//                   <p className="text-[13px] text-[#94a3b8] mt-[4px]">Access digital resources and learning materials</p>
//                 </div>
//                 <button className="border border-black/[0.08] flex items-center gap-[8px] h-[36px] justify-center px-[14px] rounded-[6px] bg-white">
//                   <div className="flex flex-col font-medium h-[15px] justify-center leading-[0] text-[#5b3df6] text-[12px]">Browse library</div>
//                 </button>
//               </div>
//               <div className="flex flex-col w-full gap-[12px]">
//                 {['Easy search and filters', 'Online read-only mode', 'Filter by language', 'Prime membership benefits'].map((item) => (
//                   <div key={item} className="flex items-center justify-between p-[14px] border border-black/[0.08] rounded-[6px]">
//                     <p className="font-semibold text-[14px] text-[#0f172a]">{item}</p>
//                     <BookIcon className="h-[18px] w-[18px] text-[#5b3df6]" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="flex flex-col gap-[24px]">
//             {/* Course purchase */}
//             <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[16px] items-start p-[21px] rounded-[8px]">
//               <div>
//                 <h3 className="font-bold text-[18px] text-[#0f172a]">Course purchase</h3>
//                 <p className="text-[13px] text-[#94a3b8] mt-[4px]">Complete your enrollment process</p>
//               </div>
//               <div className="flex flex-col w-full gap-[12px]">
//                 {['Email now', 'Payment gateway', 'Course purchase confirmation'].map((item) => (
//                   <div key={item} className="p-[14px] border border-black/[0.08] rounded-[6px]">
//                     <p className="font-semibold text-[14px] text-[#0f172a] mb-[4px]">{item}</p>
//                     <p className="text-[11px] text-[#94a3b8]">Action required</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Live classes */}
//             <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[16px] items-start p-[21px] rounded-[8px]">
//               <div>
//                 <h3 className="font-bold text-[18px] text-[#0f172a]">Live classes</h3>
//                 <p className="text-[13px] text-[#94a3b8] mt-[4px]">Join your scheduled sessions</p>
//               </div>
//               <div className="flex flex-col w-full gap-[12px]">
//                 {['Upcoming class', 'Join live session', 'Live class reminder'].map((item) => (
//                   <div key={item} className="flex items-center justify-between p-[14px] border border-black/[0.08] rounded-[6px]">
//                     <p className="font-semibold text-[14px] text-[#0f172a]">{item}</p>
//                     <Video className="h-[18px] w-[18px] text-[#5b3df6]" />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Quiz section */}
//             <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[16px] items-start p-[21px] rounded-[8px]">
//               <div>
//                 <h3 className="font-bold text-[18px] text-[#0f172a]">Quiz section</h3>
//                 <p className="text-[13px] text-[#94a3b8] mt-[4px]">Test your knowledge and earn certificates</p>
//               </div>
//               <div className="flex flex-col w-full gap-[12px]">
//                 {['Attempt quiz', 'View score', 'Download certificate'].map((item) => (
//                   <div key={item} className="flex items-center justify-between p-[14px] border border-black/[0.08] rounded-[6px]">
//                     <p className="font-semibold text-[14px] text-[#0f172a]">{item}</p>
//                     <Trophy className="h-[18px] w-[18px] text-[#5b3df6]" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }













import React, { useEffect, useMemo, useState } from 'react'
import { PlayCircle, BookOpen, Video, Trophy, Users, BookOpen as BookIcon, GraduationCap, Wallet, BarChart3, Upload, Plus } from 'lucide-react'
import { api } from '../../lib/api'
import useRealtime from '../../hooks/useRealtime'

function Pill({ children, variant }) {
  const style =
    variant === 'success'
      ? 'bg-[#2dd4bf] text-[#023b33]'
      : variant === 'warning'
        ? 'bg-[#ffd966] text-[#4b2e00]'
        : variant === 'primary'
          ? 'bg-[#5b3df6] text-white'
          : 'bg-[#e8f5ff] text-[#0f172a]'

  return <span className={`inline-flex h-[28px] items-center px-[10px] rounded-[12px] text-[12px] font-medium ${style}`}>{children}</span>
}

export default function StudentDashboard() {
  const [statsData, setStatsData] = useState({
    courses_in_progress: 0,
    live_classes_week: 0,
    quiz_attempts: 0,
    certificates_earned: 0,
    unread_notifications: 0,
  })
  const tenantId = localStorage.getItem('lms_tenant_id')

  useEffect(() => {
    api('/lms/dashboard/student').then(setStatsData).catch(() => {})
  }, [])

  useRealtime(tenantId ? `tenant:${tenantId}` : '', () => {
    api('/lms/dashboard/student').then(setStatsData).catch(() => {})
  })

  const stats = useMemo(() => ([
    ['Courses in progress', String(statsData.courses_in_progress ?? 0), 'From enrollments'],
    ['Live classes this week', String(statsData.live_classes_week ?? 0), 'Upcoming'],
    ['Quiz attempts', String(statsData.quiz_attempts ?? 0), 'Synced'],
    ['Certificates earned', String(statsData.certificates_earned ?? 0), 'Achievements'],
    ['Unread alerts', String(statsData.unread_notifications ?? 0), 'Notifications'],
  ]), [statsData])

  return (
    <div className="min-h-full bg-[#F7FAFD]">
      <div className="bg-gradient-to-b flex h-full flex-col gap-[24px] from-[#f6f8fa] p-4 to-[#f7fcff] sm:p-6 lg:p-7">
        
        {/* Hero Section */}
        <section className="w-full shrink-0 rounded-[8px] border border-black/[0.08] border-solid bg-gradient-to-br from-white to-[#e8f5ff] px-4 pb-5 pt-5 sm:px-6 sm:pb-6 sm:pt-6">
          <div className="flex flex-col gap-[11px] items-start">
            <div className="bg-[#ffd966] flex items-center px-[10px] py-[6.5px] rounded-[12px] shrink-0">
              <div className="text-[12px] font-medium text-[#4b2e00]">
                Student journey • Updated
              </div>
            </div>
            <div className="max-w-[850px] text-[24px] font-bold leading-[1.2] text-[#0f172a] sm:text-[30px] lg:text-[35px]">
              Continue courses, access the new e-library, join live classes, and complete quizzes from one place.
            </div>
            <div className="max-w-[750px] text-[13.9px] text-[#94a3b8]">
              A learner dashboard for course discovery, class schedule, progress tracking, saved courses, e-library resources, live class reminders, and next-step digital study pathways with time-based goals.
            </div>
          </div>
          <div className="mt-4 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <button className="flex h-[40px] w-full items-center justify-center gap-[8px] rounded-[6px] bg-[#5b3df6] px-[16px] sm:w-auto">
              <div className="text-[14px] font-medium text-white">Continue Learning</div>
            </button>
            <button className="flex h-[40px] w-full items-center justify-center gap-[8px] rounded-[6px] border border-black/[0.08] bg-white px-[17px] py-[0.25px] sm:w-auto">
              <div className="text-[14px] font-medium text-[#0f172a]">Open E-Library</div>
            </button>
          </div>
        </section>

        {/* Stats Row */}
        <div className="grid grid-cols-1 gap-x-[16px] gap-y-[16px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {stats.map(([title, value, meta]) => (
            <div key={title} className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[12px] items-start p-[16px] rounded-[8px]">
              <div className="text-[13px] font-medium text-[#94a3b8]">
                {title}
              </div>
              <div className="text-[32px] font-bold tracking-[-0.6px] text-[#0f172a] leading-none">
                {value}
              </div>
              <div className="bg-[#2dd4bf] h-[28px] rounded-[12px] relative flex items-center px-[10px]">
                <div className="text-[11px] font-medium text-[#023b33]">
                  {meta}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-x-[24px] gap-y-[24px] xl:grid-cols-[1.45fr_1fr]">
          {/* Left Column */}
          <div className="flex flex-col gap-[24px]">
            {/* Course browsing */}
            <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
              <div className="flex flex-col items-start justify-between gap-3 w-full sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-bold text-[18px] text-[#0f172a]">Course browsing</h3>
                  <p className="text-[13px] text-[#94a3b8] mt-[4px]">Discover and resume your learning journey</p>
                </div>
                <button className="border border-black/[0.08] flex items-center gap-[8px] h-[36px] justify-center px-[14px] rounded-[6px] bg-white">
                  <div className="flex flex-col font-medium h-[15px] justify-center leading-[0] text-[#5b3df6] text-[12px]">Explore</div>
                </button>
              </div>
              <div className="flex flex-col w-full gap-[12px]">
                {['Search courses', 'Filter by topic', 'Resume where I left', 'Enroll new pathway'].map((item) => (
                  <div key={item} className="flex items-center justify-between p-[14px] border border-black/[0.08] rounded-[6px]">
                    <p className="font-semibold text-[14px] text-[#0f172a]">{item}</p>
                    <PlayCircle className="h-[18px] w-[18px] text-[#5b3df6]" />
                  </div>
                ))}
              </div>
            </div>

            {/* E-Library */}
            <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
              <div className="flex flex-col items-start justify-between gap-3 w-full sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-bold text-[18px] text-[#0f172a]">E-Library</h3>
                  <p className="text-[13px] text-[#94a3b8] mt-[4px]">Access digital resources and learning materials</p>
                </div>
                <button className="border border-black/[0.08] flex items-center gap-[8px] h-[36px] justify-center px-[14px] rounded-[6px] bg-white">
                  <div className="flex flex-col font-medium h-[15px] justify-center leading-[0] text-[#5b3df6] text-[12px]">Browse library</div>
                </button>
              </div>
              <div className="flex flex-col w-full gap-[12px]">
                {['Easy search and filters', 'Online read-only mode', 'Filter by language', 'Prime membership benefits'].map((item) => (
                  <div key={item} className="flex items-center justify-between p-[14px] border border-black/[0.08] rounded-[6px]">
                    <p className="font-semibold text-[14px] text-[#0f172a]">{item}</p>
                    <BookIcon className="h-[18px] w-[18px] text-[#5b3df6]" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-[24px]">
            {/* Course purchase */}
            <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[16px] items-start p-[21px] rounded-[8px]">
              <div>
                <h3 className="font-bold text-[18px] text-[#0f172a]">Course purchase</h3>
                <p className="text-[13px] text-[#94a3b8] mt-[4px]">Complete your enrollment process</p>
              </div>
              <div className="flex flex-col w-full gap-[12px]">
                {['Email now', 'Payment gateway', 'Course purchase confirmation'].map((item) => (
                  <div key={item} className="p-[14px] border border-black/[0.08] rounded-[6px]">
                    <p className="font-semibold text-[14px] text-[#0f172a] mb-[4px]">{item}</p>
                    <p className="text-[11px] text-[#94a3b8]">Action required</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Live classes */}
            <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[16px] items-start p-[21px] rounded-[8px]">
              <div>
                <h3 className="font-bold text-[18px] text-[#0f172a]">Live classes</h3>
                <p className="text-[13px] text-[#94a3b8] mt-[4px]">Join your scheduled sessions</p>
              </div>
              <div className="flex flex-col w-full gap-[12px]">
                {['Upcoming class', 'Join live session', 'Live class reminder'].map((item) => (
                  <div key={item} className="flex items-center justify-between p-[14px] border border-black/[0.08] rounded-[6px]">
                    <p className="font-semibold text-[14px] text-[#0f172a]">{item}</p>
                    <Video className="h-[18px] w-[18px] text-[#5b3df6]" />
                  </div>
                ))}
              </div>
            </div>

            {/* Quiz section */}
            <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[16px] items-start p-[21px] rounded-[8px]">
              <div>
                <h3 className="font-bold text-[18px] text-[#0f172a]">Quiz section</h3>
                <p className="text-[13px] text-[#94a3b8] mt-[4px]">Test your knowledge and earn certificates</p>
              </div>
              <div className="flex flex-col w-full gap-[12px]">
                {['Attempt quiz', 'View score', 'Download certificate'].map((item) => (
                  <div key={item} className="flex items-center justify-between p-[14px] border border-black/[0.08] rounded-[6px]">
                    <p className="font-semibold text-[14px] text-[#0f172a]">{item}</p>
                    <Trophy className="h-[18px] w-[18px] text-[#5b3df6]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
