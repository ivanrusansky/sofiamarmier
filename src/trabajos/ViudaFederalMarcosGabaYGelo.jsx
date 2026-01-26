import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function ViudaFederalMarcosGabaYGelo() {
  const trabajo = {
    imagenes: [
      "/flyers_de_Música/viuda_federal_marcos_gaba_y_gelo/flyer_1_png"
    ],
    descripción: "Flyer para Viuda Federal, Marcos Gaba y Gelo",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="VIUDA FEDERAL MARCOS GABA Y GELO"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default ViudaFederalMarcosGabaYGelo;
