import React from "react";
import TrabajosPage from "../TrabajosPage";

function VonFrixCamping() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/d/11m0O7wYjmXuP-2YUWCojxS7a2DsYBFyN=w1000"
    ],
    descripcion: "Cobertura para Von Frix en Camping.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="VON FRIX CAMPING"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default VonFrixCamping;
