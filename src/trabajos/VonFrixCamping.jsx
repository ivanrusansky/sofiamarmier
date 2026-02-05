import React from "react";
import TrabajosPage from "../TrabajosPage";

function VonFrixCamping() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (1).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (2).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (3).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (4).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (5).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (6).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (7).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (8).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (9).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (10).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (11).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (12).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (13).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (14).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (15).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (16).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (17).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (18).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (19).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (20).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (21).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (22).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (23).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (24).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (25).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (26).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (27).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (28).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (29).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VON FRIX CAMPING/VON FRIX (30).webp"
    ],
    descripcion: "Cobertura para Von Frix en Camping.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="VON FRIX CAMPING"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default VonFrixCamping;
