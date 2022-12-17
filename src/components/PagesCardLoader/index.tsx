import { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import {
  CardContainer,
  Categories,
  CategoriesList,
  CategoryBackground,
  ImageBackground,
  TextBackground,
  TitleBackground,
} from './styles'

const PagesCardLoader: React.FC = () => {
  return (
    <Container>
      <>
        <CategoriesList>
          <Categories />
          <Categories />
          <Categories />
          <Categories />
        </CategoriesList>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 mb-5">
          <Col>
            <CardContainer>
              <ImageBackground />
            </CardContainer>
            <div>
              <TitleBackground />
              <div className="d-flex gap-2">
                <CategoryBackground />
                <CategoryBackground />
              </div>
              <TextBackground />
              <div />
            </div>
          </Col>
          <Col>
            <CardContainer>
              <ImageBackground />
            </CardContainer>
            <div>
              <TitleBackground />
              <div className="d-flex gap-2">
                <CategoryBackground />
                <CategoryBackground />
              </div>
              <TextBackground />
              <div />
            </div>
          </Col>
          <Col>
            <CardContainer>
              <ImageBackground />
            </CardContainer>
            <div>
              <TitleBackground />
              <div className="d-flex gap-2">
                <CategoryBackground />
                <CategoryBackground />
              </div>
              <TextBackground />
              <div />
            </div>
          </Col>
          <Col>
            <CardContainer>
              <ImageBackground />
            </CardContainer>
            <div>
              <TitleBackground />
              <div className="d-flex gap-2">
                <CategoryBackground />
                <CategoryBackground />
              </div>
              <TextBackground />
              <div />
            </div>
          </Col>
          <Col>
            <CardContainer>
              <ImageBackground />
            </CardContainer>
            <div>
              <TitleBackground />
              <div className="d-flex gap-2">
                <CategoryBackground />
                <CategoryBackground />
              </div>
              <TextBackground />
              <div />
            </div>
          </Col>
          <Col>
            <CardContainer>
              <ImageBackground />
            </CardContainer>
            <div>
              <TitleBackground />
              <div className="d-flex gap-2">
                <CategoryBackground />
                <CategoryBackground />
              </div>
              <TextBackground />
              <div />
            </div>
          </Col>
          <Col>
            <CardContainer>
              <ImageBackground />
            </CardContainer>
            <div>
              <TitleBackground />
              <div className="d-flex gap-2">
                <CategoryBackground />
                <CategoryBackground />
              </div>
              <TextBackground />
              <div />
            </div>
          </Col>
          <Col>
            <CardContainer>
              <ImageBackground />
            </CardContainer>
            <div>
              <TitleBackground />
              <div className="d-flex gap-2">
                <CategoryBackground />
                <CategoryBackground />
              </div>
              <TextBackground />
              <div />
            </div>
          </Col>
          <Col>
            <CardContainer>
              <ImageBackground />
            </CardContainer>
            <div>
              <TitleBackground />
              <div className="d-flex gap-2">
                <CategoryBackground />
                <CategoryBackground />
              </div>
              <TextBackground />
              <div />
            </div>
          </Col>
        </Row>
      </>
    </Container>
  )
}

export default memo(PagesCardLoader)
