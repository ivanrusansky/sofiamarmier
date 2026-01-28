import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function Vol5CicloVidaRnR() {
  const trabajo = {
    imagenes: [
      "/flyers_de_Música/vol_5_ciclo_vida_rnr/feed_jpg"
    ],
    descripción: "Flyer para Volumen 5 del Ciclo Vida RnR",
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
