import { memo, useState } from 'react'

import { Container } from 'react-bootstrap'
import { AiOutlineShop } from 'react-icons/ai'
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaUmbrellaBeach,
  FaBed,
  FaMotorcycle,
  FaRegCalendarAlt,
  FaMapMarkedAlt,
} from 'react-icons/fa'
import { GiKnifeFork, GiMicrophone } from 'react-icons/gi'
import { MdOutlineInfo } from 'react-icons/md'
import { RiCloseFill, RiCoupon2Fill } from 'react-icons/ri'
import { TbFlower } from 'react-icons/tb'
import { TiHome } from 'react-icons/ti'

import Logo from 'assets/Logo.png'
import LogoMobile from 'assets/LogoMobile.png'

import Config from 'Config'

import MenuNavigation from './MenuNavigation'
import {
  HeaderBackground,
  HeaderContainer,
  MenuButton,
  Menu,
  NavContainer,
  ButtonClose,
  MenuOverlay,
} from './styles'

const Header: React.FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  return (
    <>
      <MenuOverlay
        isMenuOpened={isMenuOpened}
        onClick={() => setIsMenuOpened(false)}
        className="d-flex position-fixed h-100 w-100"
      />
      <Menu isMenuOpened={isMenuOpened}>
        <div className="d-flex justify-content-end">
          <ButtonClose type="button">
            <RiCloseFill
              onClick={() => setIsMenuOpened(false)}
              className="text-white"
            />
          </ButtonClose>
        </div>
        <MenuNavigation icon={TiHome} title="Inicial" link="/" />
        <MenuNavigation
          icon={MdOutlineInfo}
          title="Sobre a cidade"
          link="/sobre-a-cidade"
        />
        <MenuNavigation
          icon={FaUmbrellaBeach}
          title="Pontos Turísticos"
          link="/pontos-turisticos"
        />
        <MenuNavigation
          icon={FaBed}
          title="Hotéis e Pousadas"
          link="/hoteis-e-pousadas"
        />
        <MenuNavigation
          icon={GiKnifeFork}
          title="Bares e Restaurantes"
          link="/bares-e-restaurantes"
        />
        <MenuNavigation icon={FaMotorcycle} title="Delivery" link="/" />
        <MenuNavigation
          icon={AiOutlineShop}
          title="Comércio Local"
          link="/comercio-local"
        />
        <MenuNavigation
          icon={RiCoupon2Fill}
          title="Cupons de Desconto"
          link="/"
        />
        <MenuNavigation
          icon={GiMicrophone}
          title="Espaços para Eventos"
          link="/espaco-para-eventos"
        />
        <MenuNavigation
          icon={FaRegCalendarAlt}
          title="Eventos"
          link="/eventos"
        />
        <MenuNavigation
          icon={FaMapMarkedAlt}
          title="Roteiros Turísticos"
          link="/"
        />
        <MenuNavigation icon={TbFlower} title="Artesanato" link="/" />
      </Menu>
      <HeaderBackground>
        <Container>
          <HeaderContainer>
            <MenuButton type="button" onClick={() => setIsMenuOpened(true)}>
              <FaBars />
              <span className="ms-2 d-none d-md-inline-block">Menu</span>
            </MenuButton>
            <div>
              <img
                className="img-fluid d-none d-md-flex"
                src={Logo}
                alt="Conheça Maricá"
              />

              <img
                className="img-fluid d-flex d-md-none"
                src={LogoMobile}
                alt="LogoMobile"
              />
            </div>
            <NavContainer className="d-none d-md-block">
              <a
                className="mx-1"
                href={Config.app.facebook}
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                className="mx-1"
                href={Config.app.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                className="mx-1"
                href={Config.app.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                className="mx-1"
                href={Config.app.youtube}
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube />
              </a>
            </NavContainer>
          </HeaderContainer>
        </Container>
      </HeaderBackground>
    </>
  )
}

export default memo(Header)
