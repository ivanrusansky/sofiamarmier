import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function BrooksRomaphonic() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1Xr-2wDCFu1rgI1VizLMxzb6EBp308sEe"
    ],
    descripción: "Brooks en Romaphonic grabando su primer disco Nada era tan Cierto. Producido por Ale Vazquez. 7 d�as de febrero muy felices.",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="BROOKS, ROMAPHONIC"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/grabaciones"
    />
  );
}

export default BrooksRomaphonic;
