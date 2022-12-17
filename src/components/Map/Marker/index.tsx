import { Dispatch, memo, SetStateAction, useEffect, useState } from 'react'

import { FaMapMarkerAlt } from 'react-icons/fa'

import noPhoto from 'assets/noPhoto.jpeg'

import { Point } from 'types/PointType'

import {
  Button,
  ButtonCategory,
  CardContainer,
  IconContainer,
  ImageBackground,
  ImageLink,
  LinkTitle,
  Menu,
  PageTitle,
  TriangleDiv,
} from './styles'

interface IMarkerProps {
  point: Point
  lat: number
  lng: number
  title: string
  overlay: boolean
  setOverlay: Dispatch<SetStateAction<boolean>>
  fetchCategory: (id: number) => Promise<void>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Marker: React.FC<IMarkerProps> = ({
  point,
  fetchCategory,
  title,
  overlay,
  setOverlay,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (overlay === false && show === true) {
      setShow(false)
      setOverlay(true)
    }
  }, [overlay, setOverlay, show])
  return (
    <IconContainer>
      <Button type="button" onClick={() => setShow(!show)}>
        <FaMapMarkerAlt color="#dd4b3e" size={28} />
      </Button>
      <Menu show={show}>
        <CardContainer>
          <ImageLink to={`/${title}/${point.id}`}>
            <ImageBackground background={point.capa ? point.capa : noPhoto} />
          </ImageLink>
          <div className="p-3">
            <div className="d-flex gap-3">
              <div>
                <PageTitle>
                  <LinkTitle to={`/${title}/${point.id}`}>
                    {point.nome}
                  </LinkTitle>
                </PageTitle>
                <div className="d-flex gap-2 flex-wrap">
                  {fetchCategory &&
                    point.categorias.map((category) => (
                      <ButtonCategory
                        key={category.id}
                        type="button"
                        onClick={() => fetchCategory(category.id)}
                      >
                        {category.label}
                      </ButtonCategory>
                    ))}
                </div>
              </div>
            </div>
            {point?.enderecos.map((address) => (
              <p key={address.id} className="mt-3 mb-5 text-muted fs-sm">
                {address.label}
              </p>
            ))}
          </div>
        </CardContainer>
        <TriangleDiv />
      </Menu>
    </IconContainer>
  )
}

export default memo(Marker)
