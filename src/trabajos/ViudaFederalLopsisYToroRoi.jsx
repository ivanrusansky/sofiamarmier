import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederalLopsisYToroRoi() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VIUDA FEDERAL, LOPSIS Y TORO ROI/FLYER (3).webp",
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VIUDA FEDERAL, LOPSIS Y TORO ROI/FLYER (4).webp"
    ],
    descripcion: "Flyer para Viuda Federal, Lopsis y Toro Roi",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="VIUDA FEDERAL LOPSIS Y TORO ROI"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default ViudaFederalLopsisYToroRoi;
