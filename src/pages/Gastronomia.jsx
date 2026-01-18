import React from "react";
import ProyectosPage from "../ProyectosPage";

function Gastronomia() {
  const proyectos = [
    {
      nombre: "BARRIO CAFÉ",
      descripcion: "",
      imagen: "/proyectos/gastronomia/barrio-cafe.jpg" // Cambia la ruta cuando tengas la imagen real
    },
    {
      nombre: "VINRSA VINOS",
      descripcion: "",
      imagen: "/proyectos/gastronomia/vinrsa-vinos.jpg" // Cambia la ruta cuando tengas la imagen real
    },
  ];
  return (
    <ProyectosPage categoria="fotografía" titulo="GASTRONOMÍA" proyectos={proyectos} colorHover="#00c853" />
  );
}
export default Gastronomia;
