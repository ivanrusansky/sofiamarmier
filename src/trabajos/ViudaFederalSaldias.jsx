import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederalSaldias() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/VIUDA FEDERAL SALDIAS/VIUDA FEDERAL SALDIAS (1).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/VIUDA FEDERAL SALDIAS/VIUDA FEDERAL SALDIAS (2).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/VIUDA FEDERAL SALDIAS/VIUDA FEDERAL SALDIAS (3).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/VIUDA FEDERAL SALDIAS/VIUDA FEDERAL SALDIAS (4).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/VIUDA FEDERAL SALDIAS/VIUDA FEDERAL SALDIAS (5).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/VIUDA FEDERAL SALDIAS/VIUDA FEDERAL SALDIAS (6).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/VIUDA FEDERAL SALDIAS/VIUDA FEDERAL SALDIAS (7).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/VIUDA FEDERAL SALDIAS/VIUDA FEDERAL SALDIAS (8).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/VIUDA FEDERAL SALDIAS/VIUDA FEDERAL SALDIAS (9).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/VIUDA FEDERAL SALDIAS/VIUDA FEDERAL SALDIAS (10).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/VIUDA FEDERAL SALDIAS/VIUDA FEDERAL SALDIAS (11).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/VIUDA FEDERAL SALDIAS/VIUDA FEDERAL SALDIAS (12).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/VIUDA FEDERAL SALDIAS/VIUDA FEDERAL SALDIAS (13).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/VIUDA FEDERAL SALDIAS/VIUDA FEDERAL SALDIAS (14).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/VIUDA FEDERAL SALDIAS/VIUDA FEDERAL SALDIAS (15).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/VIUDA FEDERAL SALDIAS/VIUDA FEDERAL SALDIAS (16).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/VIUDA FEDERAL SALDIAS/VIUDA FEDERAL SALDIAS (17).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/VIUDA FEDERAL SALDIAS/VIUDA FEDERAL SALDIAS (18).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/VIUDA FEDERAL SALDIAS/VIUDA FEDERAL SALDIAS (19).webp",
      "/trabajosimg/FOTOGRAFÍA/GRABACIÓNES/VIUDA FEDERAL SALDIAS/VIUDA FEDERAL SALDIAS (20).webp"
    ],
    descripcion: "Viuda Federal en Saldías, la sala donde ensayaron para la fecha de Moscú realizada y producida enteramente por ellos.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="VIUDA FEDERAL, SALDIAS"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/grabaciones"
    />
  );
}

export default ViudaFederalSaldias;
