import { useCallback, useEffect, useMemo, useState } from 'react'

import MaricaApi from 'services/MaricaClient'

import { BannerType } from 'types/BannerType'

type BannerHeaderType = () => {
  banners: BannerType[] | undefined
  loading: boolean
}

const useBannerHeader: BannerHeaderType = () => {
  const [banners, setBanners] = useState<BannerType[]>()
  const [loading, setLoading] = useState(false)

  const fetchBanners = useCallback(async () => {
    setLoading(true)
    try {
      const { data } = await MaricaApi.get('/banners')
      setBanners(data)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchBanners()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return useMemo(
    () => ({
      banners,
      loading,
    }),
    [banners, loading],
  )
}

export default useBannerHeader
