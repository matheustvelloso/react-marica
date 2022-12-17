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
}

const useHoteisEPousadas: HoteisEPousadasType = () => {
  const [motelAndInn, setMotelAndInn] = useState<MotelAndInn[]>()
  const [category, setCategory] = useState<Category[]>()
  const [loading, setLoading] = useState(false)
  const [simpleMotelAndInn, setSimpleMotelAndInn] =
    useState<SimpleMotelAndInn>()

  const fetchMotelAndInn = useCallback(async () => {
    try {
      setLoading(true)
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
    try {
      setLoading(true)
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
    try {
      setLoading(true)
      const {
        data: { item },
      } = await MaricaApi.get(`/hoteis-e-pousadas/${pointId}`)
      setSimpleMotelAndInn(item)
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
    ],
  )
}

export default useHoteisEPousadas
