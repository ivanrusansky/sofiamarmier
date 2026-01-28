import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function Crisa2023() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1iJB_lUrj4bcPyAkuxv_na7-tukc__FgY"
    ],
    descripción: "Registro de Cris� en el 2023. Indumentaria realizada por Coty Casolati.",
    año: "2023"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="CRIS� 2023"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/sesiones"
    />
  );
}

export default Crisa2023;
