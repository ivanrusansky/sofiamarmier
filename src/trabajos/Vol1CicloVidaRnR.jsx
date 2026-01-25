import React from "react";
import TrabajosPage from "../TrabajosPage";

function Vol1CicloVidaRnR() {
  const trabajo = {
    imagenes: [
      "/flyers_de_musica/vol_1_ciclo_vida_rnr/volumen_1_1_jpg"
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
