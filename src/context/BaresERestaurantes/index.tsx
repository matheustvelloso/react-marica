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

  const fetchPoints = useCallback(async () => {
    const {
      data: { categorias, collection },
    } = await MaricaApi.get('/restaurantes')
    setCategory(categorias)
    setbarAndRestaurant(collection)
  }, [])

  useEffect(() => {
    fetchPoints()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          barAndRestaurant,
          category,
        }),
        [category, barAndRestaurant],
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
