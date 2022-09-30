import { memo, useRef, useState } from 'react'

import { Overlay, Popover } from 'react-bootstrap'
import { ImLocation } from 'react-icons/im'

import PagesCard from 'components/PagesCard'

import useOnClickOutside from 'hooks/useOnClickOutside'

import { Point } from 'types/PointType'

import { Button, IconContainer } from './styles'

interface IMarkerProps {
  point: Point
  lat: number
  lng: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Marker: React.FC<IMarkerProps> = ({ point }) => {
  const ref = useRef<HTMLButtonElement>(null)
  const [show, setShow] = useState(false)
  const [target, setTarget] = useState(null)

  useOnClickOutside(ref, () => setShow(false))

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (event: any): void => {
    setShow(!show)
    setTarget(event.target)
  }
  return (
    <IconContainer>
      <Button type="button" ref={ref} onClick={handleClick}>
        <ImLocation color="red" size={30} />
      </Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained" style={{ width: '300px' }}>
          <PagesCard apiContent={point} title="malany" />
        </Popover>
      </Overlay>
    </IconContainer>
  )
}

export default memo(Marker)
