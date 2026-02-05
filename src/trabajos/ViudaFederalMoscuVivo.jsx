import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederalMoscuVivo() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL MOSCÚ (1).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL MOSCÚ (2).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL MOSCÚ (3).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL MOSCÚ (4).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL MOSCÚ (5).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL MOSCÚ (6).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL MOSCÚ (7).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL MOSCÚ (8).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL MOSCÚ (9).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL MOSCÚ (10).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL MOSCÚ (11).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL MOSCÚ (12).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL MOSCÚ (13).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL MOSCÚ (14).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL MOSCÚ (15).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL MOSCÚ (16).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL MOSCÚ (17).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL MOSCÚ (18).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL MOSCÚ (19).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL MOSCÚ (20).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL MOSCÚ (21).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL MOSCÚ (22).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL MOSCÚ (23).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL MOSCÚ (24).webp"
    ],
    descripcion: "Cobertura para Viuda Federal en Moscú.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="VIUDA FEDERAL MOSCÚ"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default ViudaFederalMoscuVivo;
