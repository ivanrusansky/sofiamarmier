import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederalSala41() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VIUDA FEDERAL SALA 41 (1).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VIUDA FEDERAL SALA 41 (2).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VIUDA FEDERAL SALA 41 (3).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VIUDA FEDERAL SALA 41 (4).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VIUDA FEDERAL SALA 41 (5).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VIUDA FEDERAL SALA 41 (6).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VIUDA FEDERAL SALA 41 (7).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VIUDA FEDERAL SALA 41 (8).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VIUDA FEDERAL SALA 41 (9).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VIUDA FEDERAL SALA 41 (10).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VIUDA FEDERAL SALA 41 (11).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VIUDA FEDERAL SALA 41 (12).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VIUDA FEDERAL SALA 41 (13).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VIUDA FEDERAL SALA 41 (14).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VIUDA FEDERAL SALA 41 (15).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VIUDA FEDERAL SALA 41 (16).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VIUDA FEDERAL SALA 41 (17).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VIUDA FEDERAL SALA 41 (18).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VIUDA FEDERAL SALA 41 (19).webp"
    ],
    descripcion: "Cobertura para la última fecha del 2025 de Viuda Federal en Sala 41, CABA.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="VIUDA FEDERAL SALA 41"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default ViudaFederalSala41;
