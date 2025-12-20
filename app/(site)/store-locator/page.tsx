import { Metadata } from 'next'
import { PageHero } from '@/components/layout/Hero'
import OptimizedStoreLocator from './OptimizedStoreLocator'

export const metadata: Metadata = {
  title: 'Find Little Caesars Near You | Pizza Restaurant Locations & Hours 2025',
  description: 'Find Little Caesars pizza restaurants near you with our interactive location finder. Get directions, hours, phone numbers & menu prices for all locations nationwide.',
  keywords: 'find Little Caesars near you, Little Caesars near me, Little Caesars locations, pizza restaurant finder, Little Caesars hours, pizza near me, Little Caesars directions',
  openGraph: {
    title: 'Little Caesars Near Me | Pizza Restaurant Locator & Directions',
    description: 'Find the closest Little Caesars pizza restaurant near you. Get directions, contact info, and hours for Hot-N-Ready pizzas.',
    type: 'website',
    url: 'https://littlecaesarsmenu.us/store-locator',
    siteName: 'Little Caesars Menu',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Little Caesars Near Me | Find Pizza Locations & Directions',
    description: 'Find the closest Little Caesars pizza restaurant near you. Get directions, contact info, and hours.',
  },
  alternates: {
    canonical: 'https://littlecaesarsmenu.us/store-locator'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function StoreLocatorPage() {
  return (
    <>
      <PageHero
        title="Find Little Caesars Near You"
        subtitle="Discover the closest Little Caesars pizza restaurant with our interactive finder. Get directions, hours, phone numbers, and menu information for Hot-N-Ready pizzas and more."
        className="bg-gradient-to-r from-little-caesars-orange via-red-600 to-orange-500"
      />
      <OptimizedStoreLocator />
      
      {/* SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-stone max-w-none">
            <h2 className="text-3xl font-slab font-bold text-stone-800 mb-8 text-center">
              Find Little Caesars Pizza Restaurants Near You
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-slab font-bold text-little-caesars-orange mb-4">
                  Why Choose Little Caesars Near Me?
                </h3>
                <ul className="space-y-2 text-stone-700">
                  <li>• <strong>Hot-N-Ready Pizzas:</strong> Fresh pizzas ready when you are, no waiting</li>
                  <li>• <strong>Detroit Deep Dish:</strong> Square pizza with caramelized crust edges</li>
                  <li>• <strong>Crazy Bread:</strong> Warm breadsticks with Parmesan cheese</li>
                  <li>• <strong>ExtraMostBestest:</strong> More cheese, more pepperoni, more value</li>
                  <li>• <strong>Family-Friendly Prices:</strong> Quality pizza at unbeatable prices</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-slab font-bold text-little-caesars-orange mb-4">
                  How to Use Our Store Locator
                </h3>
                <ol className="space-y-2 text-stone-700">
                  <li>1. <strong>Allow Location Access:</strong> Click "Use My Current Location" for instant results</li>
                  <li>2. <strong>Search by Address:</strong> Enter your city, state, or ZIP code</li>
                  <li>3. <strong>View Results:</strong> See nearby locations with distances and ratings</li>
                  <li>4. <strong>Get Directions:</strong> Click for turn-by-turn navigation</li>
                  <li>5. <strong>Contact Restaurant:</strong> Call directly or view hours</li>
                </ol>
              </div>
            </div>
            
            <div className="bg-cream rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-slab font-bold text-stone-800 mb-4 text-center">
                Popular Little Caesars Locations
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-little-caesars-orange mb-2">Major Cities</h4>
                  <ul className="space-y-1 text-stone-700">
                    <li>• Little Caesars New York</li>
                    <li>• Little Caesars Los Angeles</li>
                    <li>• Little Caesars Chicago</li>
                    <li>• Little Caesars Houston</li>
                    <li>• Little Caesars Phoenix</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-little-caesars-orange mb-2">East Coast</h4>
                  <ul className="space-y-1 text-stone-700">
                    <li>• Little Caesars Miami</li>
                    <li>• Little Caesars Atlanta</li>
                    <li>• Little Caesars Boston</li>
                    <li>• Little Caesars Philadelphia</li>
                    <li>• Little Caesars Washington DC</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-little-caesars-orange mb-2">West Coast</h4>
                  <ul className="space-y-1 text-stone-700">
                    <li>• Little Caesars Las Vegas</li>
                    <li>• Little Caesars San Diego</li>
                    <li>• Little Caesars Denver</li>
                    <li>• Little Caesars Seattle</li>
                    <li>• Little Caesars Portland</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Interactive FAQ Section */}
            <div className="bg-gradient-to-br from-cream to-white rounded-2xl p-8 shadow-xl border border-stone-100">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-slab font-bold text-stone-800 mb-2">
                  Little Caesars Location Finder FAQ
                </h3>
                <p className="text-stone-600">
                  Everything you need to know about finding Little Caesars pizza restaurants near you
                </p>
              </div>
              
              <div className="space-y-4 max-w-3xl mx-auto">
                <details className="group bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-all duration-200">
                  <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-stone-50 transition-colors">
                    <h4 className="text-lg font-semibold text-stone-800 group-hover:text-little-caesars-orange transition-colors">
                      How do I find the closest Little Caesars restaurant near me?
                    </h4>
                    <svg className="w-5 h-5 text-little-caesars-orange transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-stone-700 leading-relaxed">
                    <p>Use our interactive location finder above! Simply click "Use My Current Location" to automatically find nearby pizza restaurants, or manually enter your city, state, or ZIP code in the search box. Our tool will show you the closest Little Caesars locations with distances, ratings, phone numbers, and directions.</p>
                  </div>
                </details>

                <details className="group bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-all duration-200">
                  <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-stone-50 transition-colors">
                    <h4 className="text-lg font-semibold text-stone-800 group-hover:text-texas-red transition-colors">
                      What are typical Texas Roadhouse restaurant hours?
                    </h4>
                    <svg className="w-5 h-5 text-texas-red transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-stone-700 leading-relaxed">
                    <p>Most Texas Roadhouse locations operate with these hours:</p>
                    <ul className="mt-2 space-y-1 ml-4">
                      <li>• <strong>Monday-Thursday:</strong> 4:00 PM - 10:00 PM</li>
                      <li>• <strong>Friday-Saturday:</strong> 4:00 PM - 11:00 PM</li>
                      <li>• <strong>Sunday:</strong> 4:00 PM - 9:00 PM</li>
                    </ul>
                    <p className="mt-2 text-sm text-stone-600">Note: Hours may vary by location. Use our locator to get specific hours for your nearest restaurant.</p>
                  </div>
                </details>

                <details className="group bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-all duration-200">
                  <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-stone-50 transition-colors">
                    <h4 className="text-lg font-semibold text-stone-800 group-hover:text-texas-red transition-colors">
                      Does Texas Roadhouse accept reservations or take-out orders?
                    </h4>
                    <svg className="w-5 h-5 text-texas-red transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-stone-700 leading-relaxed">
                    <p>Texas Roadhouse operates on a <strong>first-come, first-served basis</strong> and does not accept traditional reservations. However, you can:</p>
                    <ul className="mt-2 space-y-1 ml-4">
                      <li>• Call ahead to add your name to the waitlist</li>
                      <li>• Order takeout by calling your local restaurant</li>
                      <li>• Use their mobile app for easier ordering</li>
                    </ul>
                    <p className="mt-2">Find your local restaurant's phone number using our location finder above!</p>
                  </div>
                </details>

                <details className="group bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-all duration-200">
                  <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-stone-50 transition-colors">
                    <h4 className="text-lg font-semibold text-stone-800 group-hover:text-texas-red transition-colors">
                      Are Texas Roadhouse menu prices the same at all locations?
                    </h4>
                    <svg className="w-5 h-5 text-texas-red transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-stone-700 leading-relaxed">
                    <p>Menu prices may vary slightly between locations due to local market conditions, rent costs, and regional economic factors. However, Texas Roadhouse strives to maintain consistent pricing across their restaurants. For the most accurate pricing, contact your specific location directly or visit our <a href="/menus-prices" className="text-texas-red hover:underline font-medium">menu prices page</a> for general pricing information.</p>
                  </div>
                </details>

                <details className="group bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-all duration-200">
                  <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-stone-50 transition-colors">
                    <h4 className="text-lg font-semibold text-stone-800 group-hover:text-texas-red transition-colors">
                      What makes Texas Roadhouse different from other steakhouses?
                    </h4>
                    <svg className="w-5 h-5 text-texas-red transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-stone-700 leading-relaxed">
                    <p>Texas Roadhouse is famous for several unique features:</p>
                    <ul className="mt-2 space-y-1 ml-4">
                      <li>• <strong>Hand-Cut Steaks:</strong> Fresh, never frozen steaks cut in-house daily</li>
                      <li>• <strong>Fall-Off-The-Bone Ribs:</strong> Slow-cooked with signature dry rub</li>
                      <li>• <strong>Fresh-Baked Bread:</strong> Warm rolls with cinnamon honey butter at every table</li>
                      <li>• <strong>Made-From-Scratch Sides:</strong> All sides prepared fresh daily</li>
                      <li>• <strong>Lively Atmosphere:</strong> Country music and line dancing</li>
                      <li>• <strong>Family-Friendly:</strong> Welcoming environment for all ages</li>
                    </ul>
                  </div>
                </details>

                <details className="group bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-all duration-200">
                  <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-stone-50 transition-colors">
                    <h4 className="text-lg font-semibold text-stone-800 group-hover:text-texas-red transition-colors">
                      Does Texas Roadhouse offer vegetarian or gluten-free menu options?
                    </h4>
                    <svg className="w-5 h-5 text-texas-red transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-stone-700 leading-relaxed">
                    <p>Yes! While known for steaks, Texas Roadhouse offers options for various dietary needs:</p>
                    <ul className="mt-2 space-y-1 ml-4">
                      <li>• <strong>Vegetarian:</strong> Salads, baked potatoes, vegetable sides, and pasta dishes</li>
                      <li>• <strong>Gluten-Free:</strong> Grilled chicken, steaks without seasoning, and select sides</li>
                      <li>• <strong>Lighter Options:</strong> Grilled chicken and fish selections</li>
                    </ul>
                    <p className="mt-2 text-sm text-stone-600">Always inform your server about allergies or dietary restrictions for the safest dining experience.</p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Find Little Caesars Near You | Pizza Restaurant Locations",
            "description": "Find Little Caesars pizza restaurants near you with our interactive location finder. Get directions, hours, and contact information.",
            "url": "https://littlecaesarsmenu.us/store-locator",
            "mainEntity": {
              "@type": "RestaurantChain",
              "name": "Little Caesars",
              "description": "American pizza chain known for Hot-N-Ready pizzas, Crazy Bread, and Detroit-style deep dish pizza",
              "cuisine": "Pizza, Italian-American",
              "priceRange": "$",
              "servesCuisine": ["Pizza", "Italian-American"],
              "hasMenu": "https://littlecaesarsmenu.us/menus-prices",
              "sameAs": [
                "https://www.littlecaesars.com",
                "https://www.facebook.com/littlecaesars",
                "https://www.instagram.com/littlecaesars",
                "https://twitter.com/littlecaesars"
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://littlecaesarsmenu.us"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Find Little Caesars Near You",
                  "item": "https://littlecaesarsmenu.us/store-locator"
                }
              ]
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://littlecaesarsmenu.us/store-locator?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </>
  )
}
