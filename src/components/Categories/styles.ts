import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CategoriesList = styled.div`
  @media (min-width: 768px) {
    flex-wrap: wrap;
  }
  @media (max-width: 767px) {
    overflow-x: scroll;
  }
  display: flex;
  flex-wrap: nowrap;
`

export const CategoryLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #6ebd00;
  text-decoration: none;
  border-radius: 20px;
  width: fit-content;
  height: 30px;
  font-size: 18px;
  padding: 0px 20px;
  white-space: nowrap;
  margin: 0 10px 10px 10px;

  &:hover {
    background-color: #7dd700;
    color: #fff;
  }
`
