import { memo } from 'react'

import bannerLoader from 'assets/bannerLoader.webp'

import { CoverLoader } from './styles'

const BannerLoader: React.FC = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <CoverLoader src={bannerLoader} className="img-fluid d-md-inline w-100" />
    </div>
  )
}

export default memo(BannerLoader)
