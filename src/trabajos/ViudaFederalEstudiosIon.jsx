import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederalEstudiosIon() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1hKSVfHEMdKNyDf0EZLelWFZeFAiOpD_M"
    ],
    descripcion: "Sesión fotográfica de grabación de Viuda Federal en Estudios ION",
    cliente: "Viuda Federal",
    año: "2024",
    tecnicas: ["Fotografía de estudio", "Fotografía documental"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="VIUDA FEDERAL, ESTUDIOS ION"
      trabajo={trabajo}
      colorHover="#4b9b6c"
      rutaVolver="/fotografia/grabaciones"
    />
  );
}

export default ViudaFederalEstudiosIon;
