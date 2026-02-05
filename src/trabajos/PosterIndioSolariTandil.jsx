import React from "react";
import TrabajosPage from "../TrabajosPage";

function PosterIndioSolariTandil() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/DISEÑO GRÁFICO/POSTERS/INDIO SOLARI TANDIL/INDIO SOLARI DIARIO.webp"
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
