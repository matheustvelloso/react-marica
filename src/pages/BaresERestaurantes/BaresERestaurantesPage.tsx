import { FormEvent, memo, useCallback, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { FiSearch } from 'react-icons/fi'

import { useBaresERestaurantes } from 'context/BaresERestaurantes'

import Categories from 'components/Categories'
import Footer from 'components/Footer'
import Header from 'components/Header'
import PagesCard from 'components/PagesCard'
import SearchAndHomeBtn from 'components/SearchAndHomeBtn'

const BaresERestaurantes: React.FC = () => {
  const { barAndRestaurant, category, fetchBarAndRestaurant } =
    useBaresERestaurantes()
  const [value, setValue] = useState('')

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      fetchBarAndRestaurant('/busca', value)
    },
    [fetchBarAndRestaurant, value],
  )

  const handleButton = useCallback(
    (id: number) => {
      fetchBarAndRestaurant(`/categorias/${String(id)}`)
    },
    [fetchBarAndRestaurant],
  )

  return (
    <>
      <Header />
      <SearchAndHomeBtn title="Bares e Restaurantes">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Buscar Bares e Restaurantes"
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
            {barAndRestaurant?.map((_barAndRestaurant) => (
              <Col key={_barAndRestaurant.id} className="d-flex mb-3 mb-md-5">
                <PagesCard
                  apiContent={_barAndRestaurant}
                  handleBtn={handleButton}
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

export default memo(BaresERestaurantes)