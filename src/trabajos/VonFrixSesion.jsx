import React from "react";
import TrabajosPage from "../TrabajosPage";

function VonFrixSesion() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1xAN9t46LyLFoGo1b74WGaWmR9BuWKIyi"
    ],
    descripcion: "Sesión en vivo de Von Frix",
    cliente: "Von Frix",
    año: "2024",
    tecnicas: ["Video", "Producción audiovisual", "Sesión en vivo"]
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
