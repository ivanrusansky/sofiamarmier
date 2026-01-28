import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function TarjetaMartínaCano() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/d/1o3oITXnvfUkb2S_wQZvv3YN9BHKvgZk6"
    ],
    descripción: "diseño de tarjeta personal para Martína Cano",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="MartínA CANO"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/tarjetas"
    />
  );
}

export default TarjetaMartínaCano;
