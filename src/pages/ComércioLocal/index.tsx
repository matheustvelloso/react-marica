import { memo } from 'react'

import { ComércioLocalProvider } from 'context/ComércioLocalContext'

import ComércioLocalPage from './ComércioLocalPage'

const PontosTurísticos: React.FC = () => {
  return (
    <ComércioLocalProvider>
      <ComércioLocalPage />
    </ComércioLocalProvider>
  )
}

export default memo(PontosTurísticos)
