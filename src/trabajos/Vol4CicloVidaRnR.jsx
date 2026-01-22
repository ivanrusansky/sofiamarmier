import React from "react";
import TrabajosPage from "../TrabajosPage";

function Vol4CicloVidaRnR() {
  const trabajo = {
    imagenes: [
      "/flyers_de_musica/vol_4_ciclo_vida_rnr/volumen_4_1_jpg"
    ],
    descripcion: "Flyer para Volumen 4 del Ciclo Vida RnR",
    cliente: "Ciclo Vida RnR",
    año: "2024",
    tecnicas: ["Diseño gráfico", "Ilustración digital"]
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="VOL4 CICLO VIDA RNR"
      trabajo={trabajo}
      colorHover="#c4a312"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default Vol4CicloVidaRnR;
