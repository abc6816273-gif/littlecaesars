// Enhanced Schema.org structured data for Little Caesars menu
export function generateEnhancedMenuSchema(menuItems: any[]) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://texasroadhouse-menus.us'
  
  // Restaurant Schema
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Little Caesars",
    "description": "Hand-cut steaks, fall-off-the-bone ribs, made-from-scratch sides and fresh-baked bread served up in a lively atmosphere.",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "image": `${baseUrl}/og-menus-prices.jpg`,
    "priceRange": "$$$",
    "servesCuisine": ["American", "Steakhouse", "BBQ"],
    "paymentAccepted": ["Cash", "Credit Card"],
    "currenciesAccepted": "USD",
    "hasMenu": `${baseUrl}/menus-prices`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "25000",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  // Menu Schema with all items
  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Little Caesars Menu",
    "description": "Complete Little Caesars menu with prices - hand-cut steaks, fall-off-the-bone ribs, appetizers, desserts and more",
    "url": `${baseUrl}/menus-prices`,
    "inLanguage": "en-US",
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Appetizers",
        "description": "Start your meal with our famous appetizers including Cactus Blossom and Rattlesnake Bites",
        "hasMenuItem": menuItems
          .filter(item => item.category === 'Appetizers')
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
        "name": "Hand-Cut Steaks",
        "description": "Premium hand-cut steaks including ribeye, sirloin, filet mignon and more",
        "hasMenuItem": menuItems
          .filter(item => item.category === 'Hand-Cut Steaks')
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
        "name": "Fall-Off-The-Bone Ribs", 
        "description": "Slow-cooked St. Louis style ribs with signature barbecue sauce",
        "hasMenuItem": menuItems
          .filter(item => item.category === 'Fall-Off-The-Bone Ribs')
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
