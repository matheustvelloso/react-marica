import { memo } from 'react'

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import BarERestaurante from 'pages/BarERestaurante'
import BaresERestaurantes from 'pages/BaresERestaurantes'
import Comércio from 'pages/Comércio'
import ComércioLocal from 'pages/ComércioLocal'
import EspaçoParaEventos from 'pages/EspaçoParaEventos'
import EspaçosParaEventos from 'pages/EspaçosParaEventos'
import Evento from 'pages/Evento'
import Eventos from 'pages/Eventos'
import Home from 'pages/Home'
import HotéisEPousadas from 'pages/HotéisEPousadas'
import HotelEPousada from 'pages/HotelEPousada'
import Mapa from 'pages/Mapa'
import NotFound from 'pages/NotFound'
import PontosTurísticos from 'pages/PontosTurísticos'
import PontoTurístico from 'pages/PontoTurístico'
import SobreACidade from 'pages/SobreACidade'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/pontos-turisticos" element={<PontosTurísticos />} />
        <Route path="/ponto-turistico/:id" element={<PontoTurístico />} />
        <Route path="/hoteis-e-pousadas" element={<HotéisEPousadas />} />
        <Route path="/hotel-e-pousada/:id" element={<HotelEPousada />} />
        <Route path="/bares-e-restaurantes" element={<BaresERestaurantes />} />
        <Route path="/bar-e-restaurante/:id" element={<BarERestaurante />} />
        <Route path="/comercio-local" element={<ComércioLocal />} />
        <Route path="/comercio/:id" element={<Comércio />} />
        <Route path="/espacos-para-eventos" element={<EspaçosParaEventos />} />
        <Route
          path="/espaco-para-eventos/:id"
          element={<EspaçoParaEventos />}
        />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/evento/:id" element={<Evento />} />
        <Route path="/sobre-a-cidade" element={<SobreACidade />} />
        <Route path="/mapa/:name/:title" element={<Mapa />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  )
}

export default memo(Routes)
