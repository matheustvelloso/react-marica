import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { IoMdArrowBack } from 'react-icons/io'

import Header from 'components/Header'
import Map from 'components/Map'

import useComercioLocal from 'hooks/useComercioLocal'
import useTitle from 'hooks/useTitle'

import { ButtonContainer, LinkBackToHome, PageTitle } from './styles'

const MapaComércioLocal: React.FC = () => {
  const { markets, fetchCategory } = useComercioLocal()

  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('Mapa | Comércio Local'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])
  return (
    <>
      <Header />
      <main>
        <ButtonContainer>
          <LinkBackToHome to="/comercio-local">
            <IoMdArrowBack className="me-2" />
          </LinkBackToHome>
          <PageTitle>Comércio Local</PageTitle>
        </ButtonContainer>
        <Map
          endPoint={markets}
          title="comercio-local"
          fetchCategory={fetchCategory}
        />
      </main>
    </>
  )
}

export default memo(MapaComércioLocal)
