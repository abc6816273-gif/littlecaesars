'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  CreditCard,
  Gift,
  Search,
  Star,
  Shield,
  Clock,
  Users,
  Building2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    id: 'check-balance',
    question: 'NEED TO CHECK A BALANCE?',
    answer: 'You can check your gift card balance online by entering your card number and PIN above, call our customer service line, or visit any Little Caesars location.'
  },
  {
    id: 'pin-number',
    question: 'WHERE IS MY PIN NUMBER?',
    answer: 'Your PIN number is located on the back of your gift card under the scratch-off coating. Gently scratch off the silver coating to reveal your 4-digit PIN.'
  },
  {
    id: 'lost-card',
    question: 'MY GIFT CARD HAS BEEN LOST, STOLEN, OR DAMAGED!',
    answer: 'If your gift card is lost, stolen, or damaged, contact our customer service immediately. We can help replace your card if you have the original purchase receipt and card number.'
  },
  {
    id: 'physical-card',
    question: 'I ORDERED A PHYSICAL GIFT CARD FROM LITTLECAESARS.COM, WHERE IS IT?',
    answer: 'Physical gift cards ordered online typically arrive within 7-10 business days. You will receive a tracking number via email once your card ships.'
  },
  {
    id: 'egift-card',
    question: 'I ORDERED AN E-GIFT CARD FROM LITTLECAESARS.COM, WHERE IS IT?',
    answer: 'E-gift cards are delivered instantly to the email address provided during purchase. Check your spam/junk folder if you don\'t see it in your inbox.'
  },
  {
    id: 'specials',
    question: 'ARE THERE ANY SPECIALS?',
    answer: 'Yes! We often run special promotions like bonus cards during holidays, bulk purchase discounts for businesses, and seasonal offers. Check our website regularly for current deals.'
  },
  {
    id: 'bonus-card',
    question: 'I RECEIVED A BONUS E-GIFT CARD, WHERE IS IT?',
    answer: 'Bonus e-gift cards are sent separately from your original purchase, usually within 48 hours. They will arrive at the same email address used for your purchase.'
  },
  {
    id: 'other-questions',
    question: 'HAVE OTHER QUESTIONS OR CONCERNS?',
    answer: 'Contact our customer service team at 1-800-CAESARS (1-800-223-7277) or email us at giftcards@littlecaesars.com. We\'re here to help Monday-Friday, 9 AM - 6 PM EST.'
  }
]

export default function GiftCardContent() {
  const [cardNumber, setCardNumber] = useState('')
  const [pinNumber, setPinNumber] = useState('')
  const [balance, setBalance] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [openFAQ, setOpenFAQ] = useState<string | null>(null)

  const handleBalanceCheck = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setBalance(null)

    try {
      const response = await fetch('/api/gift-cards/balance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cardNumber: cardNumber,
          pin: pinNumber,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setBalance(data.balance)
      } else {
        setError(data.error || 'Failed to check balance')
      }
    } catch (err) {
      console.error('Balance check error:', err)
      setError('Unable to check balance. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <div className="relative">
      {/* Compact Hero Section */}
      <section className="relative bg-gradient-to-r from-little-caesars-orange via-red-600 to-orange-500 py-8 md:py-12">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="flex justify-center items-center space-x-4 mb-6">
              <div className="bg-orange-400 rounded-lg p-3 shadow-lg">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-orange-200 font-bold text-sm uppercase tracking-wider">Perfect Gift</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Little Caesars Gift Cards
            </h1>
            <p className="text-lg md:text-xl text-orange-100 max-w-2xl mx-auto">
              Give the gift of Hot-N-Ready pizzas, Crazy Bread, and delicious Italian favorites
            </p>
          </div>

          {/* Small gift card preview */}
          <div className="flex justify-center space-x-2 opacity-75">
            <div className="w-16 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded shadow-lg flex items-center justify-center transform rotate-3">
              <span className="text-xs font-bold text-white">GIFT</span>
            </div>
            <div className="w-16 h-10 bg-gradient-to-br from-little-caesars-orange to-red-600 rounded shadow-lg flex items-center justify-center transform -rotate-2">
              <span className="text-xs font-bold text-white">CARD</span>
            </div>
            <div className="w-16 h-10 bg-gradient-to-br from-orange-500 to-orange-700 rounded shadow-lg flex items-center justify-center transform rotate-1">
              <Gift className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Balance Check Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-200">
            <div className="flex items-center justify-center mb-6">
              <Search className="w-6 h-6 text-little-caesars-orange mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-little-caesars-orange">CHECK YOUR BALANCE</h2>
            </div>
            <form onSubmit={handleBalanceCheck} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-2">
                    Gift Card Number
                  </label>
                  <input
                    type="text"
                    id="card-number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))}
                    placeholder="Enter card number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-little-caesars-orange focus:border-little-caesars-orange"
                    maxLength={16}
                  />
                </div>
                <div>
                  <label htmlFor="pin-number" className="block text-sm font-medium text-gray-700 mb-2">
                    4-Digit PIN
                  </label>
                  <input
                    type="password"
                    id="pin-number"
                    value={pinNumber}
                    onChange={(e) => setPinNumber(e.target.value.replace(/\D/g, ''))}
                    placeholder="Enter PIN"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-little-caesars-orange focus:border-little-caesars-orange"
                    maxLength={4}
                  />
                </div>
              </div>

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              {balance !== null && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                  <div className="text-lg font-semibold">Your balance is: ${balance.toFixed(2)}</div>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading || !cardNumber || !pinNumber}
                className="bg-little-caesars-orange hover:bg-little-caesars-orange/90 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Checking...
                  </div>
                ) : (
                  'Check Balance'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Gift Card Options */}
      <section className="py-12 bg-gradient-to-b from-amber-400 to-amber-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Choose Your Gift Card</h2>
          <p className="text-center text-white/90 mb-8">Give the gift of delicious pizza!</p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Personalize Your Cards */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <img
                  src="/menu/Homepage-menus/ExtraMostBestest-Pepperoni-Pizza-Little-Caesars-Menu.webp"
                  alt="Little Caesars Personalized Gift Card"
                  className="w-48 h-48 object-cover rounded-xl shadow-2xl transform rotate-3 border-4 border-white"
                />
                <div className="absolute top-4 right-4 bg-white/90 text-orange-600 px-3 py-1 rounded-full text-xs font-bold">
                  🎁 GIFT CARD
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-little-caesars-orange mb-3">PERSONALIZE YOUR CARDS</h3>
                <ul className="text-gray-700 space-y-1 mb-4 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-little-caesars-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Pre-designed and customizable pizza-themed options
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-little-caesars-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Free shipping and customizable greeting card packaging
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-little-caesars-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    eGift Card options sent via email instantly
                  </li>
                </ul>
                <a
                  href="https://www.littlecaesars.com/gift-cards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-little-caesars-orange hover:bg-little-caesars-orange/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 uppercase tracking-wide text-sm"
                >
                  BUY NOW
                </a>
              </div>
            </div>

            {/* Gift Cards for a Good Cause */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                <img
                  src="/menu/Homepage-menus/Ultimate-Supreme-Pizza-Little-Caesars-Menu.webp"
                  alt="Little Caesars Community Gift Card"
                  className="w-48 h-48 object-cover rounded-xl shadow-2xl transform -rotate-3 border-4 border-white"
                />
                <div className="absolute top-4 left-4 bg-yellow-400 text-red-800 px-3 py-1 rounded-full text-xs font-bold">
                  ❤️ GIVE BACK
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-little-caesars-orange mb-3">GIFT CARDS FOR A GOOD CAUSE</h3>
                <p className="text-gray-700 mb-4 text-sm">
                  When you purchase a gift card, Little Caesars supports local communities through various charitable initiatives and programs.
                </p>
                <a
                  href="https://www.littlecaesars.com/gift-cards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-little-caesars-orange hover:bg-little-caesars-orange/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 uppercase tracking-wide text-sm"
                >
                  PURCHASE GIFT CARDS
                </a>
              </div>
            </div>

            {/* Buy Gift Cards in Bulk */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-600 to-yellow-500 flex items-center justify-center">
                <img
                  src="/menu/Homepage-menus/Detroit-Style-Deep-Dish-Pepperoni-Little-Caesars-Menu.webp"
                  alt="Little Caesars Bulk Gift Cards"
                  className="w-48 h-48 object-cover rounded-xl shadow-2xl border-4 border-white"
                />
                <div className="absolute top-4 right-4 bg-white/90 text-orange-600 px-3 py-1 rounded-full text-xs font-bold">
                  🏢 BUSINESS
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-little-caesars-orange mb-3">BUY GIFT CARDS IN BULK</h3>
                <ul className="text-gray-700 space-y-1 mb-4 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-little-caesars-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Personalized gift cards with your company logo
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-little-caesars-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Special discounts on bulk orders of $1,000 or more
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-little-caesars-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Perfect for employee rewards, client gifts, and corporate events
                  </li>
                </ul>
                <a
                  href="https://www.littlecaesars.com/gift-cards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-little-caesars-orange hover:bg-little-caesars-orange/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 uppercase tracking-wide text-sm"
                >
                  BUY IN BULK
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-little-caesars-orange text-center mb-12">FREQUENTLY ASKED QUESTIONS</h2>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                >
                  <span className="font-semibold text-gray-900 uppercase tracking-wide">
                    {item.question}
                  </span>
                  {openFAQ === item.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === item.id && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-little-caesars-orange to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">READY TO ORDER A GIFT CARD?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Give the perfect gift - delicious Hot-N-Ready pizzas and unforgettable experiences at Little Caesars
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://texasroadhouse.cashstar.com/store/recipient?_gl=1*10g9cgq*_ga*MzQ1OTgzNzEzLjE3NTY5NTA2NzM.*_ga_XXJFB4ZMND*czE3NTY5NTA2NzMkbzEkZzEkdDE3NTY5NTE2MjAkajU4JGwwJGgw*_fplc*eFBDYXI2OEklMkZvTHFpeUd0MjFNSmZzdiUyQkJhSEVsaDJ5djVUJTJCWTRiYmNXSk12N0JlODVWcjBlRjhSNjc2MmRKbWRHdWdGTHdmeVVJbHN6ZXp0YW5BeEpPOG94bGg3TklvdGUwVDUlMkJpSkt0WFdFeTZQR0YxTjA4Q1NGSlk0SUElM0QlM0Q.&locale=en-us"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 uppercase tracking-wide inline-flex items-center justify-center"
            >
              BUY NOW
            </a>
            <a
              href="https://www.littlecaesars.com/store-locator"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-little-caesars-orange text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 uppercase tracking-wide inline-flex items-center justify-center"
            >
              FIND A LOCATION
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-little-caesars-orange mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">CUSTOMER SERVICE</h3>
              <p className="text-gray-600">1-800-CAESARS</p>
              <p className="text-gray-600">(1-800-223-7277)</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-little-caesars-orange mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">EMAIL SUPPORT</h3>
              <p className="text-gray-600">giftcards@littlecaesars.com</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-little-caesars-orange mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">SUPPORT HOURS</h3>
              <p className="text-gray-600">Monday - Friday</p>
              <p className="text-gray-600">9 AM - 6 PM EST</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
