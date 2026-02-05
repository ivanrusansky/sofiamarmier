import React from "react";
import TrabajosPage from "../TrabajosPage";

function Vol4CicloVidaRnR() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VOL.4 CICLO VIDA RNR/VOLUMEN 4_1.webp",
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VOL.4 CICLO VIDA RNR/VOLUMEN 4_2.webp"
    ],
    descripcion: "Flyer para Volumen 4 del Ciclo Vida RnR",
      año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="VOL4 CICLO VIDA RNR"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default Vol4CicloVidaRnR;
