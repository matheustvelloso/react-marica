import { memo } from 'react'

import { BannerHeaderProvider } from 'context/BannerHeaderContext'

import BannerHeaderComponent from './BannerHeaderComponent'

const BannerHeader: React.FC = () => {
  return (
    <BannerHeaderProvider>
      <BannerHeaderComponent />
    </BannerHeaderProvider>
  )
}

export default memo(BannerHeader)
