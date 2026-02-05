import React from "react";
import TrabajosPage from "../TrabajosPage";

function CrisaNiceto() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (1).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (2).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (3).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (4).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (5).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (6).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (7).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (8).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (9).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (10).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (11).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (12).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (13).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (14).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (15).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (16).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (17).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (18).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (19).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (20).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (21).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (22).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (23).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (24).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (25).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (26).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (27).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/CRISÁ NICETO/CRISÁ NICETO (28).webp"
    ],
    descripcion: "Cobertura para Crisá en Niceto.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="CRISÁ NICETO"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default CrisaNiceto;
