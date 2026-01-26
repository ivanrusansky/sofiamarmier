import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function BrooksCafeBerlin() {
  const trabajo = {
    imagenes: [
      "/flyers_de_Música/brooks_cafe_berlin/pag_1"
    ],
    descripción: "Flyer para Brooks en Café Berlin",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="BROOKS CAFÉ BERLIN"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default BrooksCafeBerlin;
