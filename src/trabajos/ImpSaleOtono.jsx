import React from "react";
import TrabajosPage from "../TrabajosPage";

function ImpSaleOtono() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/IMP SALE OTOÑO/IMPSALE (1).webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/IMP SALE OTOÑO/IMPSALE (2).webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/IMP SALE OTOÑO/IMPSALE (5).webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/IMP SALE OTOÑO/IMPSALE (6).webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/IMP SALE OTOÑO/IMPSALE (7).webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/IMP SALE OTOÑO/IMPSALE (8).webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/IMP SALE OTOÑO/IMPSALE (9).webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/IMP SALE OTOÑO/IMPSALE (10).webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/IMP SALE OTOÑO/IMPSALE (11).webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/IMP SALE OTOÑO/IMPSALE (12).webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/IMP SALE OTOÑO/IMPSALE (13).webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/IMP SALE OTOÑO/IMPSALE (14).webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/IMP SALE OTOÑO/IMPSALE (15).webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/IMP SALE OTOÑO/IMPSALE (16).webp"
    ],
    descripcion: "Sesión de fotos y diseño para la campaña de Otoño - Invierno de Imp Sale. Realizada en Deofi estudio.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="IMP SALE OTOÑO"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/indumentaria"
    />
  );
}

export default ImpSaleOtono;
