import { createContext, useContext, type ReactNode } from 'react'

export const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_CART: 'CLEAR_CART',
} as const

export type CartAction = (typeof CART_ACTIONS)[keyof typeof CART_ACTIONS]

type CartContextValue = typeof CART_ACTIONS

type CartProviderProps = {
  children: ReactNode
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: CartProviderProps) {
  return (
    <CartContext.Provider value={CART_ACTIONS}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCartContext must be used inside CartProvider')
  }

  return context
}