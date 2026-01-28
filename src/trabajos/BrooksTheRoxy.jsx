import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function BrooksTheRoxy() {
  const trabajo = {
    imagenes: [
      "/flyers_de_Música/brooks_the_roxy/pag_1"
    ],
    descripción: "Flyer para Brooks en The Roxy",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="BROOKS THE ROXY"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default BrooksTheRoxy;
