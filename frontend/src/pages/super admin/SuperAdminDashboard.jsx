import React, { useEffect, useState } from 'react'
import { TrendingUp, TrendingDown, Users, DollarSign, BookOpen, Activity } from 'lucide-react'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { api } from '../../lib/api'
import useRealtime from '../../hooks/useRealtime'

// Figma avatar assets (reused from admin dashboard)
const AVATAR_RAHUL = 'https://www.figma.com/api/mcp/asset/5b24609b-97ad-4bea-af20-b4f4df404b75'

function Avatar({ src, alt = '', className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`h-[36px] w-[36px] rounded-[6px] object-cover ${className}`}
    />
  )
}

// Reusable pill component matching admin dashboard
function Pill({ children, variant }) {
  const style =
    variant === 'ready'
      ? 'bg-[#2dd4bf] text-[#023b33]'
      : variant === 'active'
        ? 'bg-[#2dd4bf] text-[#023b33]'
        : variant === 'draft'
          ? 'bg-[#e8f5ff] text-[#0f172a]'
          : variant === 'pending'
            ? 'bg-[#ffd966] text-[#4b2e00]'
            : variant === 'review'
              ? 'bg-[#e8f5ff] text-[#0f172a]'
              : variant === 'publish'
                ? 'bg-[#5b3df6] text-white'
                : 'bg-[#f1f5f9] text-[#0f172a]'

  return <span className={`inline-flex h-[28px] items-center px-[10px] rounded-[12px] text-[12px] font-medium ${style}`}>{children}</span>
}

const dailyActiveUsers = [
  { day: 'Mon', users: 12400 },
  { day: 'Tue', users: 13200 },
  { day: 'Wed', users: 14100 },
  { day: 'Thu', users: 13800 },
  { day: 'Fri', users: 15200 },
  { day: 'Sat', users: 11800 },
  { day: 'Sun', users: 10200 },
]

const revenueGrowth = [
  { month: 'Jan', revenue: 280000, target: 300000 },
  { month: 'Feb', revenue: 350000, target: 350000 },
  { month: 'Mar', revenue: 420000, target: 400000 },
  { month: 'Apr', revenue: 480000, target: 450000 },
  { month: 'May', revenue: 550000, target: 500000 },
  { month: 'Jun', revenue: 620000, target: 550000 },
]

export default function SuperAdminDashboard() {
  const [metrics, setMetrics] = useState({
    total_users: 0,
    revenue: 0,
    active_courses: 0,
    active_subscriptions: 0,
  })

  useEffect(() => {
    api('/lms/dashboard/super-admin').then(setMetrics).catch(() => {})
  }, [])

  useRealtime('tenant:platform', (payload) => {
    if (payload?.type?.startsWith('payment') || payload?.type?.startsWith('course')) {
      api('/lms/dashboard/super-admin').then(setMetrics).catch(() => {})
    }
  })

  return (
    <div className="min-h-full bg-[#F7FAFD]">
      <div className="bg-gradient-to-b flex flex-col from-[#f6f8fa] gap-[24px] h-full p-[28px] to-[#f7fcff]">
        {/* Hero Section - matches admin dashboard hero style */}
        <section className="border border-black/[0.08] border-solid content-stretch flex flex-col items-start pb-[23px] pt-[25px] px-[25px] relative rounded-[8px] shrink-0 w-full bg-gradient-to-br from-white to-[#e8f5ff]">
          <div className="flex flex-col gap-[11px] items-start relative shrink-0">
            <div className="bg-[#ffd966] flex items-center px-[10px] py-[6.5px] rounded-[12px] shrink-0">
              <div className="flex flex-col font-medium h-[15px] justify-center leading-[0] text-[#4b2e00] text-[12px]">
                Platform overview
              </div>
            </div>

            <div className="flex flex-col font-bold h-[31.59px] justify-center leading-[0] text-[#0f172a] text-[28px]">
              Manage all institutes, track growth, and monitor platform health.
            </div>

            <div className="flex flex-col font-normal h-[17px] justify-center leading-[0] text-[#94a3b8] text-[14px]">
              Oversee tenant activity, revenue trends, and system-wide engagement from a single workspace.
            </div>
          </div>

          <div className="mt-4 flex items-center gap-[12px]">
            <div className="bg-[#5b3df6] flex items-center gap-[8px] h-[40px] justify-center px-[16px] rounded-[6px] shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
              <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-white text-[14px]">
                Add Institute
              </div>
            </div>
            <div className="border border-black/[0.08] flex gap-[8px] h-[40px] items-center justify-center px-[17px] py-[0.25px] rounded-[6px] shrink-0 bg-white">
              <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">
                This month
              </div>
            </div>
          </div>
        </section>

        {/* KPI Cards - matching admin dashboard stats row style */}
        <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))]">
          <KpiCard 
            title="Total Users" 
            value={Number(metrics.total_users || 0).toLocaleString('en-IN')}
            meta="12.5%" 
            icon={<Users className="h-[18px] w-[18px] text-[#5b3df6]" />}
            trend="up"
            badgeText="+5,421 this month"
            badgeVariant="ready"
          />
          <KpiCard 
            title="Monthly Revenue" 
            value={`₹${Number(metrics.revenue || 0).toLocaleString('en-IN')}`}
            meta="8.2%" 
            icon={<DollarSign className="h-[18px] w-[18px] text-[#5b3df6]" />}
            trend="up"
            badgeText="+₹1.2L this month"
            badgeVariant="ready"
          />
          <KpiCard 
            title="Active Courses" 
            value={Number(metrics.active_courses || 0).toLocaleString('en-IN')}
            meta="5.3%" 
            icon={<BookOpen className="h-[18px] w-[18px] text-[#5b3df6]" />}
            trend="up"
            badgeText="+184 this month"
            badgeVariant="ready"
          />
          <KpiCard 
            title="Active Subscriptions" 
            value={Number(metrics.active_subscriptions || 0).toLocaleString('en-IN')}
            meta="2.1%" 
            icon={<Activity className="h-[18px] w-[18px] text-[#5b3df6]" />}
            trend="up"
            badgeText="+3.2% vs last month"
            badgeVariant="ready"
          />
        </div>

        {/* Charts Row - matching admin dashboard card styling */}
        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-2">
          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex flex-col gap-[4px] w-full">
              <div className="font-bold text-[18px] text-[#0f172a]">Daily Active Users</div>
              <div className="text-[13px] text-[#94a3b8]">Last 7 days platform activity</div>
            </div>
            <div className="w-full h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dailyActiveUsers}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid rgba(0,0,0,0.08)', 
                      borderRadius: '6px',
                      fontSize: '12px',
                      padding: '8px 12px'
                    }} 
                  />
                  <Area type="monotone" dataKey="users" stroke="#5b3df6" fill="#e8f5ff" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex flex-col gap-[4px] w-full">
              <div className="font-bold text-[18px] text-[#0f172a]">Revenue Growth</div>
              <div className="text-[13px] text-[#94a3b8]">Revenue vs Target (Last 6 months)</div>
            </div>
            <div className="w-full h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueGrowth}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid rgba(0,0,0,0.08)', 
                      borderRadius: '6px',
                      fontSize: '12px',
                      padding: '8px 12px'
                    }} 
                  />
                  <Line type="monotone" dataKey="revenue" stroke="#2dd4bf" strokeWidth={2} />
                  <Line type="monotone" dataKey="target" stroke="#5b3df6" strokeWidth={2} strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Activity Card - matching admin dashboard card styling */}
        <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
          <div className="flex flex-col gap-[4px] w-full">
            <div className="font-bold text-[18px] text-[#0f172a]">Recent Activity</div>
            <div className="text-[13px] text-[#94a3b8]">Latest platform events and tenant actions</div>
          </div>

          <div className="w-full flex flex-col">
            {[
              { text: 'New tenant registered - Bright Minds Academy signed up for Pro Plan', time: '2 hours ago', variant: 'ready' },
              { text: 'Payment received - ₹24,000 from LearnNest Studio', time: '5 hours ago', variant: 'ready' },
              { text: 'Course published - Advanced React Development by FuturePrep Center', time: 'Yesterday', variant: 'ready' },
              { text: 'New instructor onboarding request - 3 pending approvals', time: 'Yesterday', variant: 'pending' },
              { text: 'System update completed - Analytics engine v2.1', time: '2 days ago', variant: 'draft' },
            ].map((activity, idx) => (
              <div key={activity.text} className={`flex items-center justify-between ${idx === 0 ? '' : 'border-t border-black/[0.08]'} py-[15px]`}>
                <div className="flex items-center gap-[12px]">
                  <div className="bg-[#e8f5ff] flex items-center justify-center rounded-[6px] shrink-0 size-[36px]">
                    <Activity className="h-[16px] w-[16px] text-[#5b3df6]" />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-medium text-[14px] text-[#0f172a]">{activity.text}</div>
                    <div className="text-[12px] text-[#94a3b8] mt-[2px]">{activity.time}</div>
                  </div>
                </div>
                <Pill variant={activity.variant}>
                  {activity.variant === 'ready' ? 'Completed' : activity.variant === 'pending' ? 'Pending' : 'Info'}
                </Pill>
              </div>
            ))}
          </div>

          <div className="border-t border-black/[0.08] w-full pt-[15px] mt-[8px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[12px]">
                <div className="bg-[#e8f5ff] flex items-center justify-center overflow-clip rounded-[6px] shrink-0 size-[42px]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#5b3df6]">
                    <path d="M21 16v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2M7 10l5 5 5-5" />
                    <path d="M12 15V3" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold text-[14px] text-[#0f172a]">Export Activity Log</div>
                  <div className="text-[13px] text-[#94a3b8] mt-[4px]">
                    Download full audit trail for compliance
                  </div>
                </div>
              </div>
              <div className="bg-[#5b3df6] h-[40px] rounded-[6px] flex items-center justify-center px-[16px]">
                <div className="text-[14px] font-medium text-white text-center">Export CSV</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// KPI Card component matching admin dashboard stats card style
function KpiCard({ title, value, meta, icon, trend, badgeText, badgeVariant }) {
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
      <div className={`h-[28px] rounded-[12px] relative flex items-center px-[10px] ${badgeVariant === 'ready' ? 'bg-[#2dd4bf]' : 'bg-[#ffd966]'}`}>
        <div className={`flex flex-col font-medium h-[15px] justify-center leading-[0] text-[12px] ${badgeVariant === 'ready' ? 'text-[#023b33]' : 'text-[#4b2e00]'}`}>
          {badgeText}
        </div>
      </div>
    </div>
  )
}
