'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui'
import { NavItem } from '@/lib/types'

const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
        { label: 'Menu & Prices', href: '/menu' },
  { label: 'Meal Planner', href: '/meal-planner' },
  { label: 'Store Locator', href: '/store-locator' },
  { label: 'Gift Cards', href: '/gift-cards' },
  { label: 'Important Blogs', href: '/important-blogs' },
  { label: 'Blog', href: '/posts' },
  { label: 'Coupons', href: '/coupons' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    // Exact matching only - no substring matching to avoid conflicts
    if (href === '/') {
      return pathname === '/'
    }
    
    // For all other pages, require exact match
    return pathname === href
  }

  return (
    <nav className="w-full bg-white border-b-2 border-little-caesars-orange shadow-sm relative z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-18 lg:h-20 justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
                      <Image
                        src="/littlecaesars-menu-prices-logo-removebg-preview.png"
                        alt="Little Caesars Menu Logo"
                        width={200}
                        height={50}
                        className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
                        priority
                      />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4 xl:space-x-6">
            {navigation.slice(0, 8).map((item) => (
              <Link
                key={item.href}
                href={item.href as any}
                className={`px-3 py-2 rounded-lg text-little-caesars-black hover:text-little-caesars-orange hover:bg-little-caesars-orange/10 transition-all duration-200 font-medium text-sm xl:text-base whitespace-nowrap ${
                  isActive(item.href) 
                    ? 'text-white bg-little-caesars-orange hover:bg-orange-600 hover:text-white' 
                    : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>


          {/* Mobile/Tablet menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-little-caesars-black hover:text-little-caesars-orange transition-colors duration-200 p-2"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-little-caesars-orange/20 shadow-lg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="px-2 pt-3 pb-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href as any}
                  className={`block px-4 py-3 text-little-caesars-black hover:text-little-caesars-orange hover:bg-little-caesars-orange/10 transition-all duration-200 rounded-lg font-medium text-base ${
                    isActive(item.href) 
                      ? 'text-white bg-little-caesars-orange hover:bg-orange-600 hover:text-white' 
                      : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
