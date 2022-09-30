import { useCallback, useEffect, useMemo, useState } from 'react'

import MaricaApi from 'services/MaricaClient'

import { Category } from 'types/CategoryType'
import { Point } from 'types/PointType'
import { SimplePoint } from 'types/SimplePointType'

type PontosTuristicosType = () => {
  points: Point[] | undefined
  category: Category[] | undefined
  fetchPoints: () => Promise<void>
  searchPoints: (busca: string) => Promise<void>
  fetchCategory: (id: number) => Promise<void>
  fetchPoint: (pointId: string) => Promise<void>
  loading: boolean
  point: SimplePoint | undefined
}

const usePontosTuristicos: PontosTuristicosType = () => {
  const [points, setPoints] = useState<Point[]>()
  const [category, setCategory] = useState<Category[]>()
  const [loading, setLoading] = useState(false)
  const [point, setPoint] = useState<SimplePoint>()

  const fetchPoints = useCallback(async () => {
    try {
      setLoading(true)
      const {
        data: { categorias, collection },
      } = await MaricaApi.get('/pontos')
      setCategory(categorias)
      setPoints(collection)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  const searchPoints = useCallback(async (busca: string) => {
    try {
      setLoading(true)
      const {
        data: { categorias, collection },
      } = await MaricaApi.get('/pontos/busca', {
        params: {
          busca,
        },
      })
      setPoints(collection)
      setCategory(categorias)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchPoint = useCallback(async (pointId: string) => {
    try {
      setLoading(true)
      const {
        data: { item },
      } = await MaricaApi.get(`/pontos/${pointId}`)
      setPoint(item)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchCategory = useCallback(async (id: number) => {
    try {
      setLoading(true)
      const {
        data: { categorias, collection },
      } = await MaricaApi.get(`/pontos/categorias/${id}`)
      setPoints(collection)
      setCategory(categorias)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPoints()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return useMemo(
    () => ({
      fetchPoints,
      searchPoints,
      fetchCategory,
      fetchPoint,
      point,
      points,
      category,
      loading,
    }),
    [
      fetchPoints,
      points,
      category,
      searchPoints,
      loading,
      fetchCategory,
      point,
      fetchPoint,
    ],
  )
}

export default usePontosTuristicos
