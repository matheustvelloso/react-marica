import { memo } from 'react'

import { FaMapMarkerAlt } from 'react-icons/fa'

import { IconContainer } from './styles'

interface IMapMarkerProps {
  lat: number
  lng: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MapMarker: React.FC<IMapMarkerProps> = () => {
  return (
    <IconContainer>
      <FaMapMarkerAlt color="#dd4b3e" size={28} />
    </IconContainer>
  )
}

export default memo(MapMarker)
