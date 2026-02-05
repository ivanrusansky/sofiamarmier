import React from "react";
import TrabajosPage from "../TrabajosPage";

function SimpleMuebles() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/AMUEBLADOS/1.webp",
      "/trabajosimg/FOTOGRAFÍA/AMUEBLADOS/2.webp",
      "/trabajosimg/FOTOGRAFÍA/AMUEBLADOS/3.webp",
      "/trabajosimg/FOTOGRAFÍA/AMUEBLADOS/4.webp",
      "/trabajosimg/FOTOGRAFÍA/AMUEBLADOS/5.webp",
      "/trabajosimg/FOTOGRAFÍA/AMUEBLADOS/SIMPLE MUEBLES (1).webp",
      "/trabajosimg/FOTOGRAFÍA/AMUEBLADOS/SIMPLE MUEBLES (19).webp",
      "/trabajosimg/FOTOGRAFÍA/AMUEBLADOS/SIMPLE MUEBLES (20).webp",
      "/trabajosimg/FOTOGRAFÍA/AMUEBLADOS/SIMPLE MUEBLES (21).webp",
      "/trabajosimg/FOTOGRAFÍA/AMUEBLADOS/SIMPLE MUEBLES (22).webp",
      "/trabajosimg/FOTOGRAFÍA/AMUEBLADOS/SIMPLE MUEBLES (23).webp",
      "/trabajosimg/FOTOGRAFÍA/AMUEBLADOS/SIMPLE MUEBLES (24).webp",
      "/trabajosimg/FOTOGRAFÍA/AMUEBLADOS/SIMPLE MUEBLES (25).webp",
      "/trabajosimg/FOTOGRAFÍA/AMUEBLADOS/SIMPLE MUEBLES (26).webp",
      "/trabajosimg/FOTOGRAFÍA/AMUEBLADOS/SIMPLE MUEBLES (27).webp",
      "/trabajosimg/FOTOGRAFÍA/AMUEBLADOS/SIMPLE MUEBLES (28).webp",
      "/trabajosimg/FOTOGRAFÍA/AMUEBLADOS/SIMPLE MUEBLES (29).webp",
      "/trabajosimg/FOTOGRAFÍA/AMUEBLADOS/SIMPLE MUEBLES (30).webp",
      "/trabajosimg/FOTOGRAFÍA/AMUEBLADOS/SIMPLE MUEBLES (31).webp",
      "/trabajosimg/FOTOGRAFÍA/AMUEBLADOS/SIMPLE MUEBLES (32).webp",
      "/trabajosimg/FOTOGRAFÍA/AMUEBLADOS/SIMPLE MUEBLES (33).webp",
      "/trabajosimg/FOTOGRAFÍA/AMUEBLADOS/SIMPLE MUEBLES (34).webp",
      "/trabajosimg/FOTOGRAFÍA/AMUEBLADOS/SIMPLE MUEBLES (35).webp"
    ],
    descripcion: "Sesión de fotos para Simple Muebles. Estas imágenes fueron utilizadas para redes sociales y página web. Estudio Deofi.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="SIMPLE MUEBLES"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/amueblados"
    />
  );
}

export default SimpleMuebles;
