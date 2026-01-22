import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederalSaldias() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1RVIg4Zc_oBih7cItZ-xM2aR3nWHj0S1K"
    ],
    descripcion: "Sesión fotográfica de grabación de Viuda Federal en Saldías",
    cliente: "Viuda Federal",
    año: "2024",
    tecnicas: ["Fotografía de estudio", "Fotografía documental"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="VIUDA FEDERAL, SALDIAS"
      trabajo={trabajo}
      colorHover="#4b9b6c"
      rutaVolver="/fotografia/grabaciones"
    />
  );
}

export default ViudaFederalSaldias;
