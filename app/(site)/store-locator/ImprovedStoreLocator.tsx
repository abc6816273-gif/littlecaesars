'use client'

import { useState, useEffect, useRef } from 'react'
import { Search } from 'lucide-react'

interface Location {
  id: string
  name: string
  address: string
  phone?: string
  position: {
    lat: number
    lng: number
  }
  distance?: number
}

declare global {
  interface Window {
    tt: any
  }
}

export default function ImprovedStoreLocator() {
  const [searchQuery, setSearchQuery] = useState('')
  const [locations, setLocations] = useState<Location[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [mapLoaded, setMapLoaded] = useState(false)
  
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])

  const apiKey = process.env.NEXT_PUBLIC_MAPS_API_KEY || process.env.NEXT_PUBLIC_TOMTOM_API_KEY || 'GgrCoH1FrVKuh70KwIonc7tiDX9HT8LQ'

  // Initialize TomTom map
  useEffect(() => {
    const initializeMap = () => {
      if (!window.tt || !mapRef.current) return

      try {
        // Initialize map with USA center
        mapInstanceRef.current = window.tt.map({
          key: apiKey,
          container: mapRef.current,
          center: [-97.0, 38.0], // USA center [lng, lat]
          zoom: 4,
          style: 'https://api.tomtom.com/style/2/custom/style/dG9tdG9tQEBAbGFuZHNjYXBlOzM7KjsqOzE5MzE4NzU5Ow==.json?key=' + apiKey
        })

        setMapLoaded(true)
        console.log('TomTom Map initialized successfully')
      } catch (error) {
        console.error('Error initializing TomTom Map:', error)
        setError('Failed to initialize map. Please refresh the page.')
      }
    }

    // Load TomTom SDK
    if (!window.tt) {
      const script = document.createElement('script')
      script.src = 'https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.25.0/maps/maps-web.min.js'
      script.onload = initializeMap
      script.onerror = () => setError('Failed to load TomTom SDK')
      document.head.appendChild(script)

      // Load CSS
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.25.0/maps/maps.css'
      document.head.appendChild(link)
    } else {
      initializeMap()
    }
  }, [apiKey])

  // Clear existing markers
  const clearMarkers = () => {
    markersRef.current.forEach(marker => marker.remove())
    markersRef.current = []
  }

  // Add markers to map
  const addMarkersToMap = (locations: Location[]) => {
    if (!mapInstanceRef.current || !window.tt) return

    clearMarkers()

    // Add Texas Roadhouse markers
    locations.forEach((location) => {
      const marker = new window.tt.Marker({
        color: '#dc2626'
      })
        .setLngLat([location.position.lng, location.position.lat])
        .addTo(mapInstanceRef.current)

      // Create popup for each marker
      const popup = new window.tt.Popup({ offset: 35 })
        .setHTML(`
          <div style="padding: 12px; max-width: 280px;">
            <h3 style="margin: 0 0 8px 0; font-weight: bold; color: #dc2626;">${location.name}</h3>
            <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">${location.address}</p>
            ${location.phone ? `<p style="margin: 0 0 12px 0; color: #666; font-size: 14px;">📞 ${location.phone}</p>` : ''}
            <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}" 
               target="_blank" 
               style="background: #dc2626; color: white; padding: 8px 16px; text-decoration: none; border-radius: 6px; display: inline-block; font-size: 14px;">
              Get Directions
            </a>
          </div>
        `)

      marker.setPopup(popup)
      markersRef.current.push(marker)
    })

    // Fit map to show all markers
    if (locations.length > 0) {
      const bounds = new window.tt.LngLatBounds()
      locations.forEach(location => {
        bounds.extend([location.position.lng, location.position.lat])
      })
      mapInstanceRef.current.fitBounds(bounds, { padding: 50 })
    }
  }

  // Search for Texas Roadhouse locations
  const searchLocations = async () => {
    if (!searchQuery.trim()) {
      setError('Please enter a location to search')
      return
    }

    setLoading(true)
    setError('')
    setLocations([])

    try {
      // Search for Texas Roadhouse locations using TomTom Search API
      const searchResponse = await fetch(
        `https://api.tomtom.com/search/2/search/Texas%20Roadhouse%20near%20${encodeURIComponent(searchQuery)}.json?key=${apiKey}&limit=20&radius=50000`
      )

      if (!searchResponse.ok) {
        throw new Error('Search failed')
      }

      const searchData = await searchResponse.json()

      if (!searchData.results || searchData.results.length === 0) {
        setError('No Texas Roadhouse locations found near this area.')
        setLoading(false)
        return
      }

      // Transform results to our format
      const foundLocations: Location[] = searchData.results.map((result: any, index: number) => ({
        id: result.id || `location-${index}`,
        name: result.poi?.name || 'Texas Roadhouse',
        address: result.address?.freeformAddress || 'Address not available',
        phone: result.poi?.phone || result.poi?.phoneNumbers?.[0]?.phoneNumber,
        position: {
          lat: result.position.lat,
          lng: result.position.lon
        },
        distance: result.dist ? Math.round(result.dist / 1000 * 10) / 10 : undefined
      }))

      setLocations(foundLocations)
      addMarkersToMap(foundLocations)
      setLoading(false)

    } catch (err) {
      console.error('Search error:', err)
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🍖 Find Texas Roadhouse Near You
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Discover the nearest Texas Roadhouse restaurant and get directions
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Enter city, state, or ZIP code..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none pl-12"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <button
                onClick={searchLocations}
                disabled={loading || !mapLoaded}
                className="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-lg"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Searching...
                  </div>
                ) : (
                  'Find Locations'
                )}
              </button>
            </div>
            
            {error && (
              <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                <strong>Error:</strong> {error}
              </div>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div
            ref={mapRef}
            className="w-full rounded-xl"
            style={{ 
              height: '500px', 
              minHeight: '500px',
              backgroundColor: '#f3f4f6'
            }}
          >
            {!mapLoaded && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-gray-500">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto mb-4"></div>
                  <p className="text-lg">Loading map...</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results Section */}
        {locations.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Found {locations.length} location{locations.length !== 1 ? 's' : ''} near "{searchQuery}"
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {locations.map((location, index) => (
                <div key={location.id || `location-${index}`} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
                  <h3 className="text-xl font-semibold mb-3 text-red-600">
                    {location.name}
                  </h3>
                  
                  <div className="space-y-3 text-gray-600 mb-6">
                    <p className="flex items-start">
                      <span className="mr-3 mt-1">📍</span>
                      <span className="flex-1">{location.address}</span>
                    </p>
                    
                    {location.phone && (
                      <p className="flex items-center">
                        <span className="mr-3">📞</span>
                        <a href={`tel:${location.phone}`} className="hover:text-red-600 underline">
                          {location.phone}
                        </a>
                      </p>
                    )}
                    
                    {location.distance && (
                      <p className="flex items-center">
                        <span className="mr-3">📏</span>
                        {location.distance} km away
                      </p>
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-red-600 text-white text-center py-3 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium"
                    >
                      Get Directions
                    </a>
                    
                    {location.phone && (
                      <a
                        href={`tel:${location.phone}`}
                        className="flex-1 bg-gray-600 text-white text-center py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors font-medium"
                      >
                        Call Now
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No results message */}
        {!loading && locations.length === 0 && searchQuery && !error && (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">No locations found</h2>
            <p className="text-gray-600 mb-6">
              We couldn't find any Texas Roadhouse restaurants near "{searchQuery}". 
              Try searching for a different location or check your spelling.
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setError('')
                setLocations([])
              }}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Try Another Search
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
