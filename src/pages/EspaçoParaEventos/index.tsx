/* eslint-disable react/jsx-props-no-spreading */
import { memo, useEffect } from 'react'

import GoogleMapReact from 'google-map-react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { AiOutlineMail } from 'react-icons/ai'
import { BsClock, BsGlobe2, BsWhatsapp } from 'react-icons/bs'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { GiConfirmed } from 'react-icons/gi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { IoMdArrowBack } from 'react-icons/io'
import { RiPhoneLine } from 'react-icons/ri'
import { TiHome } from 'react-icons/ti'
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
import PageCardLoader from 'components/PageCardLoader'
import Wrapper from 'components/Wrapper'

import useEspaçoParaEventos from 'hooks/useEspaçoParaEventos'
import useTitle from 'hooks/useTitle'

import {
  IconContainer,
  ImageCarouselBackground,
  LinkBackToPoints,
  PageSubTitle,
  PageTitle,
} from './styles'

const EpaçoParaEventos: React.FC = () => {
  const { id } = useParams()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  const { fetchEventPlace, fetchCategory, eventPlace, loading } =
    useEspaçoParaEventos()

  useEffect(() => {
    if (id) fetchEventPlace(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  useEffect(() => {
    if (eventPlace?.nome)
      setTitle(t(`${eventPlace.nome} | Espaços para Eventos`))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage, eventPlace?.nome])

  return (
    <>
      <Header />

      <Wrapper>
        <main>
          {loading && <PageCardLoader />}
          {!loading && (
            <>
              <CarouselMultipleItems>
                {eventPlace?.images.map((image) => (
                  <ImageCarouselBackground key={image.id} image={image.src} />
                ))}
              </CarouselMultipleItems>
              <Container>
                <div className="d-flex flex-column flex-lg-row mt-5">
                  <div className="me-3">
                    <div className="d-flex align-items-center mb-4">
                      <LinkBackToPoints to="/espacos-para-eventos">
                        <IoMdArrowBack className="me-2" />
                      </LinkBackToPoints>
                      <div>
                        <span className="fs-sm fw-light">
                          Espaço para Eventos
                        </span>
                        <PageTitle>{eventPlace?.nome}</PageTitle>
                      </div>
                    </div>
                    <div className="fs-md mb-5">
                      <div>
                        <Categories
                          categories={eventPlace?.categorias}
                          fetchCategory={fetchCategory}
                        />
                      </div>
                      <div className="fs-md">{eventPlace?.descricao_t}</div>
                    </div>
                    <div className="mb-4 mb-md-5">
                      <PageSubTitle>Sobre</PageSubTitle>
                      <div className="d-flex fs-md mb-3">
                        {eventPlace?.addresses.map((address) => (
                          <div
                            className="d-flex align-items-center"
                            key={address.id}
                          >
                            <IconContainer>
                              <HiOutlineLocationMarker />
                            </IconContainer>
                            <div>{address.label}</div>
                          </div>
                        ))}
                      </div>
                      <div className="">
                        {eventPlace?.phones.map((phone) => (
                          <div
                            className="d-flex align-items-center mb-3"
                            key={phone.id}
                          >
                            {phone.nome === 'Fixo' ||
                            phone.whatsapp === false ? (
                              <IconContainer>
                                <RiPhoneLine />
                              </IconContainer>
                            ) : (
                              <IconContainer>
                                <BsWhatsapp />
                              </IconContainer>
                            )}

                            <div className="d-flex flex-column">
                              <span style={{ fontSize: '18px', color: '#333' }}>
                                {phone.nome}
                              </span>
                              <span>{phone.number}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="d-flex flex-column fs-md mb-3">
                        {eventPlace?.email && (
                          <div className="d-flex align-items-center mb-3">
                            <IconContainer>
                              <AiOutlineMail />
                            </IconContainer>
                            <div>{eventPlace?.email}</div>
                          </div>
                        )}
                        {eventPlace?.site && (
                          <div className="d-flex align-items-center mb-3">
                            <IconContainer>
                              <BsGlobe2 />
                            </IconContainer>
                            <a
                              href={eventPlace.site}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {eventPlace.site}
                            </a>
                          </div>
                        )}
                        {eventPlace?.redes.map((social) => (
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
                                rel="noreferrer"
                                style={{ textDecoration: 'none' }}
                              >
                                {social.user}
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                      {eventPlace?.horario_funcionamento &&
                        eventPlace.horario_funcionamento.length > 0 && (
                          <div className="d-flex fs-md mb-3">
                            <IconContainer>
                              <BsClock />
                            </IconContainer>
                            <div className="d-flex gap-5">
                              <div>
                                {eventPlace.horario_funcionamento.map(
                                  (openingHour) => (
                                    <div>
                                      <span style={{ fontWeight: 700 }}>
                                        {openingHour.label}
                                      </span>
                                    </div>
                                  ),
                                )}
                              </div>
                              <div>
                                {eventPlace.horario_funcionamento.map(
                                  (openingHour) => (
                                    <div>
                                      <span>
                                        {openingHour.horario.abre} às{' '}
                                        {openingHour.horario.fecha}
                                      </span>
                                    </div>
                                  ),
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                    </div>
                    <div className="mb-4 mb-md-5">
                      <PageSubTitle>Espaços</PageSubTitle>
                      <div className="d-flex flex-column mb-3">
                        {eventPlace?.espacos.map((place) => (
                          <div className="d-flex mb-2">
                            <IconContainer>
                              <TiHome />
                            </IconContainer>
                            <div>
                              <div className="mb-3">
                                <div className="fw-bold fs-md">
                                  {place.nome}
                                </div>
                                <span
                                  className="fs-sm text-muted "
                                  style={{ fontStyle: 'italic' }}
                                >
                                  {place.descricao}
                                </span>
                              </div>
                              <div className="fs-sm text-muted mb-2">
                                <span>Area: </span>
                                {place.area}m²
                              </div>
                              {place.pe_direito && (
                                <div className="fs-sm text-muted mb-2">
                                  <span>Pé Direito: </span>
                                  {place.pe_direito}
                                </div>
                              )}
                              {place.medidas && (
                                <div className="fs-sm text-muted mb-2">
                                  <span>Medidas: </span>
                                  {place.medidas}
                                </div>
                              )}
                              <div className="fs-sm text-muted mb-2">
                                <span>Capacidade: </span>
                                {place.capacidade} pessoas
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4 mb-md-5">
                      <PageSubTitle>Equipamentos</PageSubTitle>
                      <div className=" mb-3 fs-md">
                        {eventPlace?.equipamentos.map((equipment) => (
                          <div
                            key={equipment.label}
                            className="d-flex align-items-center pe-3"
                          >
                            <IconContainer>
                              <GiConfirmed />
                            </IconContainer>
                            <div>
                              {equipment.total}x {equipment.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {eventPlace?.estruturas &&
                      eventPlace.estruturas.length > 0 && (
                        <div className="mb-4 mb-md-5">
                          <PageSubTitle>Estruturas</PageSubTitle>
                          <div className="d-flex mb-3">
                            <Row className="row-cols-1 row-cols-md-3">
                              {eventPlace.estruturas.map((struct) => (
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
                    {eventPlace?.restricoes &&
                      eventPlace.restricoes.length > 0 && (
                        <div className="mb-4 mb-md-5">
                          <PageSubTitle>Restrições</PageSubTitle>
                          <div className="d-flex mb-3">
                            <Row className="row-cols-1 row-cols-md-3">
                              {eventPlace.restricoes &&
                                eventPlace.restricoes.map((restriction) => (
                                  <Col
                                    key={restriction.label}
                                    className="d-flex align-items-center fs-md"
                                  >
                                    <IconContainer>
                                      <SVG
                                        src={restriction.icone}
                                        fill="#6ebd00 "
                                      />
                                    </IconContainer>
                                    <div>{restriction.label}</div>
                                  </Col>
                                ))}
                            </Row>
                          </div>
                        </div>
                      )}
                    {eventPlace?.formas_pagamento &&
                      eventPlace.formas_pagamento.length > 0 && (
                        <div className="mb-4 mb-md-5">
                          <PageSubTitle>Formas de Pagamento</PageSubTitle>
                          <div className="d-flex mb-3">
                            <Row className="row-cols-1 row-cols-md-3">
                              {eventPlace.formas_pagamento.map(
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
                  </div>
                  <div className="mb-5 ms-5">
                    <div className="mb-4">
                      <h2 className="fs-md fw-bold d-none d-lg-block mb-3">
                        Localização
                      </h2>
                      {eventPlace?.addresses?.length && (
                        <div className="w-lg-100" style={{ height: '300px' }}>
                          <GoogleMapReact
                            bootstrapURLKeys={{ key: `${Config.api.key}` }}
                            defaultCenter={{
                              lat:
                                eventPlace.addresses.reduce(
                                  (prev, { lat }) => prev + lat,
                                  0,
                                ) / eventPlace.addresses.length,
                              lng:
                                eventPlace.addresses.reduce(
                                  (prev, { lng }) => prev + lng,
                                  0,
                                ) / eventPlace.addresses.length,
                            }}
                            defaultZoom={15}
                          >
                            {eventPlace?.addresses?.map(
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
                  </div>
                </div>
              </Container>
            </>
          )}
        </main>
      </Wrapper>

      <Footer />
    </>
  )
}

export default memo(EpaçoParaEventos)
