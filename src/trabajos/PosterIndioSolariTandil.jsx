import React from "react";
import TrabajosPage from "../TrabajosPage";

function PosterIndioSolariTandil() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/d/1YCdjQ5izsyG8FfS5HdXO4Fl-roXCQucN"
    ],
    descripcion: "Póster para Indio Solari en Tandil",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="INDIO SOLARI TANDIL"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/posters"
    />
  );
}

export default PosterIndioSolariTandil;
