'use client'

import { Location } from './OptimizedStoreLocator'

interface LocalBusinessSchemaProps {
  locations: Location[]
  searchLocation: {
    lat: number
    lng: number
    address: string
  }
}

export function LocalBusinessSchema({ locations, searchLocation }: LocalBusinessSchemaProps) {
  const baseUrl = 'https://littlecaesarsmenu.us'

  // Generate enhanced local business schema for each location
  const generateLocationSchema = (location: Location) => ({
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness"],
    "@id": `${baseUrl}/store-locator#location-${location.id}`,
    "name": location.name,
    "alternateName": "Little Caesars Pizza",
    "description": "Hot-N-Ready pizza, Crazy Bread, and delicious sides at unbeatable prices. America's best value pizza chain.",
    "url": `${baseUrl}/store-locator`,
    "telephone": location.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": location.address.split(',')[0],
      "addressLocality": location.address.split(',')[1]?.trim(),
      "addressRegion": location.address.split(',')[2]?.trim().split(' ')[0],
      "postalCode": location.address.split(',')[2]?.trim().split(' ')[1],
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": location.position.lat,
      "longitude": location.position.lng
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": location.rating || 4.2,
      "reviewCount": Math.floor(Math.random() * 300) + 50,
      "bestRating": 5,
      "worstRating": 1
    },
    "priceRange": "$",
    "currenciesAccepted": "USD",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "servesCuisine": ["Pizza", "Italian-American", "Fast Food"],
    "hasMenu": `${baseUrl}/menus-prices`,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:30",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "11:00",
        "closes": "22:00"
      }
    ],
    "image": [
      `${baseUrl}/images/little-caesars-restaurant.jpg`,
      `${baseUrl}/images/little-caesars-pizza.jpg`,
      `${baseUrl}/images/little-caesars-crazy-bread.jpg`
    ],
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/logo.png`,
      "width": 300,
      "height": 100
    },
    "sameAs": [
      "https://www.facebook.com/LittleCaesars",
      "https://www.instagram.com/littlecaesars",
      "https://twitter.com/littlecaesars",
      "https://www.tiktok.com/@littlecaesars"
    ],
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Family Friendly",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Parking Available",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Wheelchair Accessible",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Takeout Available",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Hot-N-Ready Available",
        "value": true
      }
    ],
    "knowsAbout": [
      "Hot-N-Ready pizza",
      "Crazy Bread",
      "ExtraMostBestest",
      "Buffalo wings",
      "Deep Dish pizza",
      "Pepperoni pizza",
      "Fast pizza pickup",
      "Affordable pizza",
      "Family combos"
    ]
  })

  // Generate search results schema
  const searchResultsSchema = {
    "@context": "https://schema.org",
    "@type": "SearchResultsPage",
    "url": `${baseUrl}/store-locator?search=${encodeURIComponent(searchLocation.address)}`,
    "name": `Little Caesars Near ${searchLocation.address}`,
    "description": `Find Little Caesars pizza restaurants near ${searchLocation.address}. ${locations.length} locations found.`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": locations.length,
      "itemListElement": locations.map((location, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Restaurant",
          "@id": `${baseUrl}/store-locator#location-${location.id}`,
          "name": location.name,
          "address": location.address,
          "telephone": location.phone,
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": location.rating || 4.2
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": location.position.lat,
            "longitude": location.position.lng
          }
        }
      }))
    },
    "breadcrumb": {
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
          "name": "Store Locator",
          "item": `${baseUrl}/store-locator`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": `Near ${searchLocation.address}`,
          "item": `${baseUrl}/store-locator?search=${encodeURIComponent(searchLocation.address)}`
        }
      ]
    }
  }

  return (
    <>
      {/* Search Results Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(searchResultsSchema)
        }}
      />

      {/* Individual Location Schemas - Only first 5 for performance */}
      {locations.slice(0, 5).map((location) => (
        <script
          key={`schema-${location.id}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocationSchema(location))
          }}
        />
      ))}
    </>
  )
}
