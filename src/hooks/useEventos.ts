import { useCallback, useEffect, useMemo, useState } from 'react'

import MaricaApi from 'services/MaricaClient'

import { Category } from 'types/CategoryType'
import { Event } from 'types/EventType'
import { SimpleEvent } from 'types/SimpleEventType'

type EventosType = () => {
  events: Event[] | undefined
  event: SimpleEvent | undefined
  category: Category[] | undefined
  fetchEvents: () => Promise<void>
  searchEvents: (busca: string) => Promise<void>
  fetchCategory: (id: number) => Promise<void>
  fetchEvent: (pointId: string) => Promise<void>
}

const useEventos: EventosType = () => {
  const [events, setEvents] = useState<Event[]>()
  const [category, setCategory] = useState<Category[]>()
  const [loading, setLoading] = useState(false)
  const [event, setEvent] = useState<SimpleEvent>()

  const fetchEvents = useCallback(async () => {
    try {
      setLoading(true)
      const {
        data: { categorias, collection },
      } = await MaricaApi.get('/eventos')
      setCategory(categorias)
      setEvents(collection)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  const searchEvents = useCallback(async (busca: string) => {
    try {
      setLoading(true)
      const {
        data: { categorias, collection },
      } = await MaricaApi.get('/eventos/busca', {
        params: {
          busca,
        },
      })
      setCategory(categorias)
      setEvents(collection)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchEvent = useCallback(async (pointId: string) => {
    try {
      setLoading(true)
      const {
        data: { item },
      } = await MaricaApi.get(`/eventos/${pointId}`)
      setEvent(item)
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
      } = await MaricaApi.get(`/eventos/categorias/${id}`)
      setCategory(categorias)
      setEvents(collection)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchEvents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return useMemo(
    () => ({
      events,
      event,
      loading,
      category,
      fetchEvents,
      searchEvents,
      fetchEvent,
      fetchCategory,
    }),
    [
      category,
      event,
      events,
      fetchCategory,
      fetchEvent,
      fetchEvents,
      loading,
      searchEvents,
    ],
  )
}

export default useEventos
