import { Metadata } from 'next'
import Link from 'next/link'
import {
    Truck,
    MapPin,
    Clock,
    DollarSign,
    Smartphone,
    CheckCircle,
    AlertCircle,
    Star,
    ArrowRight,
    Package,
    Timer,
    CreditCard
} from 'lucide-react'

// SEO Metadata
export const metadata: Metadata = {
    title: 'Little Caesars Delivery 2025 - Fees, Hours, Areas & How to Order',
    description: 'Complete Little Caesars delivery guide 2025! Delivery fees ($3.99), minimum order, delivery hours, areas covered, and step-by-step ordering guide.',
    keywords: [
        'Little Caesars delivery',
        'Little Caesars delivery near me',
        'Little Caesars delivery fee',
        'Little Caesars delivery hours',
        'Little Caesars delivery minimum',
        'does Little Caesars deliver',
        'Little Caesars delivery cost',
        'pizza delivery'
    ],
    openGraph: {
        title: 'Little Caesars Delivery Guide 2025 - Fees, Hours & Areas',
        description: 'Everything you need to know about Little Caesars delivery. Fees, hours, minimum order, and how to order.',
        url: 'https://littlecaesarsmenu.us/little-caesars-delivery',
        type: 'article'
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-delivery'
    }
}

// Delivery Info
const deliveryInfo = {
    fee: '$3.99',
    minimum: '$12.00',
    freeDeliveryThreshold: '$30.00 (with promo code)',
    estimatedTime: '25-45 minutes',
    hours: 'Store hours (typically 11am-10pm)',
    radius: '3-5 miles from store'
}

// How to Order Steps
const orderingSteps = [
    {
        step: 1,
        title: 'Download the App or Visit Website',
        description: 'Download the Little Caesars app from App Store or Google Play, or visit littlecaesars.com',
        icon: Smartphone
    },
    {
        step: 2,
        title: 'Enter Your Address',
        description: 'Enter your delivery address to find the nearest store that delivers to you',
        icon: MapPin
    },
    {
        step: 3,
        title: 'Select Your Items',
        description: 'Browse the menu and add your favorite pizzas, sides, and drinks to your cart',
        icon: Package
    },
    {
        step: 4,
        title: 'Apply Coupons',
        description: 'Enter promo codes like WEDELIVER for 20% off delivery orders!',
        icon: DollarSign
    },
    {
        step: 5,
        title: 'Pay and Track',
        description: 'Pay with credit card, debit, or gift card and track your order in real-time',
        icon: CreditCard
    }
]

// Delivery Tips
const deliveryTips = [
    {
        title: 'Order $30+ for Free Delivery',
        tip: 'Use code WEDELIVER to get free delivery on orders over $30',
        type: 'savings'
    },
    {
        title: 'Order During Off-Peak Hours',
        tip: 'Avoid busy times (6-8pm weekdays, Friday-Saturday evenings) for faster delivery',
        type: 'speed'
    },
    {
        title: 'Check Store Hours First',
        tip: 'Not all stores deliver during all hours. Verify delivery availability for your area',
        type: 'info'
    },
    {
        title: 'Keep Hot-N-Ready In Mind',
        tip: 'Hot-N-Ready pizzas are carryout only. Delivery orders are made fresh!',
        type: 'info'
    },
    {
        title: 'Tip Your Driver',
        tip: 'Standard pizza delivery tip is 15-20% or at least $3-5 for small orders',
        type: 'etiquette'
    }
]

// FAQ
const faqData = [
    {
        question: "Does Little Caesars deliver?",
        answer: "Yes! Little Caesars offers delivery at most locations through their app and website. You can also order through third-party apps like DoorDash, Uber Eats, and Grubhub."
    },
    {
        question: "How much is Little Caesars delivery fee?",
        answer: "Little Caesars delivery fee is typically $3.99. However, you can get free delivery on orders over $30 with promo codes like WEDELIVER."
    },
    {
        question: "What is the minimum order for Little Caesars delivery?",
        answer: "The minimum order for delivery is usually $12. This may vary by location."
    },
    {
        question: "How long does Little Caesars delivery take?",
        answer: "Delivery typically takes 25-45 minutes depending on your distance from the store, order size, and how busy they are."
    },
    {
        question: "Can I get Hot-N-Ready pizza delivered?",
        answer: "Hot-N-Ready pizzas are designed for in-store pickup and are not available for delivery. Delivery orders are made fresh when you order."
    },
    {
        question: "What are Little Caesars delivery hours?",
        answer: "Delivery hours follow store hours, typically 11am-10pm on weekdays and 11am-11pm on weekends. Hours vary by location."
    }
]

// Delivery Partners
const deliveryPartners = [
    { name: 'Little Caesars App', fee: '$3.99', speed: 'Fastest', rating: 4.8 },
    { name: 'DoorDash', fee: '$4.99+', speed: 'Fast', rating: 4.5 },
    { name: 'Uber Eats', fee: '$5.99+', speed: 'Fast', rating: 4.4 },
    { name: 'Grubhub', fee: '$5.99+', speed: 'Medium', rating: 4.3 }
]

// Schema
function generateSchemas() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Little Caesars Delivery Guide 2025",
        "author": { "@type": "Organization", "name": "Little Caesars Menu" },
        "datePublished": "2025-01-01",
        "dateModified": new Date().toISOString().split('T')[0]
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
    }

    return { articleSchema, faqSchema }
}

export default function DeliveryGuidePage() {
    const { articleSchema, faqSchema } = generateSchemas()

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
                {/* Breadcrumb */}
                <nav className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ol className="flex items-center space-x-2 py-4 text-sm">
                            <li><Link href="/" className="text-gray-500 hover:text-blue-600">Home</Link></li>
                            <li className="text-gray-400">/</li>
                            <li className="text-gray-900 font-medium">Delivery Guide</li>
                        </ol>
                    </div>
                </nav>

                {/* Hero */}
                <header
                    className="relative py-16 lg:py-24 overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #1d4ed8 100%)' }}
                >
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 text-8xl">🚚</div>
                        <div className="absolute bottom-10 right-10 text-8xl">🍕</div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center bg-green-400 text-green-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
                            <Truck className="w-4 h-4 mr-2" />
                            🚚 DELIVERY AVAILABLE!
                        </div>

                        <h1 style={{ color: '#ffffff' }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                            Little Caesars<br />
                            <span style={{ color: '#86efac' }}>Delivery Guide</span> 2025
                        </h1>

                        <p style={{ color: '#ffffff' }} className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                            Everything you need to know about getting pizza delivered to your door!
                        </p>

                        {/* Quick Info */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} className="backdrop-blur px-4 py-3 rounded-xl">
                                <div style={{ color: '#ffffff' }} className="text-2xl font-bold">{deliveryInfo.fee}</div>
                                <div style={{ color: '#ffffff' }} className="text-sm">Delivery Fee</div>
                            </div>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} className="backdrop-blur px-4 py-3 rounded-xl">
                                <div style={{ color: '#ffffff' }} className="text-2xl font-bold">{deliveryInfo.minimum}</div>
                                <div style={{ color: '#ffffff' }} className="text-sm">Minimum Order</div>
                            </div>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} className="backdrop-blur px-4 py-3 rounded-xl">
                                <div style={{ color: '#ffffff' }} className="text-2xl font-bold">25-45</div>
                                <div style={{ color: '#ffffff' }} className="text-sm">Min Delivery</div>
                            </div>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} className="backdrop-blur px-4 py-3 rounded-xl">
                                <div style={{ color: '#ffffff' }} className="text-2xl font-bold">3-5 mi</div>
                                <div style={{ color: '#ffffff' }} className="text-sm">Delivery Radius</div>
                            </div>
                        </div>

                        <a
                            href="https://littlecaesars.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-green-400 hover:bg-green-300 text-green-900 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                        >
                            Order Delivery Now
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </header>

                {/* How to Order */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                📱 How to Order Delivery
                            </h2>
                            <p className="text-lg text-gray-600">
                                5 easy steps to get pizza delivered
                            </p>
                        </div>

                        <div className="grid md:grid-cols-5 gap-6">
                            {orderingSteps.map((step) => {
                                const Icon = step.icon
                                return (
                                    <div key={step.step} className="text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Icon className="w-8 h-8 text-blue-600" />
                                            </div>
                                            <span className="absolute -top-2 -right-2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                                                {step.step}
                                            </span>
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                                        <p className="text-sm text-gray-600">{step.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Delivery Partners Comparison */}
                <section className="py-16 bg-blue-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            🚚 Delivery Options Compared
                        </h2>

                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                            <table className="w-full">
                                <thead className="bg-blue-600 text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left font-bold">Platform</th>
                                        <th className="px-6 py-4 text-center font-bold">Delivery Fee</th>
                                        <th className="px-6 py-4 text-center font-bold">Speed</th>
                                        <th className="px-6 py-4 text-center font-bold">Rating</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {deliveryPartners.map((partner, index) => (
                                        <tr key={index} className={`${index === 0 ? 'bg-green-50' : 'bg-white'} border-b border-gray-100`}>
                                            <td className="px-6 py-4 font-semibold">
                                                {partner.name}
                                                {index === 0 && <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">BEST</span>}
                                            </td>
                                            <td className="px-6 py-4 text-center font-bold text-blue-600">{partner.fee}</td>
                                            <td className="px-6 py-4 text-center">{partner.speed}</td>
                                            <td className="px-6 py-4 text-center">
                                                <span className="inline-flex items-center gap-1">
                                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                                    {partner.rating}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className="text-center text-sm text-gray-500 mt-4">
                            * We recommend ordering directly from the Little Caesars app for the lowest fees and fastest service
                        </p>
                    </div>
                </section>

                {/* Delivery Tips */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            💡 Delivery Tips & Tricks
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {deliveryTips.map((tip, index) => (
                                <div
                                    key={index}
                                    className={`rounded-2xl p-6 ${tip.type === 'savings' ? 'bg-green-50 border-2 border-green-200' :
                                            tip.type === 'speed' ? 'bg-blue-50 border-2 border-blue-200' :
                                                'bg-gray-50 border-2 border-gray-200'
                                        }`}
                                >
                                    <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
                                    <p className="text-gray-600 text-sm">{tip.tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Delivery Promo Code */}
                <section className="py-12 bg-gradient-to-r from-green-500 to-emerald-600">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 style={{ color: '#ffffff' }} className="text-2xl md:text-3xl font-bold mb-4">
                            🎉 Get 20% Off Delivery!
                        </h2>
                        <p style={{ color: '#ffffff' }} className="text-lg mb-6">
                            Use promo code WEDELIVER at checkout
                        </p>
                        <div className="inline-block bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-2xl">
                            WEDELIVER
                        </div>
                        <p style={{ color: '#ffffff' }} className="text-sm mt-4">
                            Valid for all delivery orders. May vary by location.
                        </p>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            Delivery FAQ
                        </h2>
                        <div className="space-y-4">
                            {faqData.map((faq, index) => (
                                <details key={index} className="group bg-blue-50 rounded-2xl overflow-hidden">
                                    <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-blue-100 transition-colors">
                                        <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                                        <svg className="w-6 h-6 text-blue-600 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-700 border-t border-blue-100 pt-4">
                                        {faq.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section
                    className="py-16"
                    style={{ background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #1d4ed8 100%)' }}
                >
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 style={{ color: '#ffffff' }} className="text-3xl md:text-4xl font-bold mb-6">
                            Ready for Pizza Delivery? 🍕🚚
                        </h2>
                        <p style={{ color: '#ffffff' }} className="text-xl mb-8">
                            Order now and get hot pizza delivered to your door!
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://littlecaesars.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ backgroundColor: '#ffffff', color: '#2563eb' }}
                                className="inline-flex items-center px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-colors shadow-lg"
                            >
                                Order Delivery
                                <Truck className="ml-2 w-5 h-5" />
                            </a>
                            <Link
                                href="/store-locator"
                                style={{ border: '2px solid #ffffff', color: '#ffffff' }}
                                className="inline-flex items-center bg-transparent px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
                            >
                                Find Store Near Me
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Related */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Guides</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/little-caesars-coupons-january-2025" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 group">
                                <h3 className="font-bold text-gray-900 group-hover:text-blue-600">Coupons & Promo Codes</h3>
                                <p className="text-sm text-gray-600 mt-2">Save up to 50% on delivery</p>
                            </Link>
                            <Link href="/menu" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 group">
                                <h3 className="font-bold text-gray-900 group-hover:text-blue-600">Full Menu & Prices</h3>
                                <p className="text-sm text-gray-600 mt-2">See all items available</p>
                            </Link>
                            <Link href="/store-locator" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 group">
                                <h3 className="font-bold text-gray-900 group-hover:text-blue-600">Store Locator</h3>
                                <p className="text-sm text-gray-600 mt-2">Find stores near you</p>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
