import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { IoMdArrowBack } from 'react-icons/io'

import Header from 'components/Header'
import Map from 'components/Map'

import useHoteisEPousadas from 'hooks/useHoteisEPousadas'
import useTitle from 'hooks/useTitle'

import { ButtonContainer, LinkBackToHome, PageTitle } from './styles'

const MapaHotéisEPousadas: React.FC = () => {
  const { motelAndInn, fetchCategory } = useHoteisEPousadas()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('Mapa | Hotéis e Pousadas'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])
  return (
    <>
      <Header />
      <main>
        <ButtonContainer>
          <LinkBackToHome to="/hoteis-e-pousadas">
            <IoMdArrowBack className="me-2" />
          </LinkBackToHome>
          <PageTitle>Hotéis e Pousadas</PageTitle>
        </ButtonContainer>
        <Map
          endPoint={motelAndInn}
          title="/hoteis-e-pousadas"
          fetchCategory={fetchCategory}
        />
      </main>
    </>
  )
}

export default memo(MapaHotéisEPousadas)
