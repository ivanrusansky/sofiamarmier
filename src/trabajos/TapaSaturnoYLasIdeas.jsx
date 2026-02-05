import React from "react";
import TrabajosPage from "../TrabajosPage";

function TapaSaturnoYLasIdeas() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/DISEÑO GRÁFICO/TAPAS/SATURNINO Y LAS IDEAS/SPOTIFY 1.webp"
    ],
    descripcion: "Diseño de tapa para Saturno y Las Ideas",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="SATURNO Y LAS IDEAS"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/tapas"
    />
  );
}

export default TapaSaturnoYLasIdeas;
