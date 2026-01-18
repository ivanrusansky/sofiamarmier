import React from "react";
import ProyectosPage from "../ProyectosPage";

function FlyersDeMusica() {
  const proyectos = [
    { nombre: "ADÁN BUENOS AIRES", descripcion: "", imagen: "/proyectos/flyers/adan-buenos-aires.jpg" },
    { nombre: "BASTRO", descripcion: "", imagen: "/proyectos/flyers/bastro.jpg" },
    { nombre: "BROOKS CAFÉ BERLÍN", descripcion: "", imagen: "/proyectos/flyers/brooks-cafe-berlin.jpg" },
    { nombre: "BROOKS THE ROXY", descripcion: "", imagen: "/proyectos/flyers/brooks-the-roxy.jpg" },
    { nombre: "BROOKS Y VIUDA FEDERAL", descripcion: "", imagen: "/proyectos/flyers/brooks-viuda-federal.jpg" },
    { nombre: "BROOKS, DALTONICA Y HONGOS FC", descripcion: "", imagen: "/proyectos/flyers/brooks-daltonica-hongos-fc.jpg" },
    { nombre: "DALTONICA, KAVALA Y GRELA", descripcion: "", imagen: "/proyectos/flyers/daltonica-kavala-grela.jpg" },
    { nombre: "DIADÉMA", descripcion: "", imagen: "/proyectos/flyers/diadema.jpg" },
    { nombre: "HILARIO PROSPERIO", descripcion: "", imagen: "/proyectos/flyers/hilario-prosperio.jpg" },
    { nombre: "JEREMÍAS MARFIL, HILARIO PROSPERIO Y SATURNINO Y LAS IDEAS", descripcion: "", imagen: "/proyectos/flyers/jeremias-marfil-hilario-prosperio-saturnino-ideas.jpg" },
    { nombre: "SANTIAGO LEAVY QUINTETO", descripcion: "", imagen: "/proyectos/flyers/santiago-leavy-quinteto.jpg" },
    { nombre: "SOFIA PEREIRA, IRINA, SOFA, ZILA Y YO CUAN", descripcion: "", imagen: "/proyectos/flyers/sofia-pereira-irina-sofa-zila-yo-cuan.jpg" },
    { nombre: "VIUDA FEDERAL 2025", descripcion: "", imagen: "/proyectos/flyers/viuda-federal-2025.jpg" },
    { nombre: "VIUDA FEDERAL MOSCÚ", descripcion: "", imagen: "/proyectos/flyers/viuda-federal-moscu.jpg" },
    { nombre: "VIUDA FEDERAL PRE ESCUCHA", descripcion: "", imagen: "/proyectos/flyers/viuda-federal-pre-escucha.jpg" },
    { nombre: "VIUDA FEDERAL Y KONS", descripcion: "", imagen: "/proyectos/flyers/viuda-federal-kons.jpg" },
    { nombre: "VIUDA FEDERAL, LOPIS Y TORO ROI", descripcion: "", imagen: "/proyectos/flyers/viuda-federal-lopis-toro-roi.jpg" },
    { nombre: "VIUDA FEDERAL, MARCOS GABA Y GELO", descripcion: "", imagen: "/proyectos/flyers/viuda-federal-marcos-gaba-gelo.jpg" },
    { nombre: "VOL I CICLO VIDA RNR", descripcion: "", imagen: "/proyectos/flyers/vol1-ciclo-vida-rnr.jpg" },
    { nombre: "VOL 2 CICLO VIDA RNR", descripcion: "", imagen: "/proyectos/flyers/vol2-ciclo-vida-rnr.jpg" },
    { nombre: "VOL 3 CICLO VIDA RNR", descripcion: "", imagen: "/proyectos/flyers/vol3-ciclo-vida-rnr.jpg" },
    { nombre: "VOL 4 CICLO VIDA RNR", descripcion: "", imagen: "/proyectos/flyers/vol4-ciclo-vida-rnr.jpg" },
    { nombre: "VOL 5 CICLO VIDA RNR", descripcion: "", imagen: "/proyectos/flyers/vol5-ciclo-vida-rnr.jpg" },
  ];
  return (
    <ProyectosPage categoria="diseño gráfico" titulo="FLYERS DE MÚSICA" proyectos={proyectos} colorHover="#f0ec10" />
  );
}
export default FlyersDeMusica;
