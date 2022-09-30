/* eslint-disable react/jsx-props-no-spreading */
import { memo } from 'react'

import Slider from 'react-slick'

import { settings } from './constants'

interface ICarouselMultipleItemsProps {
  children?: React.ReactNode
}

const CarouselMultipleItems: React.FC<ICarouselMultipleItemsProps> = ({
  children,
}) => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Slider {...settings}>{children}</Slider>
    </div>
  )
}

export default memo(CarouselMultipleItems)
