import { memo } from 'react'

import { BaresERestaurantesProvider } from 'context/BaresERestaurantes'

import BaresERestaurantesPage from './BaresERestaurantesPage'

const PontosTurísticos: React.FC = () => {
  return (
    <BaresERestaurantesProvider>
      <BaresERestaurantesPage />
    </BaresERestaurantesProvider>
  )
}

export default memo(PontosTurísticos)
