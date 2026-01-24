import React from "react";
import TrabajosPage from "../TrabajosPage";

function BrooksLaberinto() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1To4npZva-WUbaWFzVrxhFQmHb3R7fbiu"
    ],
    descripcion: "Cobertura para Brooks en Laberinto.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="BROOKS LABERINTO"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default BrooksLaberinto;
