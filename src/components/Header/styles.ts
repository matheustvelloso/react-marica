import styled, { keyframes } from 'styled-components'

interface IMenuProps {
  isMenuOpened: boolean
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
const enter = keyframes`
    from{
        right: -160px;
    }
    to{
        right: 0;
    }
`
const leave = keyframes`
    from{
        right: 0;
    }
    to{
        right: -160px;
    }
`

export const HeaderBackground = styled.header`
  background-color: #2d677f;
`
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 95px;
  color: #fff;
`
export const NavContainer = styled.nav`
  & > a {
    color: #fff;
    font-size: 20px;
  }
`
export const MenuButton = styled.button`
  font-size: 20px;
  color: #fff;
  background-color: #0000;
  border: none;
`
export const Menu = styled.div<IMenuProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  left: ${(props) => (props.isMenuOpened ? 0 : -300)}px;
  width: 300px;
  background-color: rgba(0, 0, 0, 0.9);
  animation: ${(props) => (props.isMenuOpened ? enter : leave)} 0.2s ease-out;
  transition: all 0.2s ease-out;
  color: #fff;
  z-index: 3;
`
export const MenuOverlay = styled.div<IMenuProps>`
  opacity: ${(props) => (props.isMenuOpened ? 1 : 0)};
  visibility: ${(props) => (props.isMenuOpened ? 'visible' : 'hidden')};
  animation: ${(props) => (props.isMenuOpened ? fadeIn : fadeOut)} 0.2s ease-out;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease-out;
  z-index: 2;
`

export const ButtonClose = styled.button`
  font-size: 20px;
  display: flex;
  background-color: #00000000;
  border: none;
  justify-content: flex-end;
  padding: 1rem;
`
