import React from "react";
import TrabajosPage from "../TrabajosPage";

function BarrioCafe() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1_vi5X9oeimvx91xO7EZDvacrBpq0eezN"
    ],
    descripcion: "Sesión fotográfica para Barrio Café",
    cliente: "Barrio Café",
    año: "2024",
    tecnicas: ["Fotografía gastronómica", "Fotografía comercial"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="BARRIO CAFÉ"
      trabajo={trabajo}
      colorHover="#00c853"
      rutaVolver="/fotografia/gastronomia"
    />
  );
}

export default BarrioCafe;
