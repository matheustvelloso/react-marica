import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import MaricaApi from 'services/MaricaClient'

import { BannerType } from 'types/BannerType'

interface IContextProps {
  banners: BannerType[] | undefined
}

interface IBannerHeaderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const BannerHeaderProvider: React.FC<IBannerHeaderProps> = ({
  children,
}) => {
  const [banners, setBanners] = useState<BannerType[]>()

  const fetchBanners = useCallback(async () => {
    const { data } = await MaricaApi.get('/banners')
    setBanners(data)
  }, [])
  useEffect(() => {
    fetchBanners()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          banners,
        }),
        [banners],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useBannersHeader = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useBannersHeader must be within BannerHeaderProvider')
  }

  return context
}
