import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederalBibliotecaPopular() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL BIBLIOTECA POPULAR/VIUDA FEDERAL BIBLIOTECA POPULAR (1).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL BIBLIOTECA POPULAR/VIUDA FEDERAL BIBLIOTECA POPULAR (2).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL BIBLIOTECA POPULAR/VIUDA FEDERAL BIBLIOTECA POPULAR (3).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL BIBLIOTECA POPULAR/VIUDA FEDERAL BIBLIOTECA POPULAR (4).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL BIBLIOTECA POPULAR/VIUDA FEDERAL BIBLIOTECA POPULAR (5).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL BIBLIOTECA POPULAR/VIUDA FEDERAL BIBLIOTECA POPULAR (6).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL BIBLIOTECA POPULAR/VIUDA FEDERAL BIBLIOTECA POPULAR (7).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL BIBLIOTECA POPULAR/VIUDA FEDERAL BIBLIOTECA POPULAR (8).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL BIBLIOTECA POPULAR/VIUDA FEDERAL BIBLIOTECA POPULAR (9).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL BIBLIOTECA POPULAR/VIUDA FEDERAL BIBLIOTECA POPULAR (10).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL BIBLIOTECA POPULAR/VIUDA FEDERAL BIBLIOTECA POPULAR (11).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL BIBLIOTECA POPULAR/VIUDA FEDERAL BIBLIOTECA POPULAR (12).webp"
    ],
    descripcion: "Cobertura para Viuda Federal en la Biblioteca Popular de Ciudad Jardín.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="VIUDA FEDERAL BIBLIOTECA POPULAR"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default ViudaFederalBibliotecaPopular;
