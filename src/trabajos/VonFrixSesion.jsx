import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function VonFrixsesión() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1xAN9t46LyLFoGo1b74WGaWmR9BuWKIyi"
    ],
    descripción: "sesión en vivo de Von Frix",
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

export default VonFrixsesión;
