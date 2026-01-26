import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function PosterBastro() {
  const trabajo = {
    imagenes: [
      "/proyectos/posters/bastro.jpg"
    ],
    descripción: "Póster para BASTRO",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="BASTRO"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/posters"
    />
  );
}

export default PosterBastro;
