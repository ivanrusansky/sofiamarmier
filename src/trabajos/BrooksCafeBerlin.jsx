import React from "react";
import TrabajosPage from "../TrabajosPage";

function BrooksCafeBerlin() {
  const trabajo = {
    imagenes: [
      "/flyers_de_musica/brooks_cafe_berlin/pag_1"
    ],
    descripcion: "Flyer para Brooks en Café Berlin",
    cliente: "Brooks",
    año: "2024",
    tecnicas: ["Diseño gráfico", "Ilustración digital"]
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
