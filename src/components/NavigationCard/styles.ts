import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ButtonAccessLink = styled(Link)`
  border: 1px solid #6ebd00;
  color: #6ebd00;
  text-decoration: none;
  background-color: #00000000;
  border-radius: 20px;
  padding: 0 20px;
  font-size: 16px;

  &:hover {
    color: #7dd700;
    border-color: #7dd700;
  }
`
export const ButtonAccessExternalLink = styled.a`
  border: 1px solid #6ebd00;
  color: #6ebd00;
  text-decoration: none;
  background-color: #00000000;
  border-radius: 20px;
  padding: 0 20px;
  font-size: 16px;

  &:hover {
    color: #7dd700;
    border-color: #7dd700;
  }
`
export const CardContainer = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: #0000001a 0px 1px 5px;
  padding: 1rem 0.5rem;
  text-align: center;
  border-radius: 0.5rem;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const IconLink = styled(Link)`
  font-size: 48px;
  text-decoration: none;
  color: #333;

  &:hover {
    color: #333;
  }
`

export const TitleLink = styled(Link)`
  font-size: 16px;
  color: #333;
  text-decoration: none;

  &:hover {
    color: #333;
    text-decoration: underline;
  }
`
export const ExternalLink = styled.a`
  font-size: 16px;
  color: #333;
  text-decoration: none;

  &:hover {
    color: #333;
    text-decoration: underline;
  }
`

export const DescriptionSpan = styled.span`
  font-size: 12px;
  color: #6c757d;
  margin-bottom: 20px;
`
