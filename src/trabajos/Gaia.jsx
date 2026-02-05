import React from "react";
import TrabajosPage from "../TrabajosPage";

function Gaia() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/GAIA/GAIA (1).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/GAIA/GAIA (2).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/GAIA/GAIA (3).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/GAIA/GAIA (4).webp"
    ],
    descripcion: "Sesión fotográfica de Gaia",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="GAIA"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/sesiones"
    />
  );
}

export default Gaia;
