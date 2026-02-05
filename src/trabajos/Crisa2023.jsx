import React from "react";
import TrabajosPage from "../TrabajosPage";

function Crisa2023() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2023/CRISÁ 2023 (1).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2023/CRISÁ 2023 (2).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2023/CRISÁ 2023 (3).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2023/CRISÁ 2023 (4).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2023/CRISÁ 2023 (5).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2023/CRISÁ 2023 (6).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2023/CRISÁ 2023 (7).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2023/CRISÁ 2023 (8).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2023/CRISÁ 2023 (9).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2023/CRISÁ 2023 (10).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2023/CRISÁ 2023 (11).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2023/CRISÁ 2023 (12).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2023/CRISÁ 2023 (13).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/CRISÁ 2023/CRISÁ 2023 (14).webp"
    ],
    descripcion: "Registro de Crisá en el 2023. Indumentaria realizada por Coty Casolati.",
    año: "2023"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="CRISÁ 2023"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/sesiones"
    />
  );
}

export default Crisa2023;
