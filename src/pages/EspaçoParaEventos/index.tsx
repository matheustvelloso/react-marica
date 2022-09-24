import { memo } from 'react'

import { EspaçoParaEventosProvider } from 'context/EspaçoParaEventosContext'

import EspaçoParaEventosPage from './EspaçoParaEventosPage'

const EspaçoParaEventos: React.FC = () => {
  return (
    <EspaçoParaEventosProvider>
      <EspaçoParaEventosPage />
    </EspaçoParaEventosProvider>
  )
}

export default memo(EspaçoParaEventos)
