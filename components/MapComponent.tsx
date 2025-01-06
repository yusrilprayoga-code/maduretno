'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'

// Define the coordinates from the Google Maps URL
const LOCATION_COORDINATES: [number, number] = [-7.760098438095344, 109.654301736291]

const MapComponent = () => {
  // Custom icon for the marker
  const customIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  })

  return (
    <div className="w-full h-[450px] rounded-lg overflow-hidden border border-gray-200">
      <MapContainer 
        center={LOCATION_COORDINATES} 
        zoom={15} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={LOCATION_COORDINATES} icon={customIcon}>
          <Popup>
            Lokasi: {LOCATION_COORDINATES[0]}, {LOCATION_COORDINATES[1]}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default MapComponent

