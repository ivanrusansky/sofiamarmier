import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function ViudaFederal2025sesión() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1cYqMpmeOMsVL3D4Foxx6lAqfd9Szl4SE"
    ],
    descripción: "sesión fotográfica de Viuda Federal 2025",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="VIUDA FEDERAL 2025"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/sesiones"
    />
  );
}

export default ViudaFederal2025sesión;
