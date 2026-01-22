import React from "react";
import TrabajosPage from "../TrabajosPage";

function ImpSaleOtono() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1bx-SSsBe1RXi55uaybQhQPf1PBnKFtvK"
    ],
    descripcion: "Sesión fotográfica para IMP Sale Otoño",
    cliente: "IMP",
    año: "2024",
    tecnicas: ["Fotografía de moda", "Fotografía editorial"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="IMP SALE OTOÑO"
      trabajo={trabajo}
      colorHover="#4b9b6c"
      rutaVolver="/fotografia/indumentaria"
    />
  );
}

export default ImpSaleOtono;
