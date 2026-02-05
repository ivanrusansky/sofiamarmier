import React from "react";
import TrabajosPage from "../TrabajosPage";

function EstoyBienCCMatienzo() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN CC MATIENZO (1).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN CC MATIENZO (2).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN CC MATIENZO (3).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN CC MATIENZO (4).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN CC MATIENZO (5).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN CC MATIENZO (6).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN CC MATIENZO (7).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN CC MATIENZO (8).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN CC MATIENZO (9).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN CC MATIENZO (10).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN CC MATIENZO (11).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN CC MATIENZO (12).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN CC MATIENZO (13).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN CC MATIENZO (14).webp"
    ],
    descripcion: "Fotografía en vivo de Estoy Bien en CC Matienzo",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="ESTOY BIEN CC MATIENZO"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default EstoyBienCCMatienzo;
