import React from "react";
import TrabajosPage from "../TrabajosPage";

function SaturninooYLasIdeasMagdalena() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1QxZbAefQGJvzYcE1aCtd59peAHMl9WPI"
    ],
    descripcion: "Sesión fotográfica de grabación de Saturninoo y Las Ideas en Magdalena Sound",
    cliente: "Saturninoo y Las Ideas",
    año: "2024",
    tecnicas: ["Fotografía de estudio", "Fotografía documental"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="SATURNINOO Y LAS IDEAS, MAGDALENA SOUND"
      trabajo={trabajo}
      colorHover="#00c853"
      rutaVolver="/fotografia/grabaciones"
    />
  );
}

export default SaturninooYLasIdeasMagdalena;
