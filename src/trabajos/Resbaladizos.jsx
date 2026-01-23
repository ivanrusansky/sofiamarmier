import React from "react";
import TrabajosPage from "../TrabajosPage";

function Resbaladizos() {
  const trabajo = {
    imagenes: [
      "/proyectos/shows-en-vivo/resbaladizos.jpg"
    ],
    descripcion: "Show en vivo de Resbaladizos",
    cliente: "Resbaladizos",
    año: "2024",
    tecnicas: ["Video", "Producción audiovisual", "Show en vivo"]
  };

  return (
    <TrabajosPage
      categoria="audiovisual"
      titulo="RESBALADIZOS"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/audiovisual/shows-en-vivo"
    />
  );
}

export default Resbaladizos;
