import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederalLaberinto() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/d/1C3tmag-90b8Ww8-o2IEE1gZrDBcrj0Zz=w1000"
    ],
    descripcion: "Cobertura para Viuda Federal en Laberinto. Una fecha muy especial e importante para la banda, ya que fue la primera vez que tocaron en vivo. Esta fecha dio pie a un año espectacular para ellos.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="VIUDA FEDERAL LABERINTO"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default ViudaFederalLaberinto;
