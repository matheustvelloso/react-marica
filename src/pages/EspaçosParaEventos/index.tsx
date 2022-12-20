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

import useEspaçoParaEventos from 'hooks/useEspaçoParaEventos'
import useTitle from 'hooks/useTitle'

const EspaçosParaEventos: React.FC = () => {
  const {
    eventsPlaces,
    category,
    searchEventsPlaces,
    fetchCategory,
    fetchEventsPlaces,
    loading,
  } = useEspaçoParaEventos()

  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const [value, setValue] = useState('')
  const [categoryValue, setCategoryValue] = useState('')
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTitle(t('Espaços para Eventos'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <Wrapper>
      <Header />
      <SearchMapNavigationBtn
        title="Espaços para Eventos"
        path="espacos-para-eventos"
        search={searchEventsPlaces}
        fetch={fetchEventsPlaces}
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
            {eventsPlaces?.length !== 0 ? (
              <Container>
                <Categories
                  categories={category}
                  fetchCategory={fetchCategory}
                  setCategoryValue={setCategoryValue}
                />
                <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                  {eventsPlaces?.map((place) => (
                    <Col key={place.id} className="d-flex mb-3 mb-md-5">
                      <PagesCard
                        apiContent={place}
                        fetchCategory={fetchCategory}
                        title="espacos-para-eventos"
                      />
                    </Col>
                  ))}
                </Row>
              </Container>
            ) : (
              <SearchNotFound
                fetch={fetchEventsPlaces}
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

export default memo(EspaçosParaEventos)
