import React from "react";
import TrabajosPage from "../TrabajosPage";

function CrisaKonex() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1lWo6sBr7NeVXrn7SlqEDRnY1chPIZixh"
    ],
    descripcion: "Fotografía en vivo de Crisá en Konex",
    cliente: "Crisá",
    año: "2024",
    tecnicas: ["Fotografía en vivo", "Fotografía de conciertos"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="CRISÁ KONEX"
      trabajo={trabajo}
      colorHover="#00c853"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default CrisaKonex;
