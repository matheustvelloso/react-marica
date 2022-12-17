/* eslint-disable react/jsx-props-no-spreading */
import { memo, useEffect } from 'react'

import {
  format,
  getDate,
  getHours,
  getMinutes,
  getMonth,
  getYear,
} from 'date-fns'
import GoogleMapReact from 'google-map-react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { AiOutlineMail } from 'react-icons/ai'
import { BsGlobe2, BsWhatsapp } from 'react-icons/bs'
import { FaFacebook, FaInstagram, FaRegMoneyBillAlt } from 'react-icons/fa'
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
import PageCardLoader from 'components/PageCardLoader'
import Wrapper from 'components/Wrapper'

import useEventos from 'hooks/useEventos'
import useTitle from 'hooks/useTitle'

import {
  IconContainer,
  ImageCarouselBackground,
  LinkBackToPoints,
  PageSubTitle,
  PageTitle,
} from './style'

const PontoTurístico: React.FC = () => {
  const { fetchCategory, fetchEvent, event, loading } = useEventos()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const { id } = useParams()

  const formatStartDate = (): string | number =>
    event?.datahora_inicio_f
      ? format(new Date(event?.datahora_inicio_f), 'yyyy-MM-dd HH:mm:mm:mm')
      : ''

  const formatEndDate = (): string | number =>
    event?.datahora_fim_f
      ? format(new Date(event?.datahora_fim_f), 'yyyy-MM-dd HH:mm:mm:mm')
      : ''

  const getMonthName = (date: string | number): string => {
    switch (getMonth(new Date(date))) {
      case 2:
        return 'Março'
      case 3:
        return 'Abril'
      case 4:
        return 'Maio'
      case 5:
        return 'Junho'
      case 6:
        return 'Julho'
      case 7:
        return 'Agosto'
      case 8:
        return 'Setembro'
      case 9:
        return 'Outubro'
      case 10:
        return 'Novembro'
      case 11:
        return 'Dezembro'
      case 12:
        return 'Janeiro'
      default:
        return 'Fevereiro'
    }
  }

  const getMonthAbbreviation = (date: string | number): string => {
    switch (getMonth(new Date(date))) {
      case 2:
        return 'MAR'
      case 3:
        return 'ABR'
      case 4:
        return 'MAIO'
      case 5:
        return 'JUN'
      case 6:
        return 'JUL'
      case 7:
        return 'AGO'
      case 8:
        return 'SET'
      case 9:
        return 'OUT'
      case 10:
        return 'NOV'
      case 11:
        return 'DEZ'
      case 12:
        return 'JAN'
      default:
        return 'FEV'
    }
  }

  const normalizeMinutes = (min: number | Date): string => {
    switch (getMinutes(min)) {
      case 0:
        return '00'
      case 1:
        return '01'
      case 2:
        return '02'
      case 3:
        return '03'
      case 4:
        return '04'
      case 5:
        return '05'
      case 6:
        return '06'
      case 7:
        return '07'
      case 8:
        return '08'
      case 9:
        return '09'
      default:
        return String(getMinutes(min))
    }
  }

  useEffect(() => {
    if (id) fetchEvent(id)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  useEffect(() => {
    if (event?.nome) setTitle(t(`${event.nome} | Eventos`))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage, event?.nome])

  return (
    <>
      <Header />

      <Wrapper>
        <main>
          {loading && <PageCardLoader />}
          {!loading && (
            <>
              <CarouselMultipleItems>
                {event?.images.map((image) => (
                  <ImageCarouselBackground key={image.id} image={image.src} />
                ))}
              </CarouselMultipleItems>
              <Container>
                <div className="d-flex flex-column flex-lg-row mt-5">
                  <div className="me-3">
                    <div className="d-flex align-items-center mb-4">
                      <LinkBackToPoints to="/eventos">
                        <IoMdArrowBack className="me-2" />
                      </LinkBackToPoints>
                      <div>
                        <span className="fs-sm fw-light">Eventos</span>
                        <PageTitle>{event?.nome}</PageTitle>
                      </div>
                    </div>
                    <div>
                      <Categories
                        categories={event?.categorias}
                        fetchCategory={fetchCategory}
                      />
                    </div>
                    <div className="fs-md mb-5">
                      <div className="d-flex gap-4 mb-4">
                        {event?.datahora_inicio_f && event?.datahora_fim_f && (
                          <>
                            <div className="d-flex flex-column align-items-center">
                              <span style={{ color: '#dc3545' }}>
                                {getMonthAbbreviation(formatStartDate())}
                              </span>
                              <span>
                                {getDate(new Date(formatStartDate()))}
                              </span>
                            </div>
                            <div>
                              <div>
                                De:{' '}
                                {`${getDate(
                                  new Date(formatStartDate()),
                                )} de ${getMonthName(
                                  formatStartDate(),
                                )} de ${getYear(
                                  new Date(formatStartDate()),
                                )}, às ${getHours(
                                  new Date(formatStartDate()),
                                )}:${`${normalizeMinutes(
                                  new Date(formatStartDate()),
                                )}`}h`}
                              </div>
                              <div>
                                Até:{' '}
                                {`${getDate(
                                  new Date(formatEndDate()),
                                )} de ${getMonthName(
                                  formatEndDate(),
                                )} de ${getYear(
                                  new Date(formatEndDate()),
                                )}, às ${getHours(
                                  new Date(formatEndDate()),
                                )}:${normalizeMinutes(
                                  new Date(formatEndDate()),
                                )}h`}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="fs-md">{event?.descricao_t}</div>
                    </div>

                    {event?.addresses && event?.addresses?.length > 0 && (
                      <div className="mb-4 mb-md-5">
                        <PageSubTitle>Sobre</PageSubTitle>
                        <div className="d-flex fs-md mb-3">
                          {event?.addresses.map((address) => (
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
                        <div className="d-flex fs-md mb-3">
                          {event?.phones.map((phone) => (
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
                                <span
                                  style={{
                                    fontSize: '16px',
                                    color: '#333',
                                  }}
                                >
                                  {phone.nome}
                                </span>
                                <span>{phone.number}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="d-flex fs-md mb-3">
                          {event?.email && (
                            <div className="d-flex align-items-center mb-3">
                              <IconContainer>
                                <AiOutlineMail />
                              </IconContainer>
                              <div>{event?.email}</div>
                            </div>
                          )}
                          {event?.site && (
                            <div className="d-flex align-items-center mb-3">
                              <IconContainer>
                                <BsGlobe2 />
                              </IconContainer>
                              <a
                                href={event.site}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {event.site}
                              </a>
                            </div>
                          )}
                          {event?.redes.map((social) => (
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
                    )}

                    <div>
                      {event?.gratuito && (
                        <div className="mb-4 mb-md-5">
                          <PageSubTitle>Valor da Entrada</PageSubTitle>
                          <div className="d-flex align-items-center fs-md mb-3">
                            <IconContainer>
                              <FaRegMoneyBillAlt />
                            </IconContainer>
                            <div className="pt-1">
                              {event.gratuito === 1 ? 'Gratuita' : ''}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div>
                      {event?.estruturas && event.estruturas.length > 0 && (
                        <div className="mb-4 mb-md-5">
                          <PageSubTitle>Estruturas</PageSubTitle>
                          <div className="d-flex mb-3">
                            <Row className="row-cols-1 row-cols-md-3">
                              {event.estruturas.map((struct) => (
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
                    </div>
                    <div>
                      {event?.restricoes && event.restricoes.length > 0 && (
                        <div className="mb-4 mb-md-5">
                          <PageSubTitle>Restrições</PageSubTitle>
                          <div className="d-flex mb-3">
                            <Row className="row-cols-1 row-cols-md-3">
                              {event.restricoes.map((restriction) => (
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
                    </div>
                  </div>
                  <div className="mb-5 ms-5">
                    <div className="mb-4">
                      <h2 className="fs-md fw-bold d-none d-lg-block mb-3">
                        Localização
                      </h2>
                      {event?.addresses?.length ? (
                        <div className="w-lg-100" style={{ height: '300px' }}>
                          <GoogleMapReact
                            bootstrapURLKeys={{ key: `${Config.api.key}` }}
                            defaultCenter={{
                              lat:
                                event.addresses.reduce(
                                  (prev, { lat }) => prev + lat,
                                  0,
                                ) / event.addresses.length,
                              lng:
                                event.addresses.reduce(
                                  (prev, { lng }) => prev + lng,
                                  0,
                                ) / event.addresses.length,
                            }}
                            defaultZoom={15}
                          >
                            {event?.addresses?.map(
                              ({ id: addrId, lat, lng }) => (
                                <MapMarker key={addrId} lat={lat} lng={lng} />
                              ),
                            )}
                          </GoogleMapReact>
                        </div>
                      ) : (
                        'Localização Indisponível'
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

export default memo(PontoTurístico)
