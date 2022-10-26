import { Dispatch, memo, SetStateAction } from 'react'

import { FaMapMarkerAlt } from 'react-icons/fa'

import PagesCard from 'components/PagesCard'

import { Point } from 'types/PointType'

import { Button, IconContainer, Menu } from './styles'

interface IMarkerProps {
  point: Point
  lat: number
  lng: number
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Marker: React.FC<IMarkerProps> = ({ point, show, setShow }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  return (
    <IconContainer>
      <Button type="button" onClick={() => setShow(!show)}>
        <FaMapMarkerAlt color="#dd4b3e" size={28} />
      </Button>
      <Menu show={show}>
        <PagesCard apiContent={point} title="malany" />
      </Menu>
    </IconContainer>
  )
}

export default memo(Marker)
