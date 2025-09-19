import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    google: typeof google;
    googleMapsLoaded?: boolean;
    googleMapsLoading?: boolean;
    initGoogleMaps?: () => void;
  }
}

interface RouteMapProps {
  pickup?: { lat: number; lng: number };
  delivery?: { lat: number; lng: number };
  className?: string;
}

const RouteMap: React.FC<RouteMapProps> = ({ pickup, delivery, className = "" }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<google.maps.Map | null>(null);
  const directionsService = useRef<google.maps.DirectionsService | null>(null);
  const directionsRenderer = useRef<google.maps.DirectionsRenderer | null>(null);
  const pickupMarker = useRef<google.maps.Marker | null>(null);
  const deliveryMarker = useRef<google.maps.Marker | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load Google Maps script with singleton pattern to prevent multiple loads
  useEffect(() => {
    const loadGoogleMaps = () => {
      // Check if already loaded
      if (window.googleMapsLoaded) {
        setIsLoaded(true);
        return;
      }

      // Check if currently loading
      if (window.googleMapsLoading) {
        // Wait for it to finish loading
        const checkInterval = setInterval(() => {
          if (window.googleMapsLoaded) {
            clearInterval(checkInterval);
            setIsLoaded(true);
          }
        }, 100);
        return;
      }

      // Check if Google Maps already exists
      if (window.google && window.google.maps && window.google.maps.Map) {
        window.googleMapsLoaded = true;
        setIsLoaded(true);
        return;
      }

      // Mark as loading
      window.googleMapsLoading = true;

      // Define the callback before creating the script
      window.initGoogleMaps = () => {
        window.googleMapsLoaded = true;
        window.googleMapsLoading = false;
        setIsLoaded(true);
      };

      // Check if script already exists
      const existingScript = document.getElementById('google-maps-script');
      if (existingScript) {
        // Script exists, wait for it to load
        return;
      }

      // Create and load the script
      const script = document.createElement('script');
      script.id = 'google-maps-script';
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCq2vGMKUWJ6oyTAhmYHlP3BPThXhUsDS0&libraries=places,geometry&callback=initGoogleMaps`;
      script.async = true;
      script.defer = true;

      script.onerror = () => {
        console.error('Failed to load Google Maps script');
        window.googleMapsLoading = false;
      };

      document.head.appendChild(script);
    };

    loadGoogleMaps();
  }, []);

  // Initialize map
  useEffect(() => {
    if (!isLoaded || !mapContainer.current || map.current) return;

    try {
      map.current = new google.maps.Map(mapContainer.current, {
        center: { lat: 52.5, lng: -1.5 }, // UK center
        zoom: 8,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        gestureHandling: 'greedy',
      });

      directionsService.current = new google.maps.DirectionsService();
      directionsRenderer.current = new google.maps.DirectionsRenderer({
        suppressMarkers: true,
        draggable: false,
        polylineOptions: {
          strokeColor: '#ff6b35',
          strokeWeight: 4,
          strokeOpacity: 0.8,
        }
      });
      
      if (directionsRenderer.current) {
        directionsRenderer.current.setMap(map.current);
      }
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }, [isLoaded]);

  // Calculate and display route
  useEffect(() => {
    if (!isLoaded || !map.current || !directionsService.current || !directionsRenderer.current || !pickup || !delivery) {
      return;
    }

    // Validate that map is properly initialized
    if (!map.current.getCenter) {
      console.error('Map is not properly initialized');
      return;
    }

    const request: google.maps.DirectionsRequest = {
      origin: { lat: pickup.lat, lng: pickup.lng },
      destination: { lat: delivery.lat, lng: delivery.lng },
      travelMode: google.maps.TravelMode.DRIVING,
    };

    directionsService.current.route(request, (result, status) => {
      if (status === 'OK' && result && map.current) {
        // Clear existing markers
        if (pickupMarker.current) {
          try {
            pickupMarker.current.setMap(null);
          } catch (e) {
            console.error('Error clearing pickup marker:', e);
          }
          pickupMarker.current = null;
        }
        if (deliveryMarker.current) {
          try {
            deliveryMarker.current.setMap(null);
          } catch (e) {
            console.error('Error clearing delivery marker:', e);
          }
          deliveryMarker.current = null;
        }

        // Set the directions route
        if (directionsRenderer.current) {
          try {
            directionsRenderer.current.setDirections(result);
          } catch (e) {
            console.error('Error setting directions:', e);
          }
        }

        // Create pickup marker (green with "A")
        try {
          pickupMarker.current = new google.maps.Marker({
            position: { lat: pickup.lat, lng: pickup.lng },
            map: map.current,
            title: 'Pickup Location',
            label: {
              text: 'A',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '16px'
            },
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              fillColor: '#22c55e',
              fillOpacity: 1,
              strokeColor: '#ffffff',
              strokeWeight: 3,
              scale: 15
            },
            zIndex: 1000
          });
        } catch (e) {
          console.error('Error creating pickup marker:', e);
        }

        // Create delivery marker (red with "B")
        try {
          deliveryMarker.current = new google.maps.Marker({
            position: { lat: delivery.lat, lng: delivery.lng },
            map: map.current,
            title: 'Delivery Location',
            label: {
              text: 'B',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '16px'
            },
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              fillColor: '#ef4444',
              fillOpacity: 1,
              strokeColor: '#ffffff',
              strokeWeight: 3,
              scale: 15
            },
            zIndex: 1000
          });
        } catch (e) {
          console.error('Error creating delivery marker:', e);
        }
      } else {
        console.error('Directions request failed:', status);
        if (status === 'REQUEST_DENIED') {
          console.error('Please ensure Directions API is enabled in Google Cloud Console');
        }
      }
    });
  }, [pickup, delivery, isLoaded]);

  return (
    <div className={`relative ${className}`}>
      <div ref={mapContainer} className="w-full h-full rounded-lg min-h-[400px]" />
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted/50 rounded-lg flex items-center justify-center">
          <p className="text-sm text-muted-foreground">Loading map...</p>
        </div>
      )}
      {(!pickup || !delivery) && isLoaded && (
        <div className="absolute inset-0 bg-muted/50 rounded-lg flex items-center justify-center">
          <p className="text-sm text-muted-foreground">Enter pickup and delivery addresses to see route</p>
        </div>
      )}
    </div>
  );
};

export default RouteMap;