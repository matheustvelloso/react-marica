import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { IoMdArrowBack } from 'react-icons/io'

import Header from 'components/Header'
import Map from 'components/Map'

import useEventos from 'hooks/useEventos'
import useTitle from 'hooks/useTitle'

import { LinkContainer, PageTitle } from './styles'

const MapaEventos: React.FC = () => {
  const { events, fetchCategory } = useEventos()

  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('Mapa | Eventos'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])
  return (
    <>
      <Header />
      <main>
        <LinkContainer to="/eventos">
          <IoMdArrowBack className="me-2" />
          <PageTitle>Eventos</PageTitle>
        </LinkContainer>
        <Map endPoint={events} title="eventos" fetchCategory={fetchCategory} />
      </main>
    </>
  )
}

export default memo(MapaEventos)
