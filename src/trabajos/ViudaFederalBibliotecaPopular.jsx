import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function ViudaFederalBibliotecaPopular() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/d/1oXk2f0DPyLlw-OHMyEufJX3n1dGzpxmL=w1000"
    ],
    descripción: "Cobertura para Viuda Federal en la Biblioteca Popular de Ciudad Jard�n.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="VIUDA FEDERAL BIBLIOTECA POPULAR"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default ViudaFederalBibliotecaPopular;
