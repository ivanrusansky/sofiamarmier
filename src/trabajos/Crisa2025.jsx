import React from "react";
import TrabajosPage from "../TrabajosPage";

function Crisa2025() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2025/CRISÁ (1).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2025/CRISÁ (2).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2025/CRISÁ (3).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2025/CRISÁ (4).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2025/CRISÁ (5).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2025/CRISÁ (6).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2025/CRISÁ (7).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2025/CRISÁ (8).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2025/CRISÁ (9).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2025/CRISÁ (10).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2025/CRISÁ (11).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2025/CRISÁ (12).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2025/CRISÁ (13).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2025/CRISÁ (14).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2025/CRISÁ (15).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2025/CRISÁ (17).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2025/CRISÁ (18).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2025/CRISÁ (19).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2025/CRISÁ (20).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2025/CRISÁ (22).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2025/CRISÁ (23).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2025/CRISÁ (24).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2025/CRISÁ (25).webp"
    ],
    descripcion: `Sesión de fotos para Crisá y la promoción del aniversario de su EP -cuál es el último recuerdo que guardas?-.\nRealizada en nuestro querido y amado Oeste. El Palomar.`,
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="CRISÁ 2025"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/sesiones"
    />
  );
}

export default Crisa2025;
