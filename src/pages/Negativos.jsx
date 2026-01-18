import React from "react";
import ProyectosPage from "../ProyectosPage";

function Negativos() {
  const proyectos = [
    {
      nombre: "BLANCO Y NEGRO",
      descripcion: "",
      imagen: "/proyectos/negativos/blanco-y-negro.jpg" // Cambia la ruta cuando tengas la imagen real
    },
    {
      nombre: "COLOR",
      descripcion: "",
      imagen: "/proyectos/negativos/color.jpg" // Cambia la ruta cuando tengas la imagen real
    },
  ];
  return (
    <ProyectosPage categoria="fotografía" titulo="NEGATIVOS" proyectos={proyectos} colorHover="#00c853" />
  );
}
export default Negativos;
