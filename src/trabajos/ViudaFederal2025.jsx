import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederal2025() {
  const trabajo = {
    imagenes: [
      "/flyers_de_musica/viuda_federal_2025/intento_3_jpg"
    ],
    descripcion: "Flyer para Viuda Federal 2025",
    cliente: "Viuda Federal",
    año: "2025",
    tecnicas: ["Diseño gráfico", "Ilustración digital"]
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="VIUDA FEDERAL 2025"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default ViudaFederal2025;
