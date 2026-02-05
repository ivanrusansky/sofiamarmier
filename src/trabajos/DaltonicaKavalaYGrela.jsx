import React from "react";
import TrabajosPage from "../TrabajosPage";

function DaltonicaKavalaYGrela() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/DALTONICA, KAVALA Y GRELA/FLYERS (1).webp",
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/DALTONICA, KAVALA Y GRELA/FLYERS (2).webp",
      "/trabajosimg/DISEÑO GRÁFICO/FLYERS DE MÚSICA/DALTONICA, KAVALA Y GRELA/FLYERS (3).webp"
    ],
    descripcion: "Flyer para Daltónica, Kavala y Grela",
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
