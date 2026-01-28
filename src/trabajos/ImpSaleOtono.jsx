import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function ImpSaleOtoño() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1bx-SSsBe1RXi55uaybQhQPf1PBnKFtvK"
    ],
    descripción: "Sesión de fotos y diseño para la campaña de Otoño - Invierno de Imp Sale. Realizada en Deofi estudio.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="IMP SALE Otoño"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/indumentaria"
    />
  );
}

export default ImpSaleOtoño;
