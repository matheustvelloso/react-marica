import { memo } from 'react'

import { Page } from 'types/PageType'

import {
  ButtonCategory,
  CardContainer,
  ImageBackground,
  ImageLink,
  LinkTitle,
  PointTitle,
} from './styles'

interface IPagesCardProps {
  apiContent: Page
  handleBtn: (id: number) => void
}

const PagesCard: React.FC<IPagesCardProps> = ({ apiContent, handleBtn }) => {
  return (
    <CardContainer>
      <ImageLink to="/">
        <ImageBackground background={apiContent.capa} />
      </ImageLink>
      <div className="p-3">
        <div>
          <PointTitle>
            <LinkTitle to="/">{apiContent.nome}</LinkTitle>
          </PointTitle>
          <div className="d-flex gap-2 flex-wrap">
            {apiContent.categorias.map((category) => (
              <ButtonCategory
                type="button"
                onClick={() => handleBtn(category.id)}
              >
                {category.label}
              </ButtonCategory>
            ))}
          </div>
        </div>
        {apiContent?.enderecos.map((address) => (
          <p className="mt-3 mb-5 text-muted fs-sm">{address.label}</p>
        ))}
      </div>
    </CardContainer>
  )
}

export default memo(PagesCard)
