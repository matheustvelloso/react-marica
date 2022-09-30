import { Category } from './CategoryType'

type Address = {
  id: number
  lat: number
  lng: number
  label: string
}

type Image = {
  id: number
  legenda: {
    pt_BR: null
  }
  ordem: number
  src: string
}
type OpeningHour = {
  label: string
  is24: boolean
  horario: {
    abre: string
    fecha: string
  }
}
type Phone = {
  id: number
  nome: string
  whatsapp: boolean
  ordem: number
  number: string
}

type Struct = { icone: string; label: string }
type PaymentMethod = { icone: string; label: string }

type Medias = {
  nome: string
  icone: string
  url: string
  user: string
}
type Restriction = { icone: string; label: string }

export type SimpleMarket = {
  id: number
  nome: string
  email: string
  site: string
  is_delivery: number
  descricao_t: string
  addresses: Address[]
  images: Image[]
  horario_funcionamento: OpeningHour[]
  phones: Phone[]
  categorias: Category[]
  estruturas: Struct[]
  formas_pagamento: PaymentMethod[]
  redes: Medias[]
  restricoes: Restriction[]
  panoramas: []
}
