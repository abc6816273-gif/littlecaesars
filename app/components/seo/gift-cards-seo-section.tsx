'use client'

import Link from 'next/link'
import { ChevronDown, ChevronUp, Gift, CreditCard, Star, ExternalLink, Smartphone, MapPin } from 'lucide-react'
import { useState } from 'react'

interface GiftCardsSEOSectionProps {
  className?: string
}

export function GiftCardsSEOSection({ className = '' }: GiftCardsSEOSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section className={`py-8 sm:py-12 lg:py-16 bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <header className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-stone-900 mb-4 sm:mb-6 leading-tight px-2">
              Little Caesars Gift Cards – Discounts, Deals & Info
            </h1>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-little-caesars-orange mx-auto rounded-full mb-4 sm:mb-6"></div>
          </header>

          {/* Introduction Content */}
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-stone-700 leading-relaxed space-y-4 sm:space-y-6 mb-8 sm:mb-10 lg:mb-12">
            <p className="text-base sm:text-lg lg:text-xl text-stone-800 font-medium">
              <strong>Little Caesars gift cards</strong> are the perfect gift for pizza lovers who crave Hot-N-Ready pizzas, Crazy Bread, and delicious wings. Available in both digital and physical formats, our gift cards offer convenience and flexibility for any occasion.
            </p>

            <p>
              Get exclusive bonus eGift deals when you purchase <strong>Little Caesars gift cards</strong> online! Our special promotions include bonus cards, bulk discounts for businesses, and seasonal offers that make your gift even more valuable. Whether you're shopping for birthdays, holidays, employee recognition, or just because, our gift cards deliver unforgettable pizza experiences.
            </p>
          </div>

          {/* Where to Buy Section */}
          <div className="bg-stone-50 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-stone-900 mb-6 sm:mb-8 text-center">
              Where to Buy Little Caesars Gift Cards
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-stone-800 flex items-center">
                  <Smartphone className="w-5 h-5 text-little-caesars-orange mr-2" />
                  Online & Digital Options
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-little-caesars-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Official Little Caesars Website</span>
                      <p className="text-stone-600 text-sm">Digital gift cards delivered via email</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-little-caesars-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Little Caesars App</span>
                      <p className="text-stone-600 text-sm">Purchase and manage cards on-the-go</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-little-caesars-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Amazon & Retail Partners</span>
                      <p className="text-stone-600 text-sm">Available online and in stores</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-stone-800 flex items-center">
                  <MapPin className="w-5 h-5 text-little-caesars-orange mr-2" />
                  Physical Locations
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-little-caesars-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Any Little Caesars Restaurant</span>
                      <p className="text-stone-600 text-sm">Available at all participating locations</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-little-caesars-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Walmart & Target</span>
                      <p className="text-stone-600 text-sm">Available in gift card sections</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-little-caesars-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Grocery Stores</span>
                      <p className="text-stone-600 text-sm">Kroger, Safeway, and more</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-6 sm:mt-8">
              <a
                href="https://www.littlecaesars.com/en-us/gift-cards"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-little-caesars-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-little-caesars-orange/90 transition-colors text-sm sm:text-base w-full sm:w-auto"
              >
                Buy Gift Cards Online <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Current Promotions Section */}
          <div className="bg-orange-50 border border-little-caesars-orange/20 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-stone-900 mb-6 sm:mb-8 text-center">
              Current Promotions & Bonus Deals
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-little-caesars-orange/20">
                <div className="flex items-center mb-4">
                  <Gift className="w-6 h-6 text-little-caesars-orange mr-3" />
                  <h3 className="text-lg font-bold text-stone-800">Holiday Bonus Special</h3>
                </div>
                <p className="text-stone-700 mb-4">
                  <strong>Get a FREE Crazy Bread</strong> when you purchase $25 or more in gift cards during the holiday season!
                </p>
                <div className="text-sm text-stone-600 bg-stone-50 p-3 rounded">
                  <strong>Terms:</strong> Valid at participating locations. See store for details.
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-little-caesars-orange/20">
                <div className="flex items-center mb-4">
                  <CreditCard className="w-6 h-6 text-little-caesars-orange mr-3" />
                  <h3 className="text-lg font-bold text-stone-800">Corporate Bulk Orders</h3>
                </div>
                <p className="text-stone-700 mb-4">
                  <strong>Special discounts on bulk orders</strong> for businesses. Perfect for employee appreciation, team lunches, and corporate events.
                </p>
                <div className="text-sm text-stone-600 bg-stone-50 p-3 rounded">
                  <strong>Benefits:</strong> Volume discounts, convenient delivery options.
                </div>
              </div>
            </div>
          </div>

          {/* Why Gift Cards Make a Great Gift Section */}
          <div className="bg-stone-50 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-stone-900 mb-6 sm:mb-8 text-center">
              Why Little Caesars Gift Cards Make a Great Gift
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="bg-little-caesars-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-little-caesars-orange" />
                </div>
                <h3 className="font-bold text-stone-800 mb-2">Perfect for Any Occasion</h3>
                <p className="text-stone-600 text-sm">Birthdays, pizza parties, game nights, or just because – gift cards work for every celebration.</p>
              </div>
              <div className="text-center">
                <div className="bg-little-caesars-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-little-caesars-orange" />
                </div>
                <h3 className="font-bold text-stone-800 mb-2">Guaranteed Satisfaction</h3>
                <p className="text-stone-600 text-sm">Everyone loves our Hot-N-Ready pizzas, Crazy Bread, and delicious wings at unbeatable prices.</p>
              </div>
              <div className="text-center">
                <div className="bg-little-caesars-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-little-caesars-orange" />
                </div>
                <h3 className="font-bold text-stone-800 mb-2">Flexible & Convenient</h3>
                <p className="text-stone-600 text-sm">No expiration dates, works at all locations, and can be used for any menu items.</p>
              </div>
            </div>
          </div>

          {/* Internal Links Section */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-12">
            <h3 className="text-xl font-bold text-stone-900 mb-4">Explore More Ways to Save</h3>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center bg-little-caesars-orange text-white px-4 py-2 rounded-lg font-semibold hover:bg-little-caesars-orange/90 transition-colors"
              >
                ← Back to Homepage
              </Link>
              <Link
                href="/coupons"
                className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                View Current Coupons & Deals →
              </Link>
              <Link
                href="/menus-prices"
                className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Browse Full Menu →
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-stone-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-stone-900 mb-6">Frequently Asked Questions</h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-stone-50 transition-colors"
                >
                  <span className="font-semibold text-stone-900">
                    Can I use a gift card to pay for menu items in-store?
                  </span>
                  {openFaq === 0 ? (
                    <ChevronUp className="h-5 w-5 text-stone-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-stone-500" />
                  )}
                </button>
                {openFaq === 0 && (
                  <div className="px-6 pb-4 border-t border-stone-100">
                    <p className="text-stone-600 pt-4">
                      Absolutely! <strong>Little Caesars gift cards</strong> can be used to pay for any menu items at all participating restaurant locations. Simply present your physical gift card or show your digital gift card on your mobile device at the register.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-stone-50 transition-colors"
                >
                  <span className="font-semibold text-stone-900">
                    Do Little Caesars gift cards expire?
                  </span>
                  {openFaq === 1 ? (
                    <ChevronUp className="h-5 w-5 text-stone-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-stone-500" />
                  )}
                </button>
                {openFaq === 1 && (
                  <div className="px-6 pb-4 border-t border-stone-100">
                    <p className="text-stone-600 pt-4">
                      No! <strong>Little Caesars gift cards</strong> never expire and have no maintenance fees. This makes them a perfect gift since the recipient can use them whenever they want without worrying about losing value over time.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-stone-50 transition-colors"
                >
                  <span className="font-semibold text-stone-900">
                    Can I check my gift card balance online?
                  </span>
                  {openFaq === 2 ? (
                    <ChevronUp className="h-5 w-5 text-stone-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-stone-500" />
                  )}
                </button>
                {openFaq === 2 && (
                  <div className="px-6 pb-4 border-t border-stone-100">
                    <p className="text-stone-600 pt-4">
                      Yes! You can check your <strong>Little Caesars gift card</strong> balance online at littlecaesars.com, by calling customer service, or by asking at any restaurant location.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Closing Content */}
          <div className="text-center">
            <p className="text-lg text-stone-700 mb-8">
              Give the gift of delicious pizza with <strong>Little Caesars gift cards</strong>. Perfect for pizza lovers, convenient for any occasion, and guaranteed to create memorable moments with every Hot-N-Ready order.
            </p>

            <a
              href="https://www.littlecaesars.com/en-us/gift-cards"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-little-caesars-orange text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-little-caesars-orange/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto"
            >
              Purchase Gift Cards Now <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
