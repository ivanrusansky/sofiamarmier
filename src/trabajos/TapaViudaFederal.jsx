import React from "react";
import TrabajosPage from "../TrabajosPage";

function TapaViudaFederal() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/d/1uZd79vyk7JIBBuC1ZEKUhQ8OuNicu9sF"
    ],
    descripcion: "Diseño de tapa para Viuda Federal",
    cliente: "Viuda Federal",
    año: "2024",
    tecnicas: ["Diseño gráfico", "Ilustración digital", "Diseño editorial"]
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="VIUDA FEDERAL"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/tapas"
    />
  );
}

export default TapaViudaFederal;
