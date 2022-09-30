import { FormEvent, memo, useCallback, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { FiSearch } from 'react-icons/fi'

import Categories from 'components/Categories'
import Footer from 'components/Footer'
import Header from 'components/Header'
import PagesCard from 'components/PagesCard'
import SearchAndHomeBtn from 'components/SearchAndHomeBtn'

import useComercioLocal from 'hooks/useComercioLocal'

const ComércioLocal: React.FC = () => {
  const { markets, category, searchMarkets, fetchCategory } = useComercioLocal()
  const [value, setValue] = useState('')

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      searchMarkets(value)
    },
    [searchMarkets, value],
  )

  return (
    <>
      <Header />
      <SearchAndHomeBtn title="Comércio local">
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
