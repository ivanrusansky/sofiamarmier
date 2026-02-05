import React from "react";
import TrabajosPage from "../TrabajosPage";

function JeremiasMarful() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/VIVO/JEREMÍAS MARFUL/JERE EN EL HELIOS (1).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/JEREMÍAS MARFUL/JERE EN EL HELIOS (2).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/JEREMÍAS MARFUL/JERE EN EL HELIOS (3).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/JEREMÍAS MARFUL/JERE EN EL HELIOS (4).webp"
    ],
    descripcion: "Registro de Jeremías Marful en el Teatro Helios en el marco del festival RAMBLA.",
    año: "2023"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="JEREMÍAS MARFUL"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default JeremiasMarful;
