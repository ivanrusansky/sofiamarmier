import React from "react";
import TrabajosPage from "../TrabajosPage";

function PosterIndioSolariTandil() {
  const trabajo = {
    imagenes: [
      "/proyectos/posters/indio-solari-tandil.jpg"
    ],
    descripcion: "Póster para Indio Solari en Tandil",
    cliente: "Indio Solari",
    año: "2024",
    tecnicas: ["Diseño gráfico", "Ilustración digital"]
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="INDIO SOLARI TANDIL"
      trabajo={trabajo}
      colorHover="#f0ec10"
      rutaVolver="/diseno-grafico/posters"
    />
  );
}

export default PosterIndioSolariTandil;
