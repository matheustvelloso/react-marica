import { Category } from './CategoryType'

export type Address = {
  id: number
  lat: number
  lng: number
  label: string
}

export type Image = {
  id: number
  legenda: {
    pt_BR: null
  }
  ordem: number
  src: string
}
export type Phone = {
  id: number
  nome: string
  whatsapp: boolean
  ordem: number
  number: string
}
export type Struct = {
  icone: string
  label: string
}
export type PaymentMethod = {
  icone: string
  label: string
}
export type SocialMedia = {
  nome: string
  icone: string
  url: string
  user: string
}
export type Restrictions = {
  icone: string
  label: string
}
export type Panorama = {
  icone: string
  label: string
}

export type SimpleMotelAndInn = {
  id: number
  nome: string
  email: string
  site: string
  quartos: number
  leitos: null
  cafe_manha: boolean
  cafe_hospedes: boolean
  almoco: boolean
  almoco_hospedes: boolean
  jantar: boolean
  jantar_hospedes: boolean
  descricao_t: string
  addresses: Address[]
  images: Image[]
  horario_funcionamento: []
  phones: Phone[]
  categorias: Category[]
  estruturas: Struct[]
  formas_pagamento: PaymentMethod[]
  redes: SocialMedia[]
  restricoes: Restrictions[]
  panoramas: Panorama[]
}
