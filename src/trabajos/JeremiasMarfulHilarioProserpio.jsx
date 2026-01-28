import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function JeremiasMarfulHilarioProserpio() {
  const trabajo = {
    imagenes: [
      "/flyers_de_Música/jeremias_marful_hilario_proserpio_y_saturnino_y_las_ideas/pag_1",
      "/flyers_de_Música/jeremias_marful_hilario_proserpio_y_saturnino_y_las_ideas/pag_2"
    ],
    descripción: "Flyer para Jeremías Marful, Hilario Proserpio y Saturnino y Las Ideas",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="JEREMÍAS MARFUL HILARIO PROSERPIO Y SATURNINO Y LAS IDEAS"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default JeremiasMarfulHilarioProserpio;
