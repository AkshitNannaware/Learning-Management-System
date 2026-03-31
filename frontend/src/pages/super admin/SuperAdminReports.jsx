// import React from 'react'
// import { FileText, Download, Calendar } from 'lucide-react'

// const reports = [
//   { id: 1, title: 'Revenue summary report', description: 'CSV export for monthly billing data', format: 'CSV', icon: '💰' },
//   { id: 2, title: 'Tenant activity report', description: 'PDF overview of active and inactive clients', format: 'PDF', icon: '🏢' },
//   { id: 3, title: 'User moderation report', description: 'CSV export of blocked and unblocked users', format: 'CSV', icon: '👥' },
// ]

// export default function SuperAdminReports() {
//   return (
//     <div>
//       <header className="mb-8 flex items-center justify-between border-b border-gray-200 bg-white px-8 py-4">
//         <div>
//           <h1 className="text-2xl font-semibold">Reports</h1>
//           <p className="mt-1 text-sm text-gray-500">Generate downloadable summaries for finance and operations</p>
//         </div>
//         <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm">
//           <Calendar className="h-4 w-4" />
//           Select Period
//         </button>
//       </header>

//       <div className="mb-8 grid grid-cols-4 gap-6">
//         <Stat title="Reports Generated" value="247" meta="This month" />
//         <Stat title="Total Downloads" value="1,842" meta="All time" />
//         <Stat title="Most Popular" value="Revenue Report" meta="428 downloads" />
//         <Stat title="Last Generated" value="2 hours ago" meta="Payment Report" />
//       </div>

//       <div className="grid grid-cols-2 gap-6">
//         {reports.map((report) => (
//           <div key={report.id} className="rounded-xl border border-gray-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
//             <div className="mb-4 flex items-start justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-2xl">
//                   {report.icon}
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">{report.title}</h3>
//                   <p className="text-sm text-gray-500">{report.description}</p>
//                 </div>
//               </div>
//               <span className="rounded bg-gray-100 px-2 py-1 text-xs font-medium">{report.format}</span>
//             </div>
//             <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white">
//               <Download className="h-4 w-4" />
//               Generate Report
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-white">
//         <table className="w-full">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">File Name</th>
//               <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Date</th>
//               <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {[
//               'Revenue_Summary_Feb_2026.csv',
//               'Tenant_Activity_Jan_2026.pdf',
//               'User_Moderation_Feb_2026.csv',
//               'Payment_Transactions_Q1_2026.csv',
//             ].map((name) => (
//               <tr key={name} className="border-t border-gray-100">
//                 <td className="px-6 py-4">
//                   <div className="flex items-center gap-3">
//                     <FileText className="h-5 w-5 text-indigo-600" />
//                     <span className="font-medium">{name}</span>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 text-sm text-gray-500">Mar 2026 - 2.4 MB</td>
//                 <td className="px-6 py-4">
//                   <button className="flex items-center gap-2 rounded border border-gray-200 px-3 py-1 text-sm">
//                     <Download className="h-4 w-4" />
//                     Download
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// function Stat({ title, value, meta }) {
//   return (
//     <div className="rounded-xl border border-gray-200 bg-white p-6">
//       <div className="mb-1 text-sm text-gray-500">{title}</div>
//       <div className="mb-2 text-2xl font-semibold">{value}</div>
//       <div className="text-xs text-gray-500">{meta}</div>
//     </div>
//   )
// }

















import React from 'react'
import { FileText, Download, Calendar, Plus, Upload, BarChart3, TrendingUp, Clock, FileSpreadsheet } from 'lucide-react'

const reports = [
  { id: 1, title: 'Revenue summary report', description: 'CSV export for monthly billing data', format: 'CSV', icon: '💰' },
  { id: 2, title: 'Tenant activity report', description: 'PDF overview of active and inactive clients', format: 'PDF', icon: '🏢' },
  { id: 3, title: 'User moderation report', description: 'CSV export of blocked and unblocked users', format: 'CSV', icon: '👥' },
  { id: 4, title: 'Payment transactions report', description: 'Detailed transaction history', format: 'CSV', icon: '💳' },
]

const recentReports = [
  { name: 'Revenue_Summary_Feb_2026.csv', date: 'Feb 28, 2026', size: '2.4 MB', downloads: 124 },
  { name: 'Tenant_Activity_Jan_2026.pdf', date: 'Jan 31, 2026', size: '1.8 MB', downloads: 86 },
  { name: 'User_Moderation_Feb_2026.csv', date: 'Feb 15, 2026', size: '3.1 MB', downloads: 93 },
  { name: 'Payment_Transactions_Q1_2026.csv', date: 'Mar 1, 2026', size: '5.2 MB', downloads: 67 },
  { name: 'Course_Completion_Report_Feb_2026.pdf', date: 'Feb 28, 2026', size: '2.1 MB', downloads: 112 },
]

function StatCard({ title, value, meta, icon }) {
  return (
    <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[16px] items-start p-[19px] rounded-[8px]">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-start">
          <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#94a3b8] text-[14px]">
            {title}
          </div>
          <div className="flex flex-col font-bold h-[30px] justify-center leading-[0] text-[#0f172a] text-[30px] tracking-[-0.6px]">
            {value}
          </div>
        </div>
        <div className="bg-[#e8f5ff] flex items-center justify-center relative rounded-[6px] shrink-0 size-[40px]">
          {icon}
        </div>
      </div>
      <div className="bg-[#2dd4bf] h-[28px] rounded-[12px] relative flex items-center px-[10px]">
        <div className="flex flex-col font-medium h-[15px] justify-center leading-[0] text-[#023b33] text-[12px]">
          {meta}
        </div>
      </div>
    </div>
  )
}

function Pill({ children, variant }) {
  const style =
    variant === 'csv'
      ? 'bg-[#2dd4bf] text-[#023b33]'
      : variant === 'pdf'
        ? 'bg-[#ffd966] text-[#4b2e00]'
        : 'bg-[#e8f5ff] text-[#0f172a]'

  return <span className={`inline-flex h-[28px] items-center px-[10px] rounded-[12px] text-[12px] font-medium ${style}`}>{children}</span>
}

export default function SuperAdminReports() {
  return (
    <div className="min-h-full bg-[#F7FAFD]">
      {/* Header */}
      <header className="flex h-[76px] items-center justify-between border-b border-black/[0.08] bg-white px-[28px]">
        <div className="relative shrink-0">
          <div className="flex flex-col font-medium h-[16px] justify-center leading-[0] text-[#94a3b8] text-[13px]">
            Super admin panel
          </div>
          <div className="flex flex-col font-bold h-[29px] justify-center leading-[0] text-[#0f172a] text-[24px]">
            Reports
          </div>
        </div>

        <div className="flex items-center gap-[12px]">
          <div className="bg-white border border-black/[0.08] flex items-center gap-[10px] h-[40px] min-w-[200px] px-[15px] py-[0.25px] relative rounded-[6px]">
            <Calendar className="h-[18px] w-[18px] text-[#94a3b8]" />
            <div className="flex flex-col font-normal h-[17px] justify-center leading-[0] text-[#94a3b8] text-[14px]">
              Last 30 days
            </div>
          </div>

          <div className="bg-[#e8f5ff] border border-black/[0.08] flex items-center gap-[8px] h-[40px] justify-center px-[17px] py-[0.25px] rounded-[6px] shrink-0">
            <Calendar className="h-[18px] w-[18px] text-[#0f172a]" />
            <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">
              Select Period
            </div>
          </div>

          <div className="bg-[#5b3df6] flex items-center gap-[8px] h-[40px] justify-center px-[16px] rounded-[6px] shrink-0">
            <FileSpreadsheet className="h-[18px] w-[18px] text-white" />
            <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-white text-[14px]">
              Schedule Report
            </div>
          </div>
        </div>
      </header>

      <div className="bg-gradient-to-b flex flex-col from-[#f6f8fa] gap-[24px] h-full p-[28px] to-[#f7fcff]">
        {/* Hero Section */}
        <section className="border border-black/[0.08] border-solid content-stretch flex flex-col items-start pb-[23px] pt-[25px] px-[25px] relative rounded-[8px] shrink-0 w-full bg-gradient-to-br from-white to-[#e8f5ff]">
          <div className="flex flex-col gap-[11px] items-start relative shrink-0">
            <div className="bg-[#ffd966] flex items-center px-[10px] py-[6.5px] rounded-[12px] shrink-0">
              <div className="flex flex-col font-medium h-[15px] justify-center leading-[0] text-[#4b2e00] text-[12px]">
                Report generation hub
              </div>
            </div>

            <div className="flex flex-col font-bold h-[31.59px] justify-center leading-[0] text-[#0f172a] text-[28px]">
              Generate downloadable summaries for finance and operations
            </div>

            <div className="flex flex-col font-normal h-[17px] justify-center leading-[0] text-[#94a3b8] text-[14px]">
              Access, schedule, and download reports for revenue, tenant activity, user moderation, and more.
            </div>
          </div>

          <div className="mt-4 flex items-center gap-[12px]">
            <div className="bg-[#5b3df6] flex items-center gap-[8px] h-[40px] justify-center px-[16px] rounded-[6px] shrink-0">
              <BarChart3 className="h-[18px] w-[18px] text-white" />
              <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-white text-[14px]">
                Custom Report
              </div>
            </div>
            <div className="border border-black/[0.08] flex gap-[8px] h-[40px] items-center justify-center px-[17px] py-[0.25px] rounded-[6px] shrink-0 bg-white">
              <Download className="h-[18px] w-[18px] text-[#94a3b8]" />
              <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">
                Export All
              </div>
            </div>
          </div>
        </section>

        {/* Stats row */}
        <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))]">
          <StatCard 
            title="Reports Generated" 
            value="247" 
            meta="This month" 
            icon={<FileText className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
          <StatCard 
            title="Total Downloads" 
            value="1,842" 
            meta="All time" 
            icon={<Download className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
          <StatCard 
            title="Most Popular" 
            value="Revenue Report" 
            meta="428 downloads" 
            icon={<TrendingUp className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
          <StatCard 
            title="Last Generated" 
            value="2 hours ago" 
            meta="Payment Report" 
            icon={<Clock className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
        </div>

        {/* Report Cards Grid */}
        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-2">
          {reports.map((report) => (
            <div key={report.id} className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
              <div className="flex items-start justify-between w-full">
                <div className="flex items-center gap-[12px]">
                  <div className="bg-[#e8f5ff] flex items-center justify-center rounded-[6px] shrink-0 size-[48px] text-[24px]">
                    {report.icon}
                  </div>
                  <div>
                    <div className="font-bold text-[16px] text-[#0f172a]">{report.title}</div>
                    <div className="text-[13px] text-[#94a3b8] mt-[4px]">{report.description}</div>
                  </div>
                </div>
                <Pill variant={report.format === 'CSV' ? 'csv' : 'pdf'}>
                  {report.format}
                </Pill>
              </div>
              <button className="bg-[#5b3df6] flex items-center gap-[8px] h-[40px] justify-center rounded-[6px] w-full">
                <Download className="h-[18px] w-[18px] text-white" />
                <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-white text-[14px]">
                  Generate Report
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Recent Reports Table */}
        <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-[4px]">
              <div className="font-bold text-[18px] text-[#0f172a]">Recent Reports</div>
              <div className="text-[13px] text-[#94a3b8]">Previously generated reports available for download</div>
            </div>
            <div className="bg-[#e8f5ff] border border-black/[0.08] flex items-center gap-[8px] h-[40px] justify-center px-[17px] py-[0.25px] rounded-[6px] shrink-0">
              <Upload className="h-[18px] w-[18px] text-[#5b3df6]" />
              <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">
                Archive Reports
              </div>
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-black/[0.08]">
                <tr>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">File Name</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Date Generated</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Size</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Downloads</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentReports.map((report, idx) => {
                  const isCSV = report.name.endsWith('.csv')
                  return (
                    <tr key={report.name} className={`border-b border-black/[0.08] ${idx === recentReports.length - 1 ? 'border-b-0' : ''}`}>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-[12px]">
                          <div className="bg-[#e8f5ff] flex items-center justify-center rounded-[6px] shrink-0 size-[36px]">
                            <FileText className={`h-[16px] w-[16px] ${isCSV ? 'text-[#2dd4bf]' : 'text-[#ffd966]'}`} />
                          </div>
                          <span className="font-semibold text-[14px] text-[#0f172a]">{report.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-[14px] text-[#94a3b8]">{report.date}</td>
                      <td className="px-4 py-4 text-[14px] text-[#94a3b8]">{report.size}</td>
                      <td className="px-4 py-4 text-[14px] text-[#0f172a]">{report.downloads}</td>
                      <td className="px-4 py-4">
                        <button className="border border-black/[0.08] flex items-center gap-[8px] h-[36px] justify-center px-[16px] rounded-[6px] hover:bg-[#f1f5f9] transition-colors">
                          <Download className="h-[14px] w-[14px] text-[#5b3df6]" />
                          <div className="flex flex-col font-medium h-[15px] justify-center leading-[0] text-[#0f172a] text-[13px]">
                            Download
                          </div>
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Schedule Reports Section */}
        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-2">
          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex flex-col gap-[4px] w-full">
              <div className="font-bold text-[18px] text-[#0f172a]">Scheduled Reports</div>
              <div className="text-[13px] text-[#94a3b8]">Automated reports delivered to your inbox</div>
            </div>
            <div className="flex flex-col w-full gap-[16px]">
              <div className="flex items-center justify-between pb-[12px] border-b border-black/[0.08]">
                <div>
                  <div className="font-semibold text-[14px] text-[#0f172a]">Weekly Revenue Summary</div>
                  <div className="text-[12px] text-[#94a3b8] mt-[4px]">Every Monday at 9:00 AM</div>
                </div>
                <div className="bg-[#2dd4bf] h-[28px] rounded-[12px] flex items-center px-[10px]">
                  <div className="text-[12px] font-medium text-[#023b33]">Active</div>
                </div>
              </div>
              <div className="flex items-center justify-between pb-[12px] border-b border-black/[0.08]">
                <div>
                  <div className="font-semibold text-[14px] text-[#0f172a]">Monthly Tenant Activity</div>
                  <div className="text-[12px] text-[#94a3b8] mt-[4px]">1st of every month at 8:00 AM</div>
                </div>
                <div className="bg-[#2dd4bf] h-[28px] rounded-[12px] flex items-center px-[10px]">
                  <div className="text-[12px] font-medium text-[#023b33]">Active</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-[14px] text-[#0f172a]">User Moderation Report</div>
                  <div className="text-[12px] text-[#94a3b8] mt-[4px]">Every Friday at 2:00 PM</div>
                </div>
                <div className="bg-[#ffd966] h-[28px] rounded-[12px] flex items-center px-[10px]">
                  <div className="text-[12px] font-medium text-[#4b2e00]">Paused</div>
                </div>
              </div>
            </div>
            <div className="border-t border-black/[0.08] w-full pt-[15px] mt-[8px]">
              <button className="bg-[#5b3df6] h-[40px] rounded-[6px] flex items-center justify-center px-[16px] w-full gap-[8px]">
                <Plus className="h-[16px] w-[16px] text-white" />
                <div className="text-[14px] font-medium text-white text-center">Schedule New Report</div>
              </button>
            </div>
          </div>

          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex flex-col gap-[4px] w-full">
              <div className="font-bold text-[18px] text-[#0f172a]">Report Analytics</div>
              <div className="text-[13px] text-[#94a3b8]">Download trends and usage statistics</div>
            </div>
            <div className="grid grid-cols-2 gap-[16px] w-full">
              <div className="bg-[#e8f5ff] rounded-[8px] p-[16px]">
                <div className="text-[12px] text-[#94a3b8] mb-[8px]">Most Downloaded</div>
                <div className="font-semibold text-[14px] text-[#0f172a] mb-[4px]">Revenue Report</div>
                <div className="text-[11px] text-[#2dd4bf]">428 downloads</div>
              </div>
              <div className="bg-[#e8f5ff] rounded-[8px] p-[16px]">
                <div className="text-[12px] text-[#94a3b8] mb-[8px]">Average Size</div>
                <div className="font-semibold text-[14px] text-[#0f172a] mb-[4px]">2.8 MB</div>
                <div className="text-[11px] text-[#94a3b8]">Per report</div>
              </div>
              <div className="bg-[#e8f5ff] rounded-[8px] p-[16px]">
                <div className="text-[12px] text-[#94a3b8] mb-[8px]">CSV Reports</div>
                <div className="font-semibold text-[14px] text-[#0f172a] mb-[4px]">68%</div>
                <div className="text-[11px] text-[#2dd4bf]">Most popular format</div>
              </div>
              <div className="bg-[#e8f5ff] rounded-[8px] p-[16px]">
                <div className="text-[12px] text-[#94a3b8] mb-[8px]">PDF Reports</div>
                <div className="font-semibold text-[14px] text-[#0f172a] mb-[4px]">32%</div>
                <div className="text-[11px] text-[#94a3b8]">Of total downloads</div>
              </div>
            </div>
            <div className="w-full rounded-[8px] bg-[#e8f5ff] p-[16px]">
              <div className="flex justify-between items-center mb-[8px]">
                <div className="text-[13px] text-[#94a3b8]">This month's downloads</div>
                <div className="text-[11px] text-[#2dd4bf]">↑ 23% vs last month</div>
              </div>
              <div className="font-bold text-[24px] text-[#0f172a] mb-[8px]">247</div>
              <div className="h-[6px] rounded-full bg-[#f1f5f9]">
                <div className="h-[6px] rounded-full bg-gradient-to-r from-[#5b3df6] to-[#2dd4bf]" style={{ width: '68%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
