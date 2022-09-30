/* eslint-disable react/jsx-props-no-spreading */
import { memo } from 'react'

import GoogleMapReact from 'google-map-react'

import Config from 'Config'

import usePontosTuristicos from 'hooks/usePontosTuristicos'

import Marker from './Marker'

const Map: React.FC = () => {
  const { points } = usePontosTuristicos()
  return (
    <div>
      {points?.length && (
        <div className="w-100" style={{ height: 'calc(100vh - 95px)' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: `${Config.api.key}` }}
            defaultCenter={{
              lat:
                points.reduce((prev, { lat }) => prev + lat, 0) / points.length,
              lng:
                points.reduce((prev, { lng }) => prev + lng, 0) / points.length,
            }}
            defaultZoom={15}
          >
            {points?.map((point) => (
              <Marker
                key={point.id}
                point={point}
                lat={point.lat}
                lng={point.lng}
              />
            ))}
          </GoogleMapReact>
        </div>
      )}
    </div>
  )
}

export default memo(Map)
