import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function CrisaKonex() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1lWo6sBr7NeVXrn7SlqEDRnY1chPIZixh"
    ],
    descripción: "Cobertura para Cris� en el Konex.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="CRIS� KONEX"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default CrisaKonex;
