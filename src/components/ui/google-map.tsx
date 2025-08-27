"use client"

import React from 'react'
import GoogleMapReact from 'google-map-react'

const Marker = ({ lat, lng }: { lat: number, lng: number }) => (
  <img
    src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png"
    alt="marker"
    style={{
      transform: 'translate(-50%, -100%)',
    }}
  />
)

type GoogleMapProps = {
    center?: {
        lat: number;
        lng: number;
    }
    zoom?: number;
}

function GoogleMap({ center, zoom }: GoogleMapProps) {
    const defaultProps = {
        center: {
            lat: 51.14139469752247,
            lng: 15.059392828835831
        },
        zoom: 11
    }

  return (
    <div className='w-full aspect-video'>
        <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || '' }}
        defaultCenter={center || defaultProps.center}
        defaultZoom={zoom || defaultProps.zoom}
      >
        <Marker
            lat={center?.lat || defaultProps.center.lat}
            lng={center?.lng || defaultProps.center.lng}
        />
      </GoogleMapReact>
    </div>
  )
}

export default GoogleMap