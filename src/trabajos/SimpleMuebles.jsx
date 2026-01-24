import React from "react";
import TrabajosPage from "../TrabajosPage";

function SimpleMuebles() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/d/1fcgJAqH6fENU-CLaBk_oLSd2OQYkY07O"
    ],
    descripcion: "Sesión de fotos para Simple Muebles. Estas imágenes fueron utilizadas para redes sociales y página web. Estudio Deofi.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="SIMPLE MUEBLES"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/amueblados"
    />
  );
}

export default SimpleMuebles;
