import React from "react";
import TrabajosPage from "../TrabajosPage";

function SaturninooYLasIdeasMagdalena() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/SATURNINO Y LAS IDEAS MAGDALENA SOUND/LAS IDEAS ENSAYO (1).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/SATURNINO Y LAS IDEAS MAGDALENA SOUND/LAS IDEAS ENSAYO (2).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/SATURNINO Y LAS IDEAS MAGDALENA SOUND/LAS IDEAS ENSAYO (3).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/SATURNINO Y LAS IDEAS MAGDALENA SOUND/LAS IDEAS ENSAYO (4).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/SATURNINO Y LAS IDEAS MAGDALENA SOUND/LAS IDEAS ENSAYO (5).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/SATURNINO Y LAS IDEAS MAGDALENA SOUND/LAS IDEAS ENSAYO (6).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/SATURNINO Y LAS IDEAS MAGDALENA SOUND/LAS IDEAS ENSAYO (7).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/SATURNINO Y LAS IDEAS MAGDALENA SOUND/LAS IDEAS ENSAYO (8).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/SATURNINO Y LAS IDEAS MAGDALENA SOUND/LAS IDEAS ENSAYO (9).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/SATURNINO Y LAS IDEAS MAGDALENA SOUND/LAS IDEAS ENSAYO (10).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/SATURNINO Y LAS IDEAS MAGDALENA SOUND/LAS IDEAS ENSAYO (11).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/SATURNINO Y LAS IDEAS MAGDALENA SOUND/LAS IDEAS ENSAYO (12).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/SATURNINO Y LAS IDEAS MAGDALENA SOUND/LAS IDEAS ENSAYO (13).webp"
    ],
    descripcion: "Saturnino y las Ideas en el Estudio Magdalena, Haedo.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="SATURNINOO Y LAS IDEAS, MAGDALENA SOUND"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/grabaciones"
    />
  );
}

export default SaturninooYLasIdeasMagdalena;
