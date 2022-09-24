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

  const fetchMotelAndInn = useCallback(async () => {
    const {
      data: { categorias, collection },
    } = await MaricaApi.get('/hoteis-e-pousadas')
    setMotelAndInn(collection)
    setCategory(categorias)
  }, [])

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
        }),
        [category, motelAndInn],
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
