import React from "react";
import TrabajosPage from "../TrabajosPage";

function TapaViudaFederal() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/DISEÑO GRÁFICO/TAPAS/VIUDA FEDERAL/TAPA FINAL.webp"
    ],
    descripcion: "Diseño de tapa para Viuda Federal",
    año: "2024"
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
