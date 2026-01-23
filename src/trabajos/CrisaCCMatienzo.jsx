import React from "react";
import TrabajosPage from "../TrabajosPage";

function CrisaCCMatienzo() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/14_WsDSArL8YjjzEvwLPiXSZz0YmtDZp6"
    ],
    descripcion: "Fotografía en vivo de Crisá en CC Matienzo",
    cliente: "Crisá",
    año: "2024",
    tecnicas: ["Fotografía en vivo", "Fotografía de conciertos"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="CRISÁ CC MATIENZO"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default CrisaCCMatienzo;
