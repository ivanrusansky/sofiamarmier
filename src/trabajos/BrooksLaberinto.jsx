import React from "react";
import TrabajosPage from "../TrabajosPage";

function BrooksLaberinto() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1To4npZva-WUbaWFzVrxhFQmHb3R7fbiu"
    ],
    descripcion: "Fotografía en vivo de Brooks en Laberinto",
    cliente: "Brooks",
    año: "2024",
    tecnicas: ["Fotografía en vivo", "Fotografía de conciertos"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="BROOKS LABERINTO"
      trabajo={trabajo}
      colorHover="#00c853"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default BrooksLaberinto;
