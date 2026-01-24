import React from "react";
import TrabajosPage from "../TrabajosPage";

function SadPopClub() {
  const trabajo = {
    imagenes: [
      "/proyectos/shows-en-vivo/sad-pop-club.jpg"
    ],
    descripcion: "Cobertura para Sad Pop Club, productora que trajo a Estoy Bien (CHILE) .",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="audiovisual"
      titulo="SAD POP CLUB"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/audiovisual/shows-en-vivo"
    />
  );
}

export default SadPopClub;
