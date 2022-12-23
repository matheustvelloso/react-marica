import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { IoMdArrowBack } from 'react-icons/io'

import Header from 'components/Header'
import Map from 'components/Map'

import useHoteisEPousadas from 'hooks/useHoteisEPousadas'
import useTitle from 'hooks/useTitle'

import { LinkContainer, PageTitle } from './styles'

const MapaPontosTurísticos: React.FC = () => {
  const { fetchCategory, motelAndInn } = useHoteisEPousadas()

  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('Mapa | Pontos Turísticos'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])
  return (
    <>
      <Header />
      <main>
        <LinkContainer to="/hoteis-e-pousadas">
          <IoMdArrowBack className="me-2" />
          <PageTitle>Hotéis e Pousadas</PageTitle>
        </LinkContainer>
        <Map
          endPoint={motelAndInn}
          fetchCategory={fetchCategory}
          title="hoteis-e-pousadas"
        />
      </main>
    </>
  )
}

export default memo(MapaPontosTurísticos)
