import React, { useState } from 'react'
import { Search, Download, Calendar, Users, DollarSign, BookOpen, FileText, Plus, Upload, BarChart3, Wallet, GraduationCap, Video, Check } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import { Modal } from '../../components/superadmin/Ui'

const revenueData = [
  { month: 'Jan', value: 280000 },
  { month: 'Feb', value: 350000 },
  { month: 'Mar', value: 420000 },
  { month: 'Apr', value: 480000 },
  { month: 'May', value: 550000 },
  { month: 'Jun', value: 620000 },
  { month: 'Jul', value: 700000 },
]

const paymentLogs = [
  { id: 1, name: 'Bright Minds Academy', provider: 'Razorpay', time: '08:47 AM', amount: 24000, status: 'success' },
  { id: 2, name: 'LearnNest Studio', provider: 'Stripe', time: '10:14 AM', amount: 8200, status: 'success' },
  { id: 3, name: 'SkillSpring Kids', provider: 'Razorpay', time: '11:28 AM', amount: 0, status: 'pending' },
  { id: 4, name: 'FuturePrep Center', provider: 'Stripe', time: '12:42 PM', amount: 1240, status: 'success' },
]

const tenants = [
  { id: 1, name: 'Bright Minds Academy', plan: 'Pro Plan', users: 4230, courses: 142, status: 'active' },
  { id: 2, name: 'FuturePrep Center', plan: 'Enterprise', users: 8380, courses: 436, status: 'active' },
  { id: 3, name: 'LearnNest Studio', plan: 'Basic Plan', users: 880, courses: 54, status: 'review' },
  { id: 4, name: 'SkillSpring Kids', plan: 'Pro Plan', users: 2340, courses: 128, status: 'inactive' },
]

const usersList = [
  { id: 1, name: 'Daniel Ross', tenant: 'Bright Minds Academy', role: 'Instructor', avatar: 'DR', status: 'block' },
  { id: 2, name: 'Nisha Patel', tenant: 'LearnNest Studio', role: 'Student', avatar: 'NP', status: 'active' },
  { id: 3, name: 'Carlos Dega', tenant: 'FuturePrep Center', role: 'Admin', avatar: 'CD', status: 'unblock' },
  { id: 4, name: 'Amara Brown', tenant: 'SkillSpring Kids', role: 'Student', avatar: 'AB', status: 'blocked' },
]

function Stat({ title, value, meta, icon }) {
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

function Metric({ name, value }) {
  return (
    <div>
      <div className="mb-1 text-[13px] text-[#94a3b8]">{name}</div>
      <div className="text-[22px] font-bold text-[#0f172a]">{value}</div>
    </div>
  )
}

function Pill({ children, variant }) {
  const style =
    variant === 'active'
      ? 'bg-[#2dd4bf] text-[#023b33]'
      : variant === 'pending'
        ? 'bg-[#ffd966] text-[#4b2e00]'
        : variant === 'review'
          ? 'bg-[#e8f5ff] text-[#0f172a]'
          : variant === 'inactive'
            ? 'bg-[#f1f5f9] text-[#94a3b8]'
            : 'bg-[#f1f5f9] text-[#0f172a]'

  return <span className={`inline-flex h-[28px] items-center px-[10px] rounded-[12px] text-[12px] font-medium ${style}`}>{children}</span>
}

export default function SuperAdminOverview() {
  const [showAddClient, setShowAddClient] = useState(false)
  const [showPaymentLogs, setShowPaymentLogs] = useState(false)

  return (
    <div className="min-h-full bg-[#F7FAFD]">
      {/* Header */}
      <header className="flex h-[76px] items-center justify-between border-b border-black/[0.08] bg-white px-[28px]">
        <div className="relative shrink-0 w-[228.47px]">
          <div className="flex flex-col font-medium h-[16px] justify-center leading-[0] text-[#94a3b8] text-[13px]">
            Master admin panel
          </div>
          <div className="flex flex-col font-bold h-[29px] justify-center leading-[0] text-[#0f172a] text-[24px]">
            Platform overview
          </div>
        </div>

        <div className="flex items-center gap-[12px]">
          <div className="bg-white border border-black/[0.08] flex items-center gap-[10px] h-[40px] min-w-[280px] px-[15px] py-[0.25px] relative rounded-[6px]">
            <div className="relative shrink-0 size-[18px] flex items-center justify-center">
              <div className="absolute inset-[0] flex items-center justify-center">
                <Search className="h-[18px] w-[18px] text-[#94a3b8]" />
              </div>
            </div>
            <div className="flex flex-col font-normal h-[17px] justify-center leading-[0] text-[#94a3b8] text-[14px]">
              Search tenants, users, or logs
            </div>
          </div>

          <div className="bg-[#e8f5ff] border border-black/[0.08] flex items-center gap-[8px] h-[40px] justify-center px-[17px] py-[0.25px] rounded-[6px] shrink-0">
            <Download className="h-[18px] w-[18px] text-[#0f172a]" />
            <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">
              Export
            </div>
          </div>
        </div>
      </header>

      <div className="bg-gradient-to-b flex flex-col from-[#f6f8fa] gap-[24px] h-full p-[28px] to-[#f7fcff]">
        {/* Hero */}
        <section className="border border-black/[0.08] border-solid content-stretch flex flex-col items-start pb-[23px] pt-[25px] px-[25px] relative rounded-[8px] shrink-0 w-full bg-gradient-to-br from-white to-[#e8f5ff]">
          <div className="flex flex-col gap-[11px] items-start relative shrink-0">
            <div className="bg-[#ffd966] flex items-center px-[10px] py-[6.5px] rounded-[12px] shrink-0">
              <div className="flex flex-col font-medium h-[15px] justify-center leading-[0] text-[#4b2e00] text-[12px]">
                Live platform snapshot
              </div>
            </div>

            <div className="flex flex-col font-bold h-[31.59px] justify-center leading-[0] text-[#0f172a] text-[28px]">
              Manage tenants, monitor revenue, and keep every learning portal healthy.
            </div>

            <div className="flex flex-col font-normal h-[17px] justify-center leading-[0] text-[#94a3b8] text-[14px]">
              A single control center for clients, users, payment activity, and platform-wide reports.
            </div>
          </div>

          <div className="mt-4 flex items-center gap-[12px]">
            <button
              onClick={() => setShowAddClient(true)}
              className="bg-[#5b3df6] flex items-center gap-[8px] h-[40px] justify-center px-[16px] rounded-[6px] shrink-0"
            >
              <Plus className="h-[18px] w-[18px] text-white" />
              <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-white text-[14px]">
                Add Client
              </div>
            </button>
            <div className="border border-black/[0.08] flex gap-[8px] h-[40px] items-center justify-center px-[17px] py-[0.25px] rounded-[6px] shrink-0 bg-white">
              <Calendar className="h-[18px] w-[18px] text-[#94a3b8]" />
              <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">
                This month
              </div>
            </div>
          </div>
        </section>

        {/* Stats row */}
        <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))]">
          <Stat 
            title="Total Tenants" 
            value="128" 
            meta="+12 this month" 
            icon={<Users className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
          <Stat 
            title="Total Users" 
            value="54.8K" 
            meta="+5.4% growth" 
            icon={<Users className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
          <Stat 
            title="Total Revenue" 
            value="₹18.4L" 
            meta="+2.7L monthly" 
            icon={<DollarSign className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
          <Stat 
            title="Active Courses" 
            value="2,946" 
            meta="Across all tenants" 
            icon={<BookOpen className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
        </div>

        {/* Revenue + Payment Logs row */}
        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-2">
          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col gap-[4px]">
                <div className="font-bold text-[18px] text-[#0f172a]">Revenue monitoring</div>
                <div className="text-[13px] text-[#94a3b8]">Monthly revenue graph and payment summary</div>
              </div>
              <button
                onClick={() => setShowPaymentLogs(true)}
                className="bg-[#e8f5ff] border border-black/[0.08] flex h-[40px] items-center justify-center rounded-[6px] px-[17px]"
              >
                <FileText className="h-[18px] w-[18px] text-[#5b3df6] mr-[8px]" />
                <div className="text-[14px] font-medium text-[#0f172a] text-center">Payment Logs</div>
              </button>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <YAxis hide />
                <Bar dataKey="value" fill="#5b3df6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex flex-col gap-[4px] w-full">
              <div className="font-bold text-[18px] text-[#0f172a]">Recent payment logs</div>
              <div className="text-[13px] text-[#94a3b8]">Latest platform transactions</div>
            </div>
            <div className="flex flex-col w-full gap-[16px]">
              {paymentLogs.map((log) => (
                <div key={log.id} className="flex items-center justify-between pb-[14px] pt-[15px] border-t border-black/[0.08] first:border-t-0 first:pt-0">
                  <div>
                    <div className="font-semibold text-[14px] text-[#0f172a]">{log.name}</div>
                    <div className="text-[13px] text-[#94a3b8] mt-[4px]">
                      {log.provider} - {log.time}
                    </div>
                  </div>
                  {log.status === 'success' ? (
                    <div className="bg-[#2dd4bf] h-[28px] rounded-[12px] flex items-center px-[10px]">
                      <div className="text-[12px] font-medium text-[#023b33]">₹{log.amount.toLocaleString()}</div>
                    </div>
                  ) : (
                    <div className="bg-[#ffd966] h-[28px] rounded-[12px] flex items-center px-[10px]">
                      <div className="text-[12px] font-medium text-[#4b2e00]">Pending</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tenant management + User management */}
        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-2">
          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col gap-[4px]">
                <div className="font-bold text-[18px] text-[#0f172a]">Tenant management</div>
                <div className="text-[13px] text-[#94a3b8]">Add, edit, assign plans, and control status</div>
              </div>
              <div className="flex gap-[12px]">
                <div className="bg-[#e8f5ff] border border-black/[0.08] flex h-[40px] items-center justify-center rounded-[6px] px-[17px]">
                  <div className="text-[14px] font-medium text-[#0f172a] text-center">Assign Plan</div>
                </div>
                <div className="bg-[#5b3df6] flex h-[40px] items-center justify-center rounded-[6px] px-[16px]">
                  <div className="text-[14px] font-medium text-white text-center">New Tenant</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full">
              {tenants.map((tenant, idx) => (
                <div key={tenant.id} className={`${idx === 0 ? '' : 'border-t border-black/[0.08]'} pb-[14px] pt-[15px]`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-[14px] text-[#0f172a]">{tenant.name}</div>
                      <div className="text-[13px] text-[#94a3b8] mt-[4px]">
                        {tenant.plan} - {tenant.users.toLocaleString()} users - {tenant.courses} courses
                      </div>
                    </div>
                    <div className="flex items-center gap-[12px]">
                      <Pill variant={
                        tenant.status === 'active' ? 'active' : 
                        tenant.status === 'review' ? 'review' : 'inactive'
                      }>
                        {tenant.status === 'active' ? 'Active' : tenant.status === 'review' ? 'Review' : 'Inactive'}
                      </Pill>
                      <div className="border border-black/[0.08] flex h-[40px] items-center justify-center rounded-[6px] px-[17px]">
                        <div className="text-[14px] font-medium text-[#0f172a] text-center">
                          {tenant.status === 'active' ? 'Edit' : tenant.status === 'review' ? 'Assign Plan' : 'Activate'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col gap-[4px]">
                <div className="font-bold text-[18px] text-[#0f172a]">User management</div>
                <div className="text-[13px] text-[#94a3b8]">View all users across tenants and moderate access</div>
              </div>
              <div className="bg-[#e8f5ff] border border-black/[0.08] flex h-[40px] items-center justify-center rounded-[6px] px-[17px]">
                <div className="text-[14px] font-medium text-[#0f172a] text-center">View all users</div>
              </div>
            </div>

            <div className="flex flex-col w-full">
              {usersList.map((user, idx) => (
                <div key={user.id} className={`${idx === 0 ? '' : 'border-t border-black/[0.08]'} pb-[14px] pt-[15px]`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[12px]">
                      <div className="bg-[#e8f5ff] flex h-[42px] w-[42px] items-center justify-center rounded-[6px] text-[14px] font-semibold text-[#5b3df6]">
                        {user.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-[14px] text-[#0f172a]">{user.name}</div>
                        <div className="text-[13px] text-[#94a3b8] mt-[4px]">
                          {user.tenant} - {user.role}
                        </div>
                      </div>
                    </div>
                    <button
                      className={`border border-black/[0.08] flex h-[40px] items-center justify-center rounded-[6px] px-[17px] ${
                        user.status === 'active' ? 'bg-[#2dd4bf] border-none' : 
                        user.status === 'blocked' ? 'bg-[#f1f5f9]' : 'bg-white'
                      }`}
                    >
                      <div className={`text-[14px] font-medium ${
                        user.status === 'active' ? 'text-[#023b33]' : 'text-[#0f172a]'
                      }`}>
                        {user.status === 'active' ? 'Active' : user.status === 'blocked' ? 'Blocked' : user.status === 'block' ? 'Block' : 'Unblock'}
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Platform analytics + Reports */}
        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-2">
          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex flex-col gap-[4px] w-full">
              <div className="font-bold text-[18px] text-[#0f172a]">Platform-wide analytics</div>
              <div className="text-[13px] text-[#94a3b8]">Snapshot of usage, enrollment, and engagement</div>
            </div>

            <div className="flex items-center gap-[12px]">
              <div className="bg-[#e8f5ff] border border-black/[0.08] flex h-[40px] items-center justify-center rounded-[6px] px-[17px]">
                <div className="text-[14px] font-medium text-[#0f172a] text-center">Export CSV</div>
              </div>
              <div className="bg-[#e8f5ff] border border-black/[0.08] flex h-[40px] items-center justify-center rounded-[6px] px-[17px]">
                <div className="text-[14px] font-medium text-[#0f172a] text-center">Export PDF</div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-[12px] w-full">
              <div className="bg-[#e8f5ff] rounded-[6px] p-[14px]">
                <div className="text-[14px] font-medium text-[#94a3b8]">New signups</div>
                <div className="text-[22px] font-bold text-[#0f172a] mt-[6px]">3,482</div>
              </div>
              <div className="bg-[#e8f5ff] rounded-[6px] p-[14px]">
                <div className="text-[14px] font-medium text-[#94a3b8]">Completions</div>
                <div className="text-[22px] font-bold text-[#0f172a] mt-[6px]">8,124</div>
              </div>
              <div className="bg-[#e8f5ff] rounded-[6px] p-[14px]">
                <div className="text-[14px] font-medium text-[#94a3b8]">Avg. session</div>
                <div className="text-[22px] font-bold text-[#0f172a] mt-[6px]">42m</div>
              </div>
              <div className="bg-[#e8f5ff] rounded-[6px] p-[14px]">
                <div className="text-[14px] font-medium text-[#94a3b8]">Retention</div>
                <div className="text-[22px] font-bold text-[#0f172a] mt-[6px]">86%</div>
              </div>
            </div>

            <div className="w-full rounded-[6px] bg-[#e8f5ff] p-[14px]">
              <div className="text-[13px] text-[#94a3b8] mb-[8px]">Platform health</div>
              <div className="font-semibold text-[14px] text-[#0f172a] mb-[8px]">99.6% uptime across all tenant spaces</div>
              <div className="h-[8px] w-full rounded-full bg-[#5b3df6]" />
            </div>
          </div>

          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex flex-col gap-[4px] w-full">
              <div className="font-bold text-[18px] text-[#0f172a]">Reports</div>
              <div className="text-[13px] text-[#94a3b8]">Generate downloadable summaries for finance and operations</div>
            </div>

            {[
              'Revenue summary report',
              'Tenant activity report',
              'User moderation report',
            ].map((title) => (
              <div key={title} className="flex items-center justify-between rounded-[6px] border border-black/[0.08] p-[16px] w-full">
                <div>
                  <div className="font-semibold text-[14px] text-[#0f172a]">{title}</div>
                  <div className="text-[13px] text-[#94a3b8] mt-[4px]">Generated export available in reports module</div>
                </div>
                <div className="bg-[#5b3df6] flex h-[40px] items-center justify-center rounded-[6px] px-[16px]">
                  <div className="text-[14px] font-medium text-white text-center">Generate</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal
        open={showAddClient}
        onClose={() => setShowAddClient(false)}
        title="Add New Client"
        description="Create a new tenant organization"
      >
        <div className="space-y-[12px]">
          <input 
            className="w-full border border-black/[0.08] rounded-[6px] px-[15px] py-[10px] text-[14px] focus:outline-none focus:border-[#5b3df6]" 
            placeholder="Client name" 
          />
          <input 
            className="w-full border border-black/[0.08] rounded-[6px] px-[15px] py-[10px] text-[14px] focus:outline-none focus:border-[#5b3df6]" 
            placeholder="client@example.com" 
          />
          <button className="bg-[#5b3df6] rounded-[6px] px-[16px] py-[10px] text-[14px] font-medium text-white w-full">
            Add Client
          </button>
        </div>
      </Modal>

      <Modal
        open={showPaymentLogs}
        onClose={() => setShowPaymentLogs(false)}
        title="Payment Logs"
        description="Latest platform transactions"
        maxWidth="max-w-2xl"
      >
        <div className="space-y-[12px]">
          {paymentLogs.map((log) => (
            <div key={log.id} className="flex items-center justify-between rounded-[6px] border border-black/[0.08] p-[16px]">
              <div>
                <div className="font-semibold text-[14px] text-[#0f172a]">{log.name}</div>
                <div className="text-[13px] text-[#94a3b8] mt-[4px]">{log.provider}</div>
              </div>
              <div className="font-medium text-[14px] text-[#0f172a]">
                {log.status === 'success' ? `₹${log.amount}` : 'Pending'}
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  )
}
