import React from "react";
import TrabajosPage from "../TrabajosPage";

function Babeblade() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1BL7Q06zVLXcqGGfiaIE_DPkE4TrnthWD"
    ],
    descripcion: "Sesión en vivo de Babeblade",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="audiovisual"
      titulo="BABEBLADE"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/audiovisual/sesiones-en-vivo"
    />
  );
}

export default Babeblade;
