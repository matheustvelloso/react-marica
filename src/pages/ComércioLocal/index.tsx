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

import useComercioLocal from 'hooks/useComercioLocal'
import useTitle from 'hooks/useTitle'

const ComércioLocal: React.FC = () => {
  const {
    markets,
    category,
    searchMarkets,
    fetchCategory,
    fetchMarkets,
    loading,
  } = useComercioLocal()

  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const [value, setValue] = useState('')
  const [categoryValue, setCategoryValue] = useState('')

  useEffect(() => {
    setTitle(t('Comércio Local'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <>
      <Header />
      <SearchMapNavigationBtn
        title="Comércio local"
        path="comercio-local"
        search={searchMarkets}
        fetch={fetchMarkets}
        value={value}
        setValue={setValue}
        categoryValue={categoryValue}
        setCategoryValue={setCategoryValue}
      />

      <Wrapper>
        <main>
          {loading && <PagesCardLoader />}
          {!loading && (
            <div>
              {markets?.length !== 0 ? (
                <Container>
                  <Categories
                    categories={category}
                    fetchCategory={fetchCategory}
                    setCategoryValue={setCategoryValue}
                  />
                  <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                    {markets?.map((market) => (
                      <Col key={market.id} className="d-flex mb-3 mb-md-5">
                        <PagesCard
                          apiContent={market}
                          fetchCategory={fetchCategory}
                          title="comercio"
                        />
                      </Col>
                    ))}
                  </Row>
                </Container>
              ) : (
                <SearchNotFound fetch={fetchMarkets} setValue={setValue} />
              )}
            </div>
          )}
        </main>
      </Wrapper>

      <Footer />
    </>
  )
}

export default memo(ComércioLocal)
