import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { IoMdArrowBack } from 'react-icons/io'

import Header from 'components/Header'
import Map from 'components/Map'

import usePontosTuristicos from 'hooks/usePontosTuristicos'
import useTitle from 'hooks/useTitle'

import { LinkContainer, PageTitle } from './styles'

const MapaPontosTurísticos: React.FC = () => {
  const { points, fetchCategory } = usePontosTuristicos()

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
        <LinkContainer to="/pontos-turisticos">
          <IoMdArrowBack className="me-2" />
          <PageTitle>Pontos Turísticos</PageTitle>
        </LinkContainer>
        <Map
          endPoint={points}
          fetchCategory={fetchCategory}
          title="pontos-turisticos"
        />
      </main>
    </>
  )
}

export default memo(MapaPontosTurísticos)
