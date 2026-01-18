import React from "react";
import ProyectosPage from "../ProyectosPage";

function Amueblados() {
  const proyectos = [
    { nombre: "Amueblado 1", descripcion: "Descripción amueblado 1", imagen: "/proyectos/amueblado1.jpg" },
    { nombre: "Amueblado 2", descripcion: "Descripción amueblado 2", imagen: "/proyectos/amueblado2.jpg" },
  ];
  return (
    <ProyectosPage categoria="fotografía" titulo="AMUEBLADOS" proyectos={proyectos} colorHover="#00c853" />
  );
}
export default Amueblados;
