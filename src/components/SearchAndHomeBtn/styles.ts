import { Link } from 'react-router-dom'
import styled from 'styled-components'

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

export const MapButton = styled(Link)`
  background-color: #2d677f;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  border-radius: 20px;
  border: none;
  white-space: nowrap;
  text-decoration: none;
  height: 40px;
  font-size: 18px;

  &:hover {
    background-color: #347692;
    color: #fff;
  }
`

export const InputContainer = styled.div`
  background-color: #fff;
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid #333;
  border-radius: 20px;
  width: 410px;
  margin-left: 10px;

  input {
    border: none;
    margin-left: 10px;
    width: 360px;

    &:focus {
      outline: none;
    }
  }
  button {
    border: none;
    background-color: #00000000;
  }
`
