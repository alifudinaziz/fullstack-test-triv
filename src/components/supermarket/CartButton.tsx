import { Link } from 'react-router'
import { useRecoilValue } from 'recoil'

import { totalItemsState } from '@/state/cartState'

import { ShoppingCart } from 'lucide-react'

const CartButton = () => {
  const totalItems = useRecoilValue(totalItemsState)

  return (
    <Link
      to="/cart"
      className="relative rounded-full p-2 text-slate-300 transition hover:text-white focus:outline-none focus:ring-0 focus:ring-transparent"
      aria-label={`View cart, ${totalItems} item${totalItems === 1 ? '' : 's'}`}
    >
      <ShoppingCart className="h-6 w-6" />
      {totalItems > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-xs font-bold leading-none text-white">
          {totalItems}
        </span>
      )}
    </Link>
  )
}

export default CartButton
