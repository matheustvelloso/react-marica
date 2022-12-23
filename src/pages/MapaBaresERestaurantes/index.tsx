import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { IoMdArrowBack } from 'react-icons/io'

import Header from 'components/Header'
import Map from 'components/Map'

import useBaresERestaurantes from 'hooks/useBaresERestaurantes'
import useTitle from 'hooks/useTitle'

import { LinkContainer, PageTitle } from './styles'

const MapaBaresERestaurantes: React.FC = () => {
  const { barsAndRestaurants, fetchCategory } = useBaresERestaurantes()
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
        <LinkContainer to="/bares-e-restaurantes">
          <IoMdArrowBack className="me-2" />
          <PageTitle>Bares e Restaurantes</PageTitle>
        </LinkContainer>
        <Map
          endPoint={barsAndRestaurants}
          title="bares-e-restaurantes"
          fetchCategory={fetchCategory}
        />
      </main>
    </>
  )
}

export default memo(MapaBaresERestaurantes)
