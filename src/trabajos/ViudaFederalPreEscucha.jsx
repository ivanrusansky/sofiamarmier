import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederalPreEscucha() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VIUDA FEDERAL PRE ESCUCHA/FLYER (1).webp",
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/VIUDA FEDERAL PRE ESCUCHA/FLYER (2).webp"
    ],
    descripcion: "Flyer para Pre-escucha de Viuda Federal",
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
