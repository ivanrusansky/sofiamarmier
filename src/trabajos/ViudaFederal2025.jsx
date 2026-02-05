import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederal2025() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VIUDA FEDERAL 2025/BENJA_.webp",
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VIUDA FEDERAL 2025/FACU.webp",
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VIUDA FEDERAL 2025/INTENTO 2.webp",
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VIUDA FEDERAL 2025/INTENTO 3.webp",
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VIUDA FEDERAL 2025/MANU.webp",
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VIUDA FEDERAL 2025/SAI.webp"
    ],
    descripcion: "Flyer para Viuda Federal 2025",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="VIUDA FEDERAL 2025"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default ViudaFederal2025;
