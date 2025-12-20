'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, ExternalLink } from 'lucide-react'
import { Input, Button } from '@/components/ui'
import { isValidEmail } from '@/lib/format'

// OneSignal TypeScript definitions
declare global {
  interface Window {
    OneSignal: any;
  }
}

const footerLinks = {
  menu: [
            { label: 'All Menus', href: '/menus-prices' },
        { label: 'Steaks', href: '/menus-prices?category=Steaks' },
        { label: 'Ribs', href: '/menus-prices?category=Ribs' },
        { label: 'Chicken', href: '/menus-prices?category=Chicken' },
        { label: 'Appetizers', href: '/menus-prices?category=Appetizers' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Gift Cards', href: '/gift-cards' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/posts' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    { label: 'Cookies Policy', href: '/cookies-policy' },
  ],
  social: [
    { 
      label: 'Official Little Caesars', 
      href: 'https://www.texasroadhouse.com',
      external: true 
    },
  ],
}

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState('')

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email) {
      setError('Please enter your email address')
      return
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    try {
      // Real OneSignal email subscription
      const response = await fetch('/api/newsletter-subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setSubscribed(true)
        const subscribedEmail = email
        setEmail('')
        
        // Also add to OneSignal email list
        if (typeof window !== 'undefined' && window.OneSignal) {
          window.OneSignal.push(function() {
            window.OneSignal.setEmail(subscribedEmail)
          })
        }
        
        // Welcome email is now handled directly by the API route
      } else {
        const errorData = await response.json()
        setError(errorData.message || 'Subscription failed. Please try again.')
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      setError('Something went wrong. Please try again.')
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-little-caesars-black bg-white border-t-4 border-little-caesars-orange">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Newsletter signup */}
            <div className="sm:col-span-2 lg:col-span-2">
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-little-caesars-orange">
                Stay Updated
              </h3>
              <p className="text-little-caesars-black/80 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                Get the latest pizza deals, special offers, and Little Caesars news delivered to your inbox.
              </p>
              
              {subscribed ? (
                <div className="flex items-center text-little-caesars-orange text-sm sm:text-base">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  <span>Thanks for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={error}
                    className="bg-gray-50 border-gray-200 text-little-caesars-black placeholder-gray-500 text-sm sm:text-base"
                  />
                  <Button type="submit" className="w-full touch-manipulation bg-little-caesars-orange hover:bg-orange-600 text-white font-bold">
                    Subscribe
                  </Button>
                </form>
              )}
            </div>

            {/* Menu links */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-little-caesars-orange">
                Menu
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {footerLinks.menu.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href as any}
                      className="text-little-caesars-black/80 hover:text-little-caesars-orange transition-colors duration-200 text-sm sm:text-base touch-manipulation block py-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-little-caesars-orange">
                Company
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href as any}
                      className="text-little-caesars-black/80 hover:text-little-caesars-orange transition-colors duration-200 text-sm sm:text-base touch-manipulation block py-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal links */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-little-caesars-orange">
                Legal
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href as any}
                      className="text-little-caesars-black/80 hover:text-little-caesars-orange transition-colors duration-200 text-sm sm:text-base touch-manipulation block py-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-4 sm:mt-6">
                <h4 className="font-bold mb-2 text-little-caesars-orange text-sm sm:text-base">Official Site</h4>
                <a
                  href="https://littlecaesars.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-little-caesars-black/80 hover:text-little-caesars-orange transition-colors duration-200 flex items-center text-sm sm:text-base touch-manipulation py-1"
                >
                  Little Caesars
                  <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-little-caesars-orange/20 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="relative h-10 sm:h-12 w-auto">
                <Image
                  src="/littlecaesars-menu-prices-logo-removebg-preview.png"
                  alt="Little Caesars Menu Logo"
                  width={160}
                  height={48}
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
              <p className="text-little-caesars-black/80 text-sm sm:text-base text-center sm:text-left">
                © {currentYear} Little Caesars Menu. All rights reserved.
              </p>
            </div>
            
            <div className="text-center sm:text-right max-w-full sm:max-w-md">
              <div className="flex flex-wrap justify-center sm:justify-end gap-3 mb-3 text-xs">
                <Link href="/privacy-policy" className="text-little-caesars-black/60 hover:text-little-caesars-orange transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-and-conditions" className="text-little-caesars-black/60 hover:text-little-caesars-orange transition-colors">
                  Terms & Conditions
                </Link>
                <Link href="/cookies-policy" className="text-little-caesars-black/60 hover:text-little-caesars-orange transition-colors">
                  Cookies Policy
                </Link>
              </div>
              <p className="text-little-caesars-black/60 text-xs leading-relaxed px-2 sm:px-0">
                <strong>Disclaimer:</strong> Little Caesars Menu is an independent informational site. 
                We are not affiliated with or endorsed by Little Caesars. 
                All menu items, prices, and nutritional information are for reference only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
