import { memo } from 'react'

import { Container } from 'react-bootstrap'
import { IoMdArrowBack } from 'react-icons/io'

import maricaTurismo from 'assets/marica-turismo-logo.png'

import Footer from 'components/Footer'
import Header from 'components/Header'

import {
  ImageBackground,
  LinkBackToHome,
  MaricaAboutContainer,
  PageTitle,
} from './styles'

const SobreACidade: React.FC = () => {
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
            <p>
              Considerada um paraíso natural, com 46 quilômetros de praias, seis
              lagoas, canais, ilhas e rios, cachoeiras, trilhas, serras,
              restinga e uma rica história, Maricá é o cenário perfeito para
              quem procura beleza natural e aventuras.
            </p>
            <p>
              Maricá é rodeada por maciços costeiros. As serras principais são:
              Calaboca, Mato Grosso (onde se localiza o ponto mais alto do
              Município – o Pico da Lagoinha, com 890 metros), Lagarto, Silvado,
              Espraiado e Tiririca.
            </p>
            <p>
              O município apresenta um grande complexo lagunar que contempla as
              lagoas de Maricá, Barra de Maricá, do Padre, Guarapina, Jacaroá,
              Araçatiba, Boqueirão e Jaconé, além dos canais de Ponta Negra e de
              Itaipuaçu que ligam as lagoas ao mar.
            </p>
            <p>
              Também é conhecida por suas praias oceânicas, dentre as quais se
              destacam as praias de Jaconé, Ponta Negra, Barra de Maricá, do
              Francês e Itaipuaçu. A topografia peculiar cria um ambiente
              propício à prática de esportes como voo livre, trekking e mountain
              bike, entre outros.
            </p>
            <p>
              A Serra da Tiririca, entre Maricá e Niterói, é um parque estadual
              com um valioso trecho de mata atlântica.
            </p>
            <p className="mb-4">
              A Área de Proteção Ambiental Estadual de Maricá é uma área
              tipicamente de restinga, localizada na costa do município. É
              formada pela antiga fazenda São Bento da Lagoa, a Ponta do Fundão
              e a Ilha Cardosa. Abriga a Comunidade Pesqueira tradicional de
              Zacarias, presente na área desde o século XVIII, sítios
              arqueológicos e o complexo ecossistema de restinga.
            </p>
            <h2 className="fs-lg fw-bold mt-0 mb-3">História</h2>
            <p>
              A colônia Maricá começou a ser povoada no início do século XVI,
              por causa da necessidade da Coroa Portuguesa em defender o litoral
              de ataques dos corsários franceses. Entre 1574 e 1830 as terras
              são doadas aos colonizadores portugueses, divididas em sesmarias.
            </p>
            <p>
              O primeiro centro efetivo de população, fundada pelos beneditinos
              em 1635 surge junto à Fazenda de São Bento (São José do Imbassaí),
              onde é construída a primeira capela dedicada à Nossa Sra do
              Amparo.
            </p>
            <p>
              Em 1814, passa a se chamar Vila de Santa Maria de Maricá em
              homenagem à rainha D. Maria I de Portugal. Reconhecida, torna-se
              independente e tem seu desenvolvimento acelerado. Em 1889, o
              recém-criado governo republicano decide elevar a Vila à categoria
              de cidade.
            </p>
            <p>
              A Estrada de Ferro de Maricá também faz parte da história da
              cidade. Seu primeiro trecho, em 1888 ligava as estações de
              Alcântara e Rio do Ouro. Entre 1911 e 1940, a ferrovia viveu seu
              auge e o trecho foi ampliado até Cabo Frio onde registrava um
              grande volume de cargas da produção local. Com o declínio da
              atividade agrícola, os trechos foram sendo desativados, sendo
              encerramento em definitivo em 1966.
            </p>
            <p>
              A história de Maricá também é rica em personagens ilustres e nomes
              de representatividade, como o padre José de Anchieta que em 1584
              realizou a “pesca milagrosa” na Lagoa de Araçatiba; a Princesa
              Isabel e o Conde D´Eu que em 1868 se hospedaram na sede da Fazenda
              do Pilar (Ubatiba) e o pesquisador britânico Charles Darwin que em
              1832 incluiu Itaipuaçu em seu roteiro de pesquisas.
            </p>
            <p className="mb-5">
              “Atualmente, o território municipal estende-se por 362.480 km² e é
              dividido em quatro distritos: Maricá (sede), Ponta Negra, Inoã e
              Itaipuaçu. Sua população é estimada em 150 mil habitantes, segundo
              levantamento de 2016.”
            </p>
            <h2 className="fs-lg fw-bold mt-0 mb-3">Realização</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <div>
                <img
                  className="img-fluid"
                  src={maricaTurismo}
                  alt="Marica Turismo"
                />
              </div>
              <div className="ms-md-5 mt-5 mt-md-0">
                <p className="fw-bold">Secretaria de Turismo de Maricá</p>
                <p className="mb-1">
                  <span className="d-none d-md-inline mr-2">-</span>Praça
                  Conselheiro Macedo Soares, s/n, Centro - Maricá/RJ
                </p>
                <p className="mb-1">
                  <span className="d-none d-md-inline mr-2">-</span>Telefone:
                  (21) 3731-5094
                </p>
                <p className="mb-1">
                  <span className="d-none d-md-inline mr-2">-</span>E-mail:
                  turismo@marica.rj.gov.br
                </p>
              </div>
            </div>
          </MaricaAboutContainer>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default memo(SobreACidade)
