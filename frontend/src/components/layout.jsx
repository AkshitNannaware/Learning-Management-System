import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  const location = useLocation()
  
  // Routes where header should be hidden
  const hideHeaderRoutes = ['/login', '/signup', '/forgetpassword']
  
  // Check if current path should hide header
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname)

  return (
    <div className="min-h-screen bg-white">
      {!shouldHideHeader && <Header />}
      <Outlet />
      {!shouldHideHeader && <Footer />}
    </div>
  )
}
