import { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import { useBaresERestaurantes } from 'context/BaresERestaurantes'

import Categories from 'components/Categories'
import Footer from 'components/Footer'
import Header from 'components/Header'
import PagesCard from 'components/PagesCard'
import SearchAndHomeBtn from 'components/SearchAndHomeBtn'

const BaresERestaurantes: React.FC = () => {
  const { barAndRestaurant, category } = useBaresERestaurantes()

  return (
    <>
      <Header />
      <SearchAndHomeBtn title="Bares e Restaurantes" />
      <main>
        <Container>
          <Categories categories={category} />
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
            {barAndRestaurant?.map((_barAndRestaurant) => (
              <Col key={_barAndRestaurant.id} className="d-flex mb-3 mb-md-5">
                <PagesCard point={_barAndRestaurant} />
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
