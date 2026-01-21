import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederalYKons() {
  const trabajo = {
    imagenes: [
      "/flyers_de_musica/viuda_federal_y_kons/flyer_3_jpg"
    ],
    descripcion: "Flyer para Viuda Federal y Kons",
    cliente: "Viuda Federal & Kons",
    año: "2024",
    tecnicas: ["Diseño gráfico", "Ilustración digital"]
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="VIUDA FEDERAL Y KONS"
      trabajo={trabajo}
      colorHover="#f0ec10"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default ViudaFederalYKons;
