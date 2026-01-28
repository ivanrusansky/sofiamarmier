import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function ViudaFederalSaldias() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1RVIg4Zc_oBih7cItZ-xM2aR3nWHj0S1K"
    ],
    descripción: "Viuda Federal en Sald�as, la sala donde ensayaron para la fecha de Mosc� realizada y producida enteramente por ellos.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="VIUDA FEDERAL, SALDIAS"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/grabaciones"
    />
  );
}

export default ViudaFederalSaldias;
