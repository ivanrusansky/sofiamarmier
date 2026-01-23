import React from "react";
import TrabajosPage from "../TrabajosPage";

function PosterBastro() {
  const trabajo = {
    imagenes: [
      "/proyectos/posters/bastro.jpg"
    ],
    descripcion: "Póster para BASTRO",
    cliente: "BASTRO",
    año: "2024",
    tecnicas: ["Diseño gráfico", "Ilustración digital"]
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
