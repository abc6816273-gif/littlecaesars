import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Users, DollarSign, Flame, Star, ChevronDown, ChevronUp } from 'lucide-react'
import MenuCard from './MenuCard'
import FAQSection from './FAQSection'

export const metadata: Metadata = {
  title: 'Little Caesars Menu Prices & Calories Guide 2025 - Complete Pizza Menu',
  description: 'Discover Little Caesars complete menu with prices and calories. From Hot-N-Ready pizzas to Crazy Bread, explore every item with detailed nutritional information and current pricing.',
  keywords: [
    'Little Caesars menu',
    'Little Caesars prices',
    'Little Caesars calories',
    'pizza menu prices',
    'Hot-N-Ready pizza',
    'Crazy Bread calories',
    'Little Caesars nutrition',
    'pizza calories',
    'fast food menu'
  ],
  openGraph: {
    title: 'Little Caesars Menu Prices & Calories Guide 2025',
    description: 'Complete guide to Little Caesars menu with prices and calories for every pizza, side, and drink.',
    type: 'article',
    publishedTime: '2025-01-20',
    authors: ['Little Caesars Menu Team'],
    images: [
      {
        url: '/menu/hot-n-ready-pepperoni.webp',
        width: 1200,
        height: 630,
        alt: 'Little Caesars Hot-N-Ready Pepperoni Pizza'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Little Caesars Menu Prices & Calories Guide 2025',
    description: 'Complete guide to Little Caesars menu with prices and calories.',
    images: ['/menu/hot-n-ready-pepperoni.webp']
  },
  alternates: {
    canonical: 'https://littlecaesarsmenu.us/little-caesars-menu'
  }
}

const jsonLdArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Little Caesars Menu Prices & Calories Guide 2025 - Complete Pizza Menu',
  description: 'Discover Little Caesars complete menu with prices and calories. From Hot-N-Ready pizzas to Crazy Bread, explore every item with detailed nutritional information and current pricing.',
  image: 'https://littlecaesarsmenu.us/menu/hot-n-ready-pepperoni.webp',
  author: {
    '@type': 'Organization',
    name: 'Little Caesars Menu Team'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Little Caesars Menu',
    logo: {
      '@type': 'ImageObject',
      url: 'https://littlecaesarsmenu.us/Little-Caesars-Menu-Logo.png'
    }
  },
  datePublished: '2025-01-20',
  dateModified: '2025-01-20',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://littlecaesarsmenu.us/little-caesars-menu'
  }
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://littlecaesarsmenu.us'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: 'https://littlecaesarsmenu.us/blog'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Menu Prices & Calories Guide',
      item: 'https://littlecaesarsmenu.us/little-caesars-menu'
    }
  ]
}

export default function LittleCaesarsMenuGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white border-b border-gray-200" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 py-4 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:text-little-caesars-orange transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/blog" className="text-gray-500 hover:text-little-caesars-orange transition-colors">
                  Blog
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">Menu Prices & Calories Guide</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative text-white py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/orange-background-6859059_1280.webp"
              alt="Little Caesars Menu Guide Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Little Caesars Menu Prices & Calories Guide 2025
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto drop-shadow-lg">
                Your complete guide to every pizza, side, and drink with detailed pricing and nutritional information
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4 mr-2" />
                  Updated January 2025
                </div>
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Users className="w-4 h-4 mr-2" />
                  All Locations
                </div>
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Flame className="w-4 h-4 mr-2" />
                  Calorie Information
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article className="prose prose-lg max-w-none">
            
            {/* Introduction Section */}
            <section className="mb-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <DollarSign className="w-8 h-8 text-little-caesars-orange mr-3" />
                  Why Choose Little Caesars?
                </h2>
                <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                  <p>
                    When it comes to delicious, affordable pizza that's ready when you are, Little Caesars has been America's go-to choice for decades. Founded in 1959 by Mike and Marian Ilitch, this Detroit-based pizza chain revolutionized the industry with their famous "Hot-N-Ready" concept, ensuring fresh, hot pizza is always available without the wait.
                  </p>
                  <p>
                    What makes Little Caesars special isn't just their speed – it's their commitment to quality ingredients at prices that won't break the bank. Every pizza is made with fresh dough prepared daily in-store, vine-ripened tomato sauce, and 100% real mozzarella cheese. Whether you're feeding a family on a budget, hosting a party, or just craving a quick slice, Little Caesars delivers both taste and value.
                  </p>
                  <p>
                    In this comprehensive guide, we'll explore every item on the Little Caesars menu, complete with current pricing and detailed calorie information. From their signature Hot-N-Ready pepperoni pizza to their beloved Crazy Bread, you'll discover everything you need to make informed choices for your next pizza night.
                  </p>
                </div>
              </div>
            </section>

            {/* Hot-N-Ready Pizzas Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Star className="w-8 h-8 text-red-600 mr-3" />
                  Hot-N-Ready Pizzas: The Original Fast Pizza
                </h2>
                <div className="text-gray-700 space-y-4 text-lg leading-relaxed mb-8">
                  <p>
                    The Hot-N-Ready pizza line is what put Little Caesars on the map. These pizzas are kept warm and ready to go, meaning you can walk in and walk out with a hot pizza in under a minute. No waiting, no pre-ordering – just grab and go convenience that's perfect for busy families and hungry individuals alike.
                  </p>
                  <p>
                    Each Hot-N-Ready pizza is made with Little Caesars' signature dough that's prepared fresh every morning. The sauce is made from vine-ripened California tomatoes, seasoned with a special blend of herbs and spices. The cheese is 100% real mozzarella, never frozen, and applied generously to ensure every bite is satisfying.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <MenuCard
                    category="Hot-N-Ready Pizzas"
                    title="Hot-N-Ready Pepperoni"
                    price="$5.55"
                    calories="280 per slice"
                    description="The classic that started it all. Loaded with pepperoni and cheese on our fresh dough."
                    imagePath="/menu/hot-n-ready-pepperoni.webp"
                    imageAlt="Little Caesars Hot-N-Ready Pepperoni Pizza with melted mozzarella cheese and pepperoni slices"
                  />
                  <MenuCard
                    category="Hot-N-Ready Pizzas"
                    title="Hot-N-Ready Cheese"
                    price="$5.55"
                    calories="250 per slice"
                    description="Pure comfort food. Our classic cheese pizza with generous mozzarella on fresh dough."
                    imagePath="/menu/hot-n-ready-cheese.webp"
                    imageAlt="Little Caesars Hot-N-Ready Cheese Pizza with melted mozzarella cheese and tomato sauce"
                  />
                  <MenuCard
                    category="Hot-N-Ready Pizzas"
                    title="ExtraMostBestest Pepperoni"
                    price="$6.49"
                    calories="320 per slice"
                    description="More pepperoni and cheese than our regular Hot-N-Ready for those who want extra indulgence."
                    imagePath="/menu/extramostbestest-pepperoni.webp"
                    imageAlt="Little Caesars ExtraMostBestest Pepperoni Pizza with extra pepperoni and cheese coverage"
                  />
                </div>
              </div>
            </section>

            {/* Specialty Pizzas Section */}
            <section className="mb-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Specialty Pizzas: Gourmet Flavors for Every Taste
                </h2>
                <div className="text-gray-700 space-y-4 text-lg leading-relaxed mb-8">
                  <p>
                    Beyond the Hot-N-Ready classics, Little Caesars offers an impressive lineup of specialty pizzas that showcase creative flavor combinations and premium ingredients. These pizzas may take a few extra minutes to prepare, but the wait is worth it for these unique creations.
                  </p>
                  <p>
                    Each specialty pizza starts with the same high-quality foundation – fresh dough, signature sauce, and real mozzarella cheese – but adds carefully selected toppings that create distinct flavor profiles. From meat lovers to vegetarian options, there's something to satisfy every craving.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <MenuCard
                    category="Specialty Pizzas"
                    title="3 Meat Treat"
                    price="$8.99"
                    calories="340 per slice"
                    description="Pepperoni, Italian sausage, and bacon create the ultimate meat lover's experience."
                    imagePath="/menu/3-meat-treat.webp"
                    imageAlt="Little Caesars 3 Meat Treat Pizza topped with pepperoni, Italian sausage, and bacon"
                  />
                  <MenuCard
                    category="Specialty Pizzas"
                    title="Ultimate Supreme"
                    price="$10.99"
                    calories="360 per slice"
                    description="Pepperoni, Italian sausage, mushrooms, green peppers, and onions for the complete pizza experience."
                    imagePath="/menu/ultimate-supreme.webp"
                    imageAlt="Little Caesars Ultimate Supreme Pizza with pepperoni, sausage, vegetables, and cheese"
                  />
                  <MenuCard
                    category="Specialty Pizzas"
                    title="Veggie Pizza"
                    price="$9.99"
                    calories="270 per slice"
                    description="Fresh mushrooms, green peppers, onions, and black olives on a bed of melted cheese."
                    imagePath="/menu/veggie-pizza.webp"
                    imageAlt="Little Caesars Veggie Pizza topped with fresh mushrooms, peppers, onions, and olives"
                  />
                </div>
              </div>
            </section>

            {/* Crazy Bread & Sides Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Crazy Bread & Delicious Sides
                </h2>
                <div className="text-gray-700 space-y-4 text-lg leading-relaxed mb-8">
                  <p>
                    No Little Caesars experience is complete without their famous Crazy Bread. This beloved side dish has been a customer favorite since its introduction, featuring fresh-baked bread sticks brushed with garlic butter and sprinkled with parmesan cheese. It's the perfect complement to any pizza order and has become so popular that many customers order it as a snack on its own.
                  </p>
                  <p>
                    The sides menu has expanded over the years to include other tasty options like Crazy Sauce for dipping, Caesar Wings with various flavors, and Italian Cheese Bread for those who want something a little more indulgent. Each side is prepared fresh and designed to enhance your pizza experience.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <MenuCard
                    category="Sides"
                    title="Crazy Bread"
                    price="$3.99"
                    calories="100 per stick"
                    description="Fresh-baked bread sticks brushed with garlic butter and sprinkled with parmesan cheese."
                    imagePath="/menu/crazy-bread.webp"
                    imageAlt="Little Caesars Crazy Bread sticks with garlic butter and parmesan cheese"
                  />
                  <MenuCard
                    category="Sides"
                    title="Italian Cheese Bread"
                    price="$5.49"
                    calories="150 per piece"
                    description="Crazy Bread topped with melted mozzarella cheese for extra indulgence."
                    imagePath="/menu/italian-cheese-bread.webp"
                    imageAlt="Little Caesars Italian Cheese Bread with melted mozzarella cheese on garlic bread"
                  />
                  <MenuCard
                    category="Sides"
                    title="Caesar Wings (8pc)"
                    price="$6.99"
                    calories="80 per wing"
                    description="Crispy wings available in Buffalo, BBQ, or Garlic Parmesan flavors."
                    imagePath="/menu/caesar-wings.webp"
                    imageAlt="Little Caesars Caesar Wings with choice of Buffalo, BBQ, or Garlic Parmesan sauce"
                  />
                </div>
              </div>
            </section>

            {/* Beverages Section */}
            <section className="mb-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Refreshing Beverages
                </h2>
                <div className="text-gray-700 space-y-4 text-lg leading-relaxed mb-8">
                  <p>
                    Complete your Little Caesars meal with a refreshing beverage. The drink menu features popular soft drinks, sports drinks, and bottled water to quench your thirst. Whether you prefer classic Coca-Cola products, need something to cool down after spicy wings, or want a healthy hydration option, there's something for everyone.
                  </p>
                  <p>
                    All beverages are served cold and fresh, making them the perfect accompaniment to hot, cheesy pizza. The portion sizes are generous, ensuring you have enough to wash down every delicious bite of your meal.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <MenuCard
                    category="Beverages"
                    title="Pepsi (20oz)"
                    price="$1.89"
                    calories="250 calories"
                    description="Classic cola beverage to complement your pizza meal."
                    imagePath="/menu/pepsi-20oz.webp"
                    imageAlt="Pepsi 20oz bottle, perfect beverage pairing for Little Caesars pizza"
                  />
                  <MenuCard
                    category="Beverages"
                    title="Mountain Dew (20oz)"
                    price="$1.89"
                    calories="290 calories"
                    description="Citrus-flavored soda with a bold, refreshing taste."
                    imagePath="/menu/mountain-dew-20oz.webp"
                    imageAlt="Mountain Dew 20oz bottle, citrus soda beverage option at Little Caesars"
                  />
                  <MenuCard
                    category="Beverages"
                    title="Bottled Water"
                    price="$1.49"
                    calories="0 calories"
                    description="Pure, refreshing bottled water for healthy hydration."
                    imagePath="/menu/bottled-water.webp"
                    imageAlt="Bottled water, healthy hydration option at Little Caesars restaurants"
                  />
                  <MenuCard
                    category="Beverages"
                    title="Gatorade"
                    price="$2.29"
                    calories="140 calories"
                    description="Sports drink to replenish electrolytes and energy."
                    imagePath="/menu/gatorade.webp"
                    imageAlt="Gatorade sports drink bottle, electrolyte beverage at Little Caesars"
                  />
                </div>
              </div>
            </section>

            {/* Nutritional Information Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Flame className="w-8 h-8 text-green-600 mr-3" />
                  Understanding Nutritional Information
                </h2>
                <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                  <p>
                    Making informed food choices is important, and Little Caesars is committed to providing transparent nutritional information for all menu items. The calorie counts listed for each item are based on standard recipes and serving sizes, though actual values may vary slightly depending on preparation and specific ingredients used.
                  </p>
                  <p>
                    Pizza calories are calculated per slice, with large pizzas typically cut into 8 slices. Side items like Crazy Bread are calculated per individual piece or stick. Beverages show total calories for the entire container. Keep in mind that these values represent the base recipe – adding extra toppings or modifications will change the nutritional content.
                  </p>
                  <p>
                    For those with specific dietary needs or allergies, it's always best to speak with restaurant staff about ingredients and preparation methods. Little Caesars also provides detailed allergen information and can accommodate many special requests to help you enjoy your meal safely.
                  </p>
                </div>
              </div>
            </section>

            {/* Money-Saving Tips Section */}
            <section className="mb-12">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Smart Ways to Save at Little Caesars
                </h2>
                <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                  <p>
                    Little Caesars already offers incredible value, but there are several ways to stretch your dollar even further. The Hot-N-Ready pizzas provide the best bang for your buck – at $5.55, you're getting a large pizza that can easily feed 2-3 people for lunch or serve as a quick dinner for a family.
                  </p>
                  <p>
                    Look out for special promotions and limited-time offers that frequently appear throughout the year. <Link href="/coupons" className="text-little-caesars-orange hover:underline">Check our coupons page</Link> regularly for the latest deals and discount codes. Many locations also offer combo deals that bundle pizza with sides and drinks at a reduced price.
                  </p>
                  <p>
                    Consider ordering during off-peak hours when some locations offer special pricing. Lunch specials, early bird discounts, and late-night deals can provide additional savings. If you're feeding a large group, ask about bulk discounts – many locations offer special pricing for orders of 10 or more pizzas.
                  </p>
                  <p>
                    Don't forget about the <Link href="/meal-planner" className="text-little-caesars-orange hover:underline">Little Caesars meal planner</Link> to help you budget and plan your orders efficiently. You can also sign up for Little Caesars rewards programs and mobile app notifications to receive exclusive offers and early access to new menu items.
                  </p>
                </div>
              </div>
            </section>

            {/* Location and Ordering Info */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Finding Your Nearest Little Caesars
                </h2>
                <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                  <p>
                    With over 4,000 locations worldwide, there's likely a Little Caesars near you. <Link href="/store-locator" className="text-little-caesars-orange hover:underline">Use our store locator</Link> to find the closest restaurant, check hours of operation, and get contact information. Most locations offer both walk-in service and phone ordering, with many also providing online ordering and delivery through third-party apps.
                  </p>
                  <p>
                    Hours may vary by location, but most Little Caesars restaurants are open seven days a week with extended hours to accommodate busy schedules. Many locations stay open late on weekends, making them perfect for late-night cravings or impromptu gatherings.
                  </p>
                  <p>
                    While prices shown in this guide reflect national averages, some variation may occur based on location, local market conditions, and franchisee decisions. It's always a good idea to confirm current pricing with your local restaurant, especially for limited-time offers or specialty items.
                  </p>
                </div>
              </div>
            </section>

          </article>

          {/* FAQ Section */}
          <FAQSection />

          {/* Call to Action */}
          <section className="mt-12 bg-gradient-to-r from-little-caesars-orange to-red-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
            <p className="text-xl mb-6 text-orange-100">
              Explore our complete menu and find your nearest location
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/little-caesars-menu"
                className="bg-white text-little-caesars-orange px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                View Full Menu
              </Link>
              <Link
                href="/store-locator"
                className="bg-white/20 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/30 transition-colors"
              >
                Find Location
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
