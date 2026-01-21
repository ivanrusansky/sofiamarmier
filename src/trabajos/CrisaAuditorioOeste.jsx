import React from "react";
import TrabajosPage from "../TrabajosPage";

function CrisaAuditorioOeste() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1ViyYU0mS8Qtf8nWiare1-WayOm46gAuW"
    ],
    descripcion: "Fotografía en vivo de Crisá en Auditorio Oeste",
    cliente: "Crisá",
    año: "2024",
    tecnicas: ["Fotografía en vivo", "Fotografía de conciertos"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="CRISÁ AUDITORIO OESTE"
      trabajo={trabajo}
      colorHover="#00c853"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default CrisaAuditorioOeste;
