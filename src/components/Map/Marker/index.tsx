import { memo, useRef, useState } from 'react'

import { FaMapMarkerAlt } from 'react-icons/fa'

import PagesCard from 'components/PagesCard'

import useOnClickOutside from 'hooks/useOnClickOutside'

import { Point } from 'types/PointType'

import { MapMarker, Menu, TriangleDiv } from './styles'

interface IMarkerProps {
  point: Point
  lat: number
  lng: number
  title: string
  fetchCategory: (id: number) => Promise<void>
}

const Marker: React.FC<IMarkerProps> = ({ point, fetchCategory, title }) => {
  const [show, setShow] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  useOnClickOutside(cardRef, () => setShow(false))

  return (
    <div style={{ position: 'relative' }} ref={cardRef}>
      <MapMarker type="button" onClick={() => setShow(!show)}>
        <FaMapMarkerAlt color="#dd4b3e" size={28} />
      </MapMarker>
      {show && (
        <Menu>
          <PagesCard
            fetchCategory={fetchCategory}
            title={title}
            apiContent={point}
          />
          <TriangleDiv />
        </Menu>
      )}
    </div>
  )
}

export default memo(Marker)
