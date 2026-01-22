import React from "react";
import TrabajosPage from "../TrabajosPage";

function Michel() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1fFcJulkLCIzbpBmoW4bP3Yb2xZhnIvZH"
    ],
    descripcion: "Sesión fotográfica para Michel",
    cliente: "Michel",
    año: "2024",
    tecnicas: ["Fotografía de moda", "Fotografía editorial"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="MICHEL"
      trabajo={trabajo}
      colorHover="#4b9b6c"
      rutaVolver="/fotografia/indumentaria"
    />
  );
}

export default Michel;
