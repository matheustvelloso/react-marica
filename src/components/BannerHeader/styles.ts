import styled from 'styled-components'

export const BannerContainer = styled.div`
  position: relative;
  background-color: rgb(45, 103, 127);
  overflow: hidden;
`
export const BannerStyle = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
  @media (max-width: 991px) {
    width: 300px;
  }
  position: absolute;
  top: 0px;
  right: 0px;
  border-top: 600px solid rgb(255, 255, 255);
  border-left: 300px solid transparent;
  height: 0px;
  width: 600px;
  z-index: 0;
`

export const BannerH2 = styled.h2`
  font-weight: 700;
  font-size: 60px;
  margin-bottom: 1.5rem;
`

export const BannerParagraph = styled.p`
  font-size: 22px;
  margin-bottom: 1.5rem;
`
