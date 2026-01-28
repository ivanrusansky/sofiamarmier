import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function ViudaFederalShow() {
  const trabajo = {
    imagenes: [
      "/proyectos/shows-en-vivo/viuda-federal.jpg"
    ],
    descripción: "Show en vivo de Viuda Federal",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="audiovisual"
      titulo="VIUDA FEDERAL"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/audiovisual/shows-en-vivo"
    />
  );
}

export default ViudaFederalShow;
