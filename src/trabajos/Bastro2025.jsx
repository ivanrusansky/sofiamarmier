import React from "react";
import TrabajosPage from "../TrabajosPage";

function Bastro2025() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1RSwP-AWn_dAsp9qBxQocrU77_EDbHRnd"
    ],
    descripcion: "Sesión fotográfica de BASTRO 2025",
    cliente: "BASTRO",
    año: "2025",
    tecnicas: ["Fotografía de retrato", "Fotografía de banda"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="BASTRO 2025"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/sesiones"
    />
  );
}

export default Bastro2025;
