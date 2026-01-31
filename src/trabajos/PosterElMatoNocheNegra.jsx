import React from "react";
import TrabajosPage from "../TrabajosPage";

function PosterElMatoNocheNegra() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/d/1s7gghIWP1_0Jycyr4DIYYZJnipfQMalB"
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
