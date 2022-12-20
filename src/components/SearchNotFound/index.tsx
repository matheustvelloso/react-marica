import { Dispatch, memo, SetStateAction, useCallback } from 'react'

import { Container } from 'react-bootstrap'
import { BsArrowLeft } from 'react-icons/bs'

import { ButtonContainer } from './styles'

interface ISearchNotFoundProps {
  fetch: () => Promise<void>
  setValue: Dispatch<SetStateAction<string>>
  setShow: Dispatch<SetStateAction<boolean>>
}

const SearchNotFound: React.FC<ISearchNotFoundProps> = ({
  fetch,
  setValue,
  setShow,
}) => {
  const clearSearchButton = useCallback(() => {
    fetch()
    setValue('')
    setShow(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <div className="d-flex flex-column align-items-center justify-content-center mt-5">
        <div className="d-flex flex-column">
          <h2>Busca não encontrada :(</h2>
          <span style={{ textAlign: 'center' }}>Tente Novamente</span>
        </div>
        <ButtonContainer type="button" onClick={clearSearchButton}>
          <BsArrowLeft /> <span>Voltar</span>
        </ButtonContainer>
      </div>
    </Container>
  )
}

export default memo(SearchNotFound)
