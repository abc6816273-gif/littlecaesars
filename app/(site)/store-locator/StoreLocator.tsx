'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Script from 'next/script'

interface Location {
  place_id: string
  name: string
  formatted_address: string
  formatted_phone_number?: string
  rating?: number
  geometry: {
    location: {
      lat: number
      lng: number
    }
  }
  opening_hours?: {
    open_now: boolean
    weekday_text: string[]
  }
  website?: string
  url?: string
}

interface SearchResult {
  locations: Location[]
  searchLocation: {
    lat: number
    lng: number
    address: string
  }
}

declare global {
  interface Window {
    google: any
    initMap: () => void
  }
}

export default function StoreLocator() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [mapLoaded, setMapLoaded] = useState(false)
  
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])

  // Initialize map when Google Maps API is loaded
  const initializeMap = useCallback(() => {
    try {
      if (!window.google || !mapRef.current) {
        console.log('Google Maps API not ready yet')
        return
      }

      const defaultCenter = { lat: 39.8283, lng: -98.5795 } // Center of USA
      
      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
        zoom: 4,
        center: defaultCenter,
        styles: [
          {
            featureType: 'poi.business',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          }
        ]
      })
      
      setMapLoaded(true)
      console.log('Google Maps initialized successfully')
    } catch (error) {
      console.error('Error initializing Google Maps:', error)
      setError('Failed to initialize map. Please refresh the page and try again.')
    }
  }, [])

  // Set up global callback for Google Maps
  useEffect(() => {
    window.initMap = initializeMap
  }, [initializeMap])

  // Clear existing markers
  const clearMarkers = useCallback(() => {
    markersRef.current.forEach(marker => marker.setMap(null))
    markersRef.current = []
  }, [])

  // Add markers to map
  const addMarkersToMap = useCallback((locations: Location[], searchLocation: any) => {
    if (!mapInstanceRef.current || !window.google) return

    clearMarkers()

    // Add search location marker (blue)
    const searchMarker = new window.google.maps.Marker({
      position: { lat: searchLocation.lat, lng: searchLocation.lng },
      map: mapInstanceRef.current,
      title: 'Search Location',
      icon: {
        url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
      }
    })
    markersRef.current.push(searchMarker)

    // Add Texas Roadhouse markers (red)
    locations.forEach((location) => {
      const marker = new window.google.maps.Marker({
        position: {
          lat: location.geometry.location.lat,
          lng: location.geometry.location.lng
        },
        map: mapInstanceRef.current,
        title: location.name,
        icon: {
          url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
        }
      })

      // Info window for each marker
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div class="p-3 max-w-sm">
            <h3 class="font-bold text-lg mb-2">${location.name}</h3>
            <p class="text-sm text-gray-600 mb-2">${location.formatted_address}</p>
            ${location.formatted_phone_number ? `<p class="text-sm mb-2">📞 ${location.formatted_phone_number}</p>` : ''}
            ${location.rating ? `<p class="text-sm mb-2">⭐ ${location.rating}/5</p>` : ''}
            <a href="${location.url || `https://www.google.com/maps/place/?q=place_id:${location.place_id}`}" 
               target="_blank" 
               class="inline-block bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
              Get Directions
            </a>
          </div>
        `
      })

      marker.addListener('click', () => {
        infoWindow.open(mapInstanceRef.current, marker)
      })

      markersRef.current.push(marker)
    })

    // Fit map to show all markers
    const bounds = new window.google.maps.LatLngBounds()
    bounds.extend({ lat: searchLocation.lat, lng: searchLocation.lng })
    locations.forEach(location => {
      bounds.extend({
        lat: location.geometry.location.lat,
        lng: location.geometry.location.lng
      })
    })
    mapInstanceRef.current.fitBounds(bounds)
  }, [clearMarkers])

  // Simplified search using static data (since Google Places API has billing issues)
  const searchLocations = async () => {
    if (!searchQuery.trim()) {
      setError('Please enter a location to search')
      return
    }

    setLoading(true)
    setError('')

    try {
      // Use a simple geocoding service or static data for now
      // This is a temporary solution until Google Maps billing is resolved
      
      // Mock Texas Roadhouse locations for demonstration
      const mockLocations: Location[] = [
        {
          place_id: 'mock1',
          name: 'Texas Roadhouse - Times Square',
          formatted_address: '1560 Broadway, New York, NY 10036, USA',
          formatted_phone_number: '(212) 391-7427',
          rating: 4.2,
          geometry: {
            location: { lat: 40.7589, lng: -73.9851 }
          },
          opening_hours: {
            open_now: true,
            weekday_text: ['Monday: 11:00 AM – 10:00 PM', 'Tuesday: 11:00 AM – 10:00 PM']
          },
          url: 'https://www.google.com/maps/place/Texas+Roadhouse'
        },
        {
          place_id: 'mock2',
          name: 'Texas Roadhouse - Brooklyn',
          formatted_address: '9404 4th Ave, Brooklyn, NY 11209, USA',
          formatted_phone_number: '(718) 833-4427',
          rating: 4.1,
          geometry: {
            location: { lat: 40.6195, lng: -74.0282 }
          },
          opening_hours: {
            open_now: true,
            weekday_text: ['Monday: 11:00 AM – 10:00 PM', 'Tuesday: 11:00 AM – 10:00 PM']
          },
          url: 'https://www.google.com/maps/place/Texas+Roadhouse'
        }
      ]

      // Simulate search location (using a default for demo)
      const searchLocation = {
        lat: 40.7128, // New York City
        lng: -74.0060,
        address: searchQuery
      }

      const searchResult: SearchResult = {
        locations: mockLocations,
        searchLocation
      }

      setTimeout(() => {
        setSearchResults(searchResult)
        if (mapInstanceRef.current) {
          addMarkersToMap(mockLocations, searchLocation)
        }
        setLoading(false)
      }, 1000) // Simulate loading time

    } catch (err) {
      setError('An error occurred while searching. Please try again.')
      setLoading(false)
    }
  }

  // Handle enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchLocations()
    }
  }

  // Generate schema.org markup for locations
  const generateSchemaMarkup = () => {
    if (!searchResults?.locations) return null

    const schemas = searchResults.locations.map(location => ({
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      'name': location.name,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': location.formatted_address
      },
      'telephone': location.formatted_phone_number,
      'aggregateRating': location.rating ? {
        '@type': 'AggregateRating',
        'ratingValue': location.rating,
        'bestRating': '5'
      } : undefined,
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': location.geometry.location.lat,
        'longitude': location.geometry.location.lng
      },
      'url': location.website,
      'servesCuisine': 'American',
      'priceRange': '$$'
    }))

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas)
        }}
      />
    )
  }

  // Check if API key is available
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  
  if (!apiKey) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-center">
          <strong>Configuration Error:</strong> Google Maps API key is not configured. Please check your environment variables.
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Google Maps Script - Basic version without Places API to avoid billing issues */}
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`}
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Google Maps API loaded successfully')
        }}
        onError={(e) => {
          console.error('Failed to load Google Maps API:', e)
          setError('Failed to load Google Maps. Please check your internet connection and try again.')
        }}
      />

      {/* Schema.org JSON-LD */}
      {generateSchemaMarkup()}

      <div className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6 text-stone-800">
              Find Texas Roadhouse Near You
            </h2>
            
            {/* Temporary Notice */}
            <div className="mb-4 p-3 bg-blue-100 border border-blue-400 text-blue-700 rounded-lg text-sm text-center">
              <strong>Demo Mode:</strong> Currently showing sample locations while we configure Google Places API billing.
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter city, state, or ZIP code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none text-lg"
              />
              <button
                onClick={searchLocations}
                disabled={loading || !mapLoaded}
                className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Searching...
                  </div>
                ) : (
                  '🔍 Search'
                )}
              </button>
            </div>
            
            {error && (
              <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                {error}
              </div>
            )}
            
            {/* Debug Info (only in development) */}
            {process.env.NODE_ENV === 'development' && (
              <div className="mt-4 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded-lg text-sm">
                <strong>Debug Info:</strong><br/>
                API Key: {apiKey ? `${apiKey.substring(0, 10)}...` : 'Not found'}<br/>
                Maps Loaded: {mapLoaded ? 'Yes' : 'No'}<br/>
                Google Available: {typeof window !== 'undefined' && window.google ? 'Yes' : 'No'}
              </div>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div
            ref={mapRef}
            className="w-full h-96 md:h-[500px] bg-stone-200 flex items-center justify-center"
          >
            {!mapLoaded && (
              <div className="text-center text-stone-500">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-stone-400 mx-auto mb-2"></div>
                Loading map...
              </div>
            )}
          </div>
        </div>

        {/* Results Section */}
        {searchResults && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-6 text-stone-800">
              Found {searchResults.locations.length} location{searchResults.locations.length !== 1 ? 's' : ''} near "{searchResults.searchLocation.address}"
            </h3>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {searchResults.locations.map((location) => (
                <div key={location.place_id} className="border border-stone-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-semibold mb-3 text-red-600">
                    {location.name}
                  </h4>
                  
                  <div className="space-y-2 text-stone-600 mb-4">
                    <p className="flex items-start">
                      <span className="mr-2">📍</span>
                      {location.formatted_address}
                    </p>
                    
                    {location.formatted_phone_number && (
                      <p className="flex items-center">
                        <span className="mr-2">📞</span>
                        <a href={`tel:${location.formatted_phone_number}`} className="hover:text-red-600">
                          {location.formatted_phone_number}
                        </a>
                      </p>
                    )}
                    
                    {location.rating && (
                      <p className="flex items-center">
                        <span className="mr-2">⭐</span>
                        {location.rating}/5 rating
                      </p>
                    )}
                    
                    {location.opening_hours?.open_now !== undefined && (
                      <p className="flex items-center">
                        <span className="mr-2">🕒</span>
                        <span className={location.opening_hours.open_now ? 'text-green-600' : 'text-red-600'}>
                          {location.opening_hours.open_now ? 'Open Now' : 'Closed'}
                        </span>
                      </p>
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href={location.url || `https://www.google.com/maps/place/?q=place_id:${location.place_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-red-600 text-white text-center py-2 px-4 rounded hover:bg-red-700 transition-colors"
                    >
                      Get Directions
                    </a>
                    
                    {location.website && (
                      <a
                        href={location.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-stone-600 text-white text-center py-2 px-4 rounded hover:bg-stone-700 transition-colors"
                      >
                        Visit Website
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
