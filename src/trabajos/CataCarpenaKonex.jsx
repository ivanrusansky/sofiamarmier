import React from "react";
import TrabajosPage from "../TrabajosPage";

function CataCarpenaKonex() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/VIVO/CATA CARPENA KONEX/CATA KONEX (1).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CATA CARPENA KONEX/CATA KONEX (2).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CATA CARPENA KONEX/CATA KONEX (3).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CATA CARPENA KONEX/CATA KONEX (4).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CATA CARPENA KONEX/CATA KONEX (5).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CATA CARPENA KONEX/CATA KONEX (6).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CATA CARPENA KONEX/CATA KONEX (7).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CATA CARPENA KONEX/CATA KONEX (8).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CATA CARPENA KONEX/CATA KONEX (9).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CATA CARPENA KONEX/CATA KONEX (10).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CATA CARPENA KONEX/CATA KONEX (11).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CATA CARPENA KONEX/CATA KONEX (12).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CATA CARPENA KONEX/CATA KONEX (13).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CATA CARPENA KONEX/CATA KONEX (14).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CATA CARPENA KONEX/CATA KONEX (15).webp"
    ],
    descripcion: "Registro de Cata Carpena en el Konex.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="CATA CARPENA KONEX"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default CataCarpenaKonex;
