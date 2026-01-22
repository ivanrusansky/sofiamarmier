import React from "react";
import TrabajosPage from "../TrabajosPage";

function NegativosBlancoYNegro() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1bFX66pWo13piH3szUbqqcEtekBYVtl9g"
    ],
    descripcion: "Serie fotográfica en blanco y negro",
    año: "2024",
    tecnicas: ["Fotografía analógica", "Blanco y negro", "Revelado químico"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="BLANCO Y NEGRO"
      trabajo={trabajo}
      colorHover="#4b9b6c"
      rutaVolver="/fotografia/negativos"
    />
  );
}

export default NegativosBlancoYNegro;
