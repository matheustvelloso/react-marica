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
import { Place } from 'types/PlacesType'

interface IContextProps {
  places: Place[] | undefined
  category: Category[] | undefined
  fetchEvents: (query?: string, value?: string) => Promise<void>
}

interface IEspaçoParaEventosProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const EspaçoParaEventosProvider: React.FC<IEspaçoParaEventosProps> = ({
  children,
}) => {
  const [places, setEvents] = useState<Place[]>()
  const [category, setCategory] = useState<Category[]>()

  const fetchEvents = useCallback(async (query?: string, value?: string) => {
    const {
      data: { categorias, collection },
    } = await MaricaApi.get(`/espacos${query || ''}`, {
      params: {
        busca: value,
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
          places,
          category,
          fetchEvents,
        }),
        [category, places, fetchEvents],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useEspaçoParaEventos = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error(
      'useEspaçoParaEventos must be within EspaçoParaEventosProvider',
    )
  }

  return context
}
