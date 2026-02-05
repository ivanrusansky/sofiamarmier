import React from "react";
import TrabajosPage from "../TrabajosPage";

function TapaBrocks() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/DISEÑO GRÁFICO/TAPAS/BROOKS/NETC TAPA.webp"
    ],
    descripcion: "Diseño de tapa para Brocks",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="BROCKS"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/tapas"
    />
  );
}

export default TapaBrocks;
