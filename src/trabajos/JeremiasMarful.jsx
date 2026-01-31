import React from "react";
import TrabajosPage from "../TrabajosPage";

function JeremiasMarful() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/d/1BwRNLk2jGestsO3N_obsATQ_Q48IQlyj=w1000"
    ],
    descripcion: "Registro de Jeremías Marful en el Teatro Helios en el marco del festival RAMBLA.",
    año: "2023"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="JEREMÍAS MARFUL"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default JeremiasMarful;
