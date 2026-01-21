import React from "react";
import TrabajosPage from "../TrabajosPage";

function BrocksShow() {
  const trabajo = {
    imagenes: [
      "/proyectos/shows-en-vivo/brocks.jpg"
    ],
    descripcion: "Show en vivo de Brocks",
    cliente: "Brocks",
    año: "2024",
    tecnicas: ["Video", "Producción audiovisual", "Show en vivo"]
  };

  return (
    <TrabajosPage
      categoria="audiovisual"
      titulo="BROCKS"
      trabajo={trabajo}
      colorHover="#e53935"
      rutaVolver="/audiovisual/shows-en-vivo"
    />
  );
}

export default BrocksShow;
