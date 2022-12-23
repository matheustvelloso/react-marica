import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PageTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`

export const LinkContainer = styled(Link)`
  display: flex;
  width: 230px;
  height: 66px;
  white-space: nowrap;
  align-items: center;
  position: absolute;
  background-color: #fff;
  box-shadow: #0000001a 0px 1px 5px;
  top: 110px;
  left: 20px;
  padding: 15px;
  border-radius: 5px;
  font-size: 22px;
  color: #343a40;
  z-index: 1;
  text-decoration: none;

  &:hover {
    color: #121416;
  }
`
