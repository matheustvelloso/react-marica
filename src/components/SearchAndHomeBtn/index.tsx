import { memo } from 'react'

import { Container } from 'react-bootstrap'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { IoMdArrowBack } from 'react-icons/io'

import { InputContainer, LinkBackToHome, MapButton, PageTitle } from './styles'

interface ISearchAndHomeBtn {
  title: string
}

const SearchAndHomeBtn: React.FC<ISearchAndHomeBtn> = ({ title }) => {
  return (
    <Container className="d-flex justify-content-between align-items-center pt-3 pt-md-4 pb-4">
      <div className="d-flex">
        <LinkBackToHome to="/">
          <IoMdArrowBack className="me-2" />
        </LinkBackToHome>
        <PageTitle>{title}</PageTitle>
      </div>
      <div className="d-flex">
        <MapButton to="/">
          <FaMapMarkedAlt />
          <span>Mapa</span>
        </MapButton>
        <InputContainer>
          <input type="text" placeholder="Buscar pontos turísticos" />
          <button type="button">
            <FiSearch />
          </button>
        </InputContainer>
      </div>
    </Container>
  )
}

export default memo(SearchAndHomeBtn)
