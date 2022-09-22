import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const MenuNavigationContainer = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #222222;
  padding: 16px;
  width: 100%;
  font-size: 18px;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`
