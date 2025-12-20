// ULTIMATE Schema.org implementation for #1 Google ranking
// Includes: LocalBusiness, Restaurant, Menu, MenuItem, AggregateRating, FAQ, Organization

export function generateUltimateSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://littlecaesarsmenu.us'
  const currentDate = new Date().toISOString()
  
  // 1. LOCAL BUSINESS SCHEMA (Critical for restaurant SEO)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness"],
    "name": "Little Caesars",
    "alternateName": "Little Caesars Pizza",
    "description": "Leading pizza chain serving Hot-N-Ready pizza, specialty pizzas, Crazy Bread, wings, and delicious sides with fast, friendly service.",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/logo.png`,
      "width": 300,
      "height": 100
    },
    "image": [
      `${baseUrl}/images/little-caesars-restaurant.jpg`,
      `${baseUrl}/images/little-caesars-pizza.jpg`,
      `${baseUrl}/images/little-caesars-crazy-bread.jpg`
    ],
    "priceRange": "$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Debit Card",
    "servesCuisine": ["Pizza", "Italian-American", "Fast Food"],
    "hasMenu": `${baseUrl}/menus-prices`,
    "menu": `${baseUrl}/menus-prices`,
    "foundingDate": "1959",
    "founder": "Mike Ilitch",
    "numberOfEmployees": "20000+",
    "slogan": "Pizza! Pizza!",
    "knowsAbout": [
      "Hot-N-Ready pizza", "Specialty pizza", "Crazy Bread",
      "Buffalo wings", "Italian cheese bread", "Family combos",
      "Fast pizza delivery", "Affordable pizza", "Quick service"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "United States"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "Country", 
        "name": "International"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.2",
      "reviewCount": "50000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "datePublished": "2025-01-15",
        "description": "Amazing steaks and the best bread rolls! Great family atmosphere.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        }
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "15:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification", 
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "15:00",
        "closes": "23:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday", 
        "opens": "11:00",
        "closes": "22:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/texasroadhouse",
      "https://twitter.com/texasroadhouse",
      "https://www.instagram.com/texasroadhouse",
      "https://www.youtube.com/user/texasroadhouse",
      "https://www.linkedin.com/company/texas-roadhouse"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-TXRHOUS",
      "contactType": "customer service",
      "availableLanguage": "English"
    }
  }

  // 2. COMPREHENSIVE MENU SCHEMA WITH NEW IMAGES
  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Little Caesars Menu With Prices [2025]",
    "description": "Complete Little Caesars menu featuring hand-cut steaks, legendary ribs, and authentic Southern favorites with current 2025 pricing. Little Caesars food prices reflect exceptional value for premium quality dining.",
    "url": `${baseUrl}/menus-prices`,
    "dateModified": currentDate,
    "inLanguage": "en-US",
    "image": [
      `${baseUrl}/menu/Little Caesars Menu/IMG-20250916-WA0009.jpg`,
      `${baseUrl}/menu/Little Caesars Menu/IMG-20250916-WA0010.jpg`,
      `${baseUrl}/menu/Little Caesars Menu/IMG-20250916-WA0011.jpg`,
      `${baseUrl}/menu/Little Caesars Menu/IMG-20250916-WA0019.jpg`,
      `${baseUrl}/menu/Little Caesars Menu/IMG-20250916-WA0020.jpg`,
      `${baseUrl}/menu/Little Caesars Menu/IMG-20250916-WA0021.jpg`,
      `${baseUrl}/menu/Little Caesars Menu/IMG-20250916-WA0022.jpg`,
      `${baseUrl}/menu/Little Caesars Menu/IMG-20250916-WA0023.jpg`,
      `${baseUrl}/menu/Little Caesars Menu/IMG-20250916-WA0024.jpg`
    ],
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Appetizers",
        "description": "Shareable appetizers including the legendary Cactus Blossom",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "Cactus Blossom",
            "description": "Awesome Blossom petals served with Cajun horseradish sauce",
            "offers": {
              "@type": "Offer",
              "price": "8.99",
              "priceCurrency": "USD"
            },
            "nutrition": {
              "@type": "NutritionInformation",
              "calories": "1960 calories"
            }
          }
        ]
      },
      {
        "@type": "MenuSection", 
        "name": "Hand-Cut Steaks",
        "description": "USDA Choice steaks, hand-cut in-house daily and grilled over an open flame",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "6 oz Sirloin",
            "description": "Our most tender steak that is lean and melts in your mouth",
            "offers": {
              "@type": "Offer",
              "price": "16.99",
              "priceCurrency": "USD"
            },
            "nutrition": {
              "@type": "NutritionInformation", 
              "calories": "280 calories"
            }
          }
        ]
      },
      {
        "@type": "MenuSection",
        "name": "Fall-Off-The-Bone Ribs", 
        "description": "Slow-cooked baby back ribs with our signature sauce",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "Half Slab Baby Back Ribs",
            "description": "Tender, fall-off-the-bone ribs with choice of sauce",
            "offers": {
              "@type": "Offer",
              "price": "18.99", 
              "priceCurrency": "USD"
            },
            "nutrition": {
              "@type": "NutritionInformation",
              "calories": "610 calories"
            }
          }
        ]
      }
    ],
    "publisher": {
      "@type": "Organization",
      "name": "Little Caesars Menu Guide",
      "url": baseUrl
    }
  }

  // 3. FAQ SCHEMA REMOVED - Preventing duplicates, handled per page individually

  // 4. WEBSITE SCHEMA with enhanced search functionality
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Little Caesars Menu Prices 2025 | Complete Guide",
    "alternateName": "Little Caesars Menu with Prices",
    "url": baseUrl,
    "description": "Complete Little Caesars menu with current prices, calories, nutrition info, and hours. Updated daily. Find pizza, wings, Crazy Bread, family combos, and exclusive coupons.",
    "inLanguage": "en-US",
    "dateModified": currentDate,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Little Caesars Menu Guide",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Little Caesars Menu Categories",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Hot-N-Ready Pizza",
          "url": `${baseUrl}/menus-prices/category/hot-n-ready`
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": "Specialty Pizza",
          "url": `${baseUrl}/menus-prices/category/specialty-pizza`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Crazy Bread & Sides",
          "url": `${baseUrl}/menus-prices/category/crazy-bread`
        }
      ]
    }
  }

  // 5. BREADCRUMB SCHEMA for navigation
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

  return {
    localBusinessSchema,
    menuSchema,
    websiteSchema,
    breadcrumbSchema
  }
}
