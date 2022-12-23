import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { IoMdArrowBack } from 'react-icons/io'

import Header from 'components/Header'
import Map from 'components/Map'

import useEspaçoParaEventos from 'hooks/useEspaçoParaEventos'
import useTitle from 'hooks/useTitle'

import { LinkContainer, PageTitle } from './styles'

const MapaEspaçosParaEventos: React.FC = () => {
  const { eventsPlaces, fetchCategory } = useEspaçoParaEventos()

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
        <LinkContainer to="/espacos-para-eventos">
          <IoMdArrowBack className="me-2" />
          <PageTitle>Espaços para Eventos</PageTitle>
        </LinkContainer>
        <Map
          endPoint={eventsPlaces}
          title="espacos-para-eventos"
          fetchCategory={fetchCategory}
        />
      </main>
    </>
  )
}

export default memo(MapaEspaçosParaEventos)
