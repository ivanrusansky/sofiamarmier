import React from "react";
import TrabajosPage from "../TrabajosPage";

function BrooksDaltonicaYHormigasFC() {
  const trabajo = {
    imagenes: [
      "/flyers_de_musica/brooks_daltonica_y_hormigas_fc/pag_1",
      "/flyers_de_musica/brooks_daltonica_y_hormigas_fc/pag_2"
    ],
    descripcion: "Flyer para el evento de Brooks, Daltónica y Hormigas FC",
    cliente: "Brooks, Daltónica, Hormigas FC",
    año: "2024",
    tecnicas: ["Diseño gráfico", "Ilustración digital"]
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="BROOKS DALTÓNICA Y HORMIGAS FC"
      trabajo={trabajo}
      colorHover="#f0ec10"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default BrooksDaltonicaYHormigasFC;
