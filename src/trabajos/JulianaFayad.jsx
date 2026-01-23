import React from "react";
import TrabajosPage from "../TrabajosPage";

function JulianaFayad() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1IJT2DLqGXE1gbQXAY6Oqq7btm4oGga2-"
    ],
    descripcion: "Sesión fotográfica para Juliana Fayad",
    cliente: "Juliana Fayad",
    año: "2024",
    tecnicas: ["Fotografía de moda", "Fotografía editorial"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="JULIANA FAYAD"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/indumentaria"
    />
  );
}

export default JulianaFayad;
