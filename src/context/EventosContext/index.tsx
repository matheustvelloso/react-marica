import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import MaricaApi from 'services/MaricaClient'

import { Category } from 'types/CategoryType'
import { Event } from 'types/EventsType'

interface IContextProps {
  events: Event[] | undefined
  category: Category[] | undefined
  fetchEvents: (query?: string, value?: string) => Promise<void>
}

interface IEventosProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const EventosProvider: React.FC<IEventosProps> = ({ children }) => {
  const [events, setEvents] = useState<Event[]>()
  const [category, setCategory] = useState<Category[]>()

  const fetchEvents = useCallback(async (query?: string, value?: string) => {
    const {
      data: { categorias, collection },
    } = await MaricaApi.get(`/eventos${query || ''}`, {
      params: {
        buscs: value,
      },
    })
    setCategory(categorias)
    setEvents(collection)
  }, [])

  useEffect(() => {
    fetchEvents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          events,
          category,
          fetchEvents,
        }),
        [category, events, fetchEvents],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useEventos = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useEventos must be within EventosProvider')
  }

  return context
}
