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

import usePontosTuristicos from 'hooks/usePontosTuristicos'
import useTitle from 'hooks/useTitle'

const PontosTurísticos: React.FC = () => {
  const {
    points,
    category,
    searchPoints,
    fetchCategory,
    fetchPoints,
    loading,
  } = usePontosTuristicos()
  const [value, setValue] = useState('')
  const [categoryValue, setCategoryValue] = useState('')
  const [show, setShow] = useState(false)

  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('Pontos Turísticos'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <Wrapper>
      <Header />
      <SearchMapNavigationBtn
        title="Pontos turísticos"
        path="pontos-turisticos"
        search={searchPoints}
        fetch={fetchPoints}
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
            {points?.length !== 0 ? (
              <Container>
                <Categories
                  categories={category}
                  fetchCategory={fetchCategory}
                  setCategoryValue={setCategoryValue}
                />
                <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                  {points?.map((point) => (
                    <Col key={point.id} className="d-flex mb-3 mb-md-5">
                      <PagesCard
                        apiContent={point}
                        fetchCategory={fetchCategory}
                        title="pontos-turisticos"
                        setCategoryValue={setCategoryValue}
                      />
                    </Col>
                  ))}
                </Row>
              </Container>
            ) : (
              <SearchNotFound
                fetch={fetchPoints}
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

export default memo(PontosTurísticos)
