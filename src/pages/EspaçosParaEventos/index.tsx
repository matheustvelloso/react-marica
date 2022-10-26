import { FormEvent, memo, useCallback, useEffect, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { FiSearch } from 'react-icons/fi'

import Categories from 'components/Categories'
import Footer from 'components/Footer'
import Header from 'components/Header'
import PagesCard from 'components/PagesCard'
import SearchAndHomeBtn from 'components/SearchAndHomeBtn'

import useEspaçoParaEventos from 'hooks/useEspaçoParaEventos'
import useTitle from 'hooks/useTitle'

const EspaçosParaEventos: React.FC = () => {
  const { eventsPlaces, category, searchEventsPlaces, fetchCategory } =
    useEspaçoParaEventos()
  const [value, setValue] = useState('')
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      searchEventsPlaces(value)
    },
    [searchEventsPlaces, value],
  )
  useEffect(() => {
    setTitle(t('Espaços para Eventos'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <>
      <Header />
      <SearchAndHomeBtn title="Espaço para eventos" path="espacos-para-eventos">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Buscar Espaço para eventos"
          />
          <button type="submit">
            <FiSearch />
          </button>
        </form>
      </SearchAndHomeBtn>
      <main>
        <Container>
          <Categories categories={category} fetchCategory={fetchCategory} />
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
            {eventsPlaces?.map((place) => (
              <Col key={place.id} className="d-flex mb-3 mb-md-5">
                <PagesCard
                  apiContent={place}
                  fetchCategory={fetchCategory}
                  title="espaco-para-eventos"
                />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default memo(EspaçosParaEventos)
