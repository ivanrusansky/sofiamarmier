import React from "react";
import TrabajosPage from "../TrabajosPage";

function BastroDeltaSound() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1SZuioC6t4ED2h2a81r9wfNBnmrOOx4-I"
    ],
    descripcion: "Sesión fotográfica de grabación de BASTRO en Delta Sound",
    cliente: "BASTRO",
    año: "2024",
    tecnicas: ["Fotografía de estudio", "Fotografía documental"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="BASTRO, DELTA SOUND"
      trabajo={trabajo}
      colorHover="#4b9b6c"
      rutaVolver="/fotografia/grabaciones"
    />
  );
}

export default BastroDeltaSound;
