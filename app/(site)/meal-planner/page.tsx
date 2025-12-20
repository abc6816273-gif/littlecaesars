import { Metadata } from 'next'
import { PageHero } from '@/components/layout/Hero'
import MealPlannerApp from './MealPlannerApp'

export const metadata: Metadata = {
  title: 'Little Caesars Meal Planner | Plan Your Perfect Weekly Pizza Experience 2025',
  description: 'Create your perfect Little Caesars meal plan with our interactive planner. Drag & drop pizzas, track nutrition & budget, download PDF plans, and get them emailed with our newsletter system.',
  keywords: 'Little Caesars meal planner, weekly meal planning, pizza meal planner, Little Caesars menu planner, dining schedule planner, meal planning app, budget meal planner, nutrition planner',
  openGraph: {
    title: 'Little Caesars Meal Planner | Plan Your Perfect Week',
    description: 'Interactive meal planner for Little Caesars. Plan, budget, track nutrition & download PDF meal plans.',
    type: 'website',
    url: 'https://littlecaesarsmenu.us/meal-planner',
    siteName: 'Little Caesars Menu',
    locale: 'en_US',
    images: [{
      url: 'https://littlecaesarsmenu.us/littlecaesars-menu-prices-logo.png',
      width: 1200,
      height: 630,
      alt: 'Little Caesars Meal Planner'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Little Caesars Meal Planner | Plan Your Perfect Week',
    description: 'Interactive meal planner for Little Caesars. Plan, budget, track nutrition & download PDF meal plans.',
  },
  alternates: {
    canonical: 'https://littlecaesarsmenu.us/meal-planner'
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
}

export default function MealPlannerPage() {
  return (
    <>
      <PageHero
        title="Little Caesars Meal Planner"
        subtitle="Plan your perfect week with our interactive meal planner. Drag & drop pizzas, track nutrition & budget, and get beautiful PDF plans delivered to your email."
        className="bg-gradient-to-r from-little-caesars-orange via-red-600 to-orange-500"
      />
      
      <MealPlannerApp />
      
      {/* SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-stone max-w-none">
            <h2 className="text-3xl font-slab font-bold text-stone-800 mb-8 text-center">
              The Ultimate Little Caesars Meal Planning Experience
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-slab font-bold text-little-caesars-orange mb-4">
                  Why Use Our Meal Planner?
                </h3>
                <ul className="space-y-2 text-stone-700">
                  <li>• <strong>Interactive Planning:</strong> Drag & drop your favorite Little Caesars pizzas</li>
                  <li>• <strong>Smart Budgeting:</strong> Track costs and stay within your dining budget</li>
                  <li>• <strong>Nutrition Tracking:</strong> Monitor calories and nutritional information</li>
                  <li>• <strong>PDF Export:</strong> Download beautiful meal plans for offline use</li>
                  <li>• <strong>Email Delivery:</strong> Get your plans delivered directly to your inbox</li>
                  <li>• <strong>Family Planning:</strong> Plan pizza meals for the whole family</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-slab font-bold text-little-caesars-orange mb-4">
                  How It Works
                </h3>
                <ol className="space-y-2 text-stone-700">
                  <li>1. <strong>Choose Your Pizzas:</strong> Browse our complete Little Caesars menu</li>
                  <li>2. <strong>Drag & Drop:</strong> Add pizzas to your weekly calendar</li>
                  <li>3. <strong>Track & Budget:</strong> Monitor nutrition and costs in real-time</li>
                  <li>4. <strong>Customize Plans:</strong> Adjust portions and add notes</li>
                  <li>5. <strong>Export & Share:</strong> Download PDF or email to yourself</li>
                  <li>6. <strong>Stay Updated:</strong> Join our newsletter for meal planning tips</li>
                </ol>
              </div>
            </div>
            
            <div className="bg-cream rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-slab font-bold text-stone-800 mb-4 text-center">
                Popular Meal Planning Combinations
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-little-caesars-orange mb-2">Pizza Night Plans</h4>
                  <ul className="space-y-1 text-stone-700">
                    <li>• ExtraMostBestest Pepperoni</li>
                    <li>• 3 Meat Treat Pizza</li>
                    <li>• Crazy Bread Combo</li>
                    <li>• Cookie Dough Brownie</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-little-caesars-orange mb-2">Family Favorites</h4>
                  <ul className="space-y-1 text-stone-700">
                    <li>• Hot-N-Ready Pepperoni</li>
                    <li>• Detroit Deep Dish Cheese</li>
                    <li>• Caesar Wings</li>
                    <li>• 2L Pepsi Products</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-little-caesars-orange mb-2">Budget-Friendly</h4>
                  <ul className="space-y-1 text-stone-700">
                    <li>• Hot-N-Ready Cheese</li>
                    <li>• Lunch Combo</li>
                    <li>• Crazy Bread</li>
                    <li>• 20oz Pepsi</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-stone-50 rounded-2xl p-8">
              <h3 className="text-2xl font-slab font-bold text-stone-800 mb-4">
                Meal Planning Tips & Benefits
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-little-caesars-orange mb-2">Save Money with Smart Planning</h4>
                  <p className="text-stone-700">Plan your Little Caesars visits strategically to take advantage of Hot-N-Ready deals and combo specials. Our meal planner helps you track costs and find the best value pizza combinations.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-little-caesars-orange mb-2">Nutrition Made Easy</h4>
                  <p className="text-stone-700">Track calories, protein, and other nutritional information for each pizza meal. Perfect for maintaining your health goals while enjoying delicious Little Caesars pizza.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-little-caesars-orange mb-2">Family Meal Coordination</h4>
                  <p className="text-stone-700">Plan pizza meals that satisfy everyone in the family. Our planner helps you balance different pizza preferences and dietary needs while staying within budget.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-little-caesars-orange mb-2">Special Occasions Planning</h4>
                  <p className="text-stone-700">Whether it's a birthday party, game night, or celebration, plan the perfect Little Caesars pizza experience with our meal planner. Create memorable pizza moments with thoughtful meal selection.</p>
                </div>
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
            "@type": "WebApplication",
            "name": "Little Caesars Meal Planner",
            "description": "Interactive meal planning application for Little Caesars restaurants. Plan weekly pizza meals, track nutrition and budget, export PDF plans.",
            "url": "https://littlecaesarsmenu.us/meal-planner",
            "applicationCategory": "LifestyleApplication",
            "operatingSystem": "Web Browser",
            "browserRequirements": "Requires JavaScript. Recommended: Chrome, Firefox, Safari, Edge",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "category": "Free"
            },
            "featureList": [
              "Interactive drag & drop pizza meal planning",
              "Budget tracking and cost calculation", 
              "Nutrition and calorie tracking",
              "PDF meal plan export",
              "Email delivery with newsletter signup",
              "Family pizza meal planning tools",
              "Weekly meal calendar view",
              "Little Caesars menu integration"
            ],
            "creator": {
              "@type": "Organization",
              "name": "Little Caesars Menu Guide",
              "url": "https://littlecaesarsmenu.us"
            },
            "dateModified": new Date().toISOString(),
            "inLanguage": "en-US",
            "isAccessibleForFree": true
          })
        }}
      />
    </>
  )
}