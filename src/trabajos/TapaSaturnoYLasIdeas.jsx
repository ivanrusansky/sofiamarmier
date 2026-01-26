import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function TapaSaturnoYLasIdeas() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/d/15MHP5UvKMXmVVYigWoAaFQUORSh2V8C-"
    ],
    descripción: "diseño de tapa para Saturno y Las Ideas",
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
