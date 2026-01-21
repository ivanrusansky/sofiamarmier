import React from "react";
import TrabajosPage from "../TrabajosPage";

function VonFrixCamping() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/d/11m0O7wYjmXuP-2YUWCojxS7a2DsYBFyN=w1000"
    ],
    descripcion: "Fotografía en vivo de Von Frix en Camping",
    cliente: "Von Frix",
    año: "2024",
    tecnicas: ["Fotografía en vivo", "Fotografía de conciertos"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="VON FRIX CAMPING"
      trabajo={trabajo}
      colorHover="#00c853"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default VonFrixCamping;
