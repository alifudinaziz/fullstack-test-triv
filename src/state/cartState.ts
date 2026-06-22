import { atom, selector } from 'recoil'

export type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
}

const CART_STORAGE_KEY = 'shopping-cart'

const getCartFromStorage = (): CartItem[] => {
  try {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY)

    if (!storedCart) {
      return []
    }

    return JSON.parse(storedCart) as CartItem[]
  } catch {
    return []
  }
}

export const cartState = atom<CartItem[]>({
  key: 'cartState',
  default: getCartFromStorage(),
  effects: [
    ({ onSet }) => {
      onSet((newCart) => {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart))
      })
    },
  ],
})

export const totalItemsState = selector<number>({
  key: 'totalItemsState',
  get: ({ get }) => {
    const cart = get(cartState)

    return cart.reduce((total, item) => total + item.quantity, 0)
  },
})

export const totalPriceState = selector<number>({
  key: 'totalPriceState',
  get: ({ get }) => {
    const cart = get(cartState)

    return cart.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)
  },
})