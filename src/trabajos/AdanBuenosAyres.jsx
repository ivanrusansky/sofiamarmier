import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function AdanBuenosAyres() {
  const trabajo = {
    imagenes: [
      "/flyers_de_Música/adan_buenos_ayres/flyer_jpg"
    ],
    descripción: "Flyer para Adan Buenos Ayres",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="ADAN BUENOS AYRES"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default AdanBuenosAyres;
