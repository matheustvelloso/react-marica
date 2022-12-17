import { memo } from 'react'

import { Container } from 'react-bootstrap'

import {
  CardContainer,
  CategoryBackground,
  SubTextBackground,
  SubTitleBackground,
  TextBackground,
  TitleBackground,
  SpanBackground,
} from './styles'

const PageCardLoader: React.FC = () => {
  return (
    <Container>
      <div className="d-flex flex-column flex-lg-row gap-5">
        <div className="w-100  my-4">
          <TitleBackground />
          <SubTitleBackground />
          <div className="d-flex gap-2 my-4">
            <CategoryBackground />
            <CategoryBackground />
            <CategoryBackground />
          </div>
          <div className="my-5">
            <SubTitleBackground />
            <TextBackground />
            <TextBackground />
            <SubTextBackground />
            <SpanBackground />
          </div>
          <div className="my-5 py-5">
            <SubTitleBackground />
            <TextBackground />
            <TextBackground />
            <SubTextBackground />
          </div>
          <div className="my-5">
            <SubTitleBackground />
            <TextBackground />
            <TextBackground />
            <SubTextBackground />
          </div>
        </div>
        <CardContainer />
      </div>
    </Container>
  )
}

export default memo(PageCardLoader)
