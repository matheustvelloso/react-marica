import { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import { useHotéisEPousadas } from 'context/HotéisEPousadasContext'

import Categories from 'components/Categories'
import Footer from 'components/Footer'
import Header from 'components/Header'
import PagesCard from 'components/PagesCard'
import SearchAndHomeBtn from 'components/SearchAndHomeBtn'

const HotéisEPousadas: React.FC = () => {
  const { motelAndInn, category } = useHotéisEPousadas()

  return (
    <>
      <Header />
      <SearchAndHomeBtn title="Hotéis e Pousadas" />
      <main>
        <Container>
          <Categories categories={category} />
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
            {motelAndInn?.map((_motelAndInn) => (
              <Col key={_motelAndInn.id} className="d-flex mb-3 mb-md-5">
                <PagesCard point={_motelAndInn} />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default memo(HotéisEPousadas)
