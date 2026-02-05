import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederalMarcosGabaYGelo() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VIUDA FEDERAL, MARCOS GABA Y GELO/FLYER 1.webp",
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VIUDA FEDERAL, MARCOS GABA Y GELO/FLYER 2.webp"
    ],
    descripcion: "Flyer para Viuda Federal, Marcos Gaba y Gelo",
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
