import { Route, Routes } from 'react-router'

import MainLayout from '@/layout/MainLayout'

import NotFoundPage from '@/pages/NotFoundPage'
import SupermarketPage from '@/pages/SupermarketPage'
import TradingFestPage from '@/pages/TradingFestPage'
import CartPage from '@/pages/CartPage'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<SupermarketPage />} />
        <Route path="/tradingfest" element={<TradingFestPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes