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
import MapaBaresERestaurantes from 'pages/MapaBaresERestaurantes'
import MapaComércioLocal from 'pages/MapaComércioLocal'
import MapaEspaçosParaEventos from 'pages/MapaEspaçosParaEventos'
import MapaEventos from 'pages/MapaEventos'
import MapaHotéisEPousadas from 'pages/MapaHotéisEPousadas'
import MapaPontosTurísticos from 'pages/MapaPontosTurísticos'
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
        <Route path="/pontos-turisticos/:id" element={<PontoTurístico />} />
        <Route path="/hoteis-e-pousadas" element={<HotéisEPousadas />} />
        <Route path="/hoteis-e-pousadas/:id" element={<HotelEPousada />} />
        <Route path="/bares-e-restaurantes" element={<BaresERestaurantes />} />
        <Route path="/bares-e-restaurantes/:id" element={<BarERestaurante />} />
        <Route path="/comercio-local" element={<ComércioLocal />} />
        <Route path="/comercio-local/:id" element={<Comércio />} />
        <Route path="/espacos-para-eventos" element={<EspaçosParaEventos />} />
        <Route
          path="/espacos-para-eventos/:id"
          element={<EspaçoParaEventos />}
        />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/eventos/:id" element={<Evento />} />
        <Route path="/sobre-a-cidade" element={<SobreACidade />} />
        <Route
          path="/mapa/pontos-turisticos"
          element={<MapaPontosTurísticos />}
        />
        <Route
          path="/mapa/hoteis-e-pousadas"
          element={<MapaHotéisEPousadas />}
        />
        <Route
          path="/mapa/bares-e-restaurantes"
          element={<MapaBaresERestaurantes />}
        />
        <Route path="/mapa/comercio-local" element={<MapaComércioLocal />} />
        <Route
          path="/mapa/espacos-para-eventos"
          element={<MapaEspaçosParaEventos />}
        />
        <Route path="/mapa/eventos" element={<MapaEventos />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  )
}

export default memo(Routes)
