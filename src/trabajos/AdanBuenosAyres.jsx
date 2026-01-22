import React from "react";
import TrabajosPage from "../TrabajosPage";

function AdanBuenosAyres() {
  const trabajo = {
    imagenes: [
      "/flyers_de_musica/adan_buenos_ayres/flyer_jpg"
    ],
    descripcion: "Flyer para Adan Buenos Ayres",
    cliente: "Adan Buenos Ayres",
    año: "2024",
    tecnicas: ["Diseño gráfico", "Ilustración digital"]
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="ADAN BUENOS AYRES"
      trabajo={trabajo}
      colorHover="#c4a312"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default AdanBuenosAyres;
