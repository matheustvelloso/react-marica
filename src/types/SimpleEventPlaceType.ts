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
type Equipment = { id: number; label: string; total: number }
type Place = {
  id: number
  espaco_id: number
  nome: string
  descricao: string
  area: number
  pe_direito: number
  medidas: number
  capacidade: number
  ordem: number
}

export type SimpleEventPlace = {
  id: number
  nome: string
  email: string
  site: string
  buffet: number
  descricao_t: string
  addresses: Address[]
  images: Image[]
  horario_funcionamento: OpeningHour[]
  phones: Phone[]
  faixa_preco: number
  categorias: Category[]
  estruturas: Struct[]
  formas_pagamento: PaymentMethod[]
  redes: Medias[]
  restricoes: Restriction[]
  equipamentos: Equipment[]
  espacos: Place[]
  panoramas: []
}
