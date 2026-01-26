import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function Resbaladizos() {
  const trabajo = {
    imagenes: [
      "/proyectos/shows-en-vivo/resbaladizos.jpg"
    ],
    descripción: "Show en vivo de Resbaladizos",
    año: "2024"
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
