import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function Vol2CicloVidaRnR() {
  const trabajo = {
    imagenes: [
      "/flyers_de_Música/vol_2_ciclo_vida_rnr/volumen_2_1_jpg"
    ],
    descripción: "Flyer para Volumen 2 del Ciclo Vida RnR",
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
