import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import MaricaApi from 'services/MaricaClient'

import { BarAndRestaurant } from 'types/BarAndRestaurant'
import { Category } from 'types/CategoryType'

interface IContextProps {
  barAndRestaurant: BarAndRestaurant[] | undefined
  category: Category[] | undefined
  fetchBarAndRestaurant: (query?: string, value?: string) => Promise<void>
}

interface IBaresERestaurantesProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const BaresERestaurantesProvider: React.FC<IBaresERestaurantesProps> = ({
  children,
}) => {
  const [barAndRestaurant, setbarAndRestaurant] = useState<BarAndRestaurant[]>()
  const [category, setCategory] = useState<Category[]>()

  const fetchBarAndRestaurant = useCallback(
    async (query?: string, value?: string) => {
      const {
        data: { categorias, collection },
      } = await MaricaApi.get(`/restaurantes${query || ''}`, {
        params: {
          busca: value,
        },
      })
      setCategory(categorias)
      setbarAndRestaurant(collection)
    },
    [],
  )

  useEffect(() => {
    fetchBarAndRestaurant()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          barAndRestaurant,
          category,
          fetchBarAndRestaurant,
        }),
        [category, barAndRestaurant, fetchBarAndRestaurant],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useBaresERestaurantes = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error(
      'useBaresERestaurantes must be within BaresERestaurantesProvider',
    )
  }

  return context
}
