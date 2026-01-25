import React from "react";
import TrabajosPage from "../TrabajosPage";

function BrooksYViudaFederal() {
  const trabajo = {
    imagenes: [
      "/flyers_de_musica/brooks_y_viuda_federal/visualizador_1_jpg"
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
