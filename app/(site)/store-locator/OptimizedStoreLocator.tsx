'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { MapPin, Phone, Clock, Star, Navigation, Search, RefreshCw, Crosshair, AlertCircle, CheckCircle } from 'lucide-react'
import { LocalBusinessSchema } from './LocalBusinessSchema'
import { useMobileOptimization } from '@/components/performance/MobileOptimizer'

declare global {
  interface Window {
    L: any
  }
}

export interface Location {
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

// Static Little Caesars locations for faster loading with enhanced SEO data
const LITTLE_CAESARS_LOCATIONS: Location[] = [
  {
    id: 'tr-1',
    name: 'Little Caesars - Times Square',
    address: '1560 Broadway, New York, NY 10036',
    phone: '(212) 391-7427',
    rating: 4.2,
    position: { lat: 40.7589, lng: -73.9851 }
  },
  {
    id: 'tr-2',
    name: 'Little Caesars - Brooklyn',
    address: '9404 4th Ave, Brooklyn, NY 11209',
    phone: '(718) 833-4427',
    rating: 4.1,
    position: { lat: 40.6195, lng: -74.0282 }
  },
  {
    id: 'tr-3',
    name: 'Little Caesars - Chicago',
    address: '1100 W Cermak Rd, Chicago, IL 60608',
    phone: '(312) 666-2121',
    rating: 4.3,
    position: { lat: 41.8522, lng: -87.6569 }
  },
  {
    id: 'tr-4',
    name: 'Little Caesars - Los Angeles',
    address: '1201 W Olympic Blvd, Los Angeles, CA 90015',
    phone: '(213) 749-2121',
    rating: 4.4,
    position: { lat: 34.0394, lng: -118.2661 }
  },
  {
    id: 'tr-5',
    name: 'Little Caesars - Miami',
    address: '3201 Coral Way, Miami, FL 33145',
    phone: '(305) 445-2121',
    rating: 4.2,
    position: { lat: 25.7477, lng: -80.2436 }
  },
  {
    id: 'tr-6',
    name: 'Little Caesars - Houston',
    address: '4410 N Freeway, Houston, TX 77022',
    phone: '(713) 695-2121',
    rating: 4.5,
    position: { lat: 29.8174, lng: -95.3678 }
  },
  {
    id: 'tr-7',
    name: 'Little Caesars - Dallas',
    address: '2815 Forest Ln, Dallas, TX 75234',
    phone: '(972) 241-2121',
    rating: 4.3,
    position: { lat: 32.8998, lng: -96.7291 }
  },
  {
    id: 'tr-8',
    name: 'Little Caesars - Phoenix',
    address: '2121 E Camelback Rd, Phoenix, AZ 85016',
    phone: '(602) 957-2121',
    rating: 4.4,
    position: { lat: 33.5092, lng: -112.0370 }
  },
  {
    id: 'tr-9',
    name: 'Little Caesars - Atlanta',
    address: '3330 Piedmont Rd NE, Atlanta, GA 30305',
    phone: '(404) 262-2121',
    rating: 4.2,
    position: { lat: 33.8304, lng: -84.3733 }
  },
  {
    id: 'tr-10',
    name: 'Little Caesars - Las Vegas',
    address: '2100 N Rainbow Blvd, Las Vegas, NV 89108',
    phone: '(702) 631-2121',
    rating: 4.3,
    position: { lat: 36.1699, lng: -115.2428 }
  }
]

function OptimizedStoreLocator() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [mapReady, setMapReady] = useState(false)
  const [userLocation, setUserLocation] = useState<{ lat: number, lng: number } | null>(null)
  const [locationPermission, setLocationPermission] = useState<'granted' | 'denied' | 'prompt' | 'loading'>('prompt')
  const [autoLocationLoaded, setAutoLocationLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])

  // Mobile optimization hook
  useMobileOptimization()

  // Detect mobile device
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768)

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Initialize Leaflet map using CDN (no npm dependency needed) - Mobile optimized
  useEffect(() => {
    const initializeMap = () => {
      // Load Leaflet CSS
      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
        document.head.appendChild(link)
      }

      // Load Leaflet JS
      if (!window.L) {
        const script = document.createElement('script')
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
        script.async = true
        script.onload = () => {
          if (window.L && mapRef.current) {
            try {
              // Initialize map with user location or USA center
              const center = userLocation ? [userLocation.lat, userLocation.lng] : [39.8283, -98.5795]
              const zoom = userLocation ? 10 : 4

              mapInstanceRef.current = window.L.map(mapRef.current, {
                center: center,
                zoom: zoom,
                zoomControl: !isMobile, // Disable zoom controls on mobile for better touch experience
                scrollWheelZoom: !isMobile, // Disable scroll zoom on mobile
                touchZoom: isMobile, // Enable touch zoom on mobile
                doubleClickZoom: true,
                boxZoom: false, // Disable box zoom for better mobile performance
                keyboard: false, // Disable keyboard navigation for performance
                dragging: true,
                attributionControl: false // Remove attribution for cleaner mobile view
              })

              // Add OpenStreetMap tiles (free and fast)
              window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
                maxZoom: 19
              }).addTo(mapInstanceRef.current)

              setMapReady(true)
              console.log('Map initialized successfully')
            } catch (error) {
              console.error('Error initializing map:', error)
              setError('Failed to initialize map. Please refresh the page.')
            }
          }
        }
        script.onerror = () => {
          setError('Failed to load map library. Please check your internet connection.')
        }
        document.head.appendChild(script)
      } else if (mapRef.current) {
        // Leaflet already loaded
        try {
          const center = userLocation ? [userLocation.lat, userLocation.lng] : [39.8283, -98.5795]
          const zoom = userLocation ? 10 : 4

          mapInstanceRef.current = window.L.map(mapRef.current, {
            center: center,
            zoom: zoom,
            zoomControl: !isMobile,
            scrollWheelZoom: !isMobile,
            touchZoom: isMobile,
            doubleClickZoom: true,
            boxZoom: false,
            keyboard: false,
            dragging: true,
            attributionControl: false
          })

          window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19
          }).addTo(mapInstanceRef.current)

          setMapReady(true)
          console.log('Map initialized successfully')
        } catch (error) {
          console.error('Error initializing map:', error)
          setError('Failed to initialize map. Please refresh the page.')
        }
      }
    }

    initializeMap()

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [userLocation])

  // Get user's current location
  const getCurrentLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser.')
      return
    }

    setLocationPermission('loading')
    setError('')

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        setUserLocation({ lat: latitude, lng: longitude })
        setLocationPermission('granted')

        // Auto-search nearby locations
        if (!autoLocationLoaded) {
          searchNearbyLocations(latitude, longitude)
          setAutoLocationLoaded(true)
        }
      },
      (error) => {
        console.error('Geolocation error:', error)
        setLocationPermission('denied')

        switch (error.code) {
          case error.PERMISSION_DENIED:
            setError('Location access denied. Please enable location services and refresh the page.')
            break
          case error.POSITION_UNAVAILABLE:
            setError('Location information is unavailable. Please search manually.')
            break
          case error.TIMEOUT:
            setError('Location request timed out. Please search manually.')
            break
          default:
            setError('An unknown error occurred while getting your location.')
            break
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000 // 5 minutes cache
      }
    )
  }, [autoLocationLoaded])

  // Auto-detect location on page load
  useEffect(() => {
    if (mapReady && !autoLocationLoaded && locationPermission === 'prompt') {
      getCurrentLocation()
    }
  }, [mapReady, autoLocationLoaded, locationPermission, getCurrentLocation])

  // Calculate distance between two points
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371 // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180
    const dLon = (lon2 - lon1) * Math.PI / 180
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
  }

  // Clear existing markers
  const clearMarkers = useCallback(() => {
    markersRef.current.forEach(marker => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.removeLayer(marker)
      }
    })
    markersRef.current = []
  }, [])

  // Add markers to map
  const addMarkersToMap = useCallback((locations: Location[], searchLocation: any) => {
    if (!mapInstanceRef.current || !mapReady || !window.L) return

    clearMarkers()

    // Custom marker icons
    const orangeIcon = window.L.divIcon({
      className: 'custom-marker',
      html: '<div style="background: #f97316; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>',
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    })

    const blueIcon = window.L.divIcon({
      className: 'custom-marker',
      html: '<div style="background: #0066cc; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>',
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    })

    // Add search location marker (blue)
    const searchMarker = window.L.marker([searchLocation.lat, searchLocation.lng], { icon: blueIcon })
      .bindPopup(`<div style="padding: 8px;"><strong>Search Location</strong><br/>${searchLocation.address}</div>`)
      .addTo(mapInstanceRef.current)

    markersRef.current.push(searchMarker)

    // Add Little Caesars markers (orange)
    locations.forEach((location) => {
      const marker = window.L.marker([location.position.lat, location.position.lng], { icon: orangeIcon })
        .bindPopup(`
          <div style="padding: 12px; min-width: 200px;">
            <h3 style="margin: 0 0 8px 0; font-weight: bold; color: #f97316;">${location.name}</h3>
            <p style="margin: 0 0 8px 0; color: #666;">${location.address}</p>
            ${location.phone ? `<p style="margin: 0 0 8px 0;">📞 ${location.phone}</p>` : ''}
            <p style="margin: 0 0 8px 0;">⭐ ${location.rating || 4.2}/5</p>
            ${location.distance ? `<p style="margin: 0 0 8px 0;">📏 ${location.distance} km away</p>` : ''}
            <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}" 
               target="_blank" 
               style="background: #f97316; color: white; padding: 6px 12px; text-decoration: none; border-radius: 4px; display: inline-block; margin-top: 8px;">
              Get Directions
            </a>
          </div>
        `)
        .addTo(mapInstanceRef.current)

      markersRef.current.push(marker)
    })

    // Fit map to show all markers
    const group = window.L.featureGroup(markersRef.current)
    mapInstanceRef.current.fitBounds(group.getBounds().pad(0.1))
  }, [mapReady, clearMarkers])

  // Fast geocoding using Nominatim (OpenStreetMap)
  const geocodeLocation = async (query: string) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1&countrycodes=us`
    )

    if (!response.ok) throw new Error('Geocoding failed')

    const data = await response.json()
    if (!data || data.length === 0) throw new Error('Location not found')

    return {
      lat: parseFloat(data[0].lat),
      lng: parseFloat(data[0].lon),
      address: data[0].display_name
    }
  }

  // Reverse geocoding to get address from coordinates
  const reverseGeocode = async (lat: number, lng: number) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
      )

      if (!response.ok) throw new Error('Reverse geocoding failed')

      const data = await response.json()
      return data.display_name || `${lat.toFixed(4)}, ${lng.toFixed(4)}`
    } catch (error) {
      console.error('Reverse geocoding error:', error)
      return `${lat.toFixed(4)}, ${lng.toFixed(4)}`
    }
  }

  // Search nearby locations using user's current position
  const searchNearbyLocations = async (lat: number, lng: number) => {
    setLoading(true)
    setError('')

    try {
      // Get address for the coordinates
      const address = await reverseGeocode(lat, lng)

      const searchLocation = { lat, lng, address }

      // Find nearby Texas Roadhouse locations
      const locationsWithDistance = LITTLE_CAESARS_LOCATIONS.map(location => ({
        ...location,
        distance: Math.round(calculateDistance(
          lat,
          lng,
          location.position.lat,
          location.position.lng
        ) * 10) / 10
      }))

      // Sort by distance and take closest 10
      const nearbyLocations = locationsWithDistance
        .sort((a, b) => (a.distance || 0) - (b.distance || 0))
        .slice(0, 10)

      const searchResult: SearchResult = {
        locations: nearbyLocations,
        searchLocation
      }

      setSearchResults(searchResult)
      if (mapInstanceRef.current) {
        addMarkersToMap(nearbyLocations, searchLocation)
      }
      setLoading(false)

    } catch (err) {
      console.error('Search error:', err)
      setError('Failed to find nearby locations. Please try searching manually.')
      setLoading(false)
    }
  }

  // Search for locations
  const searchLocations = async () => {
    if (!searchQuery.trim()) {
      setError('Please enter a location to search')
      return
    }

    if (!mapReady) {
      setError('Map is still loading. Please wait a moment and try again.')
      return
    }

    setLoading(true)
    setError('')

    try {
      // Geocode the search query
      const searchLocation = await geocodeLocation(searchQuery)

      // Find nearby Texas Roadhouse locations
      const locationsWithDistance = LITTLE_CAESARS_LOCATIONS.map(location => ({
        ...location,
        distance: Math.round(calculateDistance(
          searchLocation.lat,
          searchLocation.lng,
          location.position.lat,
          location.position.lng
        ) * 10) / 10
      }))

      // Sort by distance and take closest 10
      const nearbyLocations = locationsWithDistance
        .sort((a, b) => (a.distance || 0) - (b.distance || 0))
        .slice(0, 10)

      const searchResult: SearchResult = {
        locations: nearbyLocations,
        searchLocation
      }

      setSearchResults(searchResult)
      if (mapInstanceRef.current) {
        addMarkersToMap(nearbyLocations, searchLocation)
      }
      setLoading(false)

    } catch (err) {
      console.error('Search error:', err)
      setError('Location not found. Please try a different search term.')
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
    <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      {/* Search Section */}
      <section className="py-12 bg-white shadow-lg relative z-10 mx-4 sm:mx-6 lg:mx-8 rounded-2xl mt-8">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-little-caesars-orange/10 rounded-full px-4 py-2 border border-little-caesars-orange/20 mb-4">
              <MapPin className="h-5 w-5 text-little-caesars-orange" />
              <span className="text-stone-700 font-medium">Find Little Caesars Near You</span>
            </div>

            {/* Location Status Indicator */}
            {locationPermission === 'loading' && (
              <div className="flex items-center justify-center gap-2 text-sm text-little-caesars-orange mb-4">
                <RefreshCw className="h-4 w-4 animate-spin" />
                <span>Detecting your location...</span>
              </div>
            )}

            {locationPermission === 'granted' && userLocation && (
              <div className="flex items-center justify-center gap-2 text-sm text-green-600 mb-4">
                <CheckCircle className="h-4 w-4" />
                <span>Location detected! Showing nearby pizza restaurants.</span>
              </div>
            )}

            {locationPermission === 'denied' && (
              <div className="flex items-center justify-center gap-2 text-sm text-stone-600 mb-4">
                <AlertCircle className="h-4 w-4" />
                <span>Location access denied. Search manually below.</span>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            {/* Search Input and Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-400" />
                <input
                  type="text"
                  placeholder="Find Little Caesars near me - Enter city, state, or ZIP..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-12 pr-4 py-4 border-2 border-stone-200 rounded-xl focus:ring-2 focus:ring-little-caesars-orange focus:border-little-caesars-orange outline-none text-lg bg-white shadow-sm transition-all"
                />
              </div>
              <button
                onClick={searchLocations}
                disabled={loading || !mapReady}
                className="px-8 py-4 bg-little-caesars-orange text-white font-semibold rounded-xl hover:bg-little-caesars-orange/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-w-[140px]"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <RefreshCw className="animate-spin h-5 w-5 mr-2" />
                    Searching...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Search className="h-5 w-5 mr-2" />
                    Search
                  </div>
                )}
              </button>
            </div>

            {/* Use My Location Button */}
            {locationPermission !== 'loading' && (
              <div className="text-center">
                <button
                  onClick={getCurrentLocation}
                  disabled={loading || !mapReady}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-600/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Crosshair className="h-5 w-5" />
                  {locationPermission === 'granted' ? 'Update My Location' : 'Use My Current Location'}
                </button>
              </div>
            )}
          </div>

          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl max-w-2xl mx-auto">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                {error}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100">
            <div className="bg-gradient-to-r from-little-caesars-orange to-orange-500 p-4">
              <h2 className="text-xl font-slab font-bold text-white flex items-center">
                <MapPin className="h-6 w-6 mr-2" />
                Little Caesars Locations Map
              </h2>
            </div>
            <div
              ref={mapRef}
              className={`w-full ${isMobile ? 'h-[350px]' : 'h-[500px]'} bg-stone-50 flex items-center justify-center touch-pan-x touch-pan-y`}
              style={{
                touchAction: 'pan-x pan-y',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {!mapReady && (
                <div className="text-center text-stone-500">
                  <div className="w-12 h-12 border-4 border-little-caesars-orange/20 border-t-little-caesars-orange rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="font-medium">Loading interactive map...</p>
                  <p className="text-sm text-stone-400 mt-1">Please wait a moment</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Local Business Schema for SEO */}
      {searchResults && (
        <LocalBusinessSchema
          locations={searchResults.locations}
          searchLocation={searchResults.searchLocation}
        />
      )}

      {/* Results Section */}
      {searchResults && (
        <section className="py-16 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-slab font-bold text-stone-800 mb-4">
                {searchResults.locations.length} Little Caesars Restaurant{searchResults.locations.length !== 1 ? 's' : ''} Near You
              </h3>
              <p className="text-lg text-stone-600">
                Closest locations to <span className="font-semibold text-little-caesars-orange">"{searchResults.searchLocation.address}"</span>
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {searchResults.locations.map((location, index) => (
                <div key={location.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-100 group hover:-translate-y-1">
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-little-caesars-orange to-orange-500 p-6">
                    <h4 className="text-xl font-slab font-bold text-white mb-2">
                      {location.name}
                    </h4>
                    <div className="flex items-center text-white/90">
                      <span className="bg-white/20 rounded-full px-3 py-1 text-sm font-medium">
                        #{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-little-caesars-orange mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-stone-700 leading-relaxed">{location.address}</span>
                      </div>

                      {location.phone && (
                        <div className="flex items-center">
                          <Phone className="h-5 w-5 text-little-caesars-orange mr-3 flex-shrink-0" />
                          <a
                            href={`tel:${location.phone}`}
                            className="text-stone-700 hover:text-little-caesars-orange transition-colors font-medium"
                          >
                            {location.phone}
                          </a>
                        </div>
                      )}

                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 fill-current" />
                        <span className="text-stone-700">
                          <span className="font-semibold">{location.rating}</span>/5 rating
                        </span>
                      </div>

                      {location.distance && (
                        <div className="flex items-center">
                          <Navigation className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                          <span className="text-stone-700">
                            <span className="font-semibold">{location.distance} km</span> away
                          </span>
                        </div>
                      )}

                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-stone-700">Open daily • Hours vary by location</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-little-caesars-orange text-white text-center py-3 px-4 rounded-xl font-semibold hover:bg-little-caesars-orange/90 transition-all duration-200 shadow-lg hover:shadow-xl group-hover:scale-[1.02] flex items-center justify-center"
                      >
                        <Navigation className="h-4 w-4 mr-2" />
                        Get Directions
                      </a>

                      {location.phone ? (
                        <a
                          href={`tel:${location.phone}`}
                          style={{ backgroundColor: '#16a34a', color: '#ffffff' }}
                          className="flex-1 text-center py-3 px-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl group-hover:scale-[1.02] flex items-center justify-center"
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Call Now
                        </a>
                      ) : (
                        <a
                          href="https://www.littlecaesars.com/store-locator"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ backgroundColor: '#1f2937', color: '#ffffff' }}
                          className="flex-1 text-center py-3 px-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl group-hover:scale-[1.02] flex items-center justify-center"
                        >
                          <MapPin className="h-4 w-4 mr-2" />
                          View Details
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info Section */}
            <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-stone-100">
              <div className="text-center">
                <h4 className="text-2xl font-slab font-bold text-stone-800 mb-4">
                  Need Help Finding Little Caesars Near Me?
                </h4>
                <p className="text-stone-600 mb-6 max-w-2xl mx-auto">
                  Can't find a Little Caesars restaurant near you? Visit the official Little Caesars website for the complete directory of all locations, hours, phone numbers, and special services nationwide.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://www.littlecaesars.com/store-locator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-little-caesars-orange text-white font-semibold rounded-xl hover:bg-little-caesars-orange/90 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <MapPin className="h-5 w-5 mr-2" />
                    Official Store Directory
                  </a>
                  <a
                    href="/menu"
                    className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-900 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Star className="h-5 w-5 mr-2" />
                    View Menu & Prices
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default OptimizedStoreLocator
