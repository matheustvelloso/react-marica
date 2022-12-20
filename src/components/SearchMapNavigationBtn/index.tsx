import { Dispatch, memo, SetStateAction, useCallback, useState } from 'react'

import { Container } from 'react-bootstrap'
import { AiFillCloseCircle } from 'react-icons/ai'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { IoMdArrowBack } from 'react-icons/io'

import {
  ButtonFetch,
  InputContainer,
  LinkBackToHome,
  MapButton,
  PageTitle,
} from './styles'

interface ISearchAndHomeBtn {
  title: string
  children?: React.ReactNode
  path?: string
  fetch: () => Promise<void>
  search: (busca: string) => Promise<void>
  value: string
  setValue: Dispatch<SetStateAction<string>>
  categoryValue: string
  setCategoryValue: Dispatch<SetStateAction<string>>
  setShow: Dispatch<SetStateAction<boolean>>
  show: boolean
}

const SearchMapNavigationBtn: React.FC<ISearchAndHomeBtn> = ({
  title,
  path,
  fetch,
  search,
  value,
  setValue,
  categoryValue,
  setCategoryValue,
  show,
  setShow,
}) => {
  const [pageTitle, setPageTitle] = useState(title)

  const handleSearchButton = useCallback(() => {
    search(value)
    setShow(true)
    setCategoryValue('')
    setPageTitle('Resultados da busca')
  }, [search, setCategoryValue, setShow, value])

  const handleNavigationButton = useCallback(() => {
    fetch()
    setCategoryValue('')
    setShow(false)
    setPageTitle(title)
    setValue('')
  }, [fetch, setCategoryValue, setShow, setValue, title])

  const clearSearchButton = useCallback(() => {
    fetch()
    setValue('')
    setPageTitle(title)
    setShow(false)
  }, [fetch, setShow, setValue, title])

  return (
    <Container
      style={{ whiteSpace: 'nowrap' }}
      className="d-md-flex justify-content-between align-items-center pt-3 pt-md-4 pb-4"
    >
      <div className="d-flex">
        {categoryValue === '' && show === false ? (
          <LinkBackToHome to="/">
            <IoMdArrowBack className="me-2" />
          </LinkBackToHome>
        ) : (
          <ButtonFetch type="button" onClick={handleNavigationButton}>
            <IoMdArrowBack className="me-2" />
          </ButtonFetch>
        )}
        <div className="ms-2">
          {categoryValue ||
            (show === true && <span className="fs-sm fw-light">{title}</span>)}
          <PageTitle>{pageTitle}</PageTitle>
        </div>
      </div>
      <div className="d-flex">
        <MapButton to={`/mapa/${path}`}>
          <FaMapMarkedAlt />
          <span>Mapa</span>
        </MapButton>
        <InputContainer>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={`Buscar ${title}`}
          />
          <div className="d-flex align-items-center justify-content-center">
            <button
              type="button"
              disabled={!value.length}
              onClick={handleSearchButton}
            >
              <FiSearch />
            </button>
            {value.length > 0 && show && (
              <button type="button" onClick={clearSearchButton}>
                <AiFillCloseCircle />
              </button>
            )}
          </div>
        </InputContainer>
      </div>
    </Container>
  )
}

export default memo(SearchMapNavigationBtn)
