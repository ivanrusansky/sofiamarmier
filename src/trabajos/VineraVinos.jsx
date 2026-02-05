import React from "react";
import TrabajosPage from "../TrabajosPage";

function VineraVinos() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/VINERA VINOS/VINERA VINOS (1).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/VINERA VINOS/VINERA VINOS (2).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/VINERA VINOS/VINERA VINOS (3).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/VINERA VINOS/VINERA VINOS (4).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/VINERA VINOS/VINERA VINOS (5).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/VINERA VINOS/VINERA VINOS (6).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/VINERA VINOS/VINERA VINOS (7).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/VINERA VINOS/VINERA VINOS (8).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/VINERA VINOS/VINERA VINOS (9).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/VINERA VINOS/VINERA VINOS (10).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/VINERA VINOS/VINERA VINOS (11).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/VINERA VINOS/VINERA VINOS (12).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/VINERA VINOS/VINERA VINOS (13).webp"
    ],
    descripcion: "Registro para Vinera Vinos y su cata realizada en Pompeya, Haedo.",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="VINERA VINOS"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/gastronomia"
    />
  );
}

export default VineraVinos;
