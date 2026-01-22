import React from "react";
import TrabajosPage from "../TrabajosPage";

function JeremiasMarfulHilarioProserpio() {
  const trabajo = {
    imagenes: [
      "/flyers_de_musica/jeremias_marful_hilario_proserpio_y_saturnino_y_las_ideas/pag_1",
      "/flyers_de_musica/jeremias_marful_hilario_proserpio_y_saturnino_y_las_ideas/pag_2"
    ],
    descripcion: "Flyer para Jeremías Marful, Hilario Proserpio y Saturnino y Las Ideas",
    cliente: "Jeremías Marful, Hilario Proserpio, Saturnino y Las Ideas",
    año: "2024",
    tecnicas: ["Diseño gráfico", "Ilustración digital"]
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="JEREMÍAS MARFUL HILARIO PROSERPIO Y SATURNINO Y LAS IDEAS"
      trabajo={trabajo}
      colorHover="#c4a312"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default JeremiasMarfulHilarioProserpio;
