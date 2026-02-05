import React from "react";
import TrabajosPage from "../TrabajosPage";

function Vol1CicloVidaRnR() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VOL.1 CICLO VIDA RNR/VOLUMEN 1_1.webp",
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VOL.1 CICLO VIDA RNR/VOLUMEN 1_2.webp"
    ],
    descripcion: "Flyer para Volumen 1 del Ciclo Vida RnR",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="VOL1 CICLO VIDA RNR"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default Vol1CicloVidaRnR;
