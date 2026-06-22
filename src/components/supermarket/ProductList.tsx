import { useSetRecoilState } from 'recoil'

import { products } from '@/data/products'
import { cartState } from '@/state/cartState'
import { useCartContext } from '@/context/CartContext'
import { formatRupiah } from '@/utils/formatCurrency'

type Product = {
  id: string
  name: string
  price: number
}

const ProductList = () => {
  const setCart = useSetRecoilState(cartState)
  const { ADD_ITEM } = useCartContext()

  const handleCartAction = (action: string, product: Product) => {
    switch (action) {
      case ADD_ITEM:
        setCart((currentCart) => {
          const existingItem = currentCart.find((item) => item.id === product.id)

          if (existingItem) {
            return currentCart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            )
          }

          return [
            ...currentCart,
            {
              id: product.id,
              name: product.name,
              price: product.price,
              quantity: 1,
            },
          ]
        })
        break

      default:
        break
    }
  }

  return (
    <section>
      <h1 className="mb-3 sm:mb-4 text-2xl font-semibold text-gray-900">Product List</h1>
      <div className="space-y-3 sm:space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 rounded-xl border border-gray-200 shadow-sm p-3 sm:p-4"
          >
            <div className="text-left">
              <p className="text-base sm:text-lg font-semibold text-gray-900">{product.name}</p>
              <p className="text-sm sm:text-base text-gray-500">{formatRupiah(product.price)}</p>
            </div>
            <button
              type="button"
              onClick={() => handleCartAction(ADD_ITEM, product)}
              className="text-xs sm:text-sm rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 hover:cursor-pointer"
            >
              Tambah ke Keranjang
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductList
