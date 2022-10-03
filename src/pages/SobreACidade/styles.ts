import { Link } from 'react-router-dom'
import styled from 'styled-components'

import maricaAbout from 'assets/marica-about.jpg'

export const ImageBackground = styled.div`
  @media (max-width: 767px) {
    height: 0px;
    padding-bottom: 100%;
    background-position: center center;
    background-attachment: unset;
  }
  position: relative;
  background-image: url(${maricaAbout});
  height: 80vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center top;
`
export const LinkBackToHome = styled(Link)`
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

export const MaricaAboutContainer = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 30%) 0px 1px 5px;
  transform: translateY(-200px);
`

export const ContentContainer = styled.div`
  p {
    font-size: 18px;
  }
  img {
    width: 100%;
    height: auto;
  }
`
