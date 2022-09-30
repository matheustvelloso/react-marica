import { Category } from './CategoryType'

export type Travelers = {
  label: string
}

export type Restrictions = {
  icone: string
  label: string
}
export type SocialMedia = {
  nome: string
  icone: string
  url: string
  user: string
}

export type Struct = {
  icone: string
  label: string
}

export type Phone = {
  id: number
  nome: string
  whatsapp: boolean
  ordem: number
  number: string
}
export type Image = {
  id: number
  legenda: {
    pt_BR: null
  }
  ordem: number
  src: string
}

export type Address = {
  id: number
  lat: number
  lng: number
  label: string
}
export type SimpleEvent = {
  id: number
  nome: string
  email: null
  site: null
  gratuito: number
  url_ingresso: string
  datahora_inicio_f: string
  datahora_fim_f: string
  descricao_t: string
  addresses: Address[]
  images: Image[]
  phones: Phone[]
  categorias: Category[]
  estruturas: Struct[]
  formas_pagamento: []
  redes: SocialMedia[]
  restricoes: Restrictions[]
  panoramas: []
}
