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
import { Point } from 'types/PointType'

interface IContextProps {
  points: Point[] | undefined
  category: Category[] | undefined
}

interface IPontosTurísticosProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const PontosTurísticosProvider: React.FC<IPontosTurísticosProps> = ({
  children,
}) => {
  const [points, setPoints] = useState<Point[]>()
  const [category, setCategory] = useState<Category[]>()

  const fetchPoints = useCallback(async () => {
    const {
      data: { categorias, collection },
    } = await MaricaApi.get('/pontos')
    setCategory(categorias)
    setPoints(collection)
  }, [])

  useEffect(() => {
    fetchPoints()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          points,
          category,
        }),
        [category, points],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const usePontosTurísticos = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('usePontosTurísticos must be within PontosTurísticosProvider')
  }

  return context
}
