import styled from 'styled-components'

export const FooterBackground = styled.footer`
  background-color: #333;
`
export const NavigationFooter = styled.nav`
  display: flex;

  justify-content: center;
  margin-bottom: 10px;

  a {
    @media (max-width: 767px) {
      font-size: 30px;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    font-size: 18px;
    color: #fff;

    &:hover {
      color: #fff;
    }
  }
`

export const LinkAreaDoComerciante = styled.a`
  @media (max-width: 1199px) {
    justify-content: center;
  }
  color: #fff;
  font-size: 18px;
  display: flex;

  &:hover {
    color: #fff;
  }
`

export const ManualContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  margin-bottom: 1rem;

  a {
    font-size: 18px;
    color: #fff;

    &:hover {
      color: #fff;
    }
  }
`
