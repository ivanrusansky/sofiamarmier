import React from "react";
import TrabajosPage from "../TrabajosPage";

function VineraVinos() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1MJHikRUxX5dzUhAmaUE9WtNR-kz4maJH"
    ],
    descripcion: "Registro para Vinera Vinos y su cata realizada en Pompeya, Haedo.",
    año: "2024"
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
