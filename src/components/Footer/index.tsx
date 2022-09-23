import { memo } from 'react'

import { Container } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

import maricaProtege from 'assets/marica-protege-logo.png'
import maricaFooter from 'assets/maricaFooter.png'

import Config from 'Config'

import {
  FooterBackground,
  LinkAreaDoComerciante,
  ManualContainer,
  NavigationFooter,
} from './styles'

const Footer: React.FC = () => {
  return (
    <FooterBackground>
      <Container className="py-3">
        <div className="d-flex flex-column flex-xl-row justify-content-center justify-content-xl-between flex-wrap">
          <div>
            <NavigationFooter>
              <a
                className="me-4"
                href={Config.app.facebook}
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
                <span className="mx-2 d-none d-md-inline">Facebook</span>
              </a>
              <a
                className="me-4"
                href={Config.app.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
                <span className="mx-2 d-none d-md-inline">Instagram</span>
              </a>
              <a
                className="me-4"
                href={Config.app.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
                <span className="mx-2 d-none d-md-inline">Twitter</span>
              </a>
              <a href={Config.app.youtube} target="_blank" rel="noreferrer">
                <FaYoutube />
                <span className="mx-2 d-none d-md-inline">Youtube</span>
              </a>
            </NavigationFooter>
            <LinkAreaDoComerciante
              href={Config.app.appMarica}
              target="_blank"
              rel="noreferrer"
            >
              <span>Área do comerciante</span>
            </LinkAreaDoComerciante>
          </div>
          <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-center mt-4 mt-xl-0">
            <div>
              <img
                style={{ height: '60px' }}
                className="img-fluid mb-3 mb-md-0"
                src={maricaProtege}
                alt="maricaProtge"
              />
            </div>
            <ManualContainer className="mb-3 mb-md-0">
              <a
                className="mb-1"
                href="https://www.conhecamarica.com.br/static/media/guia-gastronomico.f9556598.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Manual Gastronomia
              </a>
              <a
                className="mt-1"
                href="https://www.conhecamarica.com.br/static/media/guia-hospedagem.2046547a.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Manual Hospedagem
              </a>
            </ManualContainer>
            <div>
              <img src={maricaFooter} alt="Maricá" />
            </div>
          </div>
        </div>
      </Container>
    </FooterBackground>
  )
}

export default memo(Footer)
