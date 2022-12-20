import { memo, useEffect, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import Categories from 'components/Categories'
import Footer from 'components/Footer'
import Header from 'components/Header'
import PagesCard from 'components/PagesCard'
import PagesCardLoader from 'components/PagesCardLoader'
import SearchMapNavigationBtn from 'components/SearchMapNavigationBtn'
import SearchNotFound from 'components/SearchNotFound'
import Wrapper from 'components/Wrapper'

import useBaresERestaurantes from 'hooks/useBaresERestaurantes'
import useTitle from 'hooks/useTitle'

const BaresERestaurantes: React.FC = () => {
  const {
    barsAndRestaurants,
    category,
    searchBarsAndRestaurants,
    fetchCategory,
    fetchBarsAndRestaurants,
    loading,
  } = useBaresERestaurantes()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const [value, setValue] = useState('')
  const [categoryValue, setCategoryValue] = useState('')
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTitle(t('Bares e Restaurantes'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <Wrapper>
      <Header />
      <SearchMapNavigationBtn
        title="Bares e Restaurantes"
        path="bares-e-restaurantes"
        search={searchBarsAndRestaurants}
        fetch={fetchBarsAndRestaurants}
        value={value}
        setValue={setValue}
        categoryValue={categoryValue}
        setCategoryValue={setCategoryValue}
        setShow={setShow}
        show={show}
      />

      <main className="flex-1">
        {loading && <PagesCardLoader />}
        {!loading && (
          <div>
            {barsAndRestaurants?.length !== 0 ? (
              <Container>
                <Categories
                  categories={category}
                  fetchCategory={fetchCategory}
                  setCategoryValue={setCategoryValue}
                />
                <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                  {barsAndRestaurants?.map((barAndRestaurant) => (
                    <Col
                      key={barAndRestaurant.id}
                      className="d-flex mb-3 mb-md-5"
                    >
                      <PagesCard
                        apiContent={barAndRestaurant}
                        fetchCategory={fetchCategory}
                        title="bares-e-restaurantes"
                        setCategoryValue={setCategoryValue}
                      />
                    </Col>
                  ))}
                </Row>
              </Container>
            ) : (
              <SearchNotFound
                fetch={fetchBarsAndRestaurants}
                setValue={setValue}
                setShow={setShow}
              />
            )}
          </div>
        )}
      </main>
      <Footer />
    </Wrapper>
  )
}

export default memo(BaresERestaurantes)
