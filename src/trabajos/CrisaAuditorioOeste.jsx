import React from "react";
import TrabajosPage from "../TrabajosPage";

function CrisaAuditorioOeste() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ AUDITORIO OESTE/CRISÁ AUDITORIO OESTE (1).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ AUDITORIO OESTE/CRISÁ AUDITORIO OESTE (2).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ AUDITORIO OESTE/CRISÁ AUDITORIO OESTE (3).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ AUDITORIO OESTE/CRISÁ AUDITORIO OESTE (4).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ AUDITORIO OESTE/CRISÁ AUDITORIO OESTE (5).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ AUDITORIO OESTE/CRISÁ AUDITORIO OESTE (6).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ AUDITORIO OESTE/CRISÁ AUDITORIO OESTE (7).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ AUDITORIO OESTE/CRISÁ AUDITORIO OESTE (8).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ AUDITORIO OESTE/CRISÁ AUDITORIO OESTE (9).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ AUDITORIO OESTE/CRISÁ AUDITORIO OESTE (10).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ AUDITORIO OESTE/CRISÁ AUDITORIO OESTE (11).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ AUDITORIO OESTE/CRISÁ AUDITORIO OESTE (12).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ AUDITORIO OESTE/CRISÁ AUDITORIO OESTE (13).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ AUDITORIO OESTE/CRISÁ AUDITORIO OESTE (14).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ AUDITORIO OESTE/CRISÁ AUDITORIO OESTE (15).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ AUDITORIO OESTE/CRISÁ AUDITORIO OESTE (16).webp"
    ],
    descripcion: "Cobertura para Crisá en el Auditorio Oeste.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="CRISÁ AUDITORIO OESTE"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default CrisaAuditorioOeste;
