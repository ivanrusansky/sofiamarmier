import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederalMoscuVivo() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/DSC_0451.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/DSC_0453.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL -132.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL -136.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL -139.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL -144.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL -145.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL -149.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL -153.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL -158.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL -167.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL -183.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL -186.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL -190.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL -202.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL -212.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL -229.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL -230.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL -237.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL -240.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL -247.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL -248.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL -252.webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/VIUDA FEDERAL MOSCÚ/VIUDA FEDERAL -254.webp"
    ],
    descripcion: "Cobertura para Viuda Federal en Moscú.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="VIUDA FEDERAL MOSCÚ"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default ViudaFederalMoscuVivo;
