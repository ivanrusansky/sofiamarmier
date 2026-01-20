import React from "react";
import ProyectosPage from "../ProyectosPage";

function Amueblados() {
  const proyectos = [
    // Agregar proyectos con imagen aquí
  ];
  return (
    <ProyectosPage categoria="fotografía" titulo="AMUEBLADOS" proyectos={proyectos} colorHover="#00c853" />
  );
}
export default Amueblados;
