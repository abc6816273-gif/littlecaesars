import { WORDPRESS_CONFIG } from '../config'

const siteName = WORDPRESS_CONFIG.SITE_NAME
const siteUrl = WORDPRESS_CONFIG.SITE_URL

// Restaurant Schema for the main menu page
export function generateRestaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${siteUrl}#restaurant`,
    "name": "Little Caesars",
    "url": siteUrl,
    "description": "Little Caesars is America's pizza chain known for Hot-N-Ready pizzas, Crazy Bread, and Detroit-style deep dish pizza at unbeatable prices.",
    "servesCuisine": ["Pizza", "Italian-American"],
    "priceRange": "$3-$15",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "hasMenu": {
      "@type": "Menu",
      "@id": `${siteUrl}/menus#menu`,
      "name": "Little Caesars Menu",
      "description": "Complete Little Caesars menu with Hot-N-Ready pizzas, deep dish pizza, wings, Crazy Bread, and more"
    },
    "image": [
      `${siteUrl}/littlecaesars-menu-prices-logo.png`
    ],
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}/littlecaesars-menu-prices-logo.png`
    }
  }
}

// Menu Schema for the menu page
export function generateMenuSchema(menuItems: Array<{
  name: string
  price: number
  description: string
  category: string
  image?: string
  calories?: number
}>) {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${siteUrl}/menus#menu`,
    "name": "Little Caesars Menu Prices 2026",
    "description": "Complete Little Caesars menu with updated prices for 2026. Featuring Hot-N-Ready pizzas, deep dish pizza, wings, Crazy Bread, and more.",
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Hot-N-Ready",
        "hasMenuItem": menuItems
          .filter(item => item.category === "Hot-N-Ready")
          .map(item => generateMenuItemSchema(item))
      },
      {
        "@type": "MenuSection", 
        "name": "Large Round Pizzas",
        "hasMenuItem": menuItems
          .filter(item => item.category === "Large Round Pizzas")
          .map(item => generateMenuItemSchema(item))
      },
      {
        "@type": "MenuSection",
        "name": "Deep Dish Pizza", 
        "hasMenuItem": menuItems
          .filter(item => item.category === "Deep Dish Pizza")
          .map(item => generateMenuItemSchema(item))
      },
      {
        "@type": "MenuSection",
        "name": "Wings",
        "hasMenuItem": menuItems
          .filter(item => item.category === "Wings")
          .map(item => generateMenuItemSchema(item))
      },
      {
        "@type": "MenuSection",
        "name": "Sides & Bread",
        "hasMenuItem": menuItems
          .filter(item => item.category === "Sides & Bread")
          .map(item => generateMenuItemSchema(item))
      },
      {
        "@type": "MenuSection",
        "name": "Beverages",
        "hasMenuItem": menuItems
          .filter(item => item.category === "Beverages")
          .map(item => generateMenuItemSchema(item))
      },
      {
        "@type": "MenuSection",
        "name": "Lunch Combo",
        "hasMenuItem": menuItems
          .filter(item => item.category === "Lunch Combo")
          .map(item => generateMenuItemSchema(item))
      },
      {
        "@type": "MenuSection",
        "name": "Desserts",
        "hasMenuItem": menuItems
          .filter(item => item.category === "Desserts")
          .map(item => generateMenuItemSchema(item))
      }
    ]
  }
}

// Individual Menu Item Schema
export function generateMenuItemSchema(item: {
  name: string
  price: number
  description: string
  category: string
  image?: string
  calories?: number
}) {
  const menuItem: any = {
    "@type": "MenuItem",
    "name": item.name,
    "description": item.description,
    "offers": {
      "@type": "Offer",
      "price": item.price.toFixed(2),
      "priceCurrency": "USD"
    },
    "menuAddOn": {
      "@type": "MenuSection",
      "name": item.category
    }
  }

  if (item.image) {
    menuItem.image = item.image
  }

  if (item.calories) {
    menuItem.nutrition = {
      "@type": "NutritionInformation",
      "calories": `${item.calories} calories`
    }
  }

  return menuItem
}

// FAQ Schema for the FAQ section
export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the current Little Caesars menu prices for 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Little Caesars menu prices for 2026 range from $0.59 for sauces to $10.99 for specialty pizzas. Hot-N-Ready pizzas start at $5.55, wings are $8.49, and Crazy Bread is $3.49. Prices may vary by location."
        }
      },
      {
        "@type": "Question", 
        "name": "What is Hot-N-Ready pizza at Little Caesars?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hot-N-Ready pizzas are fresh, hot pizzas available for immediate pickup with no waiting required. Popular options include pepperoni ($5.55) and cheese ($5.55) pizzas made with signature sauce and 100% mozzarella cheese."
        }
      },
      {
        "@type": "Question",
        "name": "Does Little Caesars have deep dish pizza?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Little Caesars offers Detroit-Style Deep Dish pizza with thick, buttery crust and crispy edges. Options include pepperoni ($8.49), cheese ($8.49), and specialty combinations starting at $8.99."
        }
      },
      {
        "@type": "Question",
        "name": "What comes with Crazy Bread at Little Caesars?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Crazy Bread comes as an 8-piece order of freshly baked bread sticks brushed with garlic butter and sprinkled with parmesan cheese. It's served with Crazy Sauce for dipping and costs $3.49."
        }
      },
      {
        "@type": "Question",
        "name": "Does Little Caesars offer vegetarian options?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Little Caesars offers vegetarian options including cheese pizza, veggie pizza with peppers and onions, Crazy Bread, Italian Cheese Bread, various beverages, and create-your-own pizza options with vegetable toppings."
        }
      }
    ]
  }
}

// Breadcrumb Schema
export function generateBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Menu & Prices",
        "item": `${siteUrl}/menus`
      }
    ]
  }
}

// Combined schema for the menu page
export function generateMenuPageSchema(menuItems: Array<{
  name: string
  price: number
  description: string
  category: string
  image?: string
  calories?: number
}>) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      generateRestaurantSchema(),
      generateMenuSchema(menuItems),
      generateFAQSchema(),
      generateBreadcrumbSchema()
    ]
  }
}
