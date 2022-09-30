import { useCallback, useEffect, useMemo, useState } from 'react'

import MaricaApi from 'services/MaricaClient'

import { BarAndRestaurant } from 'types/BarAndRestaurant'
import { Category } from 'types/CategoryType'
import { SimpleBarAndRestaurant } from 'types/SimpleBarAndRestaurantType'

type BaresERestaurantesType = () => {
  barsAndRestaurants: BarAndRestaurant[] | undefined
  barAndRestaurant: SimpleBarAndRestaurant | undefined
  category: Category[] | undefined
  loading: boolean
  fetchBarsAndRestaurants: () => Promise<void>
  searchBarsAndRestaurants: (busca: string) => Promise<void>
  fetchCategory: (id: number) => Promise<void>
  fetchBarAndRestaurant: (pointId: string) => Promise<void>
}

const useBaresERestaurantes: BaresERestaurantesType = () => {
  const [barsAndRestaurants, setBarsAndRestaurants] =
    useState<BarAndRestaurant[]>()
  const [category, setCategory] = useState<Category[]>()
  const [loading, setLoading] = useState(false)
  const [barAndRestaurant, setBarAndRestaurant] =
    useState<SimpleBarAndRestaurant>()

  const fetchBarsAndRestaurants = useCallback(async () => {
    try {
      setLoading(true)
      const {
        data: { categorias, collection },
      } = await MaricaApi.get('/restaurantes')
      setCategory(categorias)
      setBarsAndRestaurants(collection)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  const searchBarsAndRestaurants = useCallback(async (busca: string) => {
    try {
      setLoading(true)
      const {
        data: { categorias, collection },
      } = await MaricaApi.get('/restaurantes/busca', {
        params: {
          busca,
        },
      })
      setBarsAndRestaurants(collection)
      setCategory(categorias)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchBarAndRestaurant = useCallback(async (pointId: string) => {
    try {
      setLoading(true)
      const {
        data: { item },
      } = await MaricaApi.get(`/restaurantes/${pointId}`)
      setBarAndRestaurant(item)
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
      } = await MaricaApi.get(`/restaurantes/categorias/${id}`)
      setCategory(categorias)
      setBarsAndRestaurants(collection)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchBarsAndRestaurants()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return useMemo(
    () => ({
      barsAndRestaurants,
      barAndRestaurant,
      category,
      loading,
      fetchBarsAndRestaurants,
      searchBarsAndRestaurants,
      fetchCategory,
      fetchBarAndRestaurant,
    }),
    [
      barAndRestaurant,
      barsAndRestaurants,
      category,
      loading,
      fetchBarAndRestaurant,
      fetchBarsAndRestaurants,
      fetchCategory,
      searchBarsAndRestaurants,
    ],
  )
}

export default useBaresERestaurantes
