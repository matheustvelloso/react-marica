import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

interface IMenuProps {
  show: boolean
}

interface ImageBackgroundProps {
  background: string
}

const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`
const fadeOut = keyframes`
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
`

export const IconContainer = styled.div`
  height: 30px;
  width: 30px;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -100%);
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
`

export const Menu = styled.div<IMenuProps>`
  position: fixed;
  top: 0%;
  left: 68%;
  transform: translate(-50%, -100%);
  width: 300px;
  opacity: ${(props) => (props.show ? 1 : 0)};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  animation: ${(props) => (props.show ? fadeIn : fadeOut)} 0.2s ease-out;
  z-index: 6;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const TriangleDiv = styled.div`
  &::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 0px;
    height: 0px;
    border-width: 10px 10px 0px;
    border-top-style: solid;
    border-right-style: solid;
    border-left-style: solid;
    border-right-color: transparent;
    border-left-color: transparent;
    border-image: initial;
    border-top-color: rgb(255, 255, 255);
    border-bottom-style: initial;
    border-bottom-color: initial;
    margin-left: -10px;
    margin-bottom: -10px;
  }
`

interface ImageBackgroundProps {
  background: string
}

export const CardContainer = styled.div`
  background-color: #fff;
  box-shadow: #0000001a 0px 1px 5px;
  border-radius: 5px;
  width: 100%;
`

export const ImageBackground = styled.div<ImageBackgroundProps>`
  background-image: url(${(props) => props.background});
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  z-index: 1;
`

export const ImageLink = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  height: 0px;
  padding-bottom: 56.25%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
`
export const PageTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 0.5rem;
`

export const LinkTitle = styled(Link)`
  color: #2d677f;
  text-decoration: none;

  &:hover {
    color: #2d677f;
    text-decoration: underline;
  }
`

export const ButtonCategory = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666666;
  background-color: #eeeeee;
  border: 1px solid #eeeeee;
  text-decoration: none;
  font-weight: 200;
  height: 20px;
  font-size: 12px;
  border-radius: 20px;
  padding: 12px;
  white-space: nowrap;

  &:hover {
    color: #666666;
    background-color: #fbfbfb;
  }
`
