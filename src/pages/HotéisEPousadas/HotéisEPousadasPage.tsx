import { FormEvent, memo, useCallback, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { FiSearch } from 'react-icons/fi'

import { useHotéisEPousadas } from 'context/HotéisEPousadasContext'

import Categories from 'components/Categories'
import Footer from 'components/Footer'
import Header from 'components/Header'
import PagesCard from 'components/PagesCard'
import SearchAndHomeBtn from 'components/SearchAndHomeBtn'

const HotéisEPousadas: React.FC = () => {
  const { motelAndInn, category, fetchMotelAndInn } = useHotéisEPousadas()
  const [value, setValue] = useState('')

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      fetchMotelAndInn('/busca', value)
    },
    [fetchMotelAndInn, value],
  )

  const handleButton = useCallback(
    (id: number) => {
      fetchMotelAndInn(`/categorias/${String(id)}`)
    },
    [fetchMotelAndInn],
  )
  return (
    <>
      <Header />
      <SearchAndHomeBtn title="Hotéis e Pousadas">
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
          <Categories categories={category} handleBtn={handleButton} />
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
            {motelAndInn?.map((_motelAndInn) => (
              <Col key={_motelAndInn.id} className="d-flex mb-3 mb-md-5">
                <PagesCard apiContent={_motelAndInn} handleBtn={handleButton} />
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
