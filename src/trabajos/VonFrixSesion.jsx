import React from "react";
import TrabajosPage from "../TrabajosPage";

function VonFrixSesion() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/AUDIOVISUAL/SESIONES EN VIVO/VON FRIX/1.webp",
      "/trabajosimg/AUDIOVISUAL/SESIONES EN VIVO/VON FRIX/2.webp",
      "/trabajosimg/AUDIOVISUAL/SESIONES EN VIVO/VON FRIX/3.webp",
      "/trabajosimg/AUDIOVISUAL/SESIONES EN VIVO/VON FRIX/4.webp"
    ],
    descripcion: "Sesión en vivo de Von Frix",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="audiovisual"
      titulo="VON FRIX"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/audiovisual/sesiones-en-vivo"
    />
  );
}

export default VonFrixSesion;
