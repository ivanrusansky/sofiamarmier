import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederal2025Sesion() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/VIUDA FEDERAL 2025/2.webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/VIUDA FEDERAL 2025/3.webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/VIUDA FEDERAL 2025/4.webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/VIUDA FEDERAL 2025/5.webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/VIUDA FEDERAL 2025/VIUDA FEDERAL (1).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/VIUDA FEDERAL 2025/VIUDA FEDERAL (1).1.webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/VIUDA FEDERAL 2025/VIUDA FEDERAL (2).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/VIUDA FEDERAL 2025/VIUDA FEDERAL (2).1.webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/VIUDA FEDERAL 2025/VIUDA FEDERAL (3).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/VIUDA FEDERAL 2025/VIUDA FEDERAL (3).1.webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/VIUDA FEDERAL 2025/VIUDA FEDERAL (4).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/VIUDA FEDERAL 2025/VIUDA FEDERAL (4).1.webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/VIUDA FEDERAL 2025/VIUDA FEDERAL (5).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/VIUDA FEDERAL 2025/VIUDA FEDERAL (6).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/VIUDA FEDERAL 2025/VIUDA FEDERAL (6).1.webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/VIUDA FEDERAL 2025/VIUDA FEDERAL (7).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/VIUDA FEDERAL 2025/VIUDA FEDERAL (8).webp",
      "/trabajosimg/FOTOGRAFÍA/SESIÓNES/VIUDA FEDERAL 2025/VIUDA FEDERAL (9).webp"
    ],
    descripcion: "Sesión fotográfica de Viuda Federal 2025",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="VIUDA FEDERAL 2025"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/sesiones"
    />
  );
}

export default ViudaFederal2025Sesion;
