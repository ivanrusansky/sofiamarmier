import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function TapaBrocks() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/d/112BbyLRb9aAcdOqrzSzWTo6HiLPmAl0Z"
    ],
    descripción: "diseño de tapa para Brocks",
    año: "2024"
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
