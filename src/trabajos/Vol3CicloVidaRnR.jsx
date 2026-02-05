import React from "react";
import TrabajosPage from "../TrabajosPage";

function Vol3CicloVidaRnR() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VOL.3 CICLO VIDA RNR/VOLUMEN 3_1.webp",
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VOL.3 CICLO VIDA RNR/VOLUMEN 3_2.webp"
    ],
    descripcion: "Flyer para Volumen 3 del Ciclo Vida RnR",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="VOL3 CICLO VIDA RNR"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default Vol3CicloVidaRnR;
