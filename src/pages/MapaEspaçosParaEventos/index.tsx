import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { IoMdArrowBack } from 'react-icons/io'

import Header from 'components/Header'
import Map from 'components/Map'

import useEspaçoParaEventos from 'hooks/useEspaçoParaEventos'
import useTitle from 'hooks/useTitle'

import { ButtonContainer, LinkBackToHome, PageTitle } from './styles'

const MapaEspaçosParaEventos: React.FC = () => {
  const { eventsPlaces } = useEspaçoParaEventos()

  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('Mapa | Espaços para Eventos'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])
  return (
    <>
      <Header />
      <main>
        <ButtonContainer>
          <LinkBackToHome to="/espacos-para-eventos">
            <IoMdArrowBack className="me-2" />
          </LinkBackToHome>
          <PageTitle>Espaços para Eventos</PageTitle>
        </ButtonContainer>
        <Map endPoint={eventsPlaces} />
      </main>
    </>
  )
}

export default memo(MapaEspaçosParaEventos)
