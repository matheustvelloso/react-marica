import { memo } from 'react'

import { IoMdArrowBack } from 'react-icons/io'
import { useParams } from 'react-router-dom'

import Header from 'components/Header'
import Map from 'components/Map'

import { ButtonContainer, LinkBackToHome, PageTitle } from './styles'

const Mapa: React.FC = () => {
  const { name, title } = useParams()
  return (
    <>
      <Header />
      <main>
        <ButtonContainer>
          <LinkBackToHome to={`/${name}`}>
            <IoMdArrowBack className="me-2" />
          </LinkBackToHome>
          <PageTitle>{title}</PageTitle>
        </ButtonContainer>
        <Map />
      </main>
    </>
  )
}

export default memo(Mapa)
