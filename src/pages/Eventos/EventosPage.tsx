import { FormEvent, memo, useCallback, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { FiSearch } from 'react-icons/fi'

import { useEventos } from 'context/EventosContext'

import Categories from 'components/Categories'
import Footer from 'components/Footer'
import Header from 'components/Header'
import PagesCard from 'components/PagesCard'
import SearchAndHomeBtn from 'components/SearchAndHomeBtn'

const Eventos: React.FC = () => {
  const { events, category, fetchEvents } = useEventos()
  const [value, setValue] = useState('')

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      fetchEvents('/busca', value)
    },
    [fetchEvents, value],
  )

  const handleButton = useCallback(
    (id: number) => {
      fetchEvents(`/categorias/${String(id)}`)
    },
    [fetchEvents],
  )

  return (
    <>
      <Header />
      <SearchAndHomeBtn title="Eventos">
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
          <Categories categories={category} handleBtn={handleButton} />
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
            {events?.map((event) => (
              <Col key={event.id} className="d-flex mb-3 mb-md-5">
                <PagesCard apiContent={event} handleBtn={handleButton} />
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
