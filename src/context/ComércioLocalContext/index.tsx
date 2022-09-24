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
import { Market } from 'types/MarketType'

interface IContextProps {
  markets: Market[] | undefined
  category: Category[] | undefined
  fetchMarkets: (query?: string, value?: string) => Promise<void>
}

interface IComércioLocalProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const ComércioLocalProvider: React.FC<IComércioLocalProps> = ({
  children,
}) => {
  const [markets, setMarkets] = useState<Market[]>()
  const [category, setCategory] = useState<Category[]>()

  const fetchMarkets = useCallback(async (query?: string, value?: string) => {
    const {
      data: { categorias, collection },
    } = await MaricaApi.get(`/comercios${query || ''}`, {
      params: {
        busca: value,
      },
    })
    setCategory(categorias)
    setMarkets(collection)
  }, [])

  useEffect(() => {
    fetchMarkets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          fetchMarkets,
          markets,
          category,
        }),
        [category, markets, fetchMarkets],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useComércioLocal = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useComércioLocal must be within ComércioLocalProvider')
  }

  return context
}
