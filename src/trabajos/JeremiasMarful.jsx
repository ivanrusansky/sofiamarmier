import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function JeremiasMarful() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/d/1BwRNLk2jGestsO3N_obsATQ_Q48IQlyj=w1000"
    ],
    descripción: "Registro de Jerem�as Marful en el Teatro Helios en el marco del festival RAMBLA.",
    año: "2023"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="JEREM�AS MARFUL"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default JeremiasMarful;
