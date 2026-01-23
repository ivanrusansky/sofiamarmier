import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederalPreEscucha() {
  const trabajo = {
    imagenes: [
      "/flyers_de_musica/viuda_federal_pre_escucha/flyer_1_png"
    ],
    descripcion: "Flyer para Pre-escucha de Viuda Federal",
    cliente: "Viuda Federal",
    año: "2024",
    tecnicas: ["Diseño gráfico", "Ilustración digital"]
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
