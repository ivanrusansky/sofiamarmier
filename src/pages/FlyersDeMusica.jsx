import React from "react";
import ProyectosPage from "../ProyectosPage";

function FlyersDeMusica() {
  const proyectos = [
    { nombre: "adan buenos ayres", descripcion: "", imagen: "/flyers_de_musica/adan_buenos_ayres/flyer_jpg", ruta: "/trabajo/adan-buenos-ayres" },
    { nombre: "bastro", descripcion: "", imagen: "/flyers_de_musica/BASTRO/la_luna_jpg", ruta: "/trabajo/bastro" },
    { nombre: "brooks cafe berlin", descripcion: "", imagen: "/flyers_de_musica/brooks_cafe_berlin/pag_1", ruta: "/trabajo/brooks-cafe-berlin" },
    { nombre: "brooks the roxy", descripcion: "", imagen: "/flyers_de_musica/brooks_the_roxy/pag_1", ruta: "/trabajo/brooks-the-roxy" },
    { nombre: "brooks y viuda federal", descripcion: "", imagen: "/flyers_de_musica/brooks_y_viuda_federal/visualizador_1_jpg", ruta: "/trabajo/brooks-y-viuda-federal" },
    { nombre: "brooks daltonica y hormigas fc", descripcion: "", imagen: "/flyers_de_musica/brooks_daltonica_y_hormigas_fc/pag_1", ruta: "/trabajo/brooks-daltonica-y-hormigas-fc" },
    { nombre: "daltonica kavala y grela", descripcion: "", imagen: "/flyers_de_musica/daltonica_kavala_y_grela/flyers_3_jpg", ruta: "/trabajo/daltonica-kavala-y-grela" },
    { nombre: "diadema", descripcion: "", imagen: "/flyers_de_musica/DIADEMA/flyer_animado_mp4", sinImagen: true },
    { nombre: "hilario proserpio", descripcion: "", imagen: "/flyers_de_musica/hilario_proserpio/flyer_jpg", ruta: "/trabajo/hilario-proserpio" },
    { nombre: "jeremias marful hilario proserpio y saturnino y las ideas", descripcion: "", imagen: "/flyers_de_musica/jeremias_marful_hilario_proserpio_y_saturnino_y_las_ideas/pag_1", ruta: "/trabajo/jeremias-marful-hilario-proserpio" },
    { nombre: "santiago leavy quinteto", descripcion: "", imagen: "/flyers_de_musica/santiago_leavy_quinteto/flyer_jpg", ruta: "/trabajo/santiago-leavy-quinteto" },
    { nombre: "sofia pereyra irina sofa zila y oli cuan", descripcion: "", imagen: "/flyers_de_musica/sofia_pereyra_irina_sofa_zila_y_oli_cuan/flyer_jpg", ruta: "/trabajo/sofia-pereyra-irina-sofa-zila-y-oli-cuan" },
    { nombre: "viuda federal 2025", descripcion: "", imagen: "/flyers_de_musica/viuda_federal_2025/intento_3_jpg", ruta: "/trabajo/viuda-federal-2025" },
    { nombre: "viuda federal moscu", descripcion: "", imagen: "/flyers_de_musica/viuda_federal_moscu/pag_1", ruta: "/trabajo/viuda-federal-moscu" },
    { nombre: "viuda federal pre escucha", descripcion: "", imagen: "/flyers_de_musica/viuda_federal_pre_escucha/flyer_1_png", ruta: "/trabajo/viuda-federal-pre-escucha" },
    { nombre: "viuda federal y kons", descripcion: "", imagen: "/flyers_de_musica/viuda_federal_y_kons/flyer_3_jpg", ruta: "/trabajo/viuda-federal-y-kons" },
    { nombre: "viuda federal lopsis y toro roi", descripcion: "", imagen: "/flyers_de_musica/viuda_federal_lopsis_y_toro_roi/flyer_3_png", ruta: "/trabajo/viuda-federal-lopsis-y-toro-roi" },
    { nombre: "viuda federal marcos gaba y gelo", descripcion: "", imagen: "/flyers_de_musica/viuda_federal_marcos_gaba_y_gelo/flyer_1_png", ruta: "/trabajo/viuda-federal-marcos-gaba-y-gelo" },
    { nombre: "vol1 ciclo vida rnr", descripcion: "", imagen: "/flyers_de_musica/vol_1_ciclo_vida_rnr/volumen_1_1_jpg", ruta: "/trabajo/vol1-ciclo-vida-rnr" },
    { nombre: "vol2 ciclo vida rnr", descripcion: "", imagen: "/flyers_de_musica/vol_2_ciclo_vida_rnr/volumen_2_1_jpg", ruta: "/trabajo/vol2-ciclo-vida-rnr" },
    { nombre: "vol3 ciclo vida rnr", descripcion: "", imagen: "/flyers_de_musica/vol_3_ciclo_vida_rnr/volumen_3_1_jpg", ruta: "/trabajo/vol3-ciclo-vida-rnr" },
    { nombre: "vol4 ciclo vida rnr", descripcion: "", imagen: "/flyers_de_musica/vol_4_ciclo_vida_rnr/volumen_4_1_jpg", ruta: "/trabajo/vol4-ciclo-vida-rnr" },
    { nombre: "vol5 ciclo vida rnr", descripcion: "", imagen: "/flyers_de_musica/vol_5_ciclo_vida_rnr/feed_jpg", ruta: "/trabajo/vol5-ciclo-vida-rnr" },
  ];
  return (
    <ProyectosPage categoria="diseño gráfico" titulo="FLYERS DE MÚSICA" proyectos={proyectos} colorHover="#c4a312" />
  );
}
export default FlyersDeMusica;
