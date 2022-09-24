import { memo } from 'react'

import { HotéisEPousadasProvider } from 'context/HotéisEPousadasContext'

import HotéisEPousadasPage from './HotéisEPousadasPage'

const HotéisEPousadas: React.FC = () => {
  return (
    <HotéisEPousadasProvider>
      <HotéisEPousadasPage />
    </HotéisEPousadasProvider>
  )
}

export default memo(HotéisEPousadas)
