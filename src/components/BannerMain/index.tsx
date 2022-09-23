import { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import appStore from 'assets/appStore.png'
import googlePlay from 'assets/googlePlay.png'
import phone from 'assets/phone.png'

import {
  BannerContainer,
  BannerH2,
  BannerParagraph,
  BannerStyle,
} from './styles'

const BannerMain: React.FC = () => {
  return (
    <BannerContainer>
      <BannerStyle />
      <Container className="text-white py-5">
        <Row className="row-cols-1 row-cols-md-2">
          <Col>
            <BannerH2>Conheça nosso aplicativo</BannerH2>
            <BannerParagraph>
              Tenha o Guia Oficial de Turismo de Maricá a qualquer momento, na
              palma das suas mãos!
            </BannerParagraph>
            <div className="d-flex mt-auto text-center text-md-left gap-3">
              <div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.marica2030.app"
                  title="Google Play"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="img-fluid"
                    src={googlePlay}
                    alt="Google Play"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://apps.apple.com/br/app/maric%C3%A1-oficial/id1493299199"
                  title="App Store"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="img-fluid" src={appStore} alt="App Store" />
                </a>
              </div>
            </div>
          </Col>
          <Col className="text-center text-md-right relative mt-5 mt-md-0">
            <img className="img-fluid" src={phone} alt="phone" />
          </Col>
        </Row>
      </Container>
    </BannerContainer>
  )
}

export default memo(BannerMain)
