/* eslint-disable react/jsx-props-no-spreading */
import { memo, useState } from 'react'

import GoogleMapReact from 'google-map-react'

import Config from 'Config'

import { Page } from 'types/PageType'

import Marker from './Marker'

interface IMapProps {
  endPoint: Page[] | undefined
  fetchCategory: (id: number) => Promise<void>
  title: string
}

const Map: React.FC<IMapProps> = ({ endPoint, fetchCategory, title }) => {
  const [overlay, setOverlay] = useState(true)
  return (
    <div>
      {endPoint?.length && (
        <div className="w-100" style={{ height: 'calc(100vh - 95px)' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: `${Config.api.key}` }}
            defaultCenter={{
              lat: -22.9037088,
              lng: -42.8180507,
            }}
            defaultZoom={13}
            onClick={() => setOverlay(false)}
          >
            {endPoint?.map((_endPoint) => (
              <Marker
                key={_endPoint.id}
                point={_endPoint}
                lat={_endPoint.lat}
                lng={_endPoint.lng}
                overlay={overlay}
                setOverlay={setOverlay}
                fetchCategory={fetchCategory}
                title={title}
              />
            ))}
          </GoogleMapReact>
        </div>
      )}
    </div>
  )
}

export default memo(Map)
