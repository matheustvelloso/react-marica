import { memo } from 'react'

import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md'

import { useBannersHeader } from 'context/BannerHeaderContext'

const BannerHeader: React.FC = () => {
  const { banners } = useBannersHeader()
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade mt-3"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {banners &&
          banners.map((banner) => (
            <div>
              <img src={banner.image_l} alt={banner.url} />
            </div>
          ))}
      </div>
      <button
        className="carousel-control-prev justify-content-start ms-3"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span style={{ fontSize: '28px', color: '#333' }}>
          <MdArrowBackIos />
        </span>
      </button>
      <button
        className="carousel-control-next d-flex justify-content-end me-3"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span style={{ fontSize: '28px', color: '#333' }}>
          <MdArrowForwardIos />
        </span>
      </button>
    </div>
  )
}

export default memo(BannerHeader)
