import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function SofíaPereyraIrinaSofaZilaYOliCuan() {
  const trabajo = {
    imagenes: [
      "/flyers_de_Música/Sofía_pereyra_irina_sofa_zila_y_oli_cuan/flyer_jpg"
    ],
    descripción: "Flyer para el evento de Sofía Pereyra, Irina, Sofa, Zila y Oli Cuán",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="Sofía PEREYRA IRINA SOFA ZILA Y OLI CUÁN"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default SofíaPereyraIrinaSofaZilaYOliCuan;
