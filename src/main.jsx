import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Index from './Index.jsx'
import Fanzine from './pages/Fanzine.jsx'
import FlyersDeMusica from './pages/FlyersDeMusica.jsx'
import Posters from './pages/Posters.jsx'
import Tapas from './pages/Tapas.jsx'
import Tarjetas from './pages/Tarjetas.jsx'
import Amueblados from './pages/Amueblados.jsx'
import Gastronomia from './pages/Gastronomia.jsx'
import Grabaciones from './pages/Grabaciones.jsx'
import Indumentaria from './pages/Indumentaria.jsx'
import Negativos from './pages/Negativos.jsx'
import Sesiones from './pages/Sesiones.jsx'
import Vivo from './pages/Vivo.jsx'
import SesionesEnVivo from './pages/SesionesEnVivo.jsx'
import ShowsEnVivo from './pages/ShowsEnVivo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/diseno-grafico/fanzine" element={<Fanzine />} />
        <Route path="/diseno-grafico/flyers-de-musica" element={<FlyersDeMusica />} />
        <Route path="/diseno-grafico/posters" element={<Posters />} />
        <Route path="/diseno-grafico/tapas" element={<Tapas />} />
        <Route path="/diseno-grafico/tarjetas" element={<Tarjetas />} />
        <Route path="/fotografia/amueblados" element={<Amueblados />} />
        <Route path="/fotografia/gastronomia" element={<Gastronomia />} />
        <Route path="/fotografia/grabaciones" element={<Grabaciones />} />
        <Route path="/fotografia/indumentaria" element={<Indumentaria />} />
        <Route path="/fotografia/negativos" element={<Negativos />} />
        <Route path="/fotografia/sesiones" element={<Sesiones />} />
        <Route path="/fotografia/vivo" element={<Vivo />} />
        <Route path="/audiovisual/sesiones-en-vivo" element={<SesionesEnVivo />} />
        <Route path="/audiovisual/shows-en-vivo" element={<ShowsEnVivo />} />
      </Routes>
    </Router>
  </StrictMode>,
)
