import { useCallback, useEffect, useMemo, useState } from 'react'

import MaricaApi from 'services/MaricaClient'

import { Category } from 'types/CategoryType'
import { EventPlace } from 'types/EventPlaceType'
import { SimpleEventPlace } from 'types/SimpleEventPlaceType'

type EspaçoParaEventosType = () => {
  eventsPlaces: EventPlace[] | undefined
  eventPlace: SimpleEventPlace | undefined
  category: Category[] | undefined
  loading: boolean
  fetchEventsPlaces: () => Promise<void>
  searchEventsPlaces: (busca: string) => Promise<void>
  fetchCategory: (id: number) => Promise<void>
  fetchEventPlace: (pointId: string) => Promise<void>
}

const useEspaçoParaEventos: EspaçoParaEventosType = () => {
  const [eventsPlaces, setEventsPlaces] = useState<EventPlace[]>()
  const [category, setCategory] = useState<Category[]>()
  const [loading, setLoading] = useState(false)
  const [eventPlace, setEventPlace] = useState<SimpleEventPlace>()

  const fetchEventsPlaces = useCallback(async () => {
    try {
      setLoading(true)
      const {
        data: { categorias, collection },
      } = await MaricaApi.get('/espacos')
      setCategory(categorias)
      setEventsPlaces(collection)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  const searchEventsPlaces = useCallback(async (busca: string) => {
    try {
      setLoading(true)
      const {
        data: { categorias, collection },
      } = await MaricaApi.get('/espacos/busca', {
        params: {
          busca,
        },
      })
      setCategory(categorias)
      setEventsPlaces(collection)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchEventPlace = useCallback(async (pointId: string) => {
    try {
      setLoading(true)
      const {
        data: { item },
      } = await MaricaApi.get(`/espacos/${pointId}`)
      setEventPlace(item)
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
      } = await MaricaApi.get(`/espacos/categorias/${id}`)
      setCategory(categorias)
      setEventsPlaces(collection)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchEventsPlaces()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return useMemo(
    () => ({
      eventsPlaces,
      eventPlace,
      category,
      loading,
      fetchEventsPlaces,
      searchEventsPlaces,
      fetchCategory,
      fetchEventPlace,
    }),
    [
      loading,
      category,
      eventPlace,
      eventsPlaces,
      fetchCategory,
      fetchEventPlace,
      fetchEventsPlaces,
      searchEventsPlaces,
    ],
  )
}

export default useEspaçoParaEventos
