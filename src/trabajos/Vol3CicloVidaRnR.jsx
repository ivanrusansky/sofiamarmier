import React from "react";
import TrabajosPage from "../TrabajosPage";

function Vol3CicloVidaRnR() {
  const trabajo = {
    imagenes: [
      "/flyers_de_musica/vol_3_ciclo_vida_rnr/volumen_3_1_jpg"
    ],
    descripcion: "Flyer para Volumen 3 del Ciclo Vida RnR",
    cliente: "Ciclo Vida RnR",
    año: "2024",
    tecnicas: ["Diseño gráfico", "Ilustración digital"]
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
