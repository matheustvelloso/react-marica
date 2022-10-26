/* eslint-disable react/jsx-props-no-spreading */
import { memo, useEffect } from 'react'

import GoogleMapReact from 'google-map-react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { AiOutlineMail } from 'react-icons/ai'
import { BsGlobe2, BsWhatsapp } from 'react-icons/bs'
import { FaFacebook, FaInstagram, FaRegMoneyBillAlt } from 'react-icons/fa'
import { GiConfirmed } from 'react-icons/gi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { IoMdArrowBack } from 'react-icons/io'
import { RiPhoneLine } from 'react-icons/ri'
import SVG from 'react-inlinesvg'
import { useParams } from 'react-router-dom'

import appStore from 'assets/appStore.png'
import googlePlay from 'assets/googlePlay.png'

import Config from 'Config'

import CarouselMultipleItems from 'components/CarouselMultipleItems'
import Categories from 'components/Categories'
import Footer from 'components/Footer'
import Header from 'components/Header'
import MapMarker from 'components/MapMarker'

import usePontosTuristicos from 'hooks/usePontosTuristicos'
import useTitle from 'hooks/useTitle'

import {
  IconContainer,
  ImageCarouselBackground,
  LinkBackToPoints,
  PageSubTitle,
  PageTitle,
} from './style'

const PontoTurístico: React.FC = () => {
  const { fetchCategory, fetchPoint, point } = usePontosTuristicos()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  const { id } = useParams()

  useEffect(() => {
    if (id) fetchPoint(id)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  useEffect(() => {
    if (point?.nome) setTitle(t(point.nome))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage, point?.nome])
  return (
    <>
      <Header />
      <main>
        <CarouselMultipleItems>
          {point?.images.map((image) => (
            <ImageCarouselBackground key={image.id} image={image.src} />
          ))}
        </CarouselMultipleItems>
        <Container>
          <Row className="row-cols-1 row-cols-lg-2 d-flex mt-5">
            <Col>
              <div className="d-flex align-items-center mb-4">
                <LinkBackToPoints to="/pontos-turisticos">
                  <IoMdArrowBack className="me-2" />
                </LinkBackToPoints>
                <div>
                  <span className="fs-sm fw-light">Pontos turísticos</span>
                  <PageTitle>{point?.nome}</PageTitle>
                </div>
              </div>
              <div className="fs-md mb-5">
                <div>
                  <Categories
                    categories={point?.categorias}
                    fetchCategory={fetchCategory}
                  />
                </div>
                <div className="fs-md">{point?.descricao_t}</div>
              </div>
              <div className="mb-4 mb-md-5">
                <PageSubTitle>Sobre</PageSubTitle>
                <div className="d-flex fs-md mb-3">
                  {point?.addresses.map((address) => (
                    <div className="d-flex align-items-center" key={address.id}>
                      <IconContainer>
                        <HiOutlineLocationMarker />
                      </IconContainer>
                      <div>{address.label}</div>
                    </div>
                  ))}
                </div>
                <div className="d-flex fs-md mb-3">
                  {point?.phones.map((phone) => (
                    <div className="d-flex align-items-center" key={phone.id}>
                      {phone.nome === 'Fixo' || phone.whatsapp === false ? (
                        <IconContainer>
                          <RiPhoneLine />
                        </IconContainer>
                      ) : (
                        <IconContainer>
                          <BsWhatsapp />
                        </IconContainer>
                      )}
                      <div>
                        <p style={{ fontSize: '16px', color: '#333' }}>
                          {phone.nome}
                        </p>
                        <div>{phone.number}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="d-flex fs-md mb-3">
                  {point?.email && (
                    <div className="d-flex align-items-center mb-3">
                      <IconContainer>
                        <AiOutlineMail />
                      </IconContainer>
                      <div>{point?.email}</div>
                    </div>
                  )}
                  {point?.site && (
                    <div className="d-flex align-items-center mb-3">
                      <IconContainer>
                        <BsGlobe2 />
                      </IconContainer>
                      <a href={point.site} target="_blank" rel="noreferrer">
                        {point.site}
                      </a>
                    </div>
                  )}
                  {point?.redes.map((social) => (
                    <div
                      className="d-flex align-items-center"
                      key={social.nome}
                    >
                      <IconContainer>
                        {social.icone === 'fab fa-instagram' ? (
                          <FaInstagram />
                        ) : (
                          <FaFacebook />
                        )}
                      </IconContainer>
                      <div>
                        <a
                          href={social.url}
                          target="_blank"
                          style={{ textDecoration: 'none' }}
                          rel="noreferrer"
                        >
                          {social.user}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {point?.dicas_t && (
                <div className="mb-4 mb-md-5">
                  <PageSubTitle>Dicas</PageSubTitle>
                  <div className="d-flex fs-md mb-3">
                    <p style={{ whiteSpace: 'pre-wrap' }}>{point.dicas_t}</p>
                  </div>
                </div>
              )}
              {point?.gratuito && (
                <div className="mb-4 mb-md-5">
                  <PageSubTitle>Valor da Entrada</PageSubTitle>
                  <div className="d-flex align-items-center fs-md mb-3">
                    <IconContainer>
                      <FaRegMoneyBillAlt />
                    </IconContainer>
                    <div className="pt-1">
                      {point.gratuito === 1 ? 'Gratuita' : ''}
                    </div>
                  </div>
                </div>
              )}
              {point?.viajantes && point.viajantes.length > 0 && (
                <div className="mb-4 mb-md-5">
                  <PageSubTitle>Tipos de Viajantes</PageSubTitle>
                  <div className="d-flex mb-3">
                    <Row className="row-cols-1 row-cols-md-3">
                      {point.viajantes &&
                        point.viajantes.map((traveler) => (
                          <Col
                            key={traveler.label}
                            className="d-flex align-items-center fs-md"
                          >
                            <IconContainer>
                              <GiConfirmed />
                            </IconContainer>
                            <div>{traveler.label}</div>
                          </Col>
                        ))}
                    </Row>
                  </div>
                </div>
              )}
              {point?.estruturas && point.estruturas.length > 0 && (
                <div className="mb-4 mb-md-5">
                  <PageSubTitle>Estruturas</PageSubTitle>
                  <div className="d-flex mb-3">
                    <Row className="row-cols-1 row-cols-md-3">
                      {point.estruturas.map((struct) => (
                        <Col
                          key={struct.label}
                          className="d-flex align-items-center fs-md mb-3"
                        >
                          <IconContainer>
                            <SVG src={struct.icone} fill="#6ebd00 " />
                          </IconContainer>
                          <div>{struct.label}</div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </div>
              )}
              {point?.restricoes && point.restricoes.length > 0 && (
                <div className="mb-4 mb-md-5">
                  <PageSubTitle>Restrições</PageSubTitle>
                  <div className="d-flex mb-3">
                    <Row className="row-cols-3">
                      {point.restricoes.map((restriction) => (
                        <Col
                          key={restriction.label}
                          className="d-flex align-items-center fs-md"
                        >
                          <IconContainer>
                            <SVG src={restriction.icone} fill="#6ebd00 " />
                          </IconContainer>
                          <div>{restriction.label}</div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </div>
              )}
            </Col>
            <Col className="mb-5">
              <div className="mb-4">
                <h2 className="fs-md fw-bold d-none d-lg-block mb-3">
                  Localização
                </h2>
                {point?.addresses?.length && (
                  <div className="w-100" style={{ height: '300px' }}>
                    <GoogleMapReact
                      bootstrapURLKeys={{ key: `${Config.api.key}` }}
                      defaultCenter={{
                        lat:
                          point.addresses.reduce(
                            (prev, { lat }) => prev + lat,
                            0,
                          ) / point.addresses.length,
                        lng:
                          point.addresses.reduce(
                            (prev, { lng }) => prev + lng,
                            0,
                          ) / point.addresses.length,
                      }}
                      defaultZoom={15}
                    >
                      {point?.addresses?.map(({ id: addrId, lat, lng }) => (
                        <MapMarker key={addrId} lat={lat} lng={lng} />
                      ))}
                    </GoogleMapReact>
                  </div>
                )}
              </div>
              <div>
                <h2 className="fs-md mb-3">Conheça nosso app</h2>
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
                      <img
                        className="img-fluid"
                        src={appStore}
                        alt="App Store"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default memo(PontoTurístico)
