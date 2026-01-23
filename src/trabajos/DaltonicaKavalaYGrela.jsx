import React from "react";
import TrabajosPage from "../TrabajosPage";

function DaltonicaKavalaYGrela() {
  const trabajo = {
    imagenes: [
      "/flyers_de_musica/daltonica_kavala_y_grela/flyers_3_jpg"
    ],
    descripcion: "Flyer para Daltónica, Kavala y Grela",
    cliente: "Daltónica, Kavala, Grela",
    año: "2024",
    tecnicas: ["Diseño gráfico", "Ilustración digital"]
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="DALTÓNICA KAVALA Y GRELA"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default DaltonicaKavalaYGrela;
