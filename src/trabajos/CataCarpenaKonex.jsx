import React from "react";
import TrabajosPage from "../TrabajosPage";

function CataCarpenaKonex() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1MJOkqzLUQlt7l3RBUTLiOnoPYHjjg2QU"
    ],
    descripcion: "Registro de Cata Carpena en el Konex.",
    año: "2025"
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
