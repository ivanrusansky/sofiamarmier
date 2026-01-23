import React from "react";
import TrabajosPage from "../TrabajosPage";

function TapaSaturnoYLasIdeas() {
  const trabajo = {
    imagenes: [
      "/proyectos/tapas/saturno-y-las-ideas.jpg"
    ],
    descripcion: "Diseño de tapa para Saturno y Las Ideas",
    cliente: "Saturno y Las Ideas",
    año: "2024",
    tecnicas: ["Diseño gráfico", "Ilustración digital", "Diseño editorial"]
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
