import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function ViudaFederalPreEscucha() {
  const trabajo = {
    imagenes: [
      "/flyers_de_Música/viuda_federal_pre_escucha/flyer_1_png"
    ],
    descripción: "Flyer para Pre-escucha de Viuda Federal",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="VIUDA FEDERAL PRE ESCUCHA"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default ViudaFederalPreEscucha;
