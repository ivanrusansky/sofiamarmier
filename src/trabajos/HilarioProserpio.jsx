import React from "react";
import TrabajosPage from "../TrabajosPage";

function HilarioProserpio() {
  const trabajo = {
    imagenes: [
      "/flyers_de_musica/hilario_proserpio/flyer_jpg"
    ],
    descripcion: "Flyer para el show de Hilario Proserpio",
    cliente: "Hilario Proserpio",
    año: "2024",
    tecnicas: ["Diseño gráfico", "Ilustración digital"]
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
