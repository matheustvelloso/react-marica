import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { IoMdArrowBack } from 'react-icons/io'

import Header from 'components/Header'
import Map from 'components/Map'

import useComercioLocal from 'hooks/useComercioLocal'
import useTitle from 'hooks/useTitle'

import { LinkContainer, PageTitle } from './styles'

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
        <LinkContainer to="/comercio-local">
          <IoMdArrowBack className="me-2" />
          <PageTitle>Comércio Local</PageTitle>
        </LinkContainer>
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
