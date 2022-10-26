import { FormEvent, memo, useCallback, useEffect, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { FiSearch } from 'react-icons/fi'

import Categories from 'components/Categories'
import Footer from 'components/Footer'
import Header from 'components/Header'
import PagesCard from 'components/PagesCard'
import SearchAndHomeBtn from 'components/SearchAndHomeBtn'

import useEventos from 'hooks/useEventos'
import useTitle from 'hooks/useTitle'

const Eventos: React.FC = () => {
  const { events, category, searchEvents, fetchCategory } = useEventos()
  const [value, setValue] = useState('')
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      searchEvents(value)
    },
    [searchEvents, value],
  )
  useEffect(() => {
    setTitle(t('Eventos'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <>
      <Header />
      <SearchAndHomeBtn title="Eventos" path="eventos">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Buscar Eventos"
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
            {events?.map((event) => (
              <Col key={event.id} className="d-flex mb-3 mb-md-5">
                <PagesCard
                  apiContent={event}
                  fetchCategory={fetchCategory}
                  title="evento"
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

export default memo(Eventos)
