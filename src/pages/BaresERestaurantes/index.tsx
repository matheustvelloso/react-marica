import { FormEvent, memo, useCallback, useEffect, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { FiSearch } from 'react-icons/fi'

import Categories from 'components/Categories'
import Footer from 'components/Footer'
import Header from 'components/Header'
import PagesCard from 'components/PagesCard'
import SearchAndHomeBtn from 'components/SearchAndHomeBtn'

import useBaresERestaurantes from 'hooks/useBaresERestaurantes'
import useTitle from 'hooks/useTitle'

const BaresERestaurantes: React.FC = () => {
  const {
    barsAndRestaurants,
    category,
    searchBarsAndRestaurants,
    fetchCategory,
  } = useBaresERestaurantes()
  const [value, setValue] = useState('')
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      searchBarsAndRestaurants(value)
    },
    [searchBarsAndRestaurants, value],
  )
  useEffect(() => {
    setTitle(t('Bares e Restaurantes'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])
  return (
    <>
      <Header />
      <SearchAndHomeBtn
        title="Bares e Restaurantes"
        path="bares-e-restaurantes"
      >
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
          <Categories categories={category} fetchCategory={fetchCategory} />
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
            {barsAndRestaurants?.map((barAndRestaurant) => (
              <Col key={barAndRestaurant.id} className="d-flex mb-3 mb-md-5">
                <PagesCard
                  apiContent={barAndRestaurant}
                  fetchCategory={fetchCategory}
                  title="bar-e-restaurante"
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
