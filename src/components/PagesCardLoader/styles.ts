import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: transparent;
  box-shadow: #0000001a 0px 1px 5px;
  border-radius: 5px;
  width: 100%;
  margin: 30px 0;
  padding: 10%;
`

export const ImageBackground = styled.div`
  padding: 20%;
  background-color: inherit;
  inset: 0px;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  z-index: 1;
`
export const TitleBackground = styled.div`
  background-color: transparent;
  box-shadow: #0000001a 0px 1px 5px;
  width: 100%;
  margin: 10px 0;
  height: 20px;
  border-radius: 25px;
`

export const CategoryBackground = styled.div`
  background-color: transparent;
  box-shadow: #0000001a 0px 1px 5px;
  margin: 10px 0;
  width: 150px;
  height: 20px;
  border-radius: 25px;
`

export const TextBackground = styled.div`
  background-color: transparent;
  box-shadow: #0000001a 0px 1px 5px;
  max-width: 350px;
  margin: 10px 0;
  height: 20px;
  border-radius: 8px;
`

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

export const Categories = styled.div`
  background-color: transparent;
  box-shadow: #0000001a 0px 1px 5px;
  width: 200px;
  height: 30px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  white-space: nowrap;
  margin: 0 10px 10px 0;
  border: none;
`
