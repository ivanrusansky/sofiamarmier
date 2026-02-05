import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederalLaberinto() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL LABERINTO/VIUDA FEDERAL LABERINTO (1).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL LABERINTO/VIUDA FEDERAL LABERINTO (2).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL LABERINTO/VIUDA FEDERAL LABERINTO (3).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL LABERINTO/VIUDA FEDERAL LABERINTO (4).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL LABERINTO/VIUDA FEDERAL LABERINTO (5).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL LABERINTO/VIUDA FEDERAL LABERINTO (6).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL LABERINTO/VIUDA FEDERAL LABERINTO (7).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL LABERINTO/VIUDA FEDERAL LABERINTO (8).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL LABERINTO/VIUDA FEDERAL LABERINTO (9).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL LABERINTO/VIUDA FEDERAL LABERINTO (10).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL LABERINTO/VIUDA FEDERAL LABERINTO (11).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL LABERINTO/VIUDA FEDERAL LABERINTO (12).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL LABERINTO/VIUDA FEDERAL LABERINTO (13).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL LABERINTO/VIUDA FEDERAL LABERINTO (14).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL LABERINTO/VIUDA FEDERAL LABERINTO (15).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL LABERINTO/VIUDA FEDERAL LABERINTO (16).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL LABERINTO/VIUDA FEDERAL LABERINTO (17).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL LABERINTO/VIUDA FEDERAL LABERINTO (18).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL LABERINTO/VIUDA FEDERAL LABERINTO (19).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL LABERINTO/VIUDA FEDERAL LABERINTO (20).webp"
    ],
    descripcion: "Cobertura para Viuda Federal en Laberinto. Una fecha muy especial e importante para la banda, ya que fue la primera vez que tocaron en vivo. Esta fecha dio pie a un año espectacular para ellos.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="VIUDA FEDERAL LABERINTO"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default ViudaFederalLaberinto;
