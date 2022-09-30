import { Category } from './CategoryType'

export type Address = {
  id: number
  lat: number
  lng: number
  label: string
}

export type EventPlace = {
  id: number
  nome: string
  capa: string
  lat: number
  lng: number
  categorias: Category[]
  enderecos: Address[]
}
