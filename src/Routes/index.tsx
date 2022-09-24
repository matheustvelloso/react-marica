import { memo } from 'react'

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import BaresERestaurantes from 'pages/BaresERestaurantes'
import Home from 'pages/Home'
import HotéisEPousadas from 'pages/HotéisEPousadas'
import NotFound from 'pages/NotFound'
import PontosTurísticos from 'pages/PontosTurísticos'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/pontos-turisticos" element={<PontosTurísticos />} />
        <Route path="/hoteis-e-pousadas" element={<HotéisEPousadas />} />
        <Route path="/bares-e-restaurantes" element={<BaresERestaurantes />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  )
}

export default memo(Routes)
