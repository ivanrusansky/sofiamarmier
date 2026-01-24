import React from "react";
import TrabajosPage from "../TrabajosPage";

function TapaBrocks() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/d/112BbyLRb9aAcdOqrzSzWTo6HiLPmAl0Z"
    ],
    descripcion: "Diseño de tapa para Brocks",
    cliente: "Brocks",
    año: "2024",
    tecnicas: ["Diseño gráfico", "Ilustración digital", "Diseño editorial"]
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="BROCKS"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/tapas"
    />
  );
}

export default TapaBrocks;
