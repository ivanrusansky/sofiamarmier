import React from "react";
import ProyectosPage from "../ProyectosPage";

function Tapas() {
  const proyectos = [
    {
      nombre: "BASTRO",
      descripcion: "",
      imagen: "/proyectos/tapas/bastro.jpg" // Cambia la ruta cuando tengas la imagen real
    },
    {
      nombre: "BROCKS",
      descripcion: "",
      imagen: "/proyectos/tapas/brocks.jpg" // Cambia la ruta cuando tengas la imagen real
    },
    {
      nombre: "SANTIAGO LEAVY",
      descripcion: "",
      imagen: "/proyectos/tapas/santiago-leavy.jpg" // Cambia la ruta cuando tengas la imagen real
    },
    {
      nombre: "SATURNO Y LAS IDEAS",
      descripcion: "",
      imagen: "/proyectos/tapas/saturno-y-las-ideas.jpg" // Cambia la ruta cuando tengas la imagen real
    },
    {
      nombre: "VIUDA FEDERAL",
      descripcion: "",
      imagen: "/proyectos/tapas/viuda-federal.jpg" // Cambia la ruta cuando tengas la imagen real
    },
  ];
  return (
    <ProyectosPage categoria="diseño gráfico" titulo="TAPAS" proyectos={proyectos} colorHover="#f0ec10" />
  );
}
export default Tapas;
