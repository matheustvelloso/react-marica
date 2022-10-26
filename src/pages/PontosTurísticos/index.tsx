import { FormEvent, memo, useCallback, useEffect, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { FiSearch } from 'react-icons/fi'

import Categories from 'components/Categories'
import Footer from 'components/Footer'
import Header from 'components/Header'
import PagesCard from 'components/PagesCard'
import SearchAndHomeBtn from 'components/SearchAndHomeBtn'

import usePontosTuristicos from 'hooks/usePontosTuristicos'
import useTitle from 'hooks/useTitle'

const PontosTurísticos: React.FC = () => {
  const { points, category, searchPoints, fetchCategory } =
    usePontosTuristicos()

  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const [value, setValue] = useState('')

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      searchPoints(value)
    },
    [searchPoints, value],
  )

  useEffect(() => {
    setTitle(t('Pontos Turísticos'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <>
      <Header />
      <SearchAndHomeBtn title="Pontos turísticos" path="pontos-turisticos">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Buscar pontos turísticos"
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
            {points?.map((point) => (
              <Col key={point.id} className="d-flex mb-3 mb-md-5">
                <PagesCard
                  apiContent={point}
                  fetchCategory={fetchCategory}
                  title="ponto-turistico"
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

export default memo(PontosTurísticos)
