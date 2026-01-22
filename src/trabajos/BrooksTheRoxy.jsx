import React from "react";
import TrabajosPage from "../TrabajosPage";

function BrooksTheRoxy() {
  const trabajo = {
    imagenes: [
      "/flyers_de_musica/brooks_the_roxy/pag_1"
    ],
    descripcion: "Flyer para Brooks en The Roxy",
    cliente: "Brooks",
    año: "2024",
    tecnicas: ["Diseño gráfico", "Ilustración digital"]
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="BROOKS THE ROXY"
      trabajo={trabajo}
      colorHover="#c4a312"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default BrooksTheRoxy;
