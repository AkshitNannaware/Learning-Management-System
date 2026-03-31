import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
import Login from './components/Login'
import SignUp from './components/SignUp'
import ForgetPassword from './components/forgetPassword'
import Home from './pages/Home'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'
import SuperAdminLayout from './components/superadmin/SuperAdminLayout'
import SuperAdminOverview from './pages/super admin/SuperAdminOverview'
import SuperAdminDashboard from './pages/super admin/SuperAdminDashboard'
import SuperAdminTenantManagement from './pages/super admin/SuperAdminTenantManagement'
import SuperAdminRevenue from './pages/super admin/SuperAdminRevenue'
import SuperAdminUsers from './pages/super admin/SuperAdminUsers'
import SuperAdminReports from './pages/super admin/SuperAdminReports'
import SuperAdminPlansBilling from './pages/super admin/SuperAdminPlansBilling'
import SuperAdminSettings from './pages/super admin/SuperAdminSettings'
import AdminLayout from './components/admin/adminlayout'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminCourseManagement from './pages/admin/AdminCourseManagement'
import AdminInstructorManagement from './pages/admin/AdminInstructorManagement'
import AdminStudentManagement from './pages/admin/AdminStudentManagement'
import AdminPaymentsCupons from './pages/admin/AdminPayments&Cupons'
import AdminLiveClasses from './pages/admin/AdminLiveClasses'
import AdminAnalytics from './pages/admin/AdminAnalytics'
import InstructorLayout from './components/Instructor/InstructorLayout'
import InstructorDashboard from './pages/instructor/InstructorDashboard'
import InstructorMycourses from './pages/instructor/InstructorMycourses'
import InstructorOnlineClasses from './pages/instructor/InstructorOnlineClasses'
import InstructorWeeklyTest from './pages/instructor/InstructorWeeklyTest'
import InstructorSchoolEvents from './pages/instructor/InstructorSchoolEvents'
import InstructorStudentInsights from './pages/instructor/InstructorStudentInsights'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
        </Route>
        <Route path="/superadmin" element={<SuperAdminLayout />}>
          <Route index element={<SuperAdminOverview />} />
          <Route path="dashboard" element={<SuperAdminDashboard />} />
          <Route path="tenant-management" element={<SuperAdminTenantManagement />} />
          <Route path="revenue" element={<SuperAdminRevenue />} />
          <Route path="user-management" element={<SuperAdminUsers />} />
          <Route path="reports" element={<SuperAdminReports />} />
          <Route path="plans-billing" element={<SuperAdminPlansBilling />} />
          <Route path="platform-settings" element={<SuperAdminSettings />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="course-management" element={<AdminCourseManagement />} />
          <Route path="instructor-management" element={<AdminInstructorManagement />} />
          <Route path="student-management" element={<AdminStudentManagement />} />
          <Route path="payments-coupons" element={<AdminPaymentsCupons />} />
          <Route path="live-classes" element={<AdminLiveClasses />} />
          <Route path="analytics" element={<AdminAnalytics />} />
        </Route>
        <Route path="/instructor" element={<InstructorLayout />}>
          <Route index element={<InstructorDashboard />} />
          <Route path="dashboard" element={<InstructorDashboard />} />
          <Route path="my-courses" element={<InstructorMycourses />} />
          <Route path="online-classes" element={<InstructorOnlineClasses />} />
          <Route path="weekly-tests" element={<InstructorWeeklyTest />} />
          <Route path="school-events" element={<InstructorSchoolEvents />} />
          <Route path="student-insights" element={<InstructorStudentInsights />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
