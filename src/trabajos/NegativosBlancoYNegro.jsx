import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function NegativosBlancoYNegro() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1bFX66pWo13piH3szUbqqcEtekBYVtl9g"
    ],
    descripción: "Serie fotográfica en blanco y negro",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="BLANCO Y NEGRO"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/negativos"
    />
  );
}

export default NegativosBlancoYNegro;
