import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function BrocksShow() {
  const trabajo = {
    imagenes: [
      "/proyectos/shows-en-vivo/brocks.jpg"
    ],
    descripción: "Show en vivo de Brocks",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="audiovisual"
      titulo="BROCKS"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/audiovisual/shows-en-vivo"
    />
  );
}

export default BrocksShow;
