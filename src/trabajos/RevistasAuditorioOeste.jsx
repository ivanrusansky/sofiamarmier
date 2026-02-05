import React from "react";
import TrabajosPage from "../TrabajosPage";

function RevistasAuditorioOeste() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/VIVO/REVISTAS AUDITORIO OESTE/REVISTAS AUDITORIO OESTE (1).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/REVISTAS AUDITORIO OESTE/REVISTAS AUDITORIO OESTE (2).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/REVISTAS AUDITORIO OESTE/REVISTAS AUDITORIO OESTE (3).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/REVISTAS AUDITORIO OESTE/REVISTAS AUDITORIO OESTE (4).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/REVISTAS AUDITORIO OESTE/REVISTAS AUDITORIO OESTE (5).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/REVISTAS AUDITORIO OESTE/REVISTAS AUDITORIO OESTE (6).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/REVISTAS AUDITORIO OESTE/REVISTAS AUDITORIO OESTE (7).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/REVISTAS AUDITORIO OESTE/REVISTAS AUDITORIO OESTE (8).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/REVISTAS AUDITORIO OESTE/REVISTAS AUDITORIO OESTE (9).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/REVISTAS AUDITORIO OESTE/REVISTAS AUDITORIO OESTE (10).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/REVISTAS AUDITORIO OESTE/REVISTAS AUDITORIO OESTE (11).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/REVISTAS AUDITORIO OESTE/REVISTAS AUDITORIO OESTE (12).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/REVISTAS AUDITORIO OESTE/REVISTAS AUDITORIO OESTE (13).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/REVISTAS AUDITORIO OESTE/REVISTAS AUDITORIO OESTE (14).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/REVISTAS AUDITORIO OESTE/REVISTAS AUDITORIO OESTE (15).webp"
    ],
    descripcion: "Cobertura para Revistas en el Auditorio Oeste.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="REVISTAS AUDITORIO OESTE"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default RevistasAuditorioOeste;
