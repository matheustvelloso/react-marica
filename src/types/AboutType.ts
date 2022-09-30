export type About = {
  id: number
  nome: string
  email: string
  sobre: {
    id: number
    app_id: number
    content: string
  }
}
