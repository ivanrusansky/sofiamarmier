import React from "react";
import TrabajosPage from "../TrabajosPage";

function CrisaKonex() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (1).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (2).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (3).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (4).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (5).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (6).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (7).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (8).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (9).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (10).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (11).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (12).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (13).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (14).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (15).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (16).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (17).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (18).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (19).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (20).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (21).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (22).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (23).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (24).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (25).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (26).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (27).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (28).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (29).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ KONEX/CRISÁ KONEX (30).webp"
    ],
    descripcion: "Cobertura para Crisá en el Konex.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="CRISÁ KONEX"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default CrisaKonex;
