import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederalYKons() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VIUDA FEDERAL Y KONS/FLYER 1.webp",
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VIUDA FEDERAL Y KONS/FLYER 3.webp",
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VIUDA FEDERAL Y KONS/VISUALIZADOR_.webp"
    ],
    descripcion: "Flyer para Viuda Federal y Kons",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="VIUDA FEDERAL Y KONS"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default ViudaFederalYKons;
