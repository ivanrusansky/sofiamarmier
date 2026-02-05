import React from "react";
import TrabajosPage from "../TrabajosPage";

function TarjetaMartinaCano() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/DISEÑO GRÁFICO/TARJETAS/MARTINA CANO/OP.1_PÁG 1.webp",
      "/trabajosimg/DISEÑO GRÁFICO/TARJETAS/MARTINA CANO/OP.1_PÁG 2.webp",
      "/trabajosimg/DISEÑO GRÁFICO/TARJETAS/MARTINA CANO/OP.2_PÁG 1.webp",
      "/trabajosimg/DISEÑO GRÁFICO/TARJETAS/MARTINA CANO/OP.2_PÁG 2.webp"
    ],
    descripcion: "Diseño de tarjeta personal para Martina Cano",
    año: "2024"
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
