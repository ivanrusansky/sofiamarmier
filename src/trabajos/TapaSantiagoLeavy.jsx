import React from "react";
import TrabajosPage from "../TrabajosPage";

function TapaSantiagoLeavy() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/d/1XsVn4-voIkhqAvcU8BGoxLpp6kUKTGra"
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
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/tapas"
    />
  );
}

export default TapaSantiagoLeavy;
