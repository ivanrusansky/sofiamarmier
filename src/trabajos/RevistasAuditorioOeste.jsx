import React from "react";
import TrabajosPage from "../TrabajosPage";

function RevistasAuditorioOeste() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/d/1gQ9DGdjed0Jkr9JGQNR3usfJaOcCzoVX=w1000"
    ],
    descripcion: "Fotografía en vivo de Revistas en Auditorio Oeste",
    cliente: "Revistas",
    año: "2024",
    tecnicas: ["Fotografía en vivo", "Fotografía de conciertos"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="REVISTAS AUDITORIO OESTE"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default RevistasAuditorioOeste;
