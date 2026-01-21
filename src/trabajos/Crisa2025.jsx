import React from "react";
import TrabajosPage from "../TrabajosPage";

function Crisa2025() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1H4AfMde95tzlnJxr7N9iquy0HPaaP9c6"
    ],
    descripcion: "Sesión fotográfica de Crisá 2025",
    cliente: "Crisá",
    año: "2025",
    tecnicas: ["Fotografía de retrato", "Fotografía de banda"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="CRISÁ 2025"
      trabajo={trabajo}
      colorHover="#00c853"
      rutaVolver="/fotografia/sesiones"
    />
  );
}

export default Crisa2025;
