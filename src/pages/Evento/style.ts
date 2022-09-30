import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface IImageCarouselBackground {
  image: string
}

export const LinkBackToPoints = styled(Link)`
  font-size: 22px;
  color: #343a40;

  &:hover {
    color: #121416;
  }
`

export const PageTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
`

export const PageSubTitle = styled.h2`
  font-size: 22px;
  color: #333333;
  padding-bottom: 10px;
  margin-bottom: 24px;
  border-bottom: 1px solid #cccccc;
`

export const IconContainer = styled.div`
  color: #6ebd00 !important;
  min-width: 50px;
  font-size: 22px;
  padding-right: 5px;
`

export const ImageCarouselBackground = styled.div<IImageCarouselBackground>`
  background-image: url(${(props) => props.image});
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  height: 0px;
  padding-bottom: 100%;
  background-position: center center;
  background-attachment: unset;
`
