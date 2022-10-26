import { FormEvent, memo, useCallback, useEffect, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { FiSearch } from 'react-icons/fi'

import Categories from 'components/Categories'
import Footer from 'components/Footer'
import Header from 'components/Header'
import PagesCard from 'components/PagesCard'
import SearchAndHomeBtn from 'components/SearchAndHomeBtn'

import useComercioLocal from 'hooks/useComercioLocal'
import useTitle from 'hooks/useTitle'

const ComércioLocal: React.FC = () => {
  const { markets, category, searchMarkets, fetchCategory } = useComercioLocal()
  const [value, setValue] = useState('')
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      searchMarkets(value)
    },
    [searchMarkets, value],
  )
  useEffect(() => {
    setTitle(t('Comércio Local'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <>
      <Header />
      <SearchAndHomeBtn title="Comércio local" path="comercio-local">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Buscar Comércio local"
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
      </main>
      <Footer />
    </>
  )
}

export default memo(ComércioLocal)
