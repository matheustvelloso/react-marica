import { memo } from 'react'

import Slider from 'react-slick'

import useBannerHeader from 'hooks/useBannerHeader'

const BannerHeader: React.FC = () => {
  const { banners } = useBannerHeader()
  return (
    <Slider>
      {banners?.map((image) => (
        <a key={image.url} href={image.url} target="_blank" rel="noreferrer">
          <img
            className="img-fluid d-none d-md-inline w-100"
            src={image.image_l}
            alt="Conheça Maricá"
          />
          <img
            className="img-fluid d-md-none w-100"
            src={image.image_s}
            alt="Conheça Maricá"
          />
        </a>
      ))}
    </Slider>
  )
}

export default memo(BannerHeader)
