import React from "react";
import TrabajosPage from "../TrabajosPage";

function SantiagoLeavyQuinteto() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/SANTIAGO LEAVY QUINTETO/FLYER.webp"
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
