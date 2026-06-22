import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router'
import { RecoilRoot } from 'recoil'

import App from '@/App'
import { CartProvider } from '@/context/CartContext'
import '@/styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </RecoilRoot>
  </StrictMode>
)
