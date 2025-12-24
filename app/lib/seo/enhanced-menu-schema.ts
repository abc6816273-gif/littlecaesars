// Enhanced Schema.org structured data for Little Caesars menu
export function generateEnhancedMenuSchema(menuItems: any[]) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://littlecaesarsmenu.us'

  // Restaurant Schema
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Little Caesars",
    "description": "Hot-N-Ready pizza, Crazy Bread, and delicious sides at unbeatable prices. America's best value pizza chain.",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "image": `${baseUrl}/og-menus-prices.jpg`,
    "priceRange": "$",
    "servesCuisine": ["Pizza", "Italian-American", "Fast Food"],
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "currenciesAccepted": "USD",
    "hasMenu": `${baseUrl}/menus-prices`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.2",
      "reviewCount": "8500",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  // Menu Schema with all items
  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Little Caesars Menu",
    "description": "Complete Little Caesars menu with prices - Hot-N-Ready pizza, Crazy Bread, wings, and specialty pizzas",
    "url": `${baseUrl}/menus-prices`,
    "inLanguage": "en-US",
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Hot-N-Ready Pizza",
        "description": "Ready when you are - grab and go pizza available all day",
        "hasMenuItem": menuItems
          .filter(item => item.category === 'Hot-N-Ready')
          .map(item => ({
            "@type": "MenuItem",
            "name": item.name,
            "description": item.description,
            "image": item.image ? `${baseUrl}${item.image}` : undefined,
            "offers": {
              "@type": "Offer",
              "price": item.price.toString(),
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "nutrition": {
              "@type": "NutritionInformation",
              "calories": item.calories.toString()
            },
            "menuAddOn": item.isPopular ? [{
              "@type": "MenuSection",
              "name": "Popular Choice"
            }] : undefined
          }))
      },
      {
        "@type": "MenuSection",
        "name": "Specialty Pizza",
        "description": "Premium specialty pizzas with unique toppings and flavors",
        "hasMenuItem": menuItems
          .filter(item => item.category === 'Specialty Pizza')
          .map(item => ({
            "@type": "MenuItem",
            "name": item.name,
            "description": item.description,
            "image": item.image ? `${baseUrl}${item.image}` : undefined,
            "offers": {
              "@type": "Offer",
              "price": item.price.toString(),
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "nutrition": {
              "@type": "NutritionInformation",
              "calories": item.calories.toString()
            }
          }))
      },
      {
        "@type": "MenuSection",
        "name": "Crazy Bread & Sides",
        "description": "Famous Crazy Bread, wings, and delicious sides",
        "hasMenuItem": menuItems
          .filter(item => item.category === 'Crazy Bread & Sides')
          .map(item => ({
            "@type": "MenuItem",
            "name": item.name,
            "description": item.description,
            "image": item.image ? `${baseUrl}${item.image}` : undefined,
            "offers": {
              "@type": "Offer",
              "price": item.price.toString(),
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "nutrition": {
              "@type": "NutritionInformation",
              "calories": item.calories.toString()
            }
          }))
      }
    ]
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Menu & Prices",
        "item": `${baseUrl}/menus-prices`
      }
    ]
  }

  // FAQ Schema removed to prevent duplicates - FAQ handled per page basis

  return {
    restaurantSchema,
    menuSchema,
    breadcrumbSchema
  }
}
