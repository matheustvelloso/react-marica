import { FormEvent, memo, useCallback, useEffect, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { FiSearch } from 'react-icons/fi'

import Categories from 'components/Categories'
import Footer from 'components/Footer'
import Header from 'components/Header'
import PagesCard from 'components/PagesCard'
import SearchAndHomeBtn from 'components/SearchAndHomeBtn'

import useHoteisEPousadas from 'hooks/useHoteisEPousadas'
import useTitle from 'hooks/useTitle'

const HotéisEPousadas: React.FC = () => {
  const { motelAndInn, category, searchMotelAndInn, fetchCategory } =
    useHoteisEPousadas()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const [value, setValue] = useState('')

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      searchMotelAndInn(value)
    },
    [searchMotelAndInn, value],
  )

  useEffect(() => {
    setTitle(t('Hotéis e Pousadas'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <>
      <Header />
      <SearchAndHomeBtn title="Hotéis e Pousadas" path="hoteis-e-pousadas">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Buscar Hotéis e Pousadas"
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
            {motelAndInn?.map((_motelAndInn) => (
              <Col key={_motelAndInn.id} className="d-flex mb-3 mb-md-5">
                <PagesCard
                  apiContent={_motelAndInn}
                  fetchCategory={fetchCategory}
                  title="hotel-e-pousada"
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

export default memo(HotéisEPousadas)
