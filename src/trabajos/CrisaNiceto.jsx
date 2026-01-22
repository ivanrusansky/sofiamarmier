import React from "react";
import TrabajosPage from "../TrabajosPage";

function CrisaNiceto() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1gHXzJ5GjOCWOKuq2a7ywQUvkCQbV2yQg"
    ],
    descripcion: "Fotografía en vivo de Crisá en Niceto",
    cliente: "Crisá",
    año: "2024",
    tecnicas: ["Fotografía en vivo", "Fotografía de conciertos"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="CRISÁ NICETO"
      trabajo={trabajo}
      colorHover="#4b9b6c"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default CrisaNiceto;
