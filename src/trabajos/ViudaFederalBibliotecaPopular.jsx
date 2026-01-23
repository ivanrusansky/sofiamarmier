import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederalBibliotecaPopular() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/d/1oXk2f0DPyLlw-OHMyEufJX3n1dGzpxmL=w1000"
    ],
    descripcion: "Fotografía en vivo de Viuda Federal en Biblioteca Popular",
    cliente: "Viuda Federal",
    año: "2024",
    tecnicas: ["Fotografía en vivo", "Fotografía de conciertos"]
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
