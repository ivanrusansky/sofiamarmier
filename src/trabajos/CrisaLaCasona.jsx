import React from "react";
import TrabajosPage from "../TrabajosPage";

function CrisaLaCasona() {
  const trabajo = {
    imagenes: [
      "/proyectos/grabaciones/crisa-la-casona.jpg"
    ],
    descripcion: "Sesión fotográfica de grabación de Crisá en La Casona",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="CRISÁ, LA CASONA"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/grabaciones"
    />
  );
}

export default CrisaLaCasona;
