import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { IoMdArrowBack } from 'react-icons/io'

import Header from 'components/Header'
import Map from 'components/Map'

import useBaresERestaurantes from 'hooks/useBaresERestaurantes'
import useTitle from 'hooks/useTitle'

import { ButtonContainer, LinkBackToHome, PageTitle } from './styles'

const MapaBaresERestaurantes: React.FC = () => {
  const { barsAndRestaurants } = useBaresERestaurantes()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('Mapa | Bares e Restaurantes'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])
  return (
    <>
      <Header />
      <main>
        <ButtonContainer>
          <LinkBackToHome to="/bares-e-restaurantes">
            <IoMdArrowBack className="me-2" />
          </LinkBackToHome>
          <PageTitle>Bares e Restaurantes</PageTitle>
        </ButtonContainer>
        <Map endPoint={barsAndRestaurants} />
      </main>
    </>
  )
}

export default memo(MapaBaresERestaurantes)
