import React from "react";
import TrabajosPage from "../TrabajosPage";

function BrooksQuilmesRock() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1XLtD-C5F91F-rmIhpyoFemLBAWjFi5zz"
    ],
    descripcion: `Cobertura para Brooks en Tecnópolis, en el marco del Quilmes Rock 2025. Una fecha muy especial para la banda y para mí. Fue nuestra primera experiencia en un evento tan grande, importante y extenso.`,
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="BROOKS QUILMES ROCK"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default BrooksQuilmesRock;
