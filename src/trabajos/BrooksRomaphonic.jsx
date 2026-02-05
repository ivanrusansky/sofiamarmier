import React from "react";
import TrabajosPage from "../TrabajosPage";

function BrooksRomaphonic() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/BROOKS ROMAPHONIC/BROOKS ROMA (1).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/BROOKS ROMAPHONIC/BROOKS ROMA (2).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/BROOKS ROMAPHONIC/BROOKS ROMA (3).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/BROOKS ROMAPHONIC/BROOKS ROMA (6).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/BROOKS ROMAPHONIC/BROOKS ROMA (7).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/BROOKS ROMAPHONIC/BROOKS ROMA (9).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/BROOKS ROMAPHONIC/BROOKS ROMA (10).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/BROOKS ROMAPHONIC/BROOKS ROMA (12).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/BROOKS ROMAPHONIC/BROOKS ROMA (13).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/BROOKS ROMAPHONIC/BROOKS ROMA (14).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/BROOKS ROMAPHONIC/BROOKS ROMA (15).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/BROOKS ROMAPHONIC/BROOKS ROMA (17).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/BROOKS ROMAPHONIC/BROOKS ROMA (18).webp"
    ],
    descripcion: "Brooks en Romaphonic grabando su primer disco Nada era tan Cierto. Producido por Ale Vazquez. 7 días de febrero muy felices.",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="BROOKS, ROMAPHONIC"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/grabaciones"
    />
  );
}

export default BrooksRomaphonic;
