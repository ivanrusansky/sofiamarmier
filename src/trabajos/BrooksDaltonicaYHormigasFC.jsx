import React from "react";
import TrabajosPage from "../TrabajosPage";

function BrooksDaltonicaYHormigasFC() {
  const trabajo = {
    imagenes: [
      "/flyers_de_musica/brooks_daltonica_y_hormigas_fc/pag_1",
      "/flyers_de_musica/brooks_daltonica_y_hormigas_fc/pag_2"
    ],
    descripcion: "Flyer para el evento de Brooks, Daltónica y Hormigas FC",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="BROOKS DALTÓNICA Y HORMIGAS FC"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default BrooksDaltonicaYHormigasFC;
