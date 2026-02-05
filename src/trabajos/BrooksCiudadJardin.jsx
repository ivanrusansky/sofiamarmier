import React from "react";
import TrabajosPage from "../TrabajosPage";

function BrooksCiudadJardin() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS CIUDAD JARDÍN/BROOKS CIUDAD JARDÍN (1).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS CIUDAD JARDÍN/BROOKS CIUDAD JARDÍN (2).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS CIUDAD JARDÍN/BROOKS CIUDAD JARDÍN (3).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS CIUDAD JARDÍN/BROOKS CIUDAD JARDÍN (4).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS CIUDAD JARDÍN/BROOKS CIUDAD JARDÍN (5).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS CIUDAD JARDÍN/BROOKS CIUDAD JARDÍN (6).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS CIUDAD JARDÍN/BROOKS CIUDAD JARDÍN (7).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS CIUDAD JARDÍN/BROOKS CIUDAD JARDÍN (8).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS CIUDAD JARDÍN/BROOKS CIUDAD JARDÍN (9).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS CIUDAD JARDÍN/BROOKS CIUDAD JARDÍN (10).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS CIUDAD JARDÍN/BROOKS CIUDAD JARDÍN (11).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS CIUDAD JARDÍN/BROOKS CIUDAD JARDÍN (12).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS CIUDAD JARDÍN/BROOKS CIUDAD JARDÍN (13).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS CIUDAD JARDÍN/BROOKS CIUDAD JARDÍN (14).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS CIUDAD JARDÍN/BROOKS CIUDAD JARDÍN (15).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS CIUDAD JARDÍN/BROOKS CIUDAD JARDÍN (16).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS CIUDAD JARDÍN/BROOKS CIUDAD JARDÍN (17).webp"
    ],
    descripcion: "Cobertura para Brooks en Ciudad Jardín, Tres de Febrero.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="BROOKS CIUDAD JARDÍN"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default BrooksCiudadJardin;
