import React from "react";
import TrabajosPage from "../TrabajosPage";

function BarrioCafe() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/BARRIO CAFÉ/BARRIO CAFÉ (1).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/BARRIO CAFÉ/BARRIO CAFÉ (2).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/BARRIO CAFÉ/BARRIO CAFÉ (3).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/BARRIO CAFÉ/BARRIO CAFÉ (4).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/BARRIO CAFÉ/BARRIO CAFÉ (5).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/BARRIO CAFÉ/BARRIO CAFÉ (6).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/BARRIO CAFÉ/BARRIO CAFÉ (7).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/BARRIO CAFÉ/BARRIO CAFÉ (8).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/BARRIO CAFÉ/BARRIO CAFÉ (9).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/BARRIO CAFÉ/BARRIO CAFÉ (10).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/BARRIO CAFÉ/BARRIO CAFÉ (11).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/BARRIO CAFÉ/BARRIO CAFÉ (12).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/BARRIO CAFÉ/BARRIO CAFÉ (13).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/BARRIO CAFÉ/BARRIO CAFÉ (14).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/BARRIO CAFÉ/BARRIO CAFÉ (15).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/BARRIO CAFÉ/BARRIO CAFÉ (16).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/BARRIO CAFÉ/BARRIO CAFÉ (17).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/BARRIO CAFÉ/BARRIO CAFÉ (18).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/BARRIO CAFÉ/BARRIO CAFÉ (19).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/BARRIO CAFÉ/BARRIO CAFÉ (20).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/BARRIO CAFÉ/BARRIO CAFÉ (21).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/BARRIO CAFÉ/BARRIO CAFÉ (22).webp",
      "/trabajosimg/FOTOGRAFÍA/GASTRONOMÍA/BARRIO CAFÉ/d439ce6f-1749-455e-8f08-c3aa749d2291_rw_1920.webp"
    ],
    descripcion: "Registro fotográfico para Barrio Café. Muchas fotos fueron tomadas en eventos que realizan donde se mezcla la música, la gastronomía y el barrio. Ubicado en Ciudad Jardín.",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="BARRIO CAFÉ"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/gastronomia"
    />
  );
}

export default BarrioCafe;
