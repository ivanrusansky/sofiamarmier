import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function Gaia() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/17_gu2V5eghmfpXT0imB7d7cNVOrXB2-P"
    ],
    descripción: "sesión fotográfica de Gaia",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="GAIA"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/sesiones"
    />
  );
}

export default Gaia;
