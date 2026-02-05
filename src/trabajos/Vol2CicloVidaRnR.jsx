import React from "react";
import TrabajosPage from "../TrabajosPage";

function Vol2CicloVidaRnR() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VOL.2 CICLO VIDA RNR/VOLUMEN 2_1.webp",
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VOL.2 CICLO VIDA RNR/VOLUMEN 2_2.webp"
    ],
    descripcion: "Flyer para Volumen 2 del Ciclo Vida RnR",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="VOL2 CICLO VIDA RNR"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default Vol2CicloVidaRnR;
