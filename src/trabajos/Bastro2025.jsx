import React from "react";
import TrabajosPage from "../TrabajosPage";

function Bastro2025() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/BASTRO 2025/BASTRO (1).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/BASTRO 2025/BASTRO (2).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/BASTRO 2025/BASTRO (3).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/BASTRO 2025/BASTRO (4).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/BASTRO 2025/BASTRO (5).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/BASTRO 2025/BASTRO (6).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/BASTRO 2025/BASTRO (7).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/BASTRO 2025/BASTRO (8).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/BASTRO 2025/BASTRO (9).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/BASTRO 2025/BASTRO (10).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/BASTRO 2025/BASTRO (11).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/BASTRO 2025/BASTRO (12).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/BASTRO 2025/BASTRO (13).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/BASTRO 2025/BASTRO (14).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/BASTRO 2025/BASTRO (15).webp"
    ],
    descripcion: "Fotos express realizadas para Bastro. Un domingo a la mañana nos metimos en un terreno abandonado de nuestro barrio y realizamos estas fotos.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="BASTRO 2025"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/sesiones"
    />
  );
}

export default Bastro2025;
