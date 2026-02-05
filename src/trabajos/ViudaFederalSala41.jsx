import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederalSala41() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VF1.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VF2.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VF6.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VF9.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VF11.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VF13.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VF16.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VF21.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VF28.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VF32.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VF39.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VF42.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VF44.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VF47.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VF51.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VF53.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VF56.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VF57.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL SALA 41/VF59.webp"
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
