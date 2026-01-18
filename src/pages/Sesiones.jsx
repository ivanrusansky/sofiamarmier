import React from "react";
import ProyectosPage from "../ProyectosPage";

function Sesiones() {
  const proyectos = [
    {
      nombre: "BASTRO 2025",
      descripcion: "",
      imagen: "/proyectos/sesiones/bastro-2025.jpg" // Cambia la ruta cuando tengas la imagen real
    },
    {
      nombre: "CRISÁ 2023",
      descripcion: "",
      imagen: "/proyectos/sesiones/crisa-2023.jpg" // Cambia la ruta cuando tengas la imagen real
    },
    {
      nombre: "CRISÁ 2025",
      descripcion: "",
      imagen: "/proyectos/sesiones/crisa-2025.jpg" // Cambia la ruta cuando tengas la imagen real
    },
    {
      nombre: "GAIA",
      descripcion: "",
      imagen: "/proyectos/sesiones/gaia.jpg" // Cambia la ruta cuando tengas la imagen real
    },
    {
      nombre: "VIUDA FEDERAL 2025",
      descripcion: "",
      imagen: "/proyectos/sesiones/viuda-federal-2025.jpg" // Cambia la ruta cuando tengas la imagen real
    },
  ];
  return (
    <ProyectosPage categoria="fotografía" titulo="SESIONES" proyectos={proyectos} colorHover="#00c853" />
  );
}
export default Sesiones;
