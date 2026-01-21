import React from "react";
import TrabajosPage from "../TrabajosPage";

function SadPopClub() {
  const trabajo = {
    imagenes: [
      "/proyectos/shows-en-vivo/sad-pop-club.jpg"
    ],
    descripcion: "Show en vivo de Sad Pop Club",
    cliente: "Sad Pop Club",
    año: "2024",
    tecnicas: ["Video", "Producción audiovisual", "Show en vivo"]
  };

  return (
    <TrabajosPage
      categoria="audiovisual"
      titulo="SAD POP CLUB"
      trabajo={trabajo}
      colorHover="#e53935"
      rutaVolver="/audiovisual/shows-en-vivo"
    />
  );
}

export default SadPopClub;
