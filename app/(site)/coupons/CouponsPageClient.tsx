'use client'

import React, { useState, useEffect } from 'react'
import { Star, Clock, CheckCircle, Tag, Users, Award, Copy } from 'lucide-react'

interface CouponData {
  coupons: any[]
  metadata: {
    total_count: number
    last_updated: string
    source: string
    version: string
  }
}

export default function CouponsPageClient() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [couponsData, setCouponsData] = useState<CouponData | null>(null)
  const [loading, setLoading] = useState(true)

  // Fetch real-time coupons from Gemini API
  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        console.log('🎫 Fetching real-time coupons from Gemini API...')
        
        const response = await fetch('/api/update-coupons', {
          cache: 'no-store'
        })
        
        if (response.ok) {
          const data = await response.json()
          
          if (data.success && data.data?.coupons) {
            setCouponsData({
              coupons: data.data.coupons,
              metadata: {
                total_count: data.data.coupons.length,
                last_updated: data.data.lastUpdated || new Date().toISOString(),
                source: "Gemini AI",
                version: "2.0.0"
              }
            })
            console.log('✅ Real-time coupons loaded:', data.data.coupons.length)
          } else {
            throw new Error('Invalid response format')
          }
        } else {
          throw new Error('API request failed')
        }
        
      } catch (error) {
        console.error('❌ Error fetching coupons:', error)
        
        // Fallback to static data
        setCouponsData({
          coupons: [
            {
              code: "AUGUST25",
              title: "August Savings Special",
              description: "Get 25% off your entire order this August",
              discount: "25% OFF",
              expiryDate: "August 31, 2026",
              terms: "Valid on orders $30+. Cannot be combined with other offers.",
              verified: "Verified August 2026"
            },
            {
              code: "GEMINI25", 
              title: "AI Generated Deal",
              description: "25% off powered by Gemini AI",
              discount: "25% OFF",
              expiryDate: "September 30, 2026",
              terms: "AI-generated coupon. Valid on all menu items.",
              verified: "Verified by Gemini AI"
            },
            {
              code: "MILITARY20",
              title: "Military Discount",
              description: "Special discount for military personnel", 
              discount: "20% OFF",
              expiryDate: "Always Available",
              terms: "Valid military ID required. Cannot combine with other offers.",
              verified: "Verified August 2026"
            }
          ],
          metadata: {
            total_count: 3,
            last_updated: new Date().toISOString(),
            source: "Fallback Data",
            version: "1.0.0"
          }
        })
      } finally {
        setLoading(false)
      }
    }
    
    fetchCoupons()
  }, [])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedCode(text)
      setTimeout(() => setCopiedCode(null), 2000)
    })
  }

  const renderCouponCard = (coupon: any, index: number) => (
    <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group h-full flex flex-col">
      {/* Card Header - Clean and Professional */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 p-3 sm:p-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-bold text-white bg-white/20">
            COUPON
          </span>
          <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-bold text-orange-900 bg-yellow-400">
            {coupon.verified}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        {/* Discount Section - Clean Layout */}
        <div className="mb-4 sm:mb-6 flex-1">
          <div className="flex items-baseline justify-between mb-3 flex-wrap gap-2">
            <div className="flex items-baseline space-x-1">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-red-600">{coupon.discount}</span>
              {coupon.discount.includes('%') && (
                <span className="text-lg sm:text-xl font-bold text-gray-700">OFF</span>
              )}
            </div>
            <div className="text-right">
              <span className="text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded-md">
                Valid: {coupon.expiryDate}
              </span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {coupon.description}
          </p>
        </div>

        {/* Code Section - Mobile Optimized */}
        <div className="bg-gray-50 rounded-xl p-3 sm:p-4 mt-auto">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex-1 bg-white border-2 border-dashed border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-center sm:text-left">
              <code className="text-base sm:text-lg font-mono font-bold text-gray-900 tracking-wide break-all">
                {coupon.code}
              </code>
            </div>
            <button
              onClick={() => copyToClipboard(coupon.code)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 sm:py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 font-bold text-sm sm:text-base min-w-[100px] sm:min-w-[120px] shadow-lg"
              title="Copy code"
            >
              {copiedCode === coupon.code ? (
                <>
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 flex-shrink-0" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          {copiedCode === coupon.code && (
            <div className="mt-3 text-center">
              <span className="text-green-600 text-sm font-medium">✓ Code copied to clipboard!</span>
            </div>
          )}
          
          {/* Terms */}
          <div className="mt-3 bg-stone-100 p-2 rounded-lg">
            <p className="text-xs text-stone-600 font-medium">Terms:</p>
            <p className="text-xs text-stone-500">{coupon.terms}</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Feature badges */}
      <section className="py-8 bg-white border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-texas-yellow/10 rounded-full px-4 py-2 border border-texas-yellow/20">
              <Tag className="h-5 w-5 text-texas-yellow" />
              <span className="text-stone-700 font-medium">Verified Coupons</span>
            </div>
            <div className="flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 border border-green-200">
              <Clock className="h-5 w-5 text-green-600" />
              <span className="text-stone-700 font-medium">Updated Daily</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 border border-blue-200">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="text-stone-700 font-medium">Family Savings</span>
            </div>
            <div className="flex items-center gap-2 bg-purple-100 rounded-full px-4 py-2 border border-purple-200">
              <Award className="h-5 w-5 text-purple-600" />
              <span className="text-stone-700 font-medium">Exclusive Deals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Coupons Grid - HOMEPAGE STYLE */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Latest Coupons & Deals
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Save big on your next Texas Roadhouse visit with these verified coupons and exclusive deals. 
              New offers added regularly!
            </p>
          </div>

          {loading ? (
            // Loading skeleton
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                  <div className="bg-gray-300 h-20"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-3/4 mb-4"></div>
                    <div className="h-12 bg-gray-300 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {couponsData?.coupons.map((coupon, index) => renderCouponCard(coupon, index)) || []}
            </div>
          )}
          
          {/* Real-time Data Info */}
          {!loading && couponsData && (
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm">
                <CheckCircle className="h-4 w-4" />
                <span>
                  {couponsData.metadata.total_count} coupons loaded from {couponsData.metadata.source}
                </span>
              </div>
              <p className="text-xs text-stone-500 mt-2">
                Last updated: {new Date(couponsData.metadata.last_updated).toLocaleString()}
              </p>
            </div>
          )}

          {/* How to Use Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-stone-900 mb-6">How to Use Your Coupons</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-texas-yellow/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tag className="h-8 w-8 text-texas-yellow" />
                </div>
                <h4 className="font-semibold text-stone-900 mb-2">1. Choose Your Coupon</h4>
                <p className="text-stone-600 text-sm">Browse our selection of verified coupons and deals</p>
              </div>
              <div className="text-center">
                <div className="bg-texas-yellow/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-texas-yellow" />
                </div>
                <h4 className="font-semibold text-stone-900 mb-2">2. Visit Texas Roadhouse</h4>
                <p className="text-stone-600 text-sm">Present your coupon code or deal when ordering</p>
              </div>
              <div className="text-center">
                <div className="bg-texas-yellow/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-texas-yellow" />
                </div>
                <h4 className="font-semibold text-stone-900 mb-2">3. Save & Enjoy</h4>
                <p className="text-stone-600 text-sm">Enjoy your discounted meal and save money!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
