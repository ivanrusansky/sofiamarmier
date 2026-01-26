import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function Bastro2025() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1RSwP-AWn_dAsp9qBxQocrU77_EDbHRnd"
    ],
    descripción: "Fotos express realizadas para Bastro. Un domingo a la ma�ana nos metimos en un terreno abandonado de nuestro barrio y realizamos estas fotos.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="BASTRO 2025"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/sesiones"
    />
  );
}

export default Bastro2025;
