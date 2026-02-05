import React from "react";
import TrabajosPage from "../TrabajosPage";

function TarjetaIvanRusansky() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/DISEÑO GRÁFICO/TARJETAS/IVÁN RUSANSKY/DESARROLLO WEB.webp",
      "/trabajosimg/DISEÑO GRÁFICO/TARJETAS/IVÁN RUSANSKY/DESARROLLOWEB_HISTORIAS 1.webp",
      "/trabajosimg/DISEÑO GRÁFICO/TARJETAS/IVÁN RUSANSKY/DESARROLLOWEB_HISTORIAS 2.webp",
      "/trabajosimg/DISEÑO GRÁFICO/TARJETAS/IVÁN RUSANSKY/DESARROLLOWEB_HISTORIAS 3.webp",
      "/trabajosimg/DISEÑO GRÁFICO/TARJETAS/IVÁN RUSANSKY/DESARROLLOWEB_HISTORIAS 4.webp",
      "/trabajosimg/DISEÑO GRÁFICO/TARJETAS/IVÁN RUSANSKY/FOTOGRAFÍA.webp",
      "/trabajosimg/DISEÑO GRÁFICO/TARJETAS/IVÁN RUSANSKY/FOTOGRAFÍA_HISTORIAS 1.webp",
      "/trabajosimg/DISEÑO GRÁFICO/TARJETAS/IVÁN RUSANSKY/FOTOGRAFÍA_HISTORIAS 2.webp",
      "/trabajosimg/DISEÑO GRÁFICO/TARJETAS/IVÁN RUSANSKY/FOTOGRAFÍA_HISTORIAS 3.webp",
      "/trabajosimg/DISEÑO GRÁFICO/TARJETAS/IVÁN RUSANSKY/FOTOGRAFÍA_HISTORIAS 4.webp",
      "/trabajosimg/DISEÑO GRÁFICO/TARJETAS/IVÁN RUSANSKY/VISUALIZADOR 1.webp",
      "/trabajosimg/DISEÑO GRÁFICO/TARJETAS/IVÁN RUSANSKY/VISUALIZADOR 2.webp"
    ],
    descripcion: "Diseño de tarjeta personal para Iván Rusansky",
    año: "2024"
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
