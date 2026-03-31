import React, { useState } from 'react'
import {
  Search,
  Upload,
  Plus,
  Users,
  GraduationCap,
  BarChart3,
  AlertCircle,
  ChevronDown,
  FileUp,
  Receipt,
  Wallet,
  ShieldCheck,
  TrendingUp,
  DollarSign,
  CreditCard,
} from 'lucide-react'

const AVATAR_RAHUL = 'https://www.figma.com/api/mcp/asset/5b24609b-97ad-4bea-af20-b4f4df404b75'
const AVATAR_AARAV = 'https://www.figma.com/api/mcp/asset/36623965-019b-4b68-bd68-2bf7a2e38748'
const AVATAR_AISHA = 'https://www.figma.com/api/mcp/asset/3e187a9c-3e48-41dc-8f03-5affd73e7e5f'

function Avatar({ src, alt = '' }) {
  return <img src={src} alt={alt} className="h-[42px] w-[42px] rounded-[6px] object-cover" />
}

function Pill({ children, variant = 'neutral' }) {
  const styles =
    variant === 'success'
      ? 'bg-[#2dd4bf] text-[#023b33]'
      : variant === 'warning'
        ? 'bg-[#ffd966] text-[#4b2e00]'
        : variant === 'info'
          ? 'bg-[#e8f5ff] text-[#0f172a]'
          : 'bg-[#f0f4f8] text-[#94a3b8]'

  return (
    <span className={`inline-flex h-[28px] items-center rounded-[12px] px-[10px] text-[12px] font-medium ${styles}`}>
      {children}
    </span>
  )
}

function Header() {
  return (
    <header className="flex h-[76px] items-center justify-between border-b border-black/[0.08] bg-white px-7">
      <div>
        <p className="text-[13px] font-medium text-[#94a3b8]">Client admin panel</p>
        <h1 className="text-2xl font-bold leading-tight text-[#0f172a]">Payments & Coupons</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex h-10 min-w-[280px] items-center gap-2.5 rounded-md border border-black/[0.08] bg-white px-[15px]">
          <Search className="h-[18px] w-[18px] shrink-0 text-[#94a3b8]" />
          <input
            type="search"
            placeholder="Search transactions, coupons, or courses"
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
          <img src={AVATAR_RAHUL} alt="" className="h-9 w-9 shrink-0 rounded-md object-cover" />
          <div className="text-left">
            <div className="text-sm font-semibold leading-tight">Rahul Mehta</div>
            <div className="text-[13px] text-[#94a3b8]">Institute Owner</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default function AdminPaymentsCoupons() {
  const [activeFilter, setActiveFilter] = useState('All payments')
  const [couponFilter, setCouponFilter] = useState('All coupons')

  const filters = ['All payments', 'Succeeded', 'Failed', 'Refunded']
  const couponFilters = ['All coupons', 'Active', 'Limited', 'Scheduled']

  const transactions = [
    {
      id: 1,
      title: 'Aarav Sharma paid for STEM Explorers Program',
      amount: '₹4,999',
      meta: 'TKN-984731 • Card • Today, 10:22 AM',
      status: 'Captured',
      statusVariant: 'success',
      side: 'Aisha Verma',
    },
    {
      id: 2,
      title: 'Refund issued for Creative English Club',
      amount: '₹2,299',
      meta: 'TKN-264887 • Net banking • Yesterday, 6:42 PM',
      status: 'Refunded',
      statusVariant: 'warning',
      side: 'Support desk',
    },
    {
      id: 3,
      title: 'Payment failed for Math Mastery Live batch',
      amount: '₹4,999',
      meta: 'TKN-188640 • Card • Yesterday, 7:16 PM',
      status: 'Failed',
      statusVariant: 'neutral',
      side: 'Retry needed',
    },
    {
      id: 4,
      title: 'Riya Patel renewed Coding for Kids Bootcamp',
      amount: '₹3,499',
      meta: 'TKN-456732 • UPI • Today, 9:15 AM',
      status: 'Captured',
      statusVariant: 'success',
      side: 'Aarav Sharma',
    },
  ]

  const coupons = [
    {
      code: 'SUMMER20',
      desc: '20% off on STEM and science programs',
      usage: '184 / 250 uses',
      expiry: 'Ends in 3 days',
      status: 'Active',
      statusVariant: 'success',
      action: 'Edit',
    },
    {
      code: 'WELCOME500',
      desc: '₹500 off first purchase',
      usage: '92 / 100 uses',
      expiry: 'New learner only',
      status: 'Limited',
      statusVariant: 'warning',
      action: 'Pause',
    },
    {
      code: 'FLASH45',
      desc: '45% off live classes',
      usage: '43 / 200 uses',
      expiry: 'Weekend evening campaign',
      status: 'Scheduled',
      statusVariant: 'info',
      action: 'Preview',
    },
    {
      code: 'EARLYBIRD10',
      desc: '10% off early registrations',
      usage: '156 / 300 uses',
      expiry: 'Ends in 5 days',
      status: 'Active',
      statusVariant: 'success',
      action: 'Edit',
    },
  ]

  return (
    <div className="min-h-full bg-[#F7FAFD]">
      <Header />
      <div className="flex flex-col gap-6 p-7">
        {/* Hero Section */}
        <section className="rounded-[8px] border border-black/[0.08] bg-gradient-to-br from-white to-[#e8f5ff] p-[25px]">
          <div className="flex flex-col gap-[11px]">
            <div className="inline-flex w-fit items-center rounded-[12px] bg-[#ffd966] px-[10px] py-[6.5px]">
              <span className="text-[12px] font-medium text-[#4b2e00]">Payment operations & coupon creation</span>
            </div>

            <h2 className="text-[28px] font-bold leading-tight text-[#0f172a]">
              Track revenue, review transactions, and create high-performing coupons from one admin workspace.
            </h2>

            <p className="max-w-3xl text-[14px] text-[#94a3b8]">
              Monitor collections, failed payments, and redemptions while keeping a ready-to-publish coupon form visible for quick campaign launches.
            </p>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <button className="inline-flex h-10 items-center gap-2 rounded-[6px] bg-[#5b3df6] px-4 text-[14px] font-medium text-white hover:bg-[#4b2fd5]">
              <Plus className="h-[18px] w-[18px]" />
              Create Coupon
            </button>
            <button className="h-10 rounded-[6px] border border-black/[0.08] bg-white px-[17px] text-[14px] font-medium text-[#0f172a] hover:bg-gray-50">
              Revenue Report
            </button>
            <button className="h-10 rounded-[6px] border border-black/[0.08] bg-white px-[17px] text-[14px] font-medium text-[#0f172a] hover:bg-gray-50">
              This month
            </button>
          </div>
        </section>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-4">
          <div className="rounded-[8px] border border-black/[0.08] bg-white p-[19px]">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[14px] font-medium text-[#94a3b8]">Total collected</p>
                <p className="text-[30px] font-bold tracking-[-0.6px] text-[#0f172a]">₹14.8L</p>
              </div>
              <div className="rounded-[6px] bg-[#e8f5ff] p-2">
                <Wallet className="h-[18px] w-[18px] text-[#5b3df6]" />
              </div>
            </div>
            <Pill variant="success">+12.4% vs last month</Pill>
          </div>

          <div className="rounded-[8px] border border-black/[0.08] bg-white p-[19px]">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[14px] font-medium text-[#94a3b8]">Pending settlements</p>
                <p className="text-[30px] font-bold tracking-[-0.6px] text-[#0f172a]">₹1.24L</p>
              </div>
              <div className="rounded-[6px] bg-[#e8f5ff] p-2">
                <CreditCard className="h-[18px] w-[18px] text-[#5b3df6]" />
              </div>
            </div>
            <Pill variant="info">9 payouts in queue</Pill>
          </div>

          <div className="rounded-[8px] border border-black/[0.08] bg-white p-[19px]">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[14px] font-medium text-[#94a3b8]">Coupon redemptions</p>
                <p className="text-[30px] font-bold tracking-[-0.6px] text-[#0f172a]">482</p>
              </div>
              <div className="rounded-[6px] bg-[#e8f5ff] p-2">
                <ShieldCheck className="h-[18px] w-[18px] text-[#5b3df6]" />
              </div>
            </div>
            <Pill variant="warning">Creator campaign ready</Pill>
          </div>

          <div className="rounded-[8px] border border-black/[0.08] bg-white p-[19px]">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[14px] font-medium text-[#94a3b8]">Failed payments</p>
                <p className="text-[30px] font-bold tracking-[-0.6px] text-[#0f172a]">18</p>
              </div>
              <div className="rounded-[6px] bg-[#e8f5ff] p-2">
                <AlertCircle className="h-[18px] w-[18px] text-[#5b3df6]" />
              </div>
            </div>
            <Pill variant="warning">Needs follow-up</Pill>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-[1.8fr_1.2fr] gap-6">
          {/* Left Column - Transactions & Coupons */}
          <div className="space-y-6">
            {/* Transactions Section */}
            <section className="rounded-[8px] border border-black/[0.08] bg-white p-[21px]">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-[18px] font-bold text-[#0f172a]">Transactions</h3>
                  <p className="mt-1 text-[13px] text-[#94a3b8]">
                    Recent payments across courses, batches, and renewals.
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="h-10 rounded-[6px] border border-black/[0.08] bg-white px-[17px] text-[14px] font-medium text-[#0f172a] hover:bg-gray-50">
                    Export
                  </button>
                  <button className="h-10 rounded-[6px] bg-[#5b3df6] px-[16px] text-[14px] font-medium text-white hover:bg-[#4b2fd5]">
                    New Transaction
                  </button>
                </div>
              </div>

              {/* Filters */}
              <div className="mb-4 flex items-center justify-between border-b border-black/[0.08] pb-3">
                <div className="flex gap-1">
                  {filters.map((f) => (
                    <button
                      key={f}
                      onClick={() => setActiveFilter(f)}
                      className={`rounded-full px-3 py-1 text-[12px] transition-colors ${
                        activeFilter === f
                          ? 'bg-[#ede7ff] font-medium text-[#5b3df6]'
                          : 'text-[#94a3b8] hover:bg-gray-50'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-1.5">
                  <button className="rounded-lg border border-black/[0.08] px-2.5 py-1 text-[11px] text-[#64748b] hover:bg-gray-50">
                    Amount
                  </button>
                  <button className="rounded-lg border border-black/[0.08] px-2.5 py-1 text-[11px] text-[#64748b] hover:bg-gray-50">
                    Date
                  </button>
                </div>
              </div>

              {/* Transaction List */}
              <div className="space-y-3">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between rounded-lg border border-black/[0.08] p-3 hover:bg-gray-50/60"
                  >
                    <div className="flex flex-1 items-start gap-3">
                      <Receipt className="mt-0.5 h-4 w-4 shrink-0 text-[#5b3df6]" />
                      <div className="flex-1">
                        <h4 className="text-[12px] font-semibold text-[#0f172a]">{transaction.title}</h4>
                        <p className="mt-1 text-[11px] text-[#94a3b8]">{transaction.meta}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-[12px] font-semibold text-[#0f172a]">{transaction.amount}</p>
                        <p className="text-[10px] text-[#94a3b8]">{transaction.side}</p>
                      </div>
                      <Pill variant={transaction.statusVariant}>{transaction.status}</Pill>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Coupons Section */}
            <section className="rounded-[8px] border border-black/[0.08] bg-white p-[21px]">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-[18px] font-bold text-[#0f172a]">Active coupons</h3>
                  <p className="mt-1 text-[13px] text-[#94a3b8]">
                    Performance, limits, and quick actions for live campaigns.
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="h-10 rounded-[6px] border border-black/[0.08] bg-white px-[17px] text-[14px] font-medium text-[#0f172a] hover:bg-gray-50">
                    Export list
                  </button>
                </div>
              </div>

              {/* Filters */}
              <div className="mb-4 flex items-center justify-between border-b border-black/[0.08] pb-3">
                <div className="flex gap-1">
                  {couponFilters.map((f) => (
                    <button
                      key={f}
                      onClick={() => setCouponFilter(f)}
                      className={`rounded-full px-3 py-1 text-[12px] transition-colors ${
                        couponFilter === f
                          ? 'bg-[#ede7ff] font-medium text-[#5b3df6]'
                          : 'text-[#94a3b8] hover:bg-gray-50'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Coupon List */}
              <div className="space-y-3">
                {coupons.map((coupon) => (
                  <div
                    key={coupon.code}
                    className="flex items-center justify-between rounded-lg border border-black/[0.08] p-3 hover:bg-gray-50/60"
                  >
                    <div className="flex-1">
                      <h4 className="text-[13px] font-semibold text-[#0f172a]">{coupon.code}</h4>
                      <p className="mt-0.5 text-[11px] text-[#94a3b8]">{coupon.desc}</p>
                      <div className="mt-1 flex gap-2 text-[10px] text-[#94a3b8]">
                        <span>{coupon.usage}</span>
                        <span>•</span>
                        <span>{coupon.expiry}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Pill variant={coupon.statusVariant}>{coupon.status}</Pill>
                      <button className="rounded-[6px] border border-black/[0.08] bg-white px-2 py-1 text-[10px] font-semibold text-[#0f172a] hover:bg-gray-50">
                        {coupon.action}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Revenue Insights & Create Coupon */}
          <div className="space-y-6">
            {/* Revenue Insights */}
            <section className="rounded-[8px] border border-black/[0.08] bg-white p-[21px]">
              <h3 className="text-[18px] font-bold text-[#0f172a]">Revenue insights</h3>
              <p className="mt-1 text-[13px] text-[#94a3b8]">Quick pulse for the current week.</p>

              {/* Chart */}
              <div className="mt-4 flex h-[140px] items-end justify-center gap-4">
                {[42, 64, 57, 83, 92].map((v, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div
                      className="w-8 rounded-t-[4px] bg-gradient-to-b from-[#f7b267] to-[#5b3df6] transition-all hover:opacity-80"
                      style={{ height: `${v * 1.2}px` }}
                    />
                    <span className="text-[9px] text-[#94a3b8]">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri'][i]}</span>
                  </div>
                ))}
              </div>

              {/* Stats Grid */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="rounded-[8px] bg-[#f1f5f9] p-3">
                  <p className="text-[10px] text-[#94a3b8]">Avg order value</p>
                  <p className="text-[18px] font-bold text-[#0f172a]">₹1,840</p>
                </div>
                <div className="rounded-[8px] bg-[#f1f5f9] p-3">
                  <p className="text-[10px] text-[#94a3b8]">Refund rate</p>
                  <p className="text-[18px] font-bold text-[#0f172a]">1.2%</p>
                </div>
                <div className="rounded-[8px] bg-[#f1f5f9] p-3">
                  <p className="text-[10px] text-[#94a3b8]">Collection success</p>
                  <p className="text-[18px] font-bold text-[#0f172a]">96.4%</p>
                </div>
                <div className="rounded-[8px] bg-[#f1f5f9] p-3">
                  <p className="text-[10px] text-[#94a3b8]">Settlement ETA</p>
                  <p className="text-[18px] font-bold text-[#0f172a]">T+2 days</p>
                </div>
              </div>
            </section>

            {/* Create Coupon Form */}
            <section className="rounded-[8px] border border-black/[0.08] bg-white p-[21px]">
              <h3 className="text-[18px] font-bold text-[#0f172a]">Create coupon</h3>
              <p className="mt-1 text-[13px] text-[#94a3b8]">
                In-visible creation form, ready for the next campaign.
              </p>

              <div className="mt-4 space-y-3">
                <div>
                  <label className="mb-1 block text-[12px] font-medium text-[#0f172a]">Coupon code</label>
                  <input
                    type="text"
                    placeholder="e.g., SUMMER25"
                    className="w-full rounded-[6px] border border-black/[0.08] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
                    defaultValue="NEWBATCH25"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-[12px] font-medium text-[#0f172a]">Discount type</label>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-[6px] border border-black/[0.08] bg-white px-3 py-2 text-[13px] text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#5b3df6]">
                      <option>Percentage</option>
                      <option>Fixed amount</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-[12px] font-medium text-[#0f172a]">Value</label>
                  <input
                    type="text"
                    placeholder="Enter discount value"
                    className="w-full rounded-[6px] border border-black/[0.08] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
                    defaultValue="25%"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="mb-1 block text-[12px] font-medium text-[#0f172a]">Valid from</label>
                    <input
                      type="text"
                      placeholder="Start date"
                      className="w-full rounded-[6px] border border-black/[0.08] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
                      defaultValue="01 Jul 2026"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[12px] font-medium text-[#0f172a]">Valid till</label>
                    <input
                      type="text"
                      placeholder="End date"
                      className="w-full rounded-[6px] border border-black/[0.08] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
                      defaultValue="31 Jul 2026"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-[12px] font-medium text-[#0f172a]">Usage limit</label>
                  <input
                    type="text"
                    placeholder="Max redemptions"
                    className="w-full rounded-[6px] border border-black/[0.08] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
                    defaultValue="300 redemptions"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-[12px] font-medium text-[#0f172a]">Applies to</label>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-[6px] border border-black/[0.08] bg-white px-3 py-2 text-[13px] text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#5b3df6]">
                      <option>Coding + STEM courses</option>
                      <option>All courses</option>
                      <option>Live classes only</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-[12px] font-medium text-[#0f172a]">Description</label>
                  <textarea
                    rows="2"
                    placeholder="Campaign description"
                    className="w-full rounded-[6px] border border-black/[0.08] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
                    defaultValue="Launch offer for new enrollments across weekend coding and STEM batches."
                  />
                </div>

                <div className="rounded-[7px] border border-[#e6e9f3] bg-[#f6f8ff] px-3 py-2 text-[10px] text-[#7a84a1]">
                  Estimated impact: if 120 enrollments use this code, projected discount cost is 3.5L with expected lift in conversion of 9-12%.
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button className="flex-1 rounded-[6px] bg-[#5b3df6] px-3 py-2 text-[13px] font-semibold text-white hover:bg-[#4b2fd5]">
                  Save Coupon
                </button>
                <button className="flex-1 rounded-[6px] border border-black/[0.08] px-3 py-2 text-[13px] text-[#64748b] hover:bg-gray-50">
                  Preview Rules
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
