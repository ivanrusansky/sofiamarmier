import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederalMarcosGabaYGelo() {
  const trabajo = {
    imagenes: [
      "/flyers_de_musica/viuda_federal_marcos_gaba_y_gelo/flyer_1_png"
    ],
    descripcion: "Flyer para Viuda Federal, Marcos Gaba y Gelo",
    cliente: "Viuda Federal, Marcos Gaba, Gelo",
    año: "2024",
    tecnicas: ["Diseño gráfico", "Ilustración digital"]
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="VIUDA FEDERAL MARCOS GABA Y GELO"
      trabajo={trabajo}
      colorHover="#c4a312"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default ViudaFederalMarcosGabaYGelo;
