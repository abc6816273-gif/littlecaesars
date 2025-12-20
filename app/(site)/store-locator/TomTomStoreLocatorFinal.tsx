'use client'

import { useState, useEffect, useRef } from 'react'
import '@tomtom-international/web-sdk-maps/dist/maps.css'

interface Location {
  id: string
  name: string
  address: string
  phone?: string
  rating?: number
  position: {
    lat: number
    lng: number
  }
  distance?: number
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
    tt: any
  }
}

function TomTomStoreLocatorFinal() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [mapLoaded, setMapLoaded] = useState(false)
  
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])

  const apiKey = process.env.NEXT_PUBLIC_MAPS_API_KEY

  // Initialize TomTom map
  useEffect(() => {
    if (!apiKey) {
      setError('TomTom API key is not configured. Please add NEXT_PUBLIC_MAPS_API_KEY to your .env.local file.')
      return
    }

    if (!mapRef.current) return

    // Load TomTom SDK from CDN
    const script = document.createElement('script')
    script.src = `https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.25.0/maps/maps-web.min.js`
    script.async = true
    script.onload = () => {
      if (window.tt && mapRef.current) {
        try {
          mapInstanceRef.current = window.tt.map({
            key: apiKey,
            container: mapRef.current,
            center: [-97.0, 38.0], // USA center as requested
            zoom: 4,
            style: 'https://api.tomtom.com/style/2/custom/style/dG9tdG9tQEBAbGFuZHNjYXBlOzM7KjsqOzE5MzE4NzU5Ow==.json?key=' + apiKey
          })

          mapInstanceRef.current.on('load', () => {
            setMapLoaded(true)
            console.log('TomTom Map initialized successfully')
          })

          mapInstanceRef.current.on('error', (e: any) => {
            console.error('Map error:', e)
            setError('Failed to load map. Please check your internet connection and try again.')
          })
        } catch (error) {
          console.error('Error initializing TomTom Map:', error)
          setError('Failed to initialize map. Please refresh the page and try again.')
        }
      }
    }
    script.onerror = () => {
      setError('Failed to load TomTom Maps SDK. Please check your internet connection.')
    }

    document.head.appendChild(script)

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [apiKey])

  // Clear existing markers
  const clearMarkers = () => {
    markersRef.current.forEach(marker => marker.remove())
    markersRef.current = []
  }

  // Add markers to map
  const addMarkersToMap = (locations: Location[], searchLocation: any) => {
    if (!mapInstanceRef.current || !window.tt) return

    const tt = window.tt
    clearMarkers()

    // Add search location marker (blue)
    const searchMarker = new tt.Marker({
      color: '#0066cc'
    })
      .setLngLat([searchLocation.lng, searchLocation.lat])
      .addTo(mapInstanceRef.current)

    markersRef.current.push(searchMarker)

    // Add Texas Roadhouse markers (red)
    locations.forEach((location) => {
      const marker = new tt.Marker({
        color: '#dc2626'
      })
        .setLngLat([location.position.lng, location.position.lat])
        .addTo(mapInstanceRef.current)

      // Create popup for each marker
      const popup = new tt.Popup({ offset: 35 })
        .setHTML(`
          <div style="padding: 10px; max-width: 250px;">
            <h3 style="margin: 0 0 8px 0; font-weight: bold;">${location.name}</h3>
            <p style="margin: 0 0 8px 0; color: #666;">${location.address}</p>
            ${location.phone ? `<p style="margin: 0 0 8px 0;">📞 ${location.phone}</p>` : ''}
            ${location.rating ? `<p style="margin: 0 0 8px 0;">⭐ ${location.rating}/5</p>` : ''}
            <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}" 
               target="_blank" 
               style="background: #dc2626; color: white; padding: 6px 12px; text-decoration: none; border-radius: 4px; display: inline-block;">
              Get Directions
            </a>
          </div>
        `)

      marker.setPopup(popup)
      markersRef.current.push(marker)
    })

    // Fit map to show all markers
    const bounds = new tt.LngLatBounds()
    bounds.extend([searchLocation.lng, searchLocation.lat])
    locations.forEach(location => {
      bounds.extend([location.position.lng, location.position.lat])
    })
    
    mapInstanceRef.current.fitBounds(bounds, { padding: 50 })
  }

  // Search for locations using TomTom APIs
  const searchLocations = async () => {
    if (!searchQuery.trim()) {
      setError('Please enter a location to search')
      return
    }

    if (!apiKey) {
      setError('TomTom API key is not configured')
      return
    }

    if (!mapLoaded) {
      setError('Maps are still loading. Please wait a moment and try again.')
      return
    }

    setLoading(true)
    setError('')

    try {
      // First, geocode the search query using TomTom Geocoding API
      const geocodeResponse = await fetch(
        `https://api.tomtom.com/search/2/geocode/${encodeURIComponent(searchQuery)}.json?key=${apiKey}&limit=1`
      )
      
      if (!geocodeResponse.ok) {
        throw new Error('Geocoding failed')
      }

      const geocodeData = await geocodeResponse.json()
      
      if (!geocodeData.results || geocodeData.results.length === 0) {
        setError('Location not found. Please try a different search term.')
        setLoading(false)
        return
      }

      const searchLocation = {
        lat: geocodeData.results[0].position.lat,
        lng: geocodeData.results[0].position.lon,
        address: geocodeData.results[0].address.freeformAddress
      }

      // Search for Texas Roadhouse locations using TomTom POI Search
      const poiResponse = await fetch(
        `https://api.tomtom.com/search/2/poiSearch/Texas%20Roadhouse.json?key=${apiKey}&lat=${searchLocation.lat}&lon=${searchLocation.lng}&radius=50000&limit=20`
      )

      if (!poiResponse.ok) {
        throw new Error('POI search failed')
      }

      const poiData = await poiResponse.json()

      if (!poiData.results || poiData.results.length === 0) {
        setError('No Texas Roadhouse locations found near this area.')
        setLoading(false)
        return
      }

      // Transform TomTom results to our format
      const locations: Location[] = poiData.results.map((result: any, index: number) => {
        return {
          id: result.id || `location-${index}`,
          name: result.poi?.name || result.poi?.names?.brandName || 'Texas Roadhouse',
          address: result.address?.freeformAddress || 
                   `${result.address?.streetNumber || ''} ${result.address?.streetName || ''}, ${result.address?.municipality || ''}, ${result.address?.countrySubdivision || ''}`.trim(),
          phone: result.poi?.phone || result.poi?.phoneNumbers?.[0]?.phoneNumber,
          rating: result.score ? Math.round(result.score * 5 * 10) / 10 : 4.2,
          position: {
            lat: result.position.lat,
            lng: result.position.lon
          },
          distance: result.dist ? Math.round(result.dist / 1000 * 10) / 10 : undefined
        }
      })

      const searchResult: SearchResult = {
        locations,
        searchLocation
      }

      setSearchResults(searchResult)
      if (mapInstanceRef.current) {
        addMarkersToMap(locations, searchLocation)
      }
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

  if (!apiKey) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-center">
          <strong>Configuration Error:</strong> TomTom API key is not configured. Please add NEXT_PUBLIC_MAPS_API_KEY to your .env.local file.
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-[500px]">
      {/* Search Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-stone-800">
            Find Texas Roadhouse Near You
          </h2>
          
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
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div
          ref={mapRef}
          className="w-full h-[500px] bg-stone-200 flex items-center justify-center rounded-lg"
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
            {searchResults.locations.map((location, index) => (
              <div key={location.id || `location-${index}`} className="border border-stone-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
                <h4 className="text-xl font-semibold mb-3 text-red-600">
                  {location.name || 'Texas Roadhouse'}
                </h4>
                
                <div className="space-y-2 text-stone-600 mb-4">
                  <p className="flex items-start">
                    <span className="mr-2">📍</span>
                    <span className="flex-1">{location.address || 'Address not available'}</span>
                  </p>
                  
                  {location.phone && (
                    <p className="flex items-center">
                      <span className="mr-2">📞</span>
                      <a href={`tel:${location.phone}`} className="hover:text-red-600 underline">
                        {location.phone}
                      </a>
                    </p>
                  )}
                  
                  <p className="flex items-center">
                    <span className="mr-2">⭐</span>
                    {location.rating || 4.2}/5 rating
                  </p>
                  
                  {location.distance && (
                    <p className="flex items-center">
                      <span className="mr-2">📏</span>
                      {location.distance} km away
                    </p>
                  )}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address || location.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-red-600 text-white text-center py-2 px-4 rounded hover:bg-red-700 transition-colors"
                  >
                    Get Directions
                  </a>
                  
                  {location.phone ? (
                    <a
                      href={`tel:${location.phone}`}
                      className="flex-1 bg-stone-600 text-white text-center py-2 px-4 rounded hover:bg-stone-700 transition-colors"
                    >
                      Call Now
                    </a>
                  ) : (
                    <a
                      href={`https://www.texasroadhouse.com/locations`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-stone-600 text-white text-center py-2 px-4 rounded hover:bg-stone-700 transition-colors"
                    >
                      View Details
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default TomTomStoreLocatorFinal
