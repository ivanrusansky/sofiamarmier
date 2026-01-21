import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederal2025Sesion() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1cYqMpmeOMsVL3D4Foxx6lAqfd9Szl4SE"
    ],
    descripcion: "Sesión fotográfica de Viuda Federal 2025",
    cliente: "Viuda Federal",
    año: "2025",
    tecnicas: ["Fotografía de retrato", "Fotografía de banda"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="VIUDA FEDERAL 2025"
      trabajo={trabajo}
      colorHover="#00c853"
      rutaVolver="/fotografia/sesiones"
    />
  );
}

export default ViudaFederal2025Sesion;
