import { Metadata } from 'next'
import { generatePageSEO } from '@/lib/seo-config'
import { generateMenuPageSchema } from '@/lib/seo/menu-schema'
import { generateEnhancedMenuSchema } from '@/lib/seo/enhanced-menu-schema'
import MenusPricesContent from './content'

// Import the complete menu data with ALL 74 images
import { menuData } from '../../data/complete-menu-74.js'

// Transform the menu data to match the component interface
const menuItems = menuData.map(item => ({
  id: parseInt(item.id),
  name: item.title,
  price: item.menuFields.price,
  description: item.menuFields.description,
  category: item.menuFields.category,
  calories: item.menuFields.calories || 0,
  image: item.featuredImage.node.sourceUrl,
  isPopular: item.menuFields.isPopular || false
}))

// Generate comprehensive SEO metadata
export async function generateMetadata(): Promise<Metadata> {
  const title = "Little Caesars Menu Prices 2025 | Complete Menu with Photos & Latest Prices"
  const description = "🍕 Official Little Caesars Menu Prices 2025! ✅ Hot-N-Ready Pizza ✅ Crazy Bread ✅ Deep Dish Pizza ✅ Latest Prices ✅ Wings, Sides & More!"
  const url = "/menus-prices"
  
  return {
    title,
    description,
    keywords: [
      // Primary keywords
      "Little Caesars menu prices",
      "Little Caesars menu 2025",
      "Little Caesars prices",
      "Little Caesars menu with prices",
      
      // Location-based keywords
      "Little Caesars menu USA",
      "Little Caesars menu near me",
      "Little Caesars prices near me",
      
      // Food category keywords
      "Little Caesars pizza prices",
      "Little Caesars wings prices",
      "Little Caesars sides menu",
      "Little Caesars crazy bread menu",
      "Little Caesars deep dish menu",
      "Little Caesars dessert menu",
      "Little Caesars drink menu",
      "Little Caesars combo prices",
      
      // Specific items
      "Hot-N-Ready price",
      "Little Caesars pepperoni price",
      "Little Caesars crazy bread price",
      "Little Caesars deep dish price",
      "Little Caesars wings price",
      "Italian cheese bread price",
      "Caesar dips price",
      
      // Intent keywords
      "how much does Little Caesars cost",
      "Little Caesars menu cost",
      "Little Caesars prices list",
      "Little Caesars full menu",
      "Little Caesars complete menu",
      "Little Caesars menu photos",
      "Little Caesars menu pictures",
      
      // Restaurant keywords
      "pizza menu prices",
      "fast food restaurant menu",
      "pizza chain menu prices",
      "family pizza menu",
      "restaurant menu 2025",
      
      // Long-tail keywords
      "Little Caesars menu prices updated 2025",
      "Little Caesars latest menu prices",
      "Little Caesars current menu prices",
      "Little Caesars new menu items 2025"
    ],
    authors: [{ name: "Little Caesars Menu Guide" }],
    creator: "Little Caesars Menu Guide",
    publisher: "Little Caesars Menu Guide",
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title}`,
      description,
      url,
      siteName: "Little Caesars Menu Guide",
      images: [
        {
          url: "/og-menus-prices.jpg",
          width: 1200,
          height: 630,
          alt: "Little Caesars Menu Prices 2025 - Complete Menu with Real Photos and Latest Prices",
          type: "image/jpeg",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Complete Price Guide`,
      description,
      images: ["/og-menus-prices.jpg"],
      creator: "@littlecaesarsmenu",
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "last-modified": new Date().toISOString(),
    },
  }
}

// ISR for performance and SEO
export const revalidate = 0 // No caching for immediate updates

export default function MenusPricesPage() {
  const schemas = generateEnhancedMenuSchema(menuItems)
  
  return (
    <>
      {/* Enhanced Restaurant Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas.restaurantSchema)
        }}
      />
      
      {/* Enhanced Menu Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas.menuSchema)
        }}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas.breadcrumbSchema)
        }}
      />
      
      {/* FAQ Schema handled by WordPress/Yoast to prevent duplicates */}
      
      <MenusPricesContent menuItems={menuItems} />
    </>
  )
}
