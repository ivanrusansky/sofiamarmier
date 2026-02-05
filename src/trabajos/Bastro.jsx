import React from "react";
import TrabajosPage from "../TrabajosPage";

function Bastro() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/BASTRO/LA LUNA.webp",
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/BASTRO/MAR DE MIEL.webp"
    ],
    descripcion: "Flyer para el evento de BASTRO",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="BASTRO"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default Bastro;
