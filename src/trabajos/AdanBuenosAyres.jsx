import React from "react";
import TrabajosPage from "../TrabajosPage";

function AdanBuenosAyres() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/ADÁN BUENOS AYRES/FLYER.webp",
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/ADÁN BUENOS AYRES/FLYER 2.webp"
    ],
    descripcion: "Flyer para Adan Buenos Ayres",
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
