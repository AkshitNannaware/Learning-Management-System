import React, { useEffect, useMemo, useState } from 'react'
import { FileText, Download, BarChart3, TrendingUp, Clock, Upload } from 'lucide-react'
import { api } from '../../lib/api'

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
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [generatingType, setGeneratingType] = useState('')
  const reportTypes = useMemo(
    () => ['revenue_summary', 'tenant_activity', 'user_moderation', 'payment_transactions'],
    [],
  )

  const formatReportType = (type) =>
    (type || 'unknown')
      .replaceAll('_', ' ')
      .replace(/\b\w/g, (ch) => ch.toUpperCase())

  const loadReports = async () => {
    try {
      setLoading(true)
      setError('')
      const res = await api('/lms/reports')
      setReports(res.items || [])
    } catch (err) {
      setReports([])
      setError(err?.message || 'Unable to load reports')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadReports()
  }, [])

  const generate = async (type) => {
    try {
      setGeneratingType(type)
      await api('/lms/reports/generate', { method: 'POST', body: JSON.stringify({ report_type: type }) })
      await loadReports()
    } catch {
      // Keep the current page state; loadReports will surface the next fetch error.
    } finally {
      setGeneratingType('')
    }
  }

  const totalSizeKb = reports.reduce((sum, item) => sum + Number(item?.size_kb || 0), 0)
  const totalCsv = reports.filter((item) => (item?.file_name || '').toLowerCase().endsWith('.csv')).length
  const totalPdf = reports.filter((item) => (item?.file_name || '').toLowerCase().endsWith('.pdf')).length
  const reportTypeCount = reports.reduce((acc, item) => {
    const key = item?.report_type || 'unknown'
    acc[key] = (acc[key] || 0) + 1
    return acc
  }, {})
  const sortedReportTypeCount = Object.entries(reportTypeCount).sort((a, b) => b[1] - a[1])
  const mostPopular = sortedReportTypeCount[0]
  const thisMonthReports = reports.filter((item) => {
    if (!item?.created_at) return false
    const d = new Date(item.created_at)
    const now = new Date()
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
  }).length
  const latestReport = reports[0] || null

  return (
    <div className="min-h-full bg-[#F7FAFD]">
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
            value={String(reports.length)} 
            meta={`${thisMonthReports} this month`} 
            icon={<FileText className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
          <StatCard 
            title="Total Size" 
            value={`${totalSizeKb.toLocaleString('en-IN')} KB`} 
            meta="Combined report storage" 
            icon={<Download className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
          <StatCard 
            title="Most Popular" 
            value={mostPopular ? formatReportType(mostPopular[0]) : 'N/A'} 
            meta={mostPopular ? `${mostPopular[1]} generated` : 'No reports yet'} 
            icon={<TrendingUp className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
          <StatCard 
            title="Last Generated" 
            value={latestReport?.created_at ? new Date(latestReport.created_at).toLocaleDateString() : 'N/A'} 
            meta="Latest generation" 
            icon={<Clock className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
        </div>

        {/* Report Cards Grid */}
        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-2">
          {reportTypes.map((type) => (
            <div key={type} className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
              <div className="flex items-start justify-between w-full">
                <div className="flex items-center gap-[12px]">
                  <div className="bg-[#e8f5ff] flex items-center justify-center rounded-[6px] shrink-0 size-[48px] text-[24px]">
                    📄
                  </div>
                  <div>
                    <div className="font-bold text-[16px] text-[#0f172a]">{formatReportType(type)}</div>
                    <div className="text-[13px] text-[#94a3b8] mt-[4px]">
                      {reportTypeCount[type] ? `${reportTypeCount[type]} generated so far` : 'No records generated yet'}
                    </div>
                  </div>
                </div>
                <Pill variant='csv'>
                  CSV
                </Pill>
              </div>
              <button onClick={() => generate(type)} disabled={generatingType === type} className="bg-[#5b3df6] disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-[8px] h-[40px] justify-center rounded-[6px] w-full">
                <Download className="h-[18px] w-[18px] text-white" />
                <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-white text-[14px]">
                  {generatingType === type ? 'Generating...' : 'Generate Report'}
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
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Type</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Date Generated</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Size</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Status</th>
                </tr>
              </thead>
              <tbody>
                {!loading && reports.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-4 py-10 text-center text-[14px] text-[#94a3b8]">
                      {error || 'No reports found yet. Generate your first report.'}
                    </td>
                  </tr>
                )}
                {reports.map((report, idx) => {
                  const isCSV = (report.file_name || '').endsWith('.csv')
                  return (
                    <tr key={report._id || idx} className={`border-b border-black/[0.08] ${idx === reports.length - 1 ? 'border-b-0' : ''}`}>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-[12px]">
                          <div className="bg-[#e8f5ff] flex items-center justify-center rounded-[6px] shrink-0 size-[36px]">
                            <FileText className={`h-[16px] w-[16px] ${isCSV ? 'text-[#2dd4bf]' : 'text-[#ffd966]'}`} />
                          </div>
                          <span className="font-semibold text-[14px] text-[#0f172a]">{report.file_name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-[14px] text-[#0f172a]">{formatReportType(report.report_type)}</td>
                      <td className="px-4 py-4 text-[14px] text-[#94a3b8]">{report.created_at ? new Date(report.created_at).toLocaleString() : '-'}</td>
                      <td className="px-4 py-4 text-[14px] text-[#94a3b8]">{report.size_kb ? `${report.size_kb} KB` : '-'}</td>
                      <td className="px-4 py-4 text-[14px] text-[#0f172a]">{report.status || '-'}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Real Data Insights */}
        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-2">
          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex flex-col gap-[4px] w-full">
              <div className="font-bold text-[18px] text-[#0f172a]">Recent Report Activity</div>
              <div className="text-[13px] text-[#94a3b8]">Latest generated records from live report history</div>
            </div>
            <div className="flex flex-col w-full gap-[16px]">
              {reports.slice(0, 5).map((item, idx) => (
                <div key={item._id || idx} className={`flex items-center justify-between ${idx < 4 ? 'pb-[12px] border-b border-black/[0.08]' : ''}`}>
                  <div>
                    <div className="font-semibold text-[14px] text-[#0f172a]">{formatReportType(item.report_type)}</div>
                    <div className="text-[12px] text-[#94a3b8] mt-[4px]">
                      {item.created_at ? new Date(item.created_at).toLocaleString() : '-'}
                    </div>
                  </div>
                  <div className={`h-[28px] rounded-[12px] flex items-center px-[10px] ${item.status === 'ready' ? 'bg-[#2dd4bf]' : 'bg-[#ffd966]'}`}>
                    <div className={`text-[12px] font-medium ${item.status === 'ready' ? 'text-[#023b33]' : 'text-[#4b2e00]'}`}>
                      {(item.status || 'unknown').toUpperCase()}
                    </div>
                  </div>
                </div>
              ))}
              {!loading && reports.length === 0 && (
                <div className="text-[14px] text-[#94a3b8]">No recent activity found.</div>
              )}
            </div>
          </div>

          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex flex-col gap-[4px] w-full">
              <div className="font-bold text-[18px] text-[#0f172a]">Report Analytics</div>
              <div className="text-[13px] text-[#94a3b8]">Live distribution by format and report type</div>
            </div>
            <div className="grid grid-cols-2 gap-[16px] w-full">
              <div className="bg-[#e8f5ff] rounded-[8px] p-[16px]">
                <div className="text-[12px] text-[#94a3b8] mb-[8px]">Most Generated Type</div>
                <div className="font-semibold text-[14px] text-[#0f172a] mb-[4px]">{mostPopular ? formatReportType(mostPopular[0]) : 'N/A'}</div>
                <div className="text-[11px] text-[#2dd4bf]">{mostPopular ? `${mostPopular[1]} records` : 'No data yet'}</div>
              </div>
              <div className="bg-[#e8f5ff] rounded-[8px] p-[16px]">
                <div className="text-[12px] text-[#94a3b8] mb-[8px]">Average Size</div>
                <div className="font-semibold text-[14px] text-[#0f172a] mb-[4px]">
                  {reports.length ? `${(totalSizeKb / reports.length).toFixed(1)} KB` : '0 KB'}
                </div>
                <div className="text-[11px] text-[#94a3b8]">Per report</div>
              </div>
              <div className="bg-[#e8f5ff] rounded-[8px] p-[16px]">
                <div className="text-[12px] text-[#94a3b8] mb-[8px]">CSV Reports</div>
                <div className="font-semibold text-[14px] text-[#0f172a] mb-[4px]">
                  {reports.length ? `${Math.round((totalCsv / reports.length) * 100)}%` : '0%'}
                </div>
                <div className="text-[11px] text-[#2dd4bf]">{totalCsv} CSV files</div>
              </div>
              <div className="bg-[#e8f5ff] rounded-[8px] p-[16px]">
                <div className="text-[12px] text-[#94a3b8] mb-[8px]">PDF Reports</div>
                <div className="font-semibold text-[14px] text-[#0f172a] mb-[4px]">
                  {reports.length ? `${Math.round((totalPdf / reports.length) * 100)}%` : '0%'}
                </div>
                <div className="text-[11px] text-[#94a3b8]">{totalPdf} PDF files</div>
              </div>
            </div>
            <div className="w-full rounded-[8px] bg-[#e8f5ff] p-[16px]">
              <div className="flex justify-between items-center mb-[8px]">
                <div className="text-[13px] text-[#94a3b8]">This month's generated reports</div>
                <div className="text-[11px] text-[#2dd4bf]">Live from records</div>
              </div>
              <div className="font-bold text-[24px] text-[#0f172a] mb-[8px]">{thisMonthReports}</div>
              <div className="h-[6px] rounded-full bg-[#f1f5f9]">
                <div
                  className="h-[6px] rounded-full bg-gradient-to-r from-[#5b3df6] to-[#2dd4bf]"
                  style={{ width: `${reports.length ? Math.min((thisMonthReports / reports.length) * 100, 100) : 0}%` }}
                />
              </div>
            </div>
            <div className="w-full rounded-[8px] bg-[#f8fafc] p-[16px] border border-black/[0.06]">
              <div className="text-[12px] text-[#94a3b8] mb-[10px]">Type distribution</div>
              <div className="space-y-[8px]">
                {sortedReportTypeCount.slice(0, 4).map(([type, count]) => (
                  <div key={type} className="flex items-center justify-between text-[13px]">
                    <span className="text-[#0f172a] font-medium">{formatReportType(type)}</span>
                    <span className="text-[#64748b]">{count}</span>
                  </div>
                ))}
                {!loading && sortedReportTypeCount.length === 0 && (
                  <div className="text-[13px] text-[#94a3b8]">No report types available yet.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
