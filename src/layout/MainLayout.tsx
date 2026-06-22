import { Outlet } from 'react-router'

import Navbar from '@/components/common/Navbar'

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default MainLayout
