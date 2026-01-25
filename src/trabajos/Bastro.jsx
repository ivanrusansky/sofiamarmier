import React from "react";
import TrabajosPage from "../TrabajosPage";

function Bastro() {
  const trabajo = {
    imagenes: [
      "/flyers_de_musica/BASTRO/la_luna_jpg"
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
