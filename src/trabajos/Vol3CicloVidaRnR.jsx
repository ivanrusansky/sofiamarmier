import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function Vol3CicloVidaRnR() {
  const trabajo = {
    imagenes: [
      "/flyers_de_Música/vol_3_ciclo_vida_rnr/volumen_3_1_jpg"
    ],
    descripción: "Flyer para Volumen 3 del Ciclo Vida RnR",
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
