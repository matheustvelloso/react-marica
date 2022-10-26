/* eslint-disable react/jsx-props-no-spreading */
import { memo, useState } from 'react'

import GoogleMapReact from 'google-map-react'

import Config from 'Config'

import { Page } from 'types/PageType'

import Marker from './Marker'
import { MenuOverlay } from './Marker/styles'

interface IMapProps {
  endPoint: Page[] | undefined
}

const Map: React.FC<IMapProps> = ({ endPoint }) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <MenuOverlay
        show={show}
        onClick={() => setShow(false)}
        className="d-flex position-fixed h-100 w-100"
      />
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
            >
              {endPoint?.map((_endPoint) => (
                <Marker
                  key={_endPoint.id}
                  point={_endPoint}
                  lat={_endPoint.lat}
                  lng={_endPoint.lng}
                  show={show}
                  setShow={setShow}
                />
              ))}
            </GoogleMapReact>
          </div>
        )}
      </div>
    </>
  )
}

export default memo(Map)
