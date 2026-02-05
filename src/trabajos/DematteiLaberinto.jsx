import React from "react";
import TrabajosPage from "../TrabajosPage";

function DematteiLaberinto() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/VIVO/DEMATTEI LABERINTO/DEMATTEI LABERINTO (1).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/DEMATTEI LABERINTO/DEMATTEI LABERINTO (2).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/DEMATTEI LABERINTO/DEMATTEI LABERINTO (3).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/DEMATTEI LABERINTO/DEMATTEI LABERINTO (4).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/DEMATTEI LABERINTO/DEMATTEI LABERINTO (5).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/DEMATTEI LABERINTO/DEMATTEI LABERINTO (6).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/DEMATTEI LABERINTO/DEMATTEI LABERINTO (7).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/DEMATTEI LABERINTO/DEMATTEI LABERINTO (8).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/DEMATTEI LABERINTO/DEMATTEI LABERINTO (9).webp"
    ],
    descripcion: "Registro de Demattei en Laberinto.",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="DEMATTEI LABERINTO"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default DematteiLaberinto;
