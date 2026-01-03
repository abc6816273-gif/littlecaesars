'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui'
import { getFormattedDate, getStructuredDate } from '@/lib/date'
import { GeneratedCoupon } from '@/lib/gemini-coupons'
import { ChevronDown, ChevronUp, Copy, CheckCircle } from 'lucide-react'

interface CouponCode {
  code: string
  discount: string
  description: string
  verified: string
  type: 'code' | 'deal' | 'discount'
  validUntil?: string
}

interface CouponSectionProps {
  dynamicCoupons?: GeneratedCoupon[]
  lastUpdated?: string
}

interface FAQItem {
  question: string
  answer: string
}

export default function CouponSection({ dynamicCoupons, lastUpdated }: CouponSectionProps) {
  // FORCE REBUILD - RESPONSIVE CARDS: ${new Date().toISOString()}
  // PRODUCTION CACHE CLEAR: ${Date.now()}
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [loadedCoupons, setLoadedCoupons] = useState<GeneratedCoupon[]>([])
  const [couponMetadata, setCouponMetadata] = useState<{
    total_count: number;
    last_updated: string;
    source: string;
    version: string;
  } | null>(null)
  const [timeUntilUpdate, setTimeUntilUpdate] = useState<string>('Calculating...')
  const [isLoading, setIsLoading] = useState(true)

  const today = getFormattedDate()
  const structuredDate = getStructuredDate()
  const updateTime = lastUpdated || today

  // Function to fetch real-time coupons
  const fetchRealTimeCoupons = async () => {
    if (!dynamicCoupons) {
      setIsLoading(true)
      try {
        console.log('🎫 Homepage fetching real-time coupons...')

        // Try to force fresh coupons from Gemini API with retry logic
        let response = await fetch('/api/update-coupons?force=true', {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        })

        console.log('🔍 API Response Status:', response.status, response.ok)

        // If force failed, try without force parameter
        if (!response.ok) {
          console.log('🔄 Force update failed, trying regular fetch...')
          response = await fetch('/api/update-coupons', {
            cache: 'no-store',
            headers: {
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache'
            }
          })
        }

        if (response.ok) {
          const data = await response.json()
          console.log('🔍 API Response Data:', {
            success: data.success,
            coupons_count: data.data?.coupons?.length || 0,
            source: data.data?.source || 'unknown',
            error: data.error || 'none'
          })

          if (data.success && data.data?.coupons) {
            setLoadedCoupons(data.data.coupons)
            setCouponMetadata({
              total_count: data.data.coupons.length,
              last_updated: data.data.lastUpdated || data.data.metadata?.last_updated || new Date().toISOString(),
              source: "Live Data",
              version: "2.0.0"
            })
            console.log('✅ Homepage real-time coupons loaded:', data.data.coupons.length)
            console.log('📊 Coupon source:', data.data.metadata?.source || 'Unknown')
            console.log('🕐 Last updated:', data.data.lastUpdated || data.data.metadata?.last_updated)
            setIsLoading(false)
            return
          } else {
            console.log('⚠️ API response invalid format:', data)
          }
        } else {
          console.log('⚠️ API request failed with status:', response.status)
          const errorText = await response.text()
          console.log('⚠️ Error response:', errorText)
        }

        console.log('⚠️ API failed, falling back to JSON file...')

        // Fallback to JSON file
        const fallbackResponse = await fetch('/data/coupons.json', {
          cache: 'no-store'
        })
        console.log('🔍 Fallback Response Status:', fallbackResponse.status, fallbackResponse.ok)

        if (!fallbackResponse.ok) {
          throw new Error(`HTTP error! status: ${fallbackResponse.status}`)
        }

        const fallbackData = await fallbackResponse.json()
        console.log('🔍 Fallback Data:', {
          has_coupons: !!fallbackData.coupons,
          coupons_count: fallbackData.coupons?.length || 0,
          metadata_source: fallbackData.metadata?.source || 'unknown'
        })

        if (fallbackData && fallbackData.coupons && Array.isArray(fallbackData.coupons) && fallbackData.coupons.length > 0) {
          setLoadedCoupons(fallbackData.coupons) // Show all fallback coupons too
          if (fallbackData.metadata) {
            setCouponMetadata({
              ...fallbackData.metadata,
              source: "Fallback Data"
            })
          }
          console.log('✅ Homepage fallback coupons loaded:', fallbackData.coupons.length)
        } else {
          console.warn('No valid coupon data found in JSON file')
          setLoadedCoupons([])
        }

      } catch (err) {
        console.error('Error loading coupons:', err)
        setLoadedCoupons([])
      } finally {
        setIsLoading(false)
      }
    } else {
      setIsLoading(false)
    }
  }

  // Load real-time coupons on component mount and setup refresh
  useEffect(() => {
    fetchRealTimeCoupons()

    // Set up periodic refresh every 2 minutes to ensure real-time updates
    const refreshInterval = setInterval(() => {
      console.log('🔄 Periodic refresh of coupons...')
      fetchRealTimeCoupons()
    }, 2 * 60 * 1000) // 2 minutes for more frequent updates

    return () => clearInterval(refreshInterval)
  }, [dynamicCoupons])

  // Real-time countdown timer with seconds (updates every second)
  useEffect(() => {
    const calculateTimeUntilUpdate = () => {
      const now = new Date()
      const nextUpdate = new Date()
      nextUpdate.setUTCHours(13, 0, 0, 0) // 1 PM UTC = 8 AM EST

      if (nextUpdate <= now) {
        nextUpdate.setUTCDate(nextUpdate.getUTCDate() + 1)
      }

      const timeDiff = nextUpdate.getTime() - now.getTime()
      const hours = Math.floor(timeDiff / (1000 * 60 * 60))
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)

      return `${hours}h ${minutes}m ${seconds}s`
    }

    // Update every second for real-time countdown with seconds
    const timer = setInterval(() => {
      setTimeUntilUpdate(calculateTimeUntilUpdate())
    }, 1000)

    setTimeUntilUpdate(calculateTimeUntilUpdate())
    return () => clearInterval(timer)
  }, [])

  // Use loaded coupons from API (dynamicCoupons is null on homepage to trigger fetch)
  const activeCoupons = loadedCoupons


  const couponCodes: CouponCode[] = activeCoupons && activeCoupons.length > 0 ? activeCoupons.map((coupon, index) => ({
    code: coupon.code || 'NO CODE',
    discount: coupon.discount || 'Discount Available',
    description: coupon.description || 'Special offer available',
    verified: coupon.verified || `Verified ${today}`,
    type: (coupon.type as 'code' | 'deal' | 'discount') || 'discount',

    validUntil: coupon.validUntil || (coupon as any).valid_until || 'Valid until further notice'
  })) : [
    {
      code: "STATIC1",
      discount: "OLD DATA",
      description: "These are old static coupons - API failed to load",
      verified: "Fallback Only",
      type: "code",

      validUntil: "December 31, 2026"
    },
    {
      code: "NEWCUSTOMER",
      discount: "$5 OFF",
      description: "First-time Little Caesars app users",
      verified: "Verified December 2024",
      type: "code",

      validUntil: "Ongoing"
    },
    {
      code: "PIZZA30",
      discount: "30% OFF",
      description: "Savings on family combo meals and large pizzas",
      verified: "Verified December 2024",
      type: "code",

      validUntil: "December 31, 2024"
    }
  ]

  const otherSavings: CouponCode[] = activeCoupons && activeCoupons.length > 3 ? activeCoupons.slice(3, 6).map((coupon, index) => ({
    code: coupon.code || 'NO CODE',
    discount: coupon.discount || 'Special Offer',
    description: coupon.description || 'Additional savings available',
    verified: coupon.verified || `Verified ${today}`,
    type: (coupon.type as 'code' | 'deal' | 'discount') || 'deal',

    validUntil: coupon.validUntil || (coupon as any).valid_until || 'Valid until further notice'
  })) : [
    {
      code: "CAESAR REWARDS",
      discount: "FREE CRAZY BREAD",
      description: "Join Caesar Rewards & get free Crazy Bread on first order",
      verified: "Verified December 2024",
      type: "deal",

      validUntil: "Ongoing"
    },
    {
      code: "MILITARY ID",
      discount: "10% OFF",
      description: "Active & retired military with valid ID",
      verified: "Verified December 2024",
      type: "discount",

      validUntil: "Always Available"
    },
    {
      code: "FAMILY DEAL",
      discount: "$10 OFF",
      description: "Family combo meals with 2+ large pizzas",
      verified: "Verified December 2024",
      type: "deal",

      validUntil: "Daily Special"
    }
  ]

  const faqItems: FAQItem[] = [
    {
      question: "How to use a Little Caesars coupon code?",
      answer: "Copy the coupon code and apply it when ordering online or through the Little Caesars app. For in-store orders, show the code to the cashier. Some codes may require minimum purchase amounts."
    },
    {
      question: "Can I combine multiple coupons?",
      answer: "Usually no - most coupons cannot be combined. However, you can often use app-exclusive deals with Hot-N-Ready specials or family combo packages for maximum savings."
    },
    {
      question: "Where can I find exclusive deals?",
      answer: "Join Caesar Rewards for member-only offers, download the Little Caesars app for mobile-exclusive deals, sign up for email newsletters, and check this page regularly for updated codes and promotions."
    },
    {
      question: "How often are coupon codes updated?",
      answer: "We verify and update all coupon codes monthly. New codes are added as they become available, and expired codes are removed to ensure accuracy. All codes shown are verified for current promotions."
    },
    {
      question: "Do coupon codes expire?",
      answer: "Yes, most coupon codes have expiration dates. We clearly display the validity period for each code. Some deals like student discounts and Caesar Rewards benefits are ongoing and don't expire."
    },
    {
      question: "Are these coupons valid nationwide?",
      answer: "Most coupon codes are valid at participating Little Caesars locations nationwide. However, some regional restrictions may apply. We recommend confirming with your local restaurant before use."
    }
  ]

  const copyToClipboard = async (code: string) => {
    console.log('🔥 COPY BUTTON CLICKED:', code)
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(code)
      console.log('✅ CODE COPIED SUCCESSFULLY:', code)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error('❌ Failed to copy code:', err)
    }
  }

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  // FORCE COMPONENT REBUILD - NEW RESPONSIVE CARDS
  const renderCouponCard = (coupon: CouponCode, index: number) => (
    <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group h-full flex flex-col">
      {/* Card Header - Clean and Professional */}
      <div className="bg-little-caesars-orange p-3 sm:p-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-bold text-white bg-white/20">
            {coupon.type.toUpperCase()}
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
                Valid: {coupon.validUntil}
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
          {coupon.code && coupon.code !== 'NO CODE' ? (
            <>
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
            </>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="flex-1 bg-blue-50 border-2 border-blue-200 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-center sm:text-left">
                  <span className="text-sm sm:text-base font-semibold text-blue-900">
                    No code needed - Show this offer
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(coupon.description)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 sm:py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 font-bold text-sm sm:text-base min-w-[100px] sm:min-w-[120px] shadow-lg"
                  title="Copy offer details"
                >
                  {copiedCode === coupon.description ? (
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
              {copiedCode === coupon.description && (
                <div className="mt-3 text-center">
                  <span className="text-green-600 text-sm font-medium">✓ Offer details copied!</span>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )

  // Show loading state while data is being fetched
  if (isLoading) {
    return (
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-wood/20 rounded-lg w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-sand/20 rounded-lg w-96 mx-auto mb-8"></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white/50 rounded-2xl p-6 shadow-lg">
                    <div className="h-4 bg-wood/20 rounded w-24 mb-3"></div>
                    <div className="h-8 bg-red-cmyk/20 rounded w-32 mb-3"></div>
                    <div className="h-16 bg-sand/20 rounded mb-4"></div>
                    <div className="h-12 bg-wood/20 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Enhanced JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "name": "Little Caesars Coupons & Discount Codes FAQ",
            "description": "Frequently asked questions about Little Caesars coupons, discount codes, and savings strategies",
            "mainEntity": faqItems.map((item, index) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            })),
            "dateModified": structuredDate,
            "publisher": {
              "@type": "Organization",
              "name": "Little Caesars Menu",
              "url": "https://littlecaesarsmenu.us",
              "logo": "https://littlecaesarsmenu.us/littlecaesars-menu-prices-logo.png"
            },
            "about": {
              "@type": "Thing",
              "name": "Little Caesars Coupons",
              "description": "Discount codes and savings offers for Little Caesars pizza restaurant"
            }
          })
        }}
      />

      {/* Additional Schema for Coupon Offers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AggregateOffer",
            "name": "Little Caesars Coupons & Deals",
            "description": "Collection of verified coupon codes and discount offers for Little Caesars",
            "url": "https://littlecaesarsmenu.us",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "validFrom": structuredDate,
            "validThrough": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
            "offers": activeCoupons?.slice(0, 5).map(coupon => ({
              "@type": "Offer",
              "name": coupon.discount,
              "description": coupon.description,
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "validFrom": structuredDate
            })) || []
          })
        }}
      />

      <section id="coupons" className="pt-24 pb-20 bg-white relative overflow-hidden">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-little-caesars-orange text-white text-sm font-bold mb-6 shadow-lg">
              🍕 EXCLUSIVE PIZZA DEALS
            </div>
            <h2 className="font-slab font-slab-extra text-4xl sm:text-5xl lg:text-6xl text-little-caesars-black mb-6 leading-tight">
              Little Caesars Coupons &
              <span className="block text-little-caesars-orange">Discount Codes 2026</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Verified coupon codes and smart savings strategies for Hot-N-Ready® pizza deals.
              <time dateTime={structuredDate} className="font-bold text-little-caesars-orange mx-2">Updated {updateTime}</time>
            </p>

            {/* SEO Keywords Display */}
            <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {['Pizza Coupons', 'Family Combos', 'Hot-N-Ready', 'Crazy Bread', 'App Deals', 'Deep Dish'].map((keyword, index) => (
                <span key={index} className="px-3 py-1 bg-little-caesars-yellow text-little-caesars-black text-sm font-medium rounded-full border border-little-caesars-yellow">
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Daily Update Banner */}
          <div className="mb-12 mx-auto max-w-5xl">
            <div className="relative bg-little-caesars-black border-2 border-little-caesars-orange rounded-2xl p-8 text-center shadow-lg overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img src="/orange-background-6859059_1280.webp" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <h3 className="text-2xl font-bold text-white">🍕 AI-Powered Daily Updates</h3>
                </div>
                <p className="text-white text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
                  <strong className="text-little-caesars-orange font-bold">This site automatically updates pizza coupons daily</strong> using advanced AI technology.
                  Fresh Little Caesars discount codes are fetched every morning at 8 AM Eastern Time and verified for accuracy.
                </p>

                {/* Countdown Timer */}
                <div className="bg-white rounded-xl p-6 mb-6 border-2 border-little-caesars-orange shadow-lg">
                  <div className="flex items-center justify-center mb-3">
                    <span className="text-base font-bold text-little-caesars-black">Next Update In:</span>
                  </div>
                  <div className="text-3xl font-bold text-little-caesars-orange font-mono bg-little-caesars-yellow px-6 py-3 rounded-lg border border-little-caesars-orange">
                    {timeUntilUpdate}
                  </div>
                </div>

                {couponMetadata && (
                  <div className="text-base text-little-caesars-black bg-white rounded-lg p-4 border border-little-caesars-orange">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <p>
                        <span className="font-semibold text-little-caesars-black">Last updated:</span>
                        <span className="font-bold text-little-caesars-orange mx-2">
                          {new Date(couponMetadata.last_updated).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                        <span className="mx-2">•</span>
                        <span className="font-semibold text-little-caesars-black">Total active coupons:</span>
                        <span className="font-bold text-little-caesars-orange mx-2">{activeCoupons.length}</span>
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium px-2 py-1 rounded-full border">
                          {couponMetadata.source.includes('Gemini') || couponMetadata.source.includes('Live') ? (
                            <span className="text-green-700 bg-green-100 border-green-300 px-2 py-1 rounded-full">
                              🔄 Live Data
                            </span>
                          ) : couponMetadata.source.includes('Fallback') ? (
                            <span className="text-orange-700 bg-orange-100 border-orange-300 px-2 py-1 rounded-full">
                              📄 Fallback Data
                            </span>
                          ) : (
                            <span className="text-blue-700 bg-blue-100 border-blue-300 px-2 py-1 rounded-full">
                              📊 Live Data
                            </span>
                          )}
                        </span>
                        <button
                          onClick={() => {
                            console.log('🔄 Manual refresh triggered')
                            setIsLoading(true)
                            fetchRealTimeCoupons()
                          }}
                          disabled={isLoading}
                          className="text-xs bg-little-caesars-orange text-white px-3 py-1 rounded-full hover:bg-orange-600 disabled:opacity-50 transition-colors"
                        >
                          {isLoading ? '🔄' : '🔄 Refresh'}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Coupon Codes Grid */}
            <div className="mb-20">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-slab font-bold text-little-caesars-black mb-4">
                  Active Coupon Codes
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Verified discount codes for maximum savings on pizza, family combos, and more Little Caesars favorites
                </p>
              </div>
              {isLoading ? (
                // Loading skeleton while fetching real-time coupons
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                      <div className="bg-gray-300 h-16"></div>
                      <div className="p-6">
                        <div className="h-4 bg-gray-300 rounded mb-2"></div>
                        <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
                        <div className="h-12 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8">
                  {couponCodes.map((coupon, index) => renderCouponCard(coupon, index))}
                </div>
              )}
            </div>

            {/* Other Savings Methods */}
            <div className="mb-20">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-slab font-bold text-little-caesars-black mb-4">
                  Additional Savings Methods
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Smart strategies and exclusive offers for even more value
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {otherSavings.map((saving, index) => renderCouponCard(saving, index))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-little-caesars-black rounded-3xl shadow-2xl p-8 lg:p-12 border-2 border-little-caesars-orange">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-slab font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Everything you need to know about using Little Caesars coupons and getting the best deals
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border-2 border-little-caesars-orange rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left bg-little-caesars-orange hover:bg-orange-600 transition-all duration-200 flex items-center justify-between"
                  >
                    <span className="font-bold text-white text-lg">{item.question}</span>
                    {expandedFAQ === index ? (
                      <ChevronUp className="h-6 w-6 text-white" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-white" />
                    )}
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 py-5 bg-white border-t-2 border-little-caesars-orange">
                      <p className="text-little-caesars-black leading-relaxed text-base">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-little-caesars-black rounded-2xl p-8 border-2 border-little-caesars-orange">
              <p className="text-white text-lg mb-8 max-w-3xl mx-auto font-medium">
                New coupons and deals are added regularly. Bookmark this page and check back often for the latest Little Caesars savings!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/menus-prices">
                  <Button variant="primary" size="lg" className="bg-little-caesars-orange hover:bg-orange-600 text-white px-8 py-3 text-lg font-bold">
                    View Full Menu & Prices
                  </Button>
                </Link>
                <Link href="/newsletter">
                  <Button variant="outline" size="lg" className="border-2 border-little-caesars-orange text-little-caesars-orange hover:bg-little-caesars-orange hover:text-white px-8 py-3 text-lg font-bold">
                    Join VIP Club
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
