import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederalSala41() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/d/1ReFK2T5krEDhwsNTkp7zXAG_W0IB6Qs2=w1000"
    ],
    descripcion: "Fotografía en vivo de Viuda Federal en Sala 41",
    cliente: "Viuda Federal",
    año: "2024",
    tecnicas: ["Fotografía en vivo", "Fotografía de conciertos"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="VIUDA FEDERAL SALA 41"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default ViudaFederalSala41;
