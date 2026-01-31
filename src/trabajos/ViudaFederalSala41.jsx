import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederalSala41() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/d/1ReFK2T5krEDhwsNTkp7zXAG_W0IB6Qs2=w1000"
    ],
    descripcion: "Cobertura para la última fecha del 2025 de Viuda Federal en Sala 41, CABA.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="VIUDA FEDERAL SALA 41"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default ViudaFederalSala41;
