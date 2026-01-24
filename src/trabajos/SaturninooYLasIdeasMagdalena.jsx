import React from "react";
import TrabajosPage from "../TrabajosPage";

function SaturninooYLasIdeasMagdalena() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1QxZbAefQGJvzYcE1aCtd59peAHMl9WPI"
    ],
    descripcion: "Saturnino y las Ideas en el Estudio Magdalena, Haedo.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="SATURNINOO Y LAS IDEAS, MAGDALENA SOUND"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/grabaciones"
    />
  );
}

export default SaturninooYLasIdeasMagdalena;
