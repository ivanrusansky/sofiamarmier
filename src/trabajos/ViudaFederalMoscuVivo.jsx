import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederalMoscuVivo() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/d/1M1gd3OCogapihhz-Nwzo1Oo4SLxE6ztM=w1000"
    ],
    descripcion: "Cobertura para Viuda Federal en Moscú.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="VIUDA FEDERAL MOSCÚ"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default ViudaFederalMoscuVivo;
