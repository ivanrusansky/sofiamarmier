import React from "react";
import TrabajosPage from "../TrabajosPage";

function TapaBastro() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/DISEÑO GRÁFICO/TAPAS/BASTRO/CORTE MAR DE MIEL.webp",
      "/trabajosimg/DISEÑO GRÁFICO/TAPAS/BASTRO/EP LA LUNA.webp"
    ],
    descripcion: "Diseño de tapa para BASTRO",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="BASTRO"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/tapas"
    />
  );
}

export default TapaBastro;
