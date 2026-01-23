import React from "react";
import TrabajosPage from "../TrabajosPage";

function TapaBrocks() {
  const trabajo = {
    imagenes: [
      "/proyectos/tapas/brocks.jpg"
    ],
    descripcion: "Diseño de tapa para Brocks",
    cliente: "Brocks",
    año: "2024",
    tecnicas: ["Diseño gráfico", "Ilustración digital", "Diseño editorial"]
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
