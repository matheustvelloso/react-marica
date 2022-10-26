import { memo } from 'react'

import { Container } from 'react-bootstrap'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { IoMdArrowBack } from 'react-icons/io'

import { InputContainer, LinkBackToHome, MapButton, PageTitle } from './styles'

interface ISearchAndHomeBtn {
  title: string
  children?: React.ReactNode
  path?: string
}

const SearchAndHomeBtn: React.FC<ISearchAndHomeBtn> = ({
  title,
  children,
  path,
}) => {
  return (
    <Container className="d-md-flex justify-content-between align-items-center pt-3 pt-md-4 pb-4">
      <div className="d-flex">
        <LinkBackToHome to="/">
          <IoMdArrowBack className="me-2" />
        </LinkBackToHome>
        <PageTitle>{title}</PageTitle>
      </div>
      <div className="d-flex">
        <MapButton to={`/mapa/${path}`}>
          <FaMapMarkedAlt />
          <span>Mapa</span>
        </MapButton>
        <InputContainer>{children}</InputContainer>
      </div>
    </Container>
  )
}

export default memo(SearchAndHomeBtn)
