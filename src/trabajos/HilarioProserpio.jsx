import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function HilarioProserpio() {
  const trabajo = {
    imagenes: [
      "/flyers_de_Música/hilario_proserpio/flyer_jpg"
    ],
    descripción: "Flyer para el show de Hilario Proserpio",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="HILARIO PROSERPIO"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default HilarioProserpio;
