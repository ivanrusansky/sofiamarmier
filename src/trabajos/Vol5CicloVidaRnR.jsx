import React from "react";
import TrabajosPage from "../TrabajosPage";

function Vol5CicloVidaRnR() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VOL.5 CICLO VIDA RNR/FEED .webp",
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VOL.5 CICLO VIDA RNR/FEED 2.webp",
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VOL.5 CICLO VIDA RNR/HISTORIAS3.webp",
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VOL.5 CICLO VIDA RNR/VISUALIZADOR PAG 1.webp",
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VOL.5 CICLO VIDA RNR/VISUALIZADOR PAG 2.webp"
    ],
    descripcion: "Flyer para Volumen 5 del Ciclo Vida RnR",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="VOL5 CICLO VIDA RNR"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default Vol5CicloVidaRnR;
