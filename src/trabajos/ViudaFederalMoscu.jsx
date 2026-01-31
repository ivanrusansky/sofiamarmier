import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederalMoscu() {
  const trabajo = {
    imagenes: [
      "/flyers_de_musica/viuda_federal_moscu/pag_1"
    ],
    descripcion: "Flyer para Viuda Federal en Moscú",
      año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="VIUDA FEDERAL MOSCÚ"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default ViudaFederalMoscu;
