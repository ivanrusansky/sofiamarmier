import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function ViudaFederalYKons() {
  const trabajo = {
    imagenes: [
      "/flyers_de_Música/viuda_federal_y_kons/flyer_3_jpg"
    ],
    descripción: "Flyer para Viuda Federal y Kons",
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
