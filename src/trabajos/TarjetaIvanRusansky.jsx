import React from "react";
import TrabajosPage from "../TrabajosPage";

function TarjetaIvanRusansky() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/d/10mlk7vUYqmJ-RttFPI5PYV3Flv0p1w7E"
    ],
    descripcion: "Diseño de tarjeta personal para Iván Rusansky",
    cliente: "Iván Rusansky",
    año: "2024",
    tecnicas: ["Diseño gráfico", "Diseño de identidad"]
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="IVÁN RUSANSKY"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/tarjetas"
    />
  );
}

export default TarjetaIvanRusansky;
