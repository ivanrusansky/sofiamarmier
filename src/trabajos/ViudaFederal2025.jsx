import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function ViudaFederal2025() {
  const trabajo = {
    imagenes: [
      "/flyers_de_Música/viuda_federal_2025/intento_3_jpg"
    ],
    descripción: "Flyer para Viuda Federal 2025",
    año: "2025"
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
