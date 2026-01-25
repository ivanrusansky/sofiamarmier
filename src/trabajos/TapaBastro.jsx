import React from "react";
import TrabajosPage from "../TrabajosPage";

function TapaBastro() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/d/1sWXAt5dyYSJz0qj-OWbKhZExF9JlNgsq"
    ],
    descripcion: "Diseño de tapa para BASTRO",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="BASTRO"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/diseno-grafico/tapas"
    />
  );
}

export default TapaBastro;
