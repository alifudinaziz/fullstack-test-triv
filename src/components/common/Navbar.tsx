import { useState } from 'react'
import { NavLink } from 'react-router'

import CartButton from '@/components/supermarket/CartButton'
import { X, Menu } from 'lucide-react'

const navigation = [
  { name: 'Supermarket', href: '/' },
  { name: 'Trading Fest', href: '/tradingfest' },
]

function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-[#182129] border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 md:h-16 items-center justify-between">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mr-3 inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-0 focus:ring-transparent sm:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <NavLink to="/" className="flex items-center">
              <img
                src="/triv-logo.png"
                alt="Triv Logo"
                className="h-7 w-auto object-contain"
              />
            </NavLink>
            <div className="hidden sm:ml-8 sm:block">
              <div className="flex items-center gap-2">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    end={item.href === "/"}
                    className={({ isActive }) =>
                      classNames(
                        isActive
                          ? "bg-[#105375] text-white"
                          : "text-slate-300 hover:bg-[#105375] hover:text-white",
                        "rounded-md px-4 py-2 text-sm font-medium transition"
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <CartButton />
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-white/10 sm:hidden">
          <div className="space-y-1 px-4 py-3">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                end={item.href === "/"}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  classNames(
                    isActive
                      ? "bg-[#105375] text-white"
                      : "text-slate-300 hover:bg-[#105375] hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
