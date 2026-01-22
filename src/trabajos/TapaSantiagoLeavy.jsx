import React from "react";
import TrabajosPage from "../TrabajosPage";

function TapaSantiagoLeavy() {
  const trabajo = {
    imagenes: [
      "/proyectos/tapas/santiago-leavy.jpg"
    ],
    descripcion: "Diseño de tapa para Santiago Leavy",
    cliente: "Santiago Leavy",
    año: "2024",
    tecnicas: ["Diseño gráfico", "Ilustración digital", "Diseño editorial"]
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="SANTIAGO LEAVY"
      trabajo={trabajo}
      colorHover="#c4a312"
      rutaVolver="/diseno-grafico/tapas"
    />
  );
}

export default TapaSantiagoLeavy;
