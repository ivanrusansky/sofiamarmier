import React from "react";
import TrabajosPage from "../TrabajosPage";

function Bastro() {
  const trabajo = {
    imagenes: [
      "/flyers_de_musica/BASTRO/la_luna_jpg"
    ],
    descripcion: "Flyer para el evento de BASTRO",
    cliente: "BASTRO",
    año: "2024",
    tecnicas: ["Diseño gráfico", "Ilustración digital"]
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="BASTRO"
      trabajo={trabajo}
      colorHover="#c4a312"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default Bastro;
