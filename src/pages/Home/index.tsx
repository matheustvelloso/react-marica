import { memo, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { AiOutlineShop } from 'react-icons/ai'
import {
  FaUmbrellaBeach,
  FaBed,
  FaMotorcycle,
  FaRegCalendarAlt,
  FaMapMarkedAlt,
} from 'react-icons/fa'
import { GiKnifeFork, GiMicrophone } from 'react-icons/gi'
import { RiCoupon2Fill } from 'react-icons/ri'
import { TbFlower } from 'react-icons/tb'
import { TiHome } from 'react-icons/ti'

import BannerMain from 'components/BannerMain'
import Header from 'components/Header'
import NavigationCard from 'components/NavigationCard'

import useTitle from 'hooks/useTitle'

const Home: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('home.head-title'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <>
      <Header />
      <main>
        <Container className="py-5">
          <Row className="d-flex justify-content-center row-cols-3">
            <Col className="d-flex px-1 mb-2">
              <NavigationCard
                icon={FaUmbrellaBeach}
                link="/"
                title="Pontos Turísticos"
                description="Conheça nossas praias, lagoas, grutas e outros pontos turísticos"
              />
            </Col>
            <Col className="d-flex px-1 mb-2">
              <NavigationCard
                icon={FaBed}
                link="/"
                title="Hotéis e Pousadas"
                description="Saiba onde se hospedar em Maricá"
              />
            </Col>
            <Col className="d-flex px-1 mb-2">
              <NavigationCard
                icon={GiKnifeFork}
                link="/"
                title="Bares e Restaurantes"
                description="Aprecie a gastronomia de Maricá"
              />
            </Col>
            <Col className="d-flex px-1 mb-2">
              <NavigationCard
                icon={FaMotorcycle}
                link="/"
                title="Delivery"
                description="Receba o melhor de Maricá no conforto da sua casa"
              />
            </Col>
            <Col className="d-flex px-1 mb-2">
              <NavigationCard
                icon={AiOutlineShop}
                link="/"
                title="Comércio Local"
                description="Veja onde fazer as suas compras"
              />
            </Col>
            <Col className="d-flex px-1 mb-2">
              <NavigationCard
                icon={RiCoupon2Fill}
                link="/"
                title="Cupons de Desconto"
                description="As melhores promoções para curtir a cidade"
              />
            </Col>
            <Col className="d-flex px-1 mb-2">
              <NavigationCard
                icon={GiMicrophone}
                link="/"
                title="Espaços para Eventos"
                description="Locais para fazer suas festas ou reuniões"
              />
            </Col>
            <Col className="d-flex px-1 mb-2">
              <NavigationCard
                icon={FaRegCalendarAlt}
                link="/"
                title="Eventos"
                description="Confira o calendário de eventos da cidade"
              />
            </Col>
            <Col className="d-flex px-1 mb-2">
              <NavigationCard
                icon={FaMapMarkedAlt}
                link="/"
                title="Roteiros turísticos"
                description="Conheça diversas trilhas ecológicas e de aventura, com variados níveis de dificuldade"
              />
            </Col>
            <Col className="d-flex px-1 mb-2">
              <NavigationCard
                icon={TbFlower}
                link="/"
                title="Artesanato"
                description="Conheça e compre as criações dos artesãos de Maricá/RJ"
              />
            </Col>
            <Col className="d-flex px-1 mb-2">
              <NavigationCard
                icon={TiHome}
                link="/"
                title="Sobre a cidade"
                description="Conheça mais sobre Maricá"
              />
            </Col>
          </Row>
        </Container>
        <BannerMain />
      </main>
    </>
  )
}

export default memo(Home)
