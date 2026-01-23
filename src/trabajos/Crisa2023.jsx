import React from "react";
import TrabajosPage from "../TrabajosPage";

function Crisa2023() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1iJB_lUrj4bcPyAkuxv_na7-tukc__FgY"
    ],
    descripcion: "Sesión fotográfica de Crisá 2023",
    cliente: "Crisá",
    año: "2023",
    tecnicas: ["Fotografía de retrato", "Fotografía de banda"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="CRISÁ 2023"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/sesiones"
    />
  );
}

export default Crisa2023;
