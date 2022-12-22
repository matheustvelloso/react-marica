import { useCallback, useEffect, useMemo, useState } from 'react'

import MaricaApi from 'services/MaricaClient'

import { Category } from 'types/CategoryType'
import { MotelAndInn } from 'types/MotelAndInnType'
import { SimpleMotelAndInn } from 'types/SimpleMotelAndInnType'

type HoteisEPousadasType = () => {
  motelAndInn: MotelAndInn[] | undefined
  simpleMotelAndInn: SimpleMotelAndInn | undefined
  category: Category[] | undefined
  loading: boolean
  fetchMotelAndInn: () => Promise<void>
  searchMotelAndInn: (busca: string) => Promise<void>
  fetchCategory: (id: number) => Promise<void>
  fetchSimpleMotelAndInn: (pointId: string) => Promise<void>
  loadingPage: boolean
}

const useHoteisEPousadas: HoteisEPousadasType = () => {
  const [motelAndInn, setMotelAndInn] = useState<MotelAndInn[]>()
  const [category, setCategory] = useState<Category[]>()
  const [loading, setLoading] = useState(false)
  const [loadingPage, setLoadingPage] = useState(false)
  const [simpleMotelAndInn, setSimpleMotelAndInn] =
    useState<SimpleMotelAndInn>()

  const fetchMotelAndInn = useCallback(async () => {
    setLoading(true)
    try {
      const {
        data: { categorias, collection },
      } = await MaricaApi.get('/hoteis-e-pousadas')
      setCategory(categorias)
      setMotelAndInn(collection)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  const searchMotelAndInn = useCallback(async (busca: string) => {
    setLoading(true)
    try {
      const {
        data: { categorias, collection },
      } = await MaricaApi.get('/hoteis-e-pousadas/busca', {
        params: {
          busca,
        },
      })
      setCategory(categorias)
      setMotelAndInn(collection)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchSimpleMotelAndInn = useCallback(async (pointId: string) => {
    setLoadingPage(true)
    try {
      const {
        data: { item },
      } = await MaricaApi.get(`/hoteis-e-pousadas/${pointId}`)
      setSimpleMotelAndInn(item)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setLoadingPage(false)
    }
  }, [])

  const fetchCategory = useCallback(async (id: number) => {
    setLoading(true)
    try {
      const {
        data: { categorias, collection },
      } = await MaricaApi.get(`/hoteis-e-pousadas/categorias/${id}`)
      setCategory(categorias)
      setMotelAndInn(collection)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchMotelAndInn()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return useMemo(
    () => ({
      fetchMotelAndInn,
      searchMotelAndInn,
      fetchCategory,
      fetchSimpleMotelAndInn,
      simpleMotelAndInn,
      motelAndInn,
      category,
      loading,
      loadingPage,
    }),
    [
      category,
      fetchCategory,
      fetchMotelAndInn,
      fetchSimpleMotelAndInn,
      loading,
      motelAndInn,
      searchMotelAndInn,
      simpleMotelAndInn,
      loadingPage,
    ],
  )
}

export default useHoteisEPousadas
