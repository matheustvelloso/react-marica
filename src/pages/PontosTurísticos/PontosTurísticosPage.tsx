import { FormEvent, memo, useCallback, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { FiSearch } from 'react-icons/fi'

import { usePontosTurísticos } from 'context/PontosTurísticosContext'

import Categories from 'components/Categories'
import Footer from 'components/Footer'
import Header from 'components/Header'
import PagesCard from 'components/PagesCard'
import SearchAndHomeBtn from 'components/SearchAndHomeBtn'

const PontosTurísticos: React.FC = () => {
  const { points, category, fetchPoints } = usePontosTurísticos()
  const [value, setValue] = useState('')

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      fetchPoints('/busca', value)
    },
    [fetchPoints, value],
  )
  const handleButton = useCallback(
    (id: number) => {
      fetchPoints(`/categorias/${String(id)}`)
    },
    [fetchPoints],
  )

  return (
    <>
      <Header />
      <SearchAndHomeBtn title="Pontos turísticos">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Buscar pontos turísticos"
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
            {points?.map((point) => (
              <Col key={point.id} className="d-flex mb-3 mb-md-5">
                <PagesCard apiContent={point} handleBtn={handleButton} />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default memo(PontosTurísticos)
