import { Link } from 'react-router'
import { useRecoilState, useRecoilValue } from 'recoil'

import { cartState, totalPriceState } from '@/state/cartState'
import { useCartContext } from '@/context/CartContext'
import { formatRupiah } from '@/utils/formatCurrency'

import { Trash2, ShoppingBag } from 'lucide-react'

const Cart = () => {
  const [cart, setCart] = useRecoilState(cartState)
  const totalPrice = useRecoilValue(totalPriceState)

  const { REMOVE_ITEM, CLEAR_CART } = useCartContext()

  const handleCartAction = (action: string, productId?: string) => {
    switch (action) {
      case REMOVE_ITEM:
        if (!productId) return

        setCart((currentCart) =>
          currentCart.filter((item) => item.id !== productId),
        )
        break
      case CLEAR_CART:
        setCart([])
        break
      default:
        break
    }
  }

  console.log(cart)

  return (
    <section>
      <div className="mb-8 flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Keranjang Belanja</h1>
          <p className="text-xs md:text-sm text-gray-500">
            Cek kembali produk yang telah Anda tambahkan ke keranjang belanja Anda.
          </p>
        </div>
        {cart.length > 0 && (
          <button
            type="button"
            onClick={() => handleCartAction(CLEAR_CART)}
            className="flex-none inline-flex items-center justify-center gap-2 rounded-lg bg-red-500 text-white px-4 py-2 text-xs md:text-sm font-semibold transition hover:bg-red-600 hover:cursor-pointer"
            disabled={cart.length === 0}
          >
            <Trash2 className="h-4 w-4" />
            Kosongkan Keranjang
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="rounded-2xl border border-gray-200 shadow-sm p-3 sm:p-4 text-center">
          <ShoppingBag className="mx-auto h-12 w-12 text-gray-500" />
          <p className="mt-4 text-xl font-semibold">Keranjangmu kosong</p>
          <p className="text-sm text-gray-500">Tambahkan produk ke keranjang belanja Anda untuk melihatnya di sini.</p>
          <Link
            to="/"
            className="mt-6 inline-flex text-xs sm:text-sm rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Kembali ke Supermarket
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 rounded-2xl border border-gray-200 shadow-sm p-3 sm:p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="text-left">
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="mt-1 text-sm text-gray-500">{formatRupiah(item.price)} x {item.quantity}</p>
                <p className="mt-2 text-sm font-semibold">Subtotal: {formatRupiah(item.price * item.quantity)}</p>
              </div>
              <button
                type="button"
                onClick={() => handleCartAction(REMOVE_ITEM, item.id)}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-500/40 px-4 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500 hover:text-white hover:cursor-pointer"
              >
                <Trash2 className="h-4 w-4" />
                Hapus
              </button>
            </div>
          ))}
          <div className="rounded-2xl border border-gray-200 shadow-sm p-3 sm:p-4">
            <div className="flex items-center justify-between text-lg font-bold">
              <span>Total</span>
              <span>{formatRupiah(totalPrice)}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Cart
