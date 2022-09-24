import { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import { usePontosTurísticos } from 'context/PontosTurísticosContext'

import Categories from 'components/Categories'
import Footer from 'components/Footer'
import Header from 'components/Header'
import PagesCard from 'components/PagesCard'
import SearchAndHomeBtn from 'components/SearchAndHomeBtn'

const PontosTurísticos: React.FC = () => {
  const { points, category } = usePontosTurísticos()

  return (
    <>
      <Header />
      <SearchAndHomeBtn title="Pontos turísticos" />
      <main>
        <Container>
          <Categories categories={category} />
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
            {points?.map((point) => (
              <Col key={point.id} className="d-flex mb-3 mb-md-5">
                <PagesCard point={point} />
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
