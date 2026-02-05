import React from "react";
import TrabajosPage from "../TrabajosPage";

function Michel() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/MICHEL/MICHEL1.webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/MICHEL/MICHEL2.webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/MICHEL/MICHEL3.webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/MICHEL/MICHEL4.webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/MICHEL/MICHEL5.webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/MICHEL/MICHEL6.webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/MICHEL/MICHEL7.webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/MICHEL/MICHEL8.webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/MICHEL/MICHEL9.webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/MICHEL/MICHEL10.webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/MICHEL/MICHEL11.webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/MICHEL/MICHEL12.webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/MICHEL/MICHEL13.webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/MICHEL/MICHEL14.webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/MICHEL/MICHEL15.webp",
      "/trabajosimg/FOTOGRAFÍA/INDUMENTARIA/MICHEL/MICHEL16.png.webp"
    ],
    descripcion: `Sesión de fotos para Michel.\nEstilismo por Denisse Calzone.\nModelos Camila Herman y Pedro Oliver\nEstudio Deofi`,
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="MICHEL"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/indumentaria"
    />
  );
}

export default Michel;
