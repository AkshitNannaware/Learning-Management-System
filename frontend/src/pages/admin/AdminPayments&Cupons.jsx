import React from 'react'
import { Search, Upload, Plus, Receipt, Wallet, ShieldCheck } from 'lucide-react'

const AVATAR_RAHUL = 'https://www.figma.com/api/mcp/asset/5b24609b-97ad-4bea-af20-b4f4df404b75'

function Header() {
  return (
    <header className="flex h-[76px] items-center justify-between border-b border-black/[0.08] bg-white px-7">
      <div>
        <p className="text-[13px] font-medium text-[#94a3b8]">Client admin panel</p>
        <h1 className="text-2xl font-bold leading-tight text-[#0f172a]">Payments & Coupons</h1>
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

function StatCard({ label, value, badge, badgeClass }) {
  return (
    <div className="rounded-[8px] border border-black/[0.08] bg-white p-[16px]">
      <p className="text-[12px] font-medium text-[#94a3b8]">{label}</p>
      <p className="mt-2 text-[34px] font-bold leading-none text-[#0f172a]">{value}</p>
      <span className={`mt-2 inline-flex rounded-[12px] px-[10px] py-1 text-[11px] font-medium ${badgeClass}`}>{badge}</span>
    </div>
  )
}

export default function AdminPaymentsCupons() {
  const transactions = [
    { title: 'Aarav Sharma paid for STEM Explorers Program', amount: '₹4,999', meta: 'TKN-984731 • Card • Today, 10:22 AM', tag: 'Captured', tagClass: 'bg-[#2dd4bf] text-[#023b33]', side: 'Aisha Verma' },
    { title: 'Refund issued for Creative English Club', amount: '₹2,299', meta: 'TKN-264887 • Net banking • Yesterday, 6:42 PM', tag: 'Refunded', tagClass: 'bg-[#ffd966] text-[#4b2e00]', side: 'Support desk' },
    { title: 'Payment failed for Math Mastery Live batch', amount: '₹4,999', meta: 'TKN-188640 • Card • Yesterday, 7:16 PM', tag: 'Failed', tagClass: 'bg-[#f0f4f8] text-[#64748b]', side: 'Retry needed' },
  ]

  const coupons = [
    { code: 'SUMMER20', desc: '20% off on STEM and science programs • 184 / 250 uses • Ends in 3 days', status: 'Active', cls: 'bg-[#2dd4bf] text-[#023b33]', action: 'Edit' },
    { code: 'WELCOME500', desc: '₹500 off first purchase • 92 / 100 uses • New learner only', status: 'Limited', cls: 'bg-[#ffd966] text-[#4b2e00]', action: 'Pause' },
    { code: 'FLASH45', desc: '45% off live classes • 43 / 200 uses • Weekend evening campaign', status: 'Scheduled', cls: 'bg-[#e8f5ff] text-[#0f172a]', action: 'Preview' },
  ]

  return (
    <div className="min-h-full bg-[#f6f8fa]">
      <Header />
      <div className="space-y-4 p-5">
        <section className="rounded-[8px] border border-black/[0.08] bg-[#eaf2fb] p-6">
          <span className="inline-flex rounded-[12px] bg-[#ffd966] px-[10px] py-[5px] text-[11px] font-medium text-[#4b2e00]">Payment operations and coupon creation</span>
          <h2 className="text-[28px] font-bold leading-tight text-[#0f172a] pt-2">
            Track revenue, review transactions, and create high-performing <br/> coupons from one admin workspace.
          </h2>
          <p className="pt-2 text-[14px] text-[#94a3b8]">Monitor collections, failed payments, and redemptions while keeping a ready-to-publish coupon form visible for <br/> quick campaign launches.</p>
          <div className="mt-4 flex gap-2">
            <button className="inline-flex h-9 items-center gap-1 rounded-[7px] bg-[#5b3df6] px-3 text-[12px] font-semibold text-white">
              <Plus className="h-4 w-4" />
              Create Coupon
            </button>
            <button className="h-9 rounded-[7px] border border-black/[0.08] bg-white px-3 text-[12px] font-semibold text-[#111827]">Revenue Report</button>
          </div>
        </section>

        <div className="grid grid-cols-4 gap-3">
          <StatCard label="Total collected" value="₹14.8L" badge="+12.4% vs last month" badgeClass="bg-[#2dd4bf] text-[#023b33]" />
          <StatCard label="Pending settlements" value="₹1.24L" badge="9 payouts in queue" badgeClass="bg-[#f0f4f8] text-[#64748b]" />
          <StatCard label="Coupon redemptions" value="482" badge="Creator campaign ready" badgeClass="bg-[#ffd966] text-[#4b2e00]" />
          <StatCard label="Failed payments" value="18" badge="Needs follow-up" badgeClass="bg-[#ffd966] text-[#4b2e00]" />
        </div>

        <div className="grid grid-cols-[1.65fr_1fr] gap-3">
          <div className="space-y-3">
            <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <h3 className="text-[22px] font-bold text-[#111827]">Transactions</h3>
                  <p className="text-[12px] text-[#94a3b8]">Recent payments across courses, batches, and renewals.</p>
                </div>
                <div className="flex gap-1 text-[11px]">
                  <button className="rounded-[7px] border border-black/[0.08] bg-[#f1f5f9] px-2 py-1">All payments</button>
                  <button className="rounded-[7px] border border-black/[0.08] bg-white px-2 py-1">Succeeded</button>
                  <button className="rounded-[7px] border border-black/[0.08] bg-white px-2 py-1">Failed</button>
                  <button className="rounded-[7px] border border-black/[0.08] bg-white px-2 py-1">This month</button>
                </div>
              </div>
              <div className="space-y-2">
                {transactions.map((t) => (
                  <div key={t.title} className="flex items-center justify-between rounded-[8px] border border-black/[0.06] p-3">
                    <div className="flex min-w-0 items-start gap-2">
                      <Receipt className="mt-0.5 h-4 w-4 shrink-0 text-[#5b3df6]" />
                      <div className="min-w-0">
                        <p className="truncate text-[12px] font-semibold text-[#111827]">{t.title}</p>
                        <p className="text-[11px] text-[#64748b]">{t.amount}</p>
                        <p className="truncate text-[10px] text-[#9aa9c0]">{t.meta}</p>
                      </div>
                    </div>
                    <div className="ml-2 text-right">
                      <span className={`inline-flex rounded-[12px] px-2 py-1 text-[10px] font-medium ${t.tagClass}`}>{t.tag}</span>
                      <p className="mt-1 text-[10px] text-[#9aa9c0]">{t.side}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <h3 className="text-[22px] font-bold text-[#111827]">Active coupons</h3>
                  <p className="text-[12px] text-[#94a3b8]">Performance, limits, and quick actions for live campaigns.</p>
                </div>
                <button className="rounded-[7px] border border-black/[0.08] bg-[#f1f5f9] px-3 py-1 text-[11px] font-medium text-[#111827]">Export list</button>
              </div>
              <div className="space-y-2">
                {coupons.map((c) => (
                  <div key={c.code} className="flex items-center justify-between rounded-[8px] border border-black/[0.06] p-3">
                    <div className="min-w-0">
                      <p className="text-[12px] font-semibold text-[#111827]">{c.code}</p>
                      <p className="truncate text-[10px] text-[#9aa9c0]">{c.desc}</p>
                    </div>
                    <div className="ml-2 flex items-center gap-2">
                      <span className={`inline-flex rounded-[12px] px-2 py-1 text-[10px] font-medium ${c.cls}`}>{c.status}</span>
                      <button className="rounded-[6px] border border-black/[0.08] bg-white px-2 py-1 text-[10px] font-semibold text-[#111827]">{c.action}</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-3">
            <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
              <h3 className="text-[22px] font-bold text-[#111827]">Revenue insights</h3>
              <p className="text-[12px] text-[#94a3b8]">Quick pulse for the current week.</p>
              <div className="mt-3 flex h-[110px] items-end justify-center gap-3">
                {[42, 64, 57, 83, 92].map((v, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div className="w-6 rounded-t-[4px] bg-gradient-to-b from-[#f7b267] to-[#5b3df6]" style={{ height: `${v}px` }} />
                    <span className="text-[9px] text-[#94a3b8]">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri'][i]}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="rounded-[8px] bg-[#f1f5f9] p-2">
                  <p className="text-[10px] text-[#94a3b8]">Avg order value</p>
                  <p className="text-[18px] font-bold text-[#111827]">₹1,840</p>
                </div>
                <div className="rounded-[8px] bg-[#f1f5f9] p-2">
                  <p className="text-[10px] text-[#94a3b8]">Refund rate</p>
                  <p className="text-[18px] font-bold text-[#111827]">1.2%</p>
                </div>
                <div className="rounded-[8px] bg-[#f1f5f9] p-2">
                  <p className="text-[10px] text-[#94a3b8]">Collection success</p>
                  <p className="text-[18px] font-bold text-[#111827]">96.4%</p>
                </div>
                <div className="rounded-[8px] bg-[#f1f5f9] p-2">
                  <p className="text-[10px] text-[#94a3b8]">Settlement ETA</p>
                  <p className="text-[18px] font-bold text-[#111827]">T+2 days</p>
                </div>
              </div>
            </section>

            <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
              <h3 className="text-[22px] font-bold text-[#111827]">Create coupon</h3>
              <p className="text-[12px] text-[#94a3b8]">In-visible creation form, ready for the next campaign.</p>
              <div className="mt-3 space-y-2">
                {[
                  ['Coupon code', 'NEWBATCH25'],
                  ['Discount type', 'Percentage'],
                  ['Value', '25%'],
                  ['Valid from', '01 Jul 2026'],
                  ['Valid till', '31 Jul 2026'],
                  ['Usage limit', '300 redemptions'],
                  ['Applies to', 'Coding + STEM course'],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-[7px] border border-black/[0.08] bg-[#f8fafc] px-3 py-2">
                    <p className="text-[9px] text-[#94a3b8]">{k}</p>
                    <p className="text-[11px] font-medium text-[#111827]">{v}</p>
                  </div>
                ))}
                <div className="rounded-[7px] border border-black/[0.08] bg-[#f8fafc] px-3 py-2">
                  <p className="text-[9px] text-[#94a3b8]">Description</p>
                  <p className="text-[11px] text-[#111827]">Launch offer for new enrollments across weekend coding and STEM batches.</p>
                </div>
                <div className="rounded-[7px] border border-[#e6e9f3] bg-[#f6f8ff] px-3 py-2 text-[10px] text-[#7a84a1]">
                  Estimated impact: if 120 enrollments use this code, projected discount cost is 3.5L with expected lift in conversion of 9-12%.
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <button className="h-9 flex-1 rounded-[7px] bg-[#5b3df6] text-[12px] font-semibold text-white">Save Coupon</button>
                <button className="h-9 flex-1 rounded-[7px] border border-black/[0.08] bg-white text-[12px] font-semibold text-[#111827]">Preview Rules</button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

