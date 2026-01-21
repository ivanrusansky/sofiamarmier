import React from "react";
import TrabajosPage from "../TrabajosPage";

function BrooksQuilmesRock() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1XLtD-C5F91F-rmIhpyoFemLBAWjFi5zz"
    ],
    descripcion: "Fotografía en vivo de Brooks en Quilmes Rock",
    cliente: "Brooks",
    año: "2024",
    tecnicas: ["Fotografía en vivo", "Fotografía de conciertos", "Fotografía de festivales"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="BROOKS QUILMES ROCK"
      trabajo={trabajo}
      colorHover="#00c853"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default BrooksQuilmesRock;
