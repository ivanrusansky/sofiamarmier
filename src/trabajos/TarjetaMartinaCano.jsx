import React from "react";
import TrabajosPage from "../TrabajosPage";

function TarjetaMartinaCano() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/d/1o3oITXnvfUkb2S_wQZvv3YN9BHKvgZk6"
    ],
    descripcion: "Diseño de tarjeta personal para Martina Cano",
    cliente: "Martina Cano",
    año: "2024",
    tecnicas: ["Diseño gráfico", "Diseño de identidad"]
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="MARTINA CANO"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/tarjetas"
    />
  );
}

export default TarjetaMartinaCano;
