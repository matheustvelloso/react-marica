import { memo } from 'react'

import { Point } from 'types/PointType'

import {
  ButtonCategorie,
  CardContainer,
  ImageBackground,
  ImageLink,
  LinkTitle,
  PointTitle,
} from './styles'

interface IPagesCardProps {
  point: Point
}

const PagesCard: React.FC<IPagesCardProps> = ({ point }) => {
  return (
    <CardContainer>
      <ImageLink to="/">
        <ImageBackground background={point.capa} />
      </ImageLink>
      <div className="p-3">
        <div>
          <PointTitle>
            <LinkTitle to="/">{point.nome}</LinkTitle>
          </PointTitle>
          <div className="d-flex gap-2 flex-wrap">
            {point.categorias.map((categorie) => (
              <ButtonCategorie to="/">{categorie.label}</ButtonCategorie>
            ))}
          </div>
        </div>
        {point?.enderecos.map((address) => (
          <p className="mt-3 mb-5 text-muted fs-sm">{address.label}</p>
        ))}
      </div>
    </CardContainer>
  )
}

export default memo(PagesCard)
