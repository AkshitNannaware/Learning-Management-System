import React, { useEffect, useMemo, useState } from 'react'
import { Search, Building2, Users, Calendar, Shield, ShieldOff, Eye, Mail, Phone, MapPin, X, Download } from 'lucide-react'
import { api } from '../../lib/api'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

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
    variant === 'active'
      ? 'bg-[#2dd4bf] text-[#023b33]'
      : variant === 'review'
        ? 'bg-[#ffd966] text-[#4b2e00]'
        : variant === 'inactive'
          ? 'bg-[#f1f5f9] text-[#94a3b8]'
          : 'bg-[#f1f5f9] text-[#0f172a]'

  return <span className={`inline-flex h-[28px] items-center px-[10px] rounded-[12px] text-[12px] font-medium ${style}`}>{children}</span>
}

export default function SuperAdminTenantManagement() {
  const [query, setQuery] = useState('')
  const [admins, setAdmins] = useState([])
  const [tenantMap, setTenantMap] = useState({})
  const [page, setPage] = useState(0)
  const limit = 20
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [selectedAdmin, setSelectedAdmin] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [adminDetailsLoading, setAdminDetailsLoading] = useState(false)
  const [adminDetailsError, setAdminDetailsError] = useState('')
  const [adminDetails, setAdminDetails] = useState({
    instructors: [],
    students: [],
    bills: [],
    subscriptions: [],
    insights: {
      totalRevenue: 0,
      paidBills: 0,
      pendingBills: 0,
    },
  })
  const [error, setError] = useState('')

  const loadAdmins = async () => {
    try {
      setLoading(true)
      setError('')
      const [adminRes, tenantsRes] = await Promise.all([
        api(`/lms/users?role=admin&skip=0&limit=1000&q=${encodeURIComponent(query)}`),
        api('/lms/tenants').catch(() => ({ items: [] })),
      ])

      const items = [...(adminRes.items || [])].sort(
        (a, b) => new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime()
      )
      setAdmins(
        items.map((user) => ({
          id: user._id,
          name: user.full_name || 'Admin',
          email: user.email || '-',
          tenantId: user.tenant_id || '',
          role: String(user.role || 'admin').replace('_', ' '),
          active: user.is_active !== false,
          createdAt: user.created_at,
        }))
      )
      setTotal(items.length)

      const mappedTenants = {}
      ;((tenantsRes.items || tenantsRes) || []).forEach((tenant) => {
        mappedTenants[tenant._id] = tenant.name
      })
      setTenantMap(mappedTenants)
    } catch (err) {
      setError(err?.message || 'Unable to load admins')
      setAdmins([])
      setTotal(0)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setPage(0)
    loadAdmins()
  }, [])

  useEffect(() => {
    const id = setTimeout(() => {
      setPage(0)
      loadAdmins()
    }, 250)
    return () => clearTimeout(id)
  }, [query])

  const rows = useMemo(() => admins.slice(page * limit, page * limit + limit), [admins, page])

  const activeCount = admins.filter((admin) => admin.active).length
  const blockedCount = admins.filter((admin) => !admin.active).length
  const tenantCoverage = new Set(admins.map((admin) => admin.tenantId).filter(Boolean)).size

  async function downloadAdminData() {
    if (!selectedAdmin) return

    const details = await loadAdminDetails(selectedAdmin)

    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()
    const margin = 14

    const safeDate = selectedAdmin.createdAt ? new Date(selectedAdmin.createdAt).toLocaleDateString() : '-'

    const addSectionTitle = (title, y) => {
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(12)
      doc.text(title, margin, y)
      return y + 4
    }

    const addTable = (head, body, startY) => {
      autoTable(doc, {
        startY,
        head,
        body,
        margin: { left: margin, right: margin },
        styles: { fontSize: 9, cellPadding: 2.5, overflow: 'linebreak' },
        headStyles: { fillColor: [91, 61, 246] },
        alternateRowStyles: { fillColor: [248, 250, 252] },
      })
      return doc.lastAutoTable?.finalY ? doc.lastAutoTable.finalY + 8 : startY + 24
    }

    let y = 14
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(16)
    doc.text('Admin Report', margin, y)
    y += 6
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    doc.text(`Generated on: ${new Date().toLocaleString()}`, margin, y)
    y += 8

    y = addSectionTitle('Overview', y)
    y = addTable(
      [['Field', 'Value']],
      [
        ['Name', selectedAdmin.name],
        ['Email', selectedAdmin.email],
        ['Role', selectedAdmin.role],
        ['Tenant', tenantMap[selectedAdmin.tenantId] || '-'],
        ['Status', selectedAdmin.active ? 'Active' : 'Blocked'],
        ['Joined', safeDate],
        ['Total Instructors', String(details.instructors.length)],
        ['Total Students', String(details.students.length)],
        ['Paid Bills', String(details.insights.paidBills)],
        ['Pending Bills', String(details.insights.pendingBills)],
        ['Total Revenue', `₹${details.insights.totalRevenue.toLocaleString('en-IN')}`],
      ],
      y
    )

    y = addSectionTitle('Instructors', y)
    if (details.instructors.length === 0) {
      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')
      doc.text('No instructors found for this admin.', margin, y + 4)
      y += 10
    } else {
      y = addTable(
        [['Name', 'Email', 'Phone', 'Status']],
        details.instructors.map((ins) => [
          ins.full_name || '-',
          ins.email || '-',
          ins.phone || '-',
          ins.is_active ? 'Active' : 'Inactive',
        ]),
        y
      )
    }

    y = addSectionTitle('Students', y)
    if (details.students.length === 0) {
      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')
      doc.text('No students found for this admin.', margin, y + 4)
      y += 10
    } else {
      y = addTable(
        [['Name', 'Email', 'Phone', 'Status']],
        details.students.map((stu) => [
          stu.full_name || '-',
          stu.email || '-',
          stu.phone || '-',
          stu.is_active ? 'Active' : 'Inactive',
        ]),
        y
      )
    }

    y = addSectionTitle('Bills', y)
    if (details.bills.length === 0) {
      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')
      doc.text('No bills found for this admin.', margin, y + 4)
      y += 10
    } else {
      y = addTable(
        [['Order ID', 'Payment ID', 'Amount', 'Status', 'Date']],
        details.bills.map((bill) => [
          bill.order_id || '-',
          bill.payment_id || '-',
          `₹${Number(bill.amount || 0).toLocaleString('en-IN')}`,
          bill.status || '-',
          bill.created_at ? new Date(bill.created_at).toLocaleString() : '-',
        ]),
        y
      )
    }

    y = addSectionTitle('Subscriptions', y)
    if (details.subscriptions.length === 0) {
      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')
      doc.text('No subscriptions found for this admin.', margin, y + 4)
    } else {
      addTable(
        [['Name', 'Price', 'Billing', 'Status', 'Created']],
        details.subscriptions.map((plan) => [
          plan.name || '-',
          `₹${Number(plan.price || 0).toLocaleString('en-IN')}`,
          plan.billing_period || '-',
          plan.active ? 'Active' : 'Inactive',
          plan.created_at ? new Date(plan.created_at).toLocaleDateString() : '-',
        ]),
        y
      )
    }

    doc.save(`admin-${selectedAdmin.name.replace(/\s+/g, '-').toLowerCase()}-report.pdf`)
  }

  async function loadAdminDetails(admin) {
    if (!admin) return
    try {
      setAdminDetailsLoading(true)
      setAdminDetailsError('')

      const [instructorsRes, studentsRes, billsRes, plansRes] = await Promise.all([
        api('/lms/users?role=instructor&skip=0&limit=1000').catch(() => ({ items: [] })),
        api('/lms/users?role=student&skip=0&limit=1000').catch(() => ({ items: [] })),
        api('/lms/payments?skip=0&limit=1000').catch(() => ({ items: [] })),
        api('/lms/plans?skip=0&limit=1000').catch(() => ({ items: [] })),
      ])

      const tenantId = admin.tenantId || ''
      const adminEmail = String(admin.email || '').trim().toLowerCase()
      const belongsToAdmin = (item, options = {}) => {
        const itemTenantId = String(item?.tenant_id || item?.tenantId || '').trim()
        const itemOwnerId = String(item?.created_by || item?.user_id || item?.admin_id || '').trim()
        const itemEmail = String(item?.email || item?.admin_email || item?.owner_email || item?.user_email || '').trim().toLowerCase()

        if (tenantId && itemTenantId) return itemTenantId === tenantId
        if (tenantId && !itemTenantId) {
          return itemOwnerId === admin.id || itemEmail === adminEmail
        }

        if (itemOwnerId === admin.id || itemEmail === adminEmail) return true

        return options.allowFallbackAll !== false && !itemTenantId
      }

      const preferScopedOrAll = (scopedItems, allItems) => (scopedItems.length > 0 ? scopedItems : allItems)

      const allInstructors = instructorsRes.items || instructorsRes || []
      const allStudents = studentsRes.items || studentsRes || []
      const allBills = billsRes.items || billsRes || []
      const allPlans = plansRes.items || plansRes || []

      const instructors = preferScopedOrAll(
        allInstructors.filter((x) => belongsToAdmin(x, { allowFallbackAll: true })),
        allInstructors
      )
      const students = preferScopedOrAll(
        allStudents.filter((x) => belongsToAdmin(x, { allowFallbackAll: true })),
        allStudents
      )
      const bills = preferScopedOrAll(
        allBills.filter((x) => belongsToAdmin(x, { allowFallbackAll: true })),
        allBills
      )

      const plans = preferScopedOrAll(
        allPlans.filter((x) => {
        const itemTenantId = String(x?.tenant_id || x?.tenantId || '').trim()
        const itemCreatorId = String(x?.created_by || x?.user_id || '').trim()
        const itemCreatorEmail = String(x?.created_by_email || x?.email || '').trim().toLowerCase()

        if (tenantId && itemTenantId) return itemTenantId === tenantId
        if (tenantId && !itemTenantId) return itemCreatorId === admin.id || itemCreatorEmail === adminEmail
        return itemCreatorId === admin.id || itemCreatorEmail === adminEmail || !itemTenantId
      }),
        allPlans
      )

      const paidBills = bills.filter((x) => x.status === 'captured').length
      const pendingBills = bills.filter((x) => x.status !== 'captured').length
      const totalRevenue = bills
        .filter((x) => x.status === 'captured')
        .reduce((sum, x) => sum + Number(x.amount || 0), 0)

      setAdminDetails({
        instructors,
        students,
        bills,
        subscriptions: plans,
        insights: {
          totalRevenue,
          paidBills,
          pendingBills,
        },
      })
      return {
        instructors,
        students,
        bills,
        subscriptions: plans,
        insights: {
          totalRevenue,
          paidBills,
          pendingBills,
        },
      }
    } catch (err) {
      setAdminDetailsError(err?.message || 'Unable to load admin details')
      const fallback = {
        instructors: [],
        students: [],
        bills: [],
        subscriptions: [],
        insights: {
          totalRevenue: 0,
          paidBills: 0,
          pendingBills: 0,
        },
      }
      setAdminDetails(fallback)
      return fallback
    } finally {
      setAdminDetailsLoading(false)
    }
  }

  return (
    <div className="min-h-full bg-[#F7FAFD]">
      <div className="bg-gradient-to-b flex flex-col from-[#f6f8fa] gap-[24px] h-full p-[28px] to-[#f7fcff]">
        {/* Hero Section */}
        <section className="border border-black/[0.08] border-solid content-stretch flex flex-col items-start pb-[23px] pt-[25px] px-[25px] relative rounded-[8px] shrink-0 w-full bg-gradient-to-br from-white to-[#e8f5ff]">
          <div className="flex flex-col gap-[11px] items-start relative shrink-0">
            <div className="bg-[#ffd966] flex items-center px-[10px] py-[6.5px] rounded-[12px] shrink-0">
              <div className="flex flex-col font-medium h-[15px] justify-center leading-[0] text-[#4b2e00] text-[12px]">
                Admin management overview
              </div>
            </div>

            <div className="flex flex-col font-bold h-[31.59px] justify-center leading-[0] text-[#0f172a] text-[28px]">
              View all admins across all tenant organizations
            </div>

            <div className="flex flex-col font-normal h-[17px] justify-center leading-[0] text-[#94a3b8] text-[14px]">
              Search, review, and manage admin access from one place.
            </div>
          </div>

          <div className="mt-4 flex items-center gap-[12px]">
            <div className="bg-[#5b3df6] flex items-center gap-[8px] h-[40px] justify-center px-[16px] rounded-[6px] shrink-0">
              <Users className="h-[18px] w-[18px] text-white" />
              <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-white text-[14px]">
                All Admins
              </div>
            </div>
            <div className="border border-black/[0.08] flex gap-[8px] h-[40px] items-center justify-center px-[17px] py-[0.25px] rounded-[6px] shrink-0 bg-white">
              <Calendar className="h-[18px] w-[18px] text-[#94a3b8]" />
              <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">
                This year
              </div>
            </div>
          </div>
        </section>

        {/* Stats row */}
        <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))]">
          <StatCard 
            title="Total Admins" 
            value={String(total || rows.length)} 
            meta="Live count" 
            icon={<Users className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
          <StatCard 
            title="Active Admins" 
            value={String(activeCount)} 
            meta="Can access panel" 
            icon={<Shield className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
          <StatCard 
            title="Blocked Admins" 
            value={String(blockedCount)} 
            meta="Inactive accounts" 
            icon={<ShieldOff className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
          <StatCard 
            title="Tenant Coverage" 
            value={String(tenantCoverage)} 
            meta="Tenants with admins" 
            icon={<Building2 className="h-[18px] w-[18px] text-[#5b3df6]" />} 
          />
        </div>

        {error ? <p className="text-[13px] text-red-600">{error}</p> : null}

        {/* Admins Table */}
        <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-[4px]">
              <div className="font-bold text-[18px] text-[#0f172a]">All Admins</div>
              <div className="text-[13px] text-[#94a3b8]">All admin accounts visible in one list</div>
            </div>
            <div className="text-[13px] text-[#94a3b8]">Total: {total}</div>
          </div>

          {/* Search Bar */}
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#94a3b8]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search admins by name or email..."
              className="w-full border border-black/[0.08] rounded-[6px] py-[10px] pl-[38px] pr-[15px] text-[14px] focus:outline-none focus:border-[#5b3df6]"
            />
          </div>

          {/* Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-black/[0.08]">
                <tr>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Admin</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Email</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Tenant</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Role</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Status</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Joined</th>
                  <th className="px-4 py-3 text-left text-[13px] font-medium text-[#94a3b8]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-6 text-center text-[13px] text-[#94a3b8]">Loading admins...</td>
                  </tr>
                ) : null}
                {rows.map((admin, idx) => (
                  <tr key={admin.id || idx} className={`border-b border-black/[0.08] ${idx === rows.length - 1 ? 'border-b-0' : ''}`}>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-[12px]">
                        <div className="bg-[#e8f5ff] flex items-center justify-center rounded-[6px] shrink-0 size-[40px]">
                          <Users className="h-[18px] w-[18px] text-[#5b3df6]" />
                        </div>
                        <span className="font-semibold text-[14px] text-[#0f172a]">{admin.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-[14px] text-[#0f172a]">{admin.email}</td>
                    <td className="px-4 py-4 text-[14px] text-[#0f172a]">{tenantMap[admin.tenantId] || '-'}</td>
                    <td className="px-4 py-4 text-[14px] text-[#0f172a]">{admin.role}</td>
                    <td className="px-4 py-4">
                      <Pill variant={admin.active ? 'active' : 'inactive'}>
                        {admin.active ? 'Active' : 'Blocked'}
                      </Pill>
                    </td>
                    <td className="px-4 py-4 text-[14px] text-[#94a3b8]">
                      {admin.createdAt ? new Date(admin.createdAt).toLocaleDateString() : '-'}
                    </td>
                    <td className="px-4 py-4">
                      <button
                        onClick={() => {
                          setSelectedAdmin(admin)
                          setActiveTab('overview')
                          loadAdminDetails(admin)
                        }}
                        className="border border-black/[0.08] flex h-[36px] items-center gap-1 justify-center rounded-[6px] px-3 text-[12px] font-medium hover:bg-[#f1f5f9]"
                      >
                        <Eye className="h-[14px] w-[14px]" />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
                {!loading && rows.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-6 text-center text-[13px] text-[#94a3b8]">No admins found.</td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
          <div className="w-full flex items-center justify-between pt-2">
            <span className="text-xs text-[#94a3b8]">{Math.min(total, page * limit + 1)}-{Math.min(total, (page + 1) * limit)} of {total}</span>
            <div className="flex gap-2">
              <button onClick={() => setPage((p) => Math.max(0, p - 1))} className="border border-black/[0.08] rounded-[6px] px-3 py-1 text-xs">Prev</button>
              <button onClick={() => setPage((p) => ((p + 1) * limit < total ? p + 1 : p))} className="border border-black/[0.08] rounded-[6px] px-3 py-1 text-xs">Next</button>
            </div>
          </div>
        </div>
      </div>

      {selectedAdmin ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 sm:p-4" onClick={() => setSelectedAdmin(null)}>
          <div
            className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-100 p-4 sm:p-5">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-[#f3e8ff] flex items-center justify-center text-lg font-bold text-[#475569]">
                  {selectedAdmin.name
                    .split(' ')
                    .map((x) => x[0])
                    .join('')
                    .slice(0, 2)
                    .toUpperCase()}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{selectedAdmin.name}</h2>
                  <p className="text-sm text-gray-500">{selectedAdmin.id} • {selectedAdmin.role.toUpperCase()}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={downloadAdminData}
                  className="inline-flex h-9 items-center gap-2 rounded-lg border border-black/[0.08] px-3 text-sm font-medium text-[#0f172a] hover:bg-gray-50"
                >
                  <Download className="h-4 w-4" />
                  Download
                </button>
                <button onClick={() => setSelectedAdmin(null)} className="rounded-lg p-2 hover:bg-gray-100">
                  <X className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>

            <div className="flex overflow-x-auto border-b border-gray-100 px-4 sm:px-5">
              {['overview', 'instructors', 'students', 'bills', 'subscriptions'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`border-b-2 px-4 py-3 text-sm font-medium capitalize transition-colors ${
                    activeTab === tab
                      ? 'border-[#5b3df6] text-[#5b3df6]'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="max-h-[calc(90vh-140px)] overflow-y-auto p-4 sm:p-5">
              {adminDetailsError ? (
                <p className="mb-4 text-sm text-red-600">{adminDetailsError}</p>
              ) : null}
              {adminDetailsLoading ? (
                <div className="py-12 text-center text-sm text-gray-400">Loading admin data...</div>
              ) : null}
              {activeTab === 'overview' ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="mb-3 font-semibold text-gray-900">Personal Information</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Mail className="h-4 w-4" />
                          <span>{selectedAdmin.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Phone className="h-4 w-4" />
                          <span>-</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span>{tenantMap[selectedAdmin.tenantId] || '-'}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-3 font-semibold text-gray-900">Admin Metadata</h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p><span className="font-medium text-gray-900">Role:</span> {selectedAdmin.role}</p>
                        <p><span className="font-medium text-gray-900">Status:</span> {selectedAdmin.active ? 'Active' : 'Blocked'}</p>
                        <p><span className="font-medium text-gray-900">Tenant:</span> {tenantMap[selectedAdmin.tenantId] || '-'}</p>
                        <p><span className="font-medium text-gray-900">Joined:</span> {selectedAdmin.createdAt ? new Date(selectedAdmin.createdAt).toLocaleDateString() : '-'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <h3 className="mb-3 font-semibold text-gray-900">Enrollment Details</h3>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="rounded-lg bg-gray-50 p-3">
                        <p className="text-xs text-gray-500">Created Date</p>
                        <p className="mt-1 text-sm font-medium">{selectedAdmin.createdAt ? new Date(selectedAdmin.createdAt).toLocaleDateString() : '-'}</p>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-3">
                        <p className="text-xs text-gray-500">Section</p>
                        <p className="mt-1 text-sm font-medium">{selectedAdmin.section || 'A'}</p>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-3">
                        <p className="text-xs text-gray-500">Reference ID</p>
                        <p className="mt-1 text-sm font-medium">{selectedAdmin.id?.slice(-8) || '-'}</p>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-3">
                        <p className="text-xs text-gray-500">Status</p>
                        <div className="mt-1"><Pill variant={selectedAdmin.active ? 'active' : 'inactive'}>{selectedAdmin.active ? 'Active' : 'Blocked'}</Pill></div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <h3 className="mb-3 font-semibold text-gray-900">Subscription Plan</h3>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="rounded-lg bg-gray-50 p-3">
                        <p className="text-xs text-gray-500">Plan</p>
                        <p className="mt-1 text-sm font-medium">{selectedAdmin.subscription_plan || 'Standard'}</p>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-3">
                        <p className="text-xs text-gray-500">Amount</p>
                        <p className="mt-1 text-sm font-medium">₹{adminDetails.insights.totalRevenue.toLocaleString('en-IN')}</p>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-3">
                        <p className="text-xs text-gray-500">Valid Till</p>
                        <p className="mt-1 text-sm font-medium">{new Date().toLocaleDateString()}</p>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-3">
                        <p className="text-xs text-gray-500">Status</p>
                        <div className="mt-1"><Pill variant="active">Active</Pill></div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <h3 className="mb-3 font-semibold text-gray-900">Quick Summary</h3>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="rounded-lg bg-gray-50 p-3">
                        <p className="text-xs text-gray-500">Total Instructors</p>
                        <p className="mt-1 text-sm font-medium">{adminDetails.instructors.length}</p>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-3">
                        <p className="text-xs text-gray-500">Total Students</p>
                        <p className="mt-1 text-sm font-medium">{adminDetails.students.length}</p>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-3">
                        <p className="text-xs text-gray-500">Paid Bills</p>
                        <p className="mt-1 text-sm font-medium">{adminDetails.insights.paidBills}</p>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-3">
                        <p className="text-xs text-gray-500">Pending Bills</p>
                        <p className="mt-1 text-sm font-medium">{adminDetails.insights.pendingBills}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              {activeTab === 'instructors' ? (
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">All Instructors</h3>
                  {adminDetails.instructors.length === 0 ? (
                    <div className="py-12 text-center text-sm text-gray-400">No instructors found for this admin.</div>
                  ) : (
                    <div className="space-y-3">
                      {adminDetails.instructors.map((ins) => (
                        <div key={ins._id} className="rounded-lg border border-gray-200 p-3">
                          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                            <p className="text-sm"><span className="font-medium">Name:</span> {ins.full_name || '-'}</p>
                            <p className="text-sm"><span className="font-medium">Email:</span> {ins.email || '-'}</p>
                            <p className="text-sm"><span className="font-medium">Phone:</span> {ins.phone || '-'}</p>
                            <p className="text-sm"><span className="font-medium">Status:</span> {ins.is_active ? 'Active' : 'Inactive'}</p>
                            <p className="text-sm"><span className="font-medium">Role:</span> {ins.role || '-'}</p>
                            <p className="text-sm"><span className="font-medium">Joined:</span> {ins.created_at ? new Date(ins.created_at).toLocaleDateString() : '-'}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : null}

              {activeTab === 'students' ? (
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">All Students</h3>
                  {adminDetails.students.length === 0 ? (
                    <div className="py-12 text-center text-sm text-gray-400">No students found for this admin.</div>
                  ) : (
                    <div className="space-y-3">
                      {adminDetails.students.map((stu) => (
                        <div key={stu._id} className="rounded-lg border border-gray-200 p-3">
                          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                            <p className="text-sm"><span className="font-medium">Name:</span> {stu.full_name || '-'}</p>
                            <p className="text-sm"><span className="font-medium">Email:</span> {stu.email || '-'}</p>
                            <p className="text-sm"><span className="font-medium">Phone:</span> {stu.phone || '-'}</p>
                            <p className="text-sm"><span className="font-medium">Status:</span> {stu.is_active ? 'Active' : 'Inactive'}</p>
                            <p className="text-sm"><span className="font-medium">Role:</span> {stu.role || '-'}</p>
                            <p className="text-sm"><span className="font-medium">Joined:</span> {stu.created_at ? new Date(stu.created_at).toLocaleDateString() : '-'}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : null}

              {activeTab === 'bills' ? (
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">Bills & Transactions</h3>
                  {adminDetails.bills.length === 0 ? (
                    <div className="py-12 text-center text-sm text-gray-400">No bills found for this admin.</div>
                  ) : (
                    <div className="space-y-3">
                      {adminDetails.bills.map((bill) => (
                        <div key={bill._id} className="rounded-lg border border-gray-200 p-3">
                          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                            <p className="text-sm"><span className="font-medium">Order ID:</span> {bill.order_id || '-'}</p>
                            <p className="text-sm"><span className="font-medium">Payment ID:</span> {bill.payment_id || '-'}</p>
                            <p className="text-sm"><span className="font-medium">Amount:</span> ₹{Number(bill.amount || 0).toLocaleString('en-IN')}</p>
                            <p className="text-sm"><span className="font-medium">Status:</span> {bill.status || '-'}</p>
                            <p className="text-sm"><span className="font-medium">Currency:</span> {bill.currency || 'INR'}</p>
                            <p className="text-sm"><span className="font-medium">Date:</span> {bill.created_at ? new Date(bill.created_at).toLocaleString() : '-'}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : null}

              {activeTab === 'subscriptions' ? (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Subscriptions Uploaded by Admin</h3>
                  {adminDetails.subscriptions.length === 0 ? (
                    <div className="py-12 text-center text-sm text-gray-400">No subscriptions found for this admin.</div>
                  ) : (
                    <div className="space-y-3">
                      {adminDetails.subscriptions.map((plan) => (
                        <div key={plan._id} className="rounded-lg border border-gray-200 p-3">
                          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                            <p className="text-sm"><span className="font-medium">Name:</span> {plan.name || '-'}</p>
                            <p className="text-sm"><span className="font-medium">Price:</span> ₹{Number(plan.price || 0).toLocaleString('en-IN')}</p>
                            <p className="text-sm"><span className="font-medium">Billing:</span> {plan.billing_period || '-'}</p>
                            <p className="text-sm"><span className="font-medium">Status:</span> {plan.active ? 'Active' : 'Inactive'}</p>
                            <p className="text-sm"><span className="font-medium">Tenant:</span> {tenantMap[plan.tenant_id] || '-'}</p>
                            <p className="text-sm"><span className="font-medium">Created:</span> {plan.created_at ? new Date(plan.created_at).toLocaleDateString() : '-'}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                null
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
