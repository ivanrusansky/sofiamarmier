import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function ViudaFederalEstudiosIon() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1hKSVfHEMdKNyDf0EZLelWFZeFAiOpD_M"
    ],
    descripción: "Viuda Federal en Estudios ION, CABA. El segundo a�o retratando a unas de las bandas que m�s quiero y admiro. Gracias amigos.",
    año: "2026"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="VIUDA FEDERAL, ESTUDIOS ION"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/grabaciones"
    />
  );
}

export default ViudaFederalEstudiosIon;
