import { memo, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { AiOutlineShop } from 'react-icons/ai'
import {
  FaUmbrellaBeach,
  FaBed,
  FaRegCalendarAlt,
  FaMapMarkedAlt,
} from 'react-icons/fa'
import { GiKnifeFork, GiMicrophone } from 'react-icons/gi'
import { TbFlower } from 'react-icons/tb'
import { TiHome } from 'react-icons/ti'

import BannerHeader from 'components/BannerHeader'
import BannerMain from 'components/BannerMain'
import Footer from 'components/Footer'
import Header from 'components/Header'
import NavigationCard from 'components/NavigationCard'

import useTitle from 'hooks/useTitle'

const Home: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t(''))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <>
      <Header />
      <BannerHeader />
      <main>
        <Container className="py-5">
          <Row className="d-flex justify-content-center row-cols-2 row-cols-md-3">
            <Col className="d-flex px-1 mb-2">
              <NavigationCard
                icon={FaUmbrellaBeach}
                linkReact="Link"
                link="/pontos-turisticos"
                title="Pontos Turísticos"
                description="Conheça nossas praias, lagoas, grutas e outros pontos turísticos"
              />
            </Col>
            <Col className="d-flex px-1 mb-2">
              <NavigationCard
                icon={FaBed}
                linkReact="Link"
                link="/hoteis-e-pousadas"
                title="Hotéis e Pousadas"
                description="Saiba onde se hospedar em Maricá"
              />
            </Col>
            <Col className="d-flex px-1 mb-2">
              <NavigationCard
                icon={GiKnifeFork}
                linkReact="Link"
                link="/bares-e-restaurantes"
                title="Bares e Restaurantes"
                description="Aprecie a gastronomia de Maricá"
              />
            </Col>
            <Col className="d-flex px-1 mb-2">
              <NavigationCard
                icon={AiOutlineShop}
                linkReact="Link"
                link="/comercio-local"
                title="Comércio Local"
                description="Veja onde fazer as suas compras"
              />
            </Col>
            <Col className="d-flex px-1 mb-2">
              <NavigationCard
                icon={GiMicrophone}
                linkReact="Link"
                link="/espacos-para-eventos"
                title="Espaços para Eventos"
                description="Locais para fazer suas festas ou reuniões"
              />
            </Col>
            <Col className="d-flex px-1 mb-2">
              <NavigationCard
                icon={FaRegCalendarAlt}
                linkReact="Link"
                link="/eventos"
                title="Eventos"
                description="Confira o calendário de eventos da cidade"
              />
            </Col>
            <Col className="d-flex px-1 mb-2">
              <NavigationCard
                icon={FaMapMarkedAlt}
                linkReact=""
                link="https://contato.site/5d9bab8/marica-cvb3/paginaprincipal"
                title="Roteiros turísticos"
                description="Conheça diversas trilhas ecológicas e de aventura, com variados níveis de dificuldade"
              />
            </Col>
            <Col className="d-flex px-1 mb-2">
              <NavigationCard
                icon={TbFlower}
                linkReact=""
                link="https://www.feirartemarica.com.br/"
                title="Artesanato"
                description="Conheça e compre as criações dos artesãos de Maricá/RJ"
              />
            </Col>
            <Col className="d-flex px-1 mb-2">
              <NavigationCard
                icon={TiHome}
                linkReact="Link"
                link="/sobre-a-cidade"
                title="Sobre a cidade"
                description="Conheça mais sobre Maricá"
              />
            </Col>
          </Row>
        </Container>
        <BannerMain />
      </main>
      <Footer />
    </>
  )
}

export default memo(Home)
