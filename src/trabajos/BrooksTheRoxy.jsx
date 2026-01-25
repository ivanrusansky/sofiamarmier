import React from "react";
import TrabajosPage from "../TrabajosPage";

function BrooksTheRoxy() {
  const trabajo = {
    imagenes: [
      "/flyers_de_musica/brooks_the_roxy/pag_1"
    ],
    descripcion: "Flyer para Brooks en The Roxy",
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
