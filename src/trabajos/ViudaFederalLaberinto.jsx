import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederalLaberinto() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/d/1C3tmag-90b8Ww8-o2IEE1gZrDBcrj0Zz=w1000"
    ],
    descripcion: "Fotografía en vivo de Viuda Federal en Laberinto",
    cliente: "Viuda Federal",
    año: "2024",
    tecnicas: ["Fotografía en vivo", "Fotografía de conciertos"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="VIUDA FEDERAL LABERINTO"
      trabajo={trabajo}
      colorHover="#4b9b6c"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default ViudaFederalLaberinto;
