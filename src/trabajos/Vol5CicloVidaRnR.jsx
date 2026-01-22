import React from "react";
import TrabajosPage from "../TrabajosPage";

function Vol5CicloVidaRnR() {
  const trabajo = {
    imagenes: [
      "/flyers_de_musica/vol_5_ciclo_vida_rnr/feed_jpg"
    ],
    descripcion: "Flyer para Volumen 5 del Ciclo Vida RnR",
    cliente: "Ciclo Vida RnR",
    año: "2024",
    tecnicas: ["Diseño gráfico", "Ilustración digital"]
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="VOL5 CICLO VIDA RNR"
      trabajo={trabajo}
      colorHover="#c4a312"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default Vol5CicloVidaRnR;
