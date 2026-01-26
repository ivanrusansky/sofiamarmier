import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function ViudaFederalMoscuVivo() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/d/1M1gd3OCogapihhz-Nwzo1Oo4SLxE6ztM=w1000"
    ],
    descripción: "Cobertura para Viuda Federal en Mosc�.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="VIUDA FEDERAL MOSC�"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default ViudaFederalMoscuVivo;
