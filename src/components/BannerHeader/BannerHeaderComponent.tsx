import { memo, useState } from 'react'

import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md'

import { useBannersHeader } from 'context/BannerHeaderContext'

const BannerHeader: React.FC = () => {
  const [position, setPosition] = useState(0)
  const { banners } = useBannersHeader()
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {banners?.map((banner, i) => (
          <div className={`carousel-item ${i === position ? 'active' : ''}`}>
            <img src={banner.image_l} alt={banner.url} />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev justify-content-start ms-3"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
        onClick={() => setPosition(position - 1)}
        disabled={position === 0}
      >
        <span style={{ fontSize: '28px', color: '#fff' }}>
          <MdArrowBackIos />
        </span>
      </button>
      <button
        className="carousel-control-next d-flex justify-content-end me-3"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
        onClick={() => setPosition(position + 1)}
        disabled={position === 1}
      >
        <span style={{ fontSize: '28px', color: '#fff' }}>
          <MdArrowForwardIos />
        </span>
      </button>
    </div>
  )
}

export default memo(BannerHeader)
