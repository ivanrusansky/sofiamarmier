import React from "react";
import TrabajosPage from "../TrabajosPage";

function JeremiasMarful() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/d/1BwRNLk2jGestsO3N_obsATQ_Q48IQlyj=w1000"
    ],
    descripcion: "Fotografía en vivo de Jeremías Marful",
    cliente: "Jeremías Marful",
    año: "2024",
    tecnicas: ["Fotografía en vivo", "Fotografía de conciertos"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="JEREMÍAS MARFUL"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default JeremiasMarful;
