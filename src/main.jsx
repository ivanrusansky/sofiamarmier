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

// Importar trabajos individuales - Flyers de Música
import AdanBuenosAyres from './trabajos/AdanBuenosAyres.jsx'
import Bastro from './trabajos/Bastro.jsx'
import BrooksCafeBerlin from './trabajos/BrooksCafeBerlin.jsx'
import BrooksTheRoxy from './trabajos/BrooksTheRoxy.jsx'
import BrooksYViudaFederal from './trabajos/BrooksYViudaFederal.jsx'
import BrooksDaltonicaYHormigasFC from './trabajos/BrooksDaltonicaYHormigasFC.jsx'
import DaltonicaKavalaYGrela from './trabajos/DaltonicaKavalaYGrela.jsx'
import HilarioProserpio from './trabajos/HilarioProserpio.jsx'
import JeremiasMarfulHilarioProserpio from './trabajos/JeremiasMarfulHilarioProserpio.jsx'
import SantiagoLeavyQuinteto from './trabajos/SantiagoLeavyQuinteto.jsx'
import SofiaPereyraIrinaSofaZilaYOliCuan from './trabajos/SofiaPereyraIrinaSofaZilaYOliCuan.jsx'
import ViudaFederal2025 from './trabajos/ViudaFederal2025.jsx'
import ViudaFederalMoscu from './trabajos/ViudaFederalMoscu.jsx'
import ViudaFederalPreEscucha from './trabajos/ViudaFederalPreEscucha.jsx'
import ViudaFederalYKons from './trabajos/ViudaFederalYKons.jsx'
import ViudaFederalLopsisYToroRoi from './trabajos/ViudaFederalLopsisYToroRoi.jsx'
import ViudaFederalMarcosGabaYGelo from './trabajos/ViudaFederalMarcosGabaYGelo.jsx'
import Vol1CicloVidaRnR from './trabajos/Vol1CicloVidaRnR.jsx'
import Vol2CicloVidaRnR from './trabajos/Vol2CicloVidaRnR.jsx'
import Vol3CicloVidaRnR from './trabajos/Vol3CicloVidaRnR.jsx'
import Vol4CicloVidaRnR from './trabajos/Vol4CicloVidaRnR.jsx'
import Vol5CicloVidaRnR from './trabajos/Vol5CicloVidaRnR.jsx'

// Importar trabajos individuales - Tapas, Posters, Tarjetas, Fanzine
import TapaBastro from './trabajos/TapaBastro.jsx'
import TapaBrocks from './trabajos/TapaBrocks.jsx'
import TapaSantiagoLeavy from './trabajos/TapaSantiagoLeavy.jsx'
import TapaSaturnoYLasIdeas from './trabajos/TapaSaturnoYLasIdeas.jsx'
import TapaViudaFederal from './trabajos/TapaViudaFederal.jsx'
import PosterBastro from './trabajos/PosterBastro.jsx'
import PosterElMatoNocheNegra from './trabajos/PosterElMatoNocheNegra.jsx'
import PosterIndioSolariTandil from './trabajos/PosterIndioSolariTandil.jsx'
import TarjetaIvanRusansky from './trabajos/TarjetaIvanRusansky.jsx'
import TarjetaMartinaCano from './trabajos/TarjetaMartinaCano.jsx'
import FanzineSaturninoYLasIdeas from './trabajos/FanzineSaturninoYLasIdeas.jsx'

// Importar trabajos individuales - Fotografía
import BarrioCafe from './trabajos/BarrioCafe.jsx'
import VineraVinos from './trabajos/VineraVinos.jsx'
import ImpSaleOtono from './trabajos/ImpSaleOtono.jsx'
import JulianaFayad from './trabajos/JulianaFayad.jsx'
import Michel from './trabajos/Michel.jsx'
import BastroDeltaSound from './trabajos/BastroDeltaSound.jsx'
import BrooksRomaphonic from './trabajos/BrooksRomaphonic.jsx'
import CrisaLaCasona from './trabajos/CrisaLaCasona.jsx'
import SaturninooYLasIdeasMagdalena from './trabajos/SaturninooYLasIdeasMagdalena.jsx'
import ViudaFederalEstudiosIon from './trabajos/ViudaFederalEstudiosIon.jsx'
import ViudaFederalSaldias from './trabajos/ViudaFederalSaldias.jsx'
import NegativosBlancoYNegro from './trabajos/NegativosBlancoYNegro.jsx'
import NegativosColor from './trabajos/NegativosColor.jsx'
import Bastro2025 from './trabajos/Bastro2025.jsx'
import Crisa2023 from './trabajos/Crisa2023.jsx'
import Crisa2025 from './trabajos/Crisa2025.jsx'
import Gaia from './trabajos/Gaia.jsx'
import ViudaFederal2025Sesion from './trabajos/ViudaFederal2025Sesion.jsx'

// Importar trabajos individuales - Vivo
import BrooksCiudadJardin from './trabajos/BrooksCiudadJardin.jsx'
import BrooksLaberinto from './trabajos/BrooksLaberinto.jsx'
import BrooksQuilmesRock from './trabajos/BrooksQuilmesRock.jsx'
import CataCarpenaKonex from './trabajos/CataCarpenaKonex.jsx'
import CrisaAuditorioOeste from './trabajos/CrisaAuditorioOeste.jsx'
import CrisaCCMatienzo from './trabajos/CrisaCCMatienzo.jsx'
import CrisaKonex from './trabajos/CrisaKonex.jsx'
import CrisaNiceto from './trabajos/CrisaNiceto.jsx'
import DematteiLaberinto from './trabajos/DematteiLaberinto.jsx'
import EstoyBienCCMatienzo from './trabajos/EstoyBienCCMatienzo.jsx'
import JeremiasMarful from './trabajos/JeremiasMarful.jsx'
import RevistasAuditorioOeste from './trabajos/RevistasAuditorioOeste.jsx'
import ViudaFederalBibliotecaPopular from './trabajos/ViudaFederalBibliotecaPopular.jsx'
import ViudaFederalLaberinto from './trabajos/ViudaFederalLaberinto.jsx'
import ViudaFederalMoscuVivo from './trabajos/ViudaFederalMoscuVivo.jsx'
import ViudaFederalSala41 from './trabajos/ViudaFederalSala41.jsx'
import VonFrixCamping from './trabajos/VonFrixCamping.jsx'

// Importar trabajos individuales - Audiovisual
import Babeblade from './trabajos/Babeblade.jsx'
import VonFrixSesion from './trabajos/VonFrixSesion.jsx'
import BrocksShow from './trabajos/BrocksShow.jsx'
import HilarioProserpioShow from './trabajos/HilarioProserpioShow.jsx'
import Resbaladizos from './trabajos/Resbaladizos.jsx'
import SadPopClub from './trabajos/SadPopClub.jsx'
import ViudaFederalShow from './trabajos/ViudaFederalShow.jsx'

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

        {/* Rutas de trabajos individuales - Flyers de Música */}
        <Route path="/trabajo/adan-buenos-ayres" element={<AdanBuenosAyres />} />
        <Route path="/trabajo/bastro" element={<Bastro />} />
        <Route path="/trabajo/brooks-cafe-berlin" element={<BrooksCafeBerlin />} />
        <Route path="/trabajo/brooks-the-roxy" element={<BrooksTheRoxy />} />
        <Route path="/trabajo/brooks-y-viuda-federal" element={<BrooksYViudaFederal />} />
        <Route path="/trabajo/brooks-daltonica-y-hormigas-fc" element={<BrooksDaltonicaYHormigasFC />} />
        <Route path="/trabajo/daltonica-kavala-y-grela" element={<DaltonicaKavalaYGrela />} />
        <Route path="/trabajo/hilario-proserpio" element={<HilarioProserpio />} />
        <Route path="/trabajo/jeremias-marful-hilario-proserpio" element={<JeremiasMarfulHilarioProserpio />} />
        <Route path="/trabajo/santiago-leavy-quinteto" element={<SantiagoLeavyQuinteto />} />
        <Route path="/trabajo/sofia-pereyra-irina-sofa-zila-y-oli-cuan" element={<SofiaPereyraIrinaSofaZilaYOliCuan />} />
        <Route path="/trabajo/viuda-federal-2025" element={<ViudaFederal2025 />} />
        <Route path="/trabajo/viuda-federal-moscu" element={<ViudaFederalMoscu />} />
        <Route path="/trabajo/viuda-federal-pre-escucha" element={<ViudaFederalPreEscucha />} />
        <Route path="/trabajo/viuda-federal-y-kons" element={<ViudaFederalYKons />} />
        <Route path="/trabajo/viuda-federal-lopsis-y-toro-roi" element={<ViudaFederalLopsisYToroRoi />} />
        <Route path="/trabajo/viuda-federal-marcos-gaba-y-gelo" element={<ViudaFederalMarcosGabaYGelo />} />
        <Route path="/trabajo/vol1-ciclo-vida-rnr" element={<Vol1CicloVidaRnR />} />
        <Route path="/trabajo/vol2-ciclo-vida-rnr" element={<Vol2CicloVidaRnR />} />
        <Route path="/trabajo/vol3-ciclo-vida-rnr" element={<Vol3CicloVidaRnR />} />
        <Route path="/trabajo/vol4-ciclo-vida-rnr" element={<Vol4CicloVidaRnR />} />
        <Route path="/trabajo/vol5-ciclo-vida-rnr" element={<Vol5CicloVidaRnR />} />

        {/* Rutas de trabajos individuales - Tapas, Posters, Tarjetas, Fanzine */}
        <Route path="/trabajo/tapa-bastro" element={<TapaBastro />} />
        <Route path="/trabajo/tapa-brocks" element={<TapaBrocks />} />
        <Route path="/trabajo/tapa-santiago-leavy" element={<TapaSantiagoLeavy />} />
        <Route path="/trabajo/tapa-saturno-y-las-ideas" element={<TapaSaturnoYLasIdeas />} />
        <Route path="/trabajo/tapa-viuda-federal" element={<TapaViudaFederal />} />
        <Route path="/trabajo/poster-bastro" element={<PosterBastro />} />
        <Route path="/trabajo/poster-el-mato-noche-negra" element={<PosterElMatoNocheNegra />} />
        <Route path="/trabajo/poster-indio-solari-tandil" element={<PosterIndioSolariTandil />} />
        <Route path="/trabajo/tarjeta-ivan-rusansky" element={<TarjetaIvanRusansky />} />
        <Route path="/trabajo/tarjeta-martina-cano" element={<TarjetaMartinaCano />} />
        <Route path="/trabajo/fanzine-saturnino-y-las-ideas" element={<FanzineSaturninoYLasIdeas />} />

        {/* Rutas de trabajos individuales - Fotografía */}
        <Route path="/trabajo/barrio-cafe" element={<BarrioCafe />} />
        <Route path="/trabajo/vinera-vinos" element={<VineraVinos />} />
        <Route path="/trabajo/imp-sale-otono" element={<ImpSaleOtono />} />
        <Route path="/trabajo/juliana-fayad" element={<JulianaFayad />} />
        <Route path="/trabajo/michel" element={<Michel />} />
        <Route path="/trabajo/bastro-delta-sound" element={<BastroDeltaSound />} />
        <Route path="/trabajo/brooks-romaphonic" element={<BrooksRomaphonic />} />
        <Route path="/trabajo/crisa-la-casona" element={<CrisaLaCasona />} />
        <Route path="/trabajo/saturninoo-y-las-ideas-magdalena" element={<SaturninooYLasIdeasMagdalena />} />
        <Route path="/trabajo/viuda-federal-estudios-ion" element={<ViudaFederalEstudiosIon />} />
        <Route path="/trabajo/viuda-federal-saldias" element={<ViudaFederalSaldias />} />
        <Route path="/trabajo/negativos-blanco-y-negro" element={<NegativosBlancoYNegro />} />
        <Route path="/trabajo/negativos-color" element={<NegativosColor />} />
        <Route path="/trabajo/bastro-2025" element={<Bastro2025 />} />
        <Route path="/trabajo/crisa-2023" element={<Crisa2023 />} />
        <Route path="/trabajo/crisa-2025" element={<Crisa2025 />} />
        <Route path="/trabajo/gaia" element={<Gaia />} />
        <Route path="/trabajo/viuda-federal-2025-sesion" element={<ViudaFederal2025Sesion />} />

        {/* Rutas de trabajos individuales - Vivo */}
        <Route path="/trabajo/brooks-ciudad-jardin" element={<BrooksCiudadJardin />} />
        <Route path="/trabajo/brooks-laberinto" element={<BrooksLaberinto />} />
        <Route path="/trabajo/brooks-quilmes-rock" element={<BrooksQuilmesRock />} />
        <Route path="/trabajo/cata-carpena-konex" element={<CataCarpenaKonex />} />
        <Route path="/trabajo/crisa-auditorio-oeste" element={<CrisaAuditorioOeste />} />
        <Route path="/trabajo/crisa-cc-matienzo" element={<CrisaCCMatienzo />} />
        <Route path="/trabajo/crisa-konex" element={<CrisaKonex />} />
        <Route path="/trabajo/crisa-niceto" element={<CrisaNiceto />} />
        <Route path="/trabajo/demattei-laberinto" element={<DematteiLaberinto />} />
        <Route path="/trabajo/estoy-bien-cc-matienzo" element={<EstoyBienCCMatienzo />} />
        <Route path="/trabajo/jeremias-marful" element={<JeremiasMarful />} />
        <Route path="/trabajo/revistas-auditorio-oeste" element={<RevistasAuditorioOeste />} />
        <Route path="/trabajo/viuda-federal-biblioteca-popular" element={<ViudaFederalBibliotecaPopular />} />
        <Route path="/trabajo/viuda-federal-laberinto" element={<ViudaFederalLaberinto />} />
        <Route path="/trabajo/viuda-federal-moscu-vivo" element={<ViudaFederalMoscuVivo />} />
        <Route path="/trabajo/viuda-federal-sala-41" element={<ViudaFederalSala41 />} />
        <Route path="/trabajo/von-frix-camping" element={<VonFrixCamping />} />

        {/* Rutas de trabajos individuales - Audiovisual */}
        <Route path="/trabajo/babeblade" element={<Babeblade />} />
        <Route path="/trabajo/von-frix-sesion" element={<VonFrixSesion />} />
        <Route path="/trabajo/brocks-show" element={<BrocksShow />} />
        <Route path="/trabajo/hilario-proserpio-show" element={<HilarioProserpioShow />} />
        <Route path="/trabajo/resbaladizos" element={<Resbaladizos />} />
        <Route path="/trabajo/sad-pop-club" element={<SadPopClub />} />
        <Route path="/trabajo/viuda-federal-show" element={<ViudaFederalShow />} />
      </Routes>
    </Router>
  </StrictMode>,
)

