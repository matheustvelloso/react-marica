/* eslint-disable react/jsx-props-no-spreading */
import { memo, useEffect } from 'react'

import GoogleMapReact from 'google-map-react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { AiOutlineMail } from 'react-icons/ai'
import { BsGlobe2, BsWhatsapp } from 'react-icons/bs'
import { FaBed, FaCoffee, FaFacebook, FaInstagram } from 'react-icons/fa'
import { GiConfirmed, GiKnifeFork } from 'react-icons/gi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { IoMdArrowBack, IoMdKey } from 'react-icons/io'
import { RiPhoneLine } from 'react-icons/ri'
import SVG from 'react-inlinesvg'
import { useParams } from 'react-router-dom'

import appStore from 'assets/appStore.png'
import bandejaComTampa from 'assets/bandeja-de-comida-com-tampa.png'
import googlePlay from 'assets/googlePlay.png'

import Config from 'Config'

import CarouselMultipleItems from 'components/CarouselMultipleItems'
import Categories from 'components/Categories'
import Footer from 'components/Footer'
import Header from 'components/Header'
import MapMarker from 'components/MapMarker'

import useHoteisEPousadas from 'hooks/useHoteisEPousadas'
import useTitle from 'hooks/useTitle'

import {
  IconContainer,
  ImageCarouselBackground,
  LinkBackToPoints,
  PageSubTitle,
  PageTitle,
} from './styles'

const HotelEPousada: React.FC = () => {
  const { id } = useParams()
  const { fetchSimpleMotelAndInn, fetchCategory, simpleMotelAndInn } =
    useHoteisEPousadas()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    if (id) fetchSimpleMotelAndInn(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  useEffect(() => {
    if (simpleMotelAndInn?.nome) setTitle(t(simpleMotelAndInn.nome))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage, simpleMotelAndInn?.nome])
  return (
    <>
      <Header />
      <main>
        <CarouselMultipleItems>
          {simpleMotelAndInn?.images.map((image) => (
            <ImageCarouselBackground key={image.id} image={image.src} />
          ))}
        </CarouselMultipleItems>
        <Container>
          <Row className="row-cols-1 row-cols-lg-2 d-flex mt-5">
            <Col>
              <div className="d-flex align-items-center mb-4">
                <LinkBackToPoints to="/hoteis-e-pousadas">
                  <IoMdArrowBack className="me-2" />
                </LinkBackToPoints>
                <div>
                  <span className="fs-sm fw-light">Hotéis e Pousadas</span>
                  <PageTitle>{simpleMotelAndInn?.nome}</PageTitle>
                </div>
              </div>
              <div className="fs-md mb-5">
                <div>
                  <Categories
                    categories={simpleMotelAndInn?.categorias}
                    fetchCategory={fetchCategory}
                  />
                </div>
                <div className="fs-md">{simpleMotelAndInn?.descricao_t}</div>
              </div>
              <div className="mb-4 mb-md-5">
                <PageSubTitle>Sobre</PageSubTitle>
                <div className="d-flex fs-md mb-3">
                  {simpleMotelAndInn?.addresses.map((address) => (
                    <div className="d-flex align-items-center" key={address.id}>
                      <IconContainer>
                        <HiOutlineLocationMarker />
                      </IconContainer>
                      <div>{address.label}</div>
                    </div>
                  ))}
                </div>
                <div className="">
                  {simpleMotelAndInn?.phones.map((phone) => (
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
                        <p>{phone.number}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="d-flex flex-column fs-md mb-3">
                  {simpleMotelAndInn?.email && (
                    <div className="d-flex align-items-center mb-3">
                      <IconContainer>
                        <AiOutlineMail />
                      </IconContainer>
                      <div>{simpleMotelAndInn?.email}</div>
                    </div>
                  )}
                  {simpleMotelAndInn?.site && (
                    <div className="d-flex align-items-center mb-3">
                      <IconContainer>
                        <BsGlobe2 />
                      </IconContainer>
                      <a
                        href={simpleMotelAndInn.site}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {simpleMotelAndInn.site}
                      </a>
                    </div>
                  )}
                  {simpleMotelAndInn?.redes.map((social) => (
                    <div
                      className="d-flex align-items-center mb-3"
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
              <div className="mb-4 mb-md-5">
                <PageSubTitle>Comodidades</PageSubTitle>
                <div className="d-flex flex-column flex-md-row align-items-md-center fs-md mb-3 gap-3">
                  {simpleMotelAndInn?.quartos && (
                    <div className="d-flex">
                      <IconContainer>
                        <IoMdKey size={33} />
                      </IconContainer>
                      <div
                        className="align-self-center"
                        style={{ whiteSpace: 'pre-wrap' }}
                      >
                        {simpleMotelAndInn?.quartos} quartos
                      </div>
                    </div>
                  )}
                  {simpleMotelAndInn?.leitos && (
                    <div className="d-flex">
                      <IconContainer>
                        <FaBed size={33} />
                      </IconContainer>
                      <div
                        className="align-self-center"
                        style={{ whiteSpace: 'pre-wrap' }}
                      >
                        {simpleMotelAndInn?.leitos} leitos
                      </div>
                    </div>
                  )}
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-3 fs-md">
                  {simpleMotelAndInn?.cafe_manha && (
                    <div className="d-flex align-items-center">
                      <div>
                        <IconContainer>
                          <FaCoffee />
                        </IconContainer>
                      </div>
                      <div>
                        <p>Café da manhã</p>
                        <p>
                          {simpleMotelAndInn?.cafe_hospedes === true
                            ? 'Aceita não-hóspedes'
                            : 'Aceita hóspedes'}
                        </p>
                      </div>
                    </div>
                  )}
                  {simpleMotelAndInn?.almoco && (
                    <div className="d-flex align-items-center">
                      <IconContainer>
                        <GiKnifeFork />
                      </IconContainer>
                      <div>
                        <p>Almoço</p>
                        <p>
                          {simpleMotelAndInn?.almoco === true
                            ? 'Aceita não-hóspedes'
                            : 'Aceita hóspedes'}
                        </p>
                      </div>
                    </div>
                  )}
                  {simpleMotelAndInn?.jantar && (
                    <div className="d-flex align-items-center">
                      <IconContainer>
                        <img src={bandejaComTampa} alt="Jantar" />
                      </IconContainer>
                      <div>
                        <p>Jantar</p>
                        <p>
                          {simpleMotelAndInn?.jantar_hospedes === true
                            ? 'Aceita não-hóspedes'
                            : 'Aceita hóspedes'}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {simpleMotelAndInn?.estruturas &&
                simpleMotelAndInn.estruturas.length > 0 && (
                  <div className="mb-4 mb-md-5">
                    <PageSubTitle>Estruturas</PageSubTitle>
                    <div className="d-flex mb-3">
                      <Row className="row-cols-1 row-cols-md-3">
                        {simpleMotelAndInn.estruturas.map((struct) => (
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
              {simpleMotelAndInn?.restricoes &&
                simpleMotelAndInn.restricoes.length > 0 && (
                  <div className="mb-4 mb-md-5">
                    <PageSubTitle>Restrições</PageSubTitle>
                    <div className="d-flex mb-3">
                      <Row className="row-cols-1 row-cols-md-3">
                        {simpleMotelAndInn.restricoes &&
                          simpleMotelAndInn.restricoes.map((restriction) => (
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
              {simpleMotelAndInn?.formas_pagamento &&
                simpleMotelAndInn.formas_pagamento.length > 0 && (
                  <div className="mb-4 mb-md-5">
                    <PageSubTitle>Formas de Pagamento</PageSubTitle>
                    <div className="d-flex mb-3">
                      <Row className="row-cols-1 row-cols-md-3">
                        {simpleMotelAndInn.formas_pagamento.map(
                          (paymentMethod) => (
                            <Col
                              key={paymentMethod.label}
                              className="d-flex align-items-center fs-md"
                            >
                              <IconContainer>
                                <GiConfirmed />
                              </IconContainer>
                              <div>{paymentMethod.label}</div>
                            </Col>
                          ),
                        )}
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
                {simpleMotelAndInn?.addresses?.length && (
                  <div className="w-100" style={{ height: '300px' }}>
                    <GoogleMapReact
                      bootstrapURLKeys={{ key: `${Config.api.key}` }}
                      defaultCenter={{
                        lat:
                          simpleMotelAndInn.addresses.reduce(
                            (prev, { lat }) => prev + lat,
                            0,
                          ) / simpleMotelAndInn.addresses.length,
                        lng:
                          simpleMotelAndInn.addresses.reduce(
                            (prev, { lng }) => prev + lng,
                            0,
                          ) / simpleMotelAndInn.addresses.length,
                      }}
                      defaultZoom={15}
                    >
                      {simpleMotelAndInn?.addresses?.map(
                        ({ id: addrId, lat, lng }) => (
                          <MapMarker key={addrId} lat={lat} lng={lng} />
                        ),
                      )}
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

export default memo(HotelEPousada)
