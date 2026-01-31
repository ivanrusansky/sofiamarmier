import React from "react";
import TrabajosPage from "../TrabajosPage";

function BarrioCafe() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1_vi5X9oeimvx91xO7EZDvacrBpq0eezN"
    ],
    descripcion: "Registro fotográfico para Barrio Café. Muchas fotos fueron tomadas en eventos que realizan donde se mezcla la música, la gastronomía y el barrio. Ubicado en Ciudad Jardín.",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="BARRIO CAFÉ"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/gastronomia"
    />
  );
}

export default BarrioCafe;
