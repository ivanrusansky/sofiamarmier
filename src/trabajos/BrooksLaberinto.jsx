import React from "react";
import TrabajosPage from "../TrabajosPage";

function BrooksLaberinto() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS LABERINTO/BROOKS LABERINTO (1).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS LABERINTO/BROOKS LABERINTO (2).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS LABERINTO/BROOKS LABERINTO (3).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS LABERINTO/BROOKS LABERINTO (4).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS LABERINTO/BROOKS LABERINTO (5).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS LABERINTO/BROOKS LABERINTO (6).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS LABERINTO/BROOKS LABERINTO (7).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS LABERINTO/BROOKS LABERINTO (8).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS LABERINTO/BROOKS LABERINTO (9).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS LABERINTO/BROOKS LABERINTO (10).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS LABERINTO/BROOKS LABERINTO (11).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS LABERINTO/BROOKS LABERINTO (12).webp"
    ],
    descripcion: "Cobertura para Brooks en Laberinto.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="BROOKS LABERINTO"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default BrooksLaberinto;
