import React from "react";
import TrabajosPage from "../TrabajosPage";

function PosterElMatoNocheNegra() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/DISEÑO GRÁFICO/POSTERS/EL MATÓ - NOCHE NEGRA/NOCHE NEGRA EL MATÓ.webp"
    ],
    descripcion: "Póster para El Mato - Noche Negra",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="EL MATO - NOCHE NEGRA"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/posters"
    />
  );
}

export default PosterElMatoNocheNegra;
