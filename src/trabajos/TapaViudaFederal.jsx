import React from "react";
import TrabajosPage from "../TrabajosPage";

function TapaViudaFederal() {
  const trabajo = {
    imagenes: [
      "/proyectos/tapas/viuda-federal.jpg"
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
      colorHover="#f0ec10"
      rutaVolver="/diseno-grafico/tapas"
    />
  );
}

export default TapaViudaFederal;
