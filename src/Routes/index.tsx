import { memo } from 'react'

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import BaresERestaurantes from 'pages/BaresERestaurantes'
import ComércioLocal from 'pages/ComércioLocal'
import EspaçoParaEventos from 'pages/EspaçoParaEventos'
import Eventos from 'pages/Eventos'
import Home from 'pages/Home'
import HotéisEPousadas from 'pages/HotéisEPousadas'
import NotFound from 'pages/NotFound'
import PontosTurísticos from 'pages/PontosTurísticos'
import SobreACidade from 'pages/SobreACidade'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/pontos-turisticos" element={<PontosTurísticos />} />
        <Route path="/hoteis-e-pousadas" element={<HotéisEPousadas />} />
        <Route path="/bares-e-restaurantes" element={<BaresERestaurantes />} />
        <Route path="/comercio-local" element={<ComércioLocal />} />
        <Route path="/espaco-para-eventos" element={<EspaçoParaEventos />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/sobre-a-cidade" element={<SobreACidade />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  )
}

export default memo(Routes)
