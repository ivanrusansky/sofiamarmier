import React from "react";
import ProyectosPage from "../ProyectosPage";

function Amueblados() {
  const proyectos = [
    // Agregar proyectos con imagen aquí
  ];
  return (
    <ProyectosPage categoria="fotografía" titulo="AMUEBLADOS" proyectos={proyectos} colorHover="#4b9b6c" />
  );
}
export default Amueblados;
