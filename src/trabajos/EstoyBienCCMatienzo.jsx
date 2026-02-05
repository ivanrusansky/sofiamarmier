import React from "react";
import TrabajosPage from "../TrabajosPage";

function EstoyBienCCMatienzo() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN MATIENZO (1).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN MATIENZO (2).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN MATIENZO (3).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN MATIENZO (4).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN MATIENZO (5).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN MATIENZO (6).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN MATIENZO (7).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN MATIENZO (8).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN MATIENZO (9).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN MATIENZO (10).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN MATIENZO (11).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN MATIENZO (12).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN MATIENZO (13).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/ESTOY BIEN CC MATIENZO/ESTOY BIEN MATIENZO (14).webp"
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
