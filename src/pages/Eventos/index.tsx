import { memo } from 'react'

import { EventosProvider } from 'context/EventosContext'

import EventosPage from './EventosPage'

const Eventos: React.FC = () => {
  return (
    <EventosProvider>
      <EventosPage />
    </EventosProvider>
  )
}

export default memo(Eventos)
