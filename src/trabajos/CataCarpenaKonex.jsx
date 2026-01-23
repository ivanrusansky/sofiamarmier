import React from "react";
import TrabajosPage from "../TrabajosPage";

function CataCarpenaKonex() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1MJOkqzLUQlt7l3RBUTLiOnoPYHjjg2QU"
    ],
    descripcion: "Fotografía en vivo de Cata Carpena en Konex",
    cliente: "Cata Carpena",
    año: "2024",
    tecnicas: ["Fotografía en vivo", "Fotografía de conciertos"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="CATA CARPENA KONEX"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default CataCarpenaKonex;
