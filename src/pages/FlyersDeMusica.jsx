import React from "react";
import ProyectosPage from "../ProyectosPage";

function FlyersDeMusica() {
  const proyectos = [
    { nombre: "ADAN BUENOS AYRES", descripcion: "", imagen: "/flyers_de_musica/adan_buenos_ayres/flyer_jpg", ruta: "/trabajo/adan-buenos-ayres" },
    { nombre: "BASTRO", descripcion: "", imagen: "/flyers_de_musica/BASTRO/la_luna_jpg", ruta: "/trabajo/bastro" },
    { nombre: "BROOKS CAFE BERLIN", descripcion: "", imagen: "/flyers_de_musica/brooks_cafe_berlin/pag_1", ruta: "/trabajo/brooks-cafe-berlin" },
    { nombre: "BROOKS THE ROXY", descripcion: "", imagen: "/flyers_de_musica/brooks_the_roxy/pag_1", ruta: "/trabajo/brooks-the-roxy" },
    { nombre: "BROOKS Y VIUDA FEDERAL", descripcion: "", imagen: "/flyers_de_musica/brooks_y_viuda_federal/visualizador_1_jpg", ruta: "/trabajo/brooks-y-viuda-federal" },
    { nombre: "BROOKS DALTONICA Y HORMIGAS FC", descripcion: "", imagen: "/flyers_de_musica/brooks_daltonica_y_hormigas_fc/pag_1", ruta: "/trabajo/brooks-daltonica-y-hormigas-fc" },
    { nombre: "DALTONICA KAVALA Y GRELA", descripcion: "", imagen: "/flyers_de_musica/daltonica_kavala_y_grela/flyers_3_jpg", ruta: "/trabajo/daltonica-kavala-y-grela" },
    { nombre: "DIADEMA", descripcion: "", imagen: "/flyers_de_musica/DIADEMA/flyer_animado_mp4", sinImagen: true },
    { nombre: "HILARIO PROSERPIO", descripcion: "", imagen: "/flyers_de_musica/hilario_proserpio/flyer_jpg", ruta: "/trabajo/hilario-proserpio" },
    { nombre: "JEREMIAS MARFUL HILARIO PROSERPIO Y SATURNINO Y LAS IDEAS", descripcion: "", imagen: "/flyers_de_musica/jeremias_marful_hilario_proserpio_y_saturnino_y_las_ideas/pag_1", ruta: "/trabajo/jeremias-marful-hilario-proserpio" },
    { nombre: "SANTIAGO LEAVY QUINTETO", descripcion: "", imagen: "/flyers_de_musica/santiago_leavy_quinteto/flyer_jpg", ruta: "/trabajo/santiago-leavy-quinteto" },
    { nombre: "SOFIA PEREYRA IRINA SOFA ZILA Y OLI CUAN", descripcion: "", imagen: "/flyers_de_musica/sofia_pereyra_irina_sofa_zila_y_oli_cuan/flyer_jpg", ruta: "/trabajo/sofia-pereyra-irina-sofa-zila-y-oli-cuan" },
    { nombre: "VIUDA FEDERAL 2025", descripcion: "", imagen: "/flyers_de_musica/viuda_federal_2025/intento_3_jpg", ruta: "/trabajo/viuda-federal-2025" },
    { nombre: "VIUDA FEDERAL MOSCU", descripcion: "", imagen: "/flyers_de_musica/viuda_federal_moscu/pag_1", ruta: "/trabajo/viuda-federal-moscu" },
    { nombre: "VIUDA FEDERAL PRE ESCUCHA", descripcion: "", imagen: "/flyers_de_musica/viuda_federal_pre_escucha/flyer_1_png", ruta: "/trabajo/viuda-federal-pre-escucha" },
    { nombre: "VIUDA FEDERAL Y KONS", descripcion: "", imagen: "/flyers_de_musica/viuda_federal_y_kons/flyer_3_jpg", ruta: "/trabajo/viuda-federal-y-kons" },
    { nombre: "VIUDA FEDERAL LOPSIS Y TORO ROI", descripcion: "", imagen: "/flyers_de_musica/viuda_federal_lopsis_y_toro_roi/flyer_3_png", ruta: "/trabajo/viuda-federal-lopsis-y-toro-roi" },
    { nombre: "VIUDA FEDERAL MARCOS GABA Y GELO", descripcion: "", imagen: "/flyers_de_musica/viuda_federal_marcos_gaba_y_gelo/flyer_1_png", ruta: "/trabajo/viuda-federal-marcos-gaba-y-gelo" },
    { nombre: "VOL1 CICLO VIDA RNR", descripcion: "", imagen: "/flyers_de_musica/vol_1_ciclo_vida_rnr/volumen_1_1_jpg", ruta: "/trabajo/vol1-ciclo-vida-rnr" },
    { nombre: "VOL2 CICLO VIDA RNR", descripcion: "", imagen: "/flyers_de_musica/vol_2_ciclo_vida_rnr/volumen_2_1_jpg", ruta: "/trabajo/vol2-ciclo-vida-rnr" },
    { nombre: "VOL3 CICLO VIDA RNR", descripcion: "", imagen: "/flyers_de_musica/vol_3_ciclo_vida_rnr/volumen_3_1_jpg", ruta: "/trabajo/vol3-ciclo-vida-rnr" },
    { nombre: "VOL4 CICLO VIDA RNR", descripcion: "", imagen: "/flyers_de_musica/vol_4_ciclo_vida_rnr/volumen_4_1_jpg", ruta: "/trabajo/vol4-ciclo-vida-rnr" },
    { nombre: "VOL5 CICLO VIDA RNR", descripcion: "", imagen: "/flyers_de_musica/vol_5_ciclo_vida_rnr/feed_jpg", ruta: "/trabajo/vol5-ciclo-vida-rnr" },
  ];
  return (
    <ProyectosPage categoria="diseño gráfico" titulo="FLYERS DE MÚSICA" proyectos={proyectos} colorHover="#c4a312" />
  );
}
export default FlyersDeMusica;
