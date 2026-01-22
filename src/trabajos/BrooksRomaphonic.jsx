import React from "react";
import TrabajosPage from "../TrabajosPage";

function BrooksRomaphonic() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1Xr-2wDCFu1rgI1VizLMxzb6EBp308sEe"
    ],
    descripcion: "Sesión fotográfica de grabación de Brooks en Romaphonic",
    cliente: "Brooks",
    año: "2024",
    tecnicas: ["Fotografía de estudio", "Fotografía documental"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="BROOKS, ROMAPHONIC"
      trabajo={trabajo}
      colorHover="#00c853"
      rutaVolver="/fotografia/grabaciones"
    />
  );
}

export default BrooksRomaphonic;
