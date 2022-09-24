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
import { MotelAndInn } from 'types/MotelAndInnType'

interface IContextProps {
  motelAndInn: MotelAndInn[] | undefined
  category: Category[] | undefined
  fetchMotelAndInn: (query?: string, value?: string) => Promise<void>
}

interface IHotéisEPousadasProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const HotéisEPousadasProvider: React.FC<IHotéisEPousadasProps> = ({
  children,
}) => {
  const [motelAndInn, setMotelAndInn] = useState<MotelAndInn[]>()
  const [category, setCategory] = useState<Category[]>()

  const fetchMotelAndInn = useCallback(
    async (query?: string, value?: string) => {
      const {
        data: { categorias, collection },
      } = await MaricaApi.get(`/hoteis-e-pousadas${query || ''}`, {
        params: {
          busca: value,
        },
      })
      setMotelAndInn(collection)
      setCategory(categorias)
    },
    [],
  )

  useEffect(() => {
    fetchMotelAndInn()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          motelAndInn,
          category,
          fetchMotelAndInn,
        }),
        [category, motelAndInn, fetchMotelAndInn],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useHotéisEPousadas = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useHotéisEPousadas must be within HotéisEPousadasProvider')
  }

  return context
}
