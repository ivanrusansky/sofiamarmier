import React from "react";
import TrabajosPage from "../TrabajosPage";

function Gaia() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/17_gu2V5eghmfpXT0imB7d7cNVOrXB2-P"
    ],
    descripcion: "Sesión fotográfica de Gaia",
    cliente: "Gaia",
    año: "2024",
    tecnicas: ["Fotografía de retrato", "Fotografía de banda"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="GAIA"
      trabajo={trabajo}
      colorHover="#00c853"
      rutaVolver="/fotografia/sesiones"
    />
  );
}

export default Gaia;
