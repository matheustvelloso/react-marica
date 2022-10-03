import { memo, useCallback, useEffect, useState } from 'react'

import parse from 'html-react-parser'
import { Container } from 'react-bootstrap'
import { IoMdArrowBack } from 'react-icons/io'

import Footer from 'components/Footer'
import Header from 'components/Header'

import MaricaApi from 'services/MaricaClient'

import {
  ContentContainer,
  ImageBackground,
  LinkBackToHome,
  MaricaAboutContainer,
  PageTitle,
} from './styles'

const SobreACidade: React.FC = () => {
  const [content, setContent] = useState('')
  const fetchAbout = useCallback(async () => {
    const { data } = await MaricaApi.get('/apps/get')
    setContent(data.sobre.content)
  }, [])

  useEffect(() => {
    fetchAbout()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <main>
        <ImageBackground />
        <Container>
          <MaricaAboutContainer className="p-4 p-md-5">
            <div className="d-flex">
              <LinkBackToHome to="/">
                <IoMdArrowBack className="me-2" />
              </LinkBackToHome>
              <PageTitle>Conheça Maricá</PageTitle>
            </div>
            <ContentContainer>
              {content && <div>{parse(content)}</div>}
            </ContentContainer>
          </MaricaAboutContainer>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default memo(SobreACidade)
