import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederalMoscuVivo() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/d/1M1gd3OCogapihhz-Nwzo1Oo4SLxE6ztM=w1000"
    ],
    descripcion: "Fotografía en vivo de Viuda Federal en Moscú",
    cliente: "Viuda Federal",
    año: "2024",
    tecnicas: ["Fotografía en vivo", "Fotografía de conciertos"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="VIUDA FEDERAL MOSCÚ"
      trabajo={trabajo}
      colorHover="#4b9b6c"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default ViudaFederalMoscuVivo;
