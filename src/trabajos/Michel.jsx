import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function Michel() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1fFcJulkLCIzbpBmoW4bP3Yb2xZhnIvZH"
    ],
    descripción: `sesión de fotos para Michel.\nEstilismo por Denisse Calzone.\nModelos Camila Herman y Pedro Oliver\nEstudio Deofi`,
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="MICHEL"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/indumentaria"
    />
  );
}

export default Michel;
