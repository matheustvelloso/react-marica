import { memo } from 'react'

import { ImLocation } from 'react-icons/im'

import { IconContainer } from './styles'

interface IMapMarkerProps {
  lat: number
  lng: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MapMarker: React.FC<IMapMarkerProps> = () => {
  return (
    <IconContainer>
      <ImLocation color="red" size={30} />
    </IconContainer>
  )
}

export default memo(MapMarker)
