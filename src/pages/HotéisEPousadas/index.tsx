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

import useHoteisEPousadas from 'hooks/useHoteisEPousadas'
import useTitle from 'hooks/useTitle'

const HotéisEPousadas: React.FC = () => {
  const {
    motelAndInn,
    category,
    searchMotelAndInn,
    fetchCategory,
    fetchMotelAndInn,
    loading,
  } = useHoteisEPousadas()

  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const [value, setValue] = useState('')
  const [categoryValue, setCategoryValue] = useState('')
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTitle(t('Hotéis e Pousadas'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <Wrapper>
      <Header />
      <SearchMapNavigationBtn
        title="Hotéis e Pousadas"
        path="hoteis-e-pousadas"
        search={searchMotelAndInn}
        fetch={fetchMotelAndInn}
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
            {motelAndInn?.length !== 0 ? (
              <Container>
                <Categories
                  categories={category}
                  fetchCategory={fetchCategory}
                  setCategoryValue={setCategoryValue}
                />
                <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                  {motelAndInn?.map((_motelAndInn) => (
                    <Col key={_motelAndInn.id} className="d-flex mb-3 mb-md-5">
                      <PagesCard
                        apiContent={_motelAndInn}
                        fetchCategory={fetchCategory}
                        title="hoteis-e-pousadas"
                        setCategoryValue={setCategoryValue}
                      />
                    </Col>
                  ))}
                </Row>
              </Container>
            ) : (
              <SearchNotFound
                fetch={fetchMotelAndInn}
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

export default memo(HotéisEPousadas)
