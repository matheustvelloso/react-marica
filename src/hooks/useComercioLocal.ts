import { useCallback, useEffect, useMemo, useState } from 'react'

import MaricaApi from 'services/MaricaClient'

import { Category } from 'types/CategoryType'
import { Market } from 'types/MarketType'
import { SimpleMarket } from 'types/SimpleMarketType'

type ComercioLocalType = () => {
  markets: Market[] | undefined
  market: SimpleMarket | undefined
  category: Category[] | undefined
  loading: boolean
  fetchMarkets: () => Promise<void>
  searchMarkets: (busca: string) => Promise<void>
  fetchCategory: (id: number) => Promise<void>
  fetchMarket: (pointId: string) => Promise<void>
  loadingPage: boolean
}

const useComercioLocal: ComercioLocalType = () => {
  const [markets, setMarkets] = useState<Market[]>()
  const [category, setCategory] = useState<Category[]>()
  const [loading, setLoading] = useState(false)
  const [loadingPage, setLoadingPage] = useState(false)
  const [market, setMarket] = useState<SimpleMarket>()

  const setLoadingTimeout = useCallback(() => {
    setLoadingPage(false)
  }, [])

  const fetchMarkets = useCallback(async () => {
    setLoading(true)
    try {
      const {
        data: { categorias, collection },
      } = await MaricaApi.get('/comercios')
      setCategory(categorias)
      setMarkets(collection)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  const searchMarkets = useCallback(async (busca: string) => {
    setLoading(true)
    try {
      const {
        data: { categorias, collection },
      } = await MaricaApi.get('/comercios/busca', {
        params: {
          busca,
        },
      })
      setCategory(categorias)
      setMarkets(collection)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchMarket = useCallback(
    async (pointId: string) => {
      setLoadingPage(true)
      try {
        const {
          data: { item },
        } = await MaricaApi.get(`/comercios/${pointId}`)
        setMarket(item)
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      } finally {
        setTimeout(setLoadingTimeout, 1000)
      }
    },
    [setLoadingTimeout],
  )

  const fetchCategory = useCallback(async (id: number) => {
    setLoading(true)
    try {
      const {
        data: { categorias, collection },
      } = await MaricaApi.get(`/comercios/categorias/${id}`)
      setCategory(categorias)
      setMarkets(collection)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchMarkets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return useMemo(
    () => ({
      markets,
      market,
      category,
      loading,
      fetchMarkets,
      searchMarkets,
      fetchCategory,
      fetchMarket,
      loadingPage,
    }),
    [
      category,
      fetchCategory,
      fetchMarket,
      fetchMarkets,
      loading,
      market,
      markets,
      searchMarkets,
      loadingPage,
    ],
  )
}

export default useComercioLocal
