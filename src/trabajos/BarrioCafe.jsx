import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function BarrioCafe() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1_vi5X9oeimvx91xO7EZDvacrBpq0eezN"
    ],
    descripción: "Registro fotogr�fico para Barrio Caf�. Muchas fotos fueron tomadas en eventos que realizan donde se mezcla la Música, la gastronom�a y el barrio. Ubicado en Ciudad Jard�n.",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="BARRIO CAF�"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/gastronomia"
    />
  );
}

export default BarrioCafe;
