import React from "react";
import TrabajosPage from "../TrabajosPage";

function SofiaPereyraIrinaSofaZilaYOliCuan() {
  const trabajo = {
    imagenes: [
      "/flyers_de_musica/sofia_pereyra_irina_sofa_zila_y_oli_cuan/flyer_jpg"
    ],
    descripcion: "Flyer para el evento de Sofía Pereyra, Irina, Sofa, Zila y Oli Cuán",
    cliente: "Sofía Pereyra, Irina, Sofa, Zila, Oli Cuán",
    año: "2024",
    tecnicas: ["Diseño gráfico", "Ilustración digital"]
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="SOFÍA PEREYRA IRINA SOFA ZILA Y OLI CUÁN"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default SofiaPereyraIrinaSofaZilaYOliCuan;
