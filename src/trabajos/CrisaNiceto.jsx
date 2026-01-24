import React from "react";
import TrabajosPage from "../TrabajosPage";

function CrisaNiceto() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1gHXzJ5GjOCWOKuq2a7ywQUvkCQbV2yQg"
    ],
    descripcion: "Cobertura para Crisá en Niceto.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="CRISÁ NICETO"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default CrisaNiceto;
