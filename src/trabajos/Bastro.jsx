import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function Bastro() {
  const trabajo = {
    imagenes: [
      "/flyers_de_Música/BASTRO/la_luna_jpg"
    ],
    descripción: "Flyer para el evento de BASTRO",
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
