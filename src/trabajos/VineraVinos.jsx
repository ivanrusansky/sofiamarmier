import React from "react";
import TrabajosPage from "../TrabajosPage";

function VineraVinos() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1MJHikRUxX5dzUhAmaUE9WtNR-kz4maJH"
    ],
    descripcion: "Sesión fotográfica para Vinera Vinos",
    cliente: "Vinera Vinos",
    año: "2024",
    tecnicas: ["Fotografía gastronómica", "Fotografía de producto"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="VINERA VINOS"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/gastronomia"
    />
  );
}

export default VineraVinos;
