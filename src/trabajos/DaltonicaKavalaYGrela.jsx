import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function DaltonicaKavalaYGrela() {
  const trabajo = {
    imagenes: [
      "/flyers_de_Música/daltonica_kavala_y_grela/flyers_3_jpg"
    ],
    descripción: "Flyer para Daltónica, Kavala y Grela",
    año: "2024"
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
