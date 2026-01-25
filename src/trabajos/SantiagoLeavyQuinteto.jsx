import React from "react";
import TrabajosPage from "../TrabajosPage";

function SantiagoLeavyQuinteto() {
  const trabajo = {
    imagenes: [
      "/flyers_de_musica/santiago_leavy_quinteto/flyer_jpg"
    ],
    descripcion: "Flyer para Santiago Leavy Quinteto",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="SANTIAGO LEAVY QUINTETO"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default SantiagoLeavyQuinteto;
