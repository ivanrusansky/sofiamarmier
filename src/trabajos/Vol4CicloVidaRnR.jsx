import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function Vol4CicloVidaRnR() {
  const trabajo = {
    imagenes: [
      "/flyers_de_Música/vol_4_ciclo_vida_rnr/volumen_4_1_jpg"
    ],
    descripción: "Flyer para Volumen 4 del Ciclo Vida RnR",
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
