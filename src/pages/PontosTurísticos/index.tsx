import { memo } from 'react'

import { PontosTurísticosProvider } from 'context/PontosTurísticosContext'

import PontosTurísticosPage from './PontosTurísticosPage'

const PontosTurísticos: React.FC = () => {
  return (
    <PontosTurísticosProvider>
      <PontosTurísticosPage />
    </PontosTurísticosProvider>
  )
}

export default memo(PontosTurísticos)
