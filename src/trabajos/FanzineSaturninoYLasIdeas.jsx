import React from "react";
import TrabajosPage from "../TrabajosPage";

function FanzineSaturninoYLasIdeas() {
  const trabajo = {
    imagenes: [
      "/proyectos/fanzine/saturno-y-las-ideas.jpg"
    ],
    descripcion: "Fanzine para Saturnino y Las Ideas",
    cliente: "Saturnino y Las Ideas",
    año: "2024",
    tecnicas: ["Diseño editorial", "Diseño gráfico", "Ilustración"]
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="SATURNINO Y LAS IDEAS"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/fanzine"
    />
  );
}

export default FanzineSaturninoYLasIdeas;
