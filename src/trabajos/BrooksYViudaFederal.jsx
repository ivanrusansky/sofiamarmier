import React from "react";
import TrabajosPage from "../TrabajosPage";

function BrooksYViudaFederal() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/BROOKS Y VIUDA FEDERAL/VISUALIZADOR_1.webp",
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/BROOKS Y VIUDA FEDERAL/VISUALIZADOR_2.webp"
    ],
    descripcion: "Flyer para el evento de Brooks y Viuda Federal",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="BROOKS Y VIUDA FEDERAL"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default BrooksYViudaFederal;
