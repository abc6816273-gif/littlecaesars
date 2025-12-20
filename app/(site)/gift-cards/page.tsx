import { Metadata } from 'next'
import { PageHero } from '@/components/layout'
import { GiftCardsSEOSection } from '@/components/seo/gift-cards-seo-section'
import GiftCardContent from './content'

export const metadata: Metadata = {
  title: 'Little Caesars Gift Cards - Perfect for Any Occasion',
  description: 'Give the gift of Hot-N-Ready pizzas and delicious Italian favorites. Little Caesars gift cards are perfect for birthdays, holidays, and special occasions. Check your balance and purchase online.',
  keywords: [
    'Little Caesars gift cards',
    'pizza gift cards',
    'gift card balance',
    'buy gift cards online',
    'Little Caesars presents',
    'dining gift cards'
  ],
  openGraph: {
    title: 'Little Caesars Gift Cards - Perfect for Any Occasion',
    description: 'Give the gift of Hot-N-Ready pizzas and delicious Italian favorites. Purchase Little Caesars gift cards online.',
    type: 'website',
    images: [
      {
        url: '/images/gift-cards/hero-gift-cards.jpg',
        width: 1200,
        height: 630,
        alt: 'Little Caesars Gift Cards'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Little Caesars Gift Cards - Perfect for Any Occasion',
    description: 'Give the gift of Hot-N-Ready pizzas and delicious Italian favorites.',
    images: ['/images/gift-cards/hero-gift-cards.jpg']
  }
}

export default function GiftCardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <PageHero
        title="Little Caesars Gift Cards"
        subtitle="Give the gift of Hot-N-Ready pizzas, Crazy Bread, and delicious Italian favorites"
        backgroundImage="/images/gift-cards/hero-gift-cards.jpg"
        className="bg-gradient-to-r from-little-caesars-orange via-red-600 to-orange-500"
      />
      
      {/* SEO-Optimized Gift Cards Content Section */}
      <GiftCardsSEOSection />
      
      <GiftCardContent />
    </div>
  )
}
