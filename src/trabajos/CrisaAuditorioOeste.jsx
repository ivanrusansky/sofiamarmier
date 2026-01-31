import React from "react";
import TrabajosPage from "../TrabajosPage";

function CrisaAuditorioOeste() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1ViyYU0mS8Qtf8nWiare1-WayOm46gAuW"
    ],
    descripcion: "Cobertura para Crisá en el Auditorio Oeste.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="CRISÁ AUDITORIO OESTE"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default CrisaAuditorioOeste;
