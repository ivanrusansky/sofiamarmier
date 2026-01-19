import React from "react";
import ProyectosPage from "../ProyectosPage";

function Tapas() {
  const proyectos = [
    {
      nombre: "BASTRO",
      descripcion: "",
      imagen: "/proyectos/tapas/bastro.jpg"
    },
    {
      nombre: "BROCKS",
      descripcion: "",
      imagen: "/proyectos/tapas/brocks.jpg"
    },
    {
      nombre: "SANTIAGO LEAVY",
      descripcion: "",
      imagen: "/proyectos/tapas/santiago-leavy.jpg"
    },
    {
      nombre: "SATURNO Y LAS IDEAS",
      descripcion: "",
      imagen: "/proyectos/tapas/saturno-y-las-ideas.jpg"
    },
    {
      nombre: "VIUDA FEDERAL",
      descripcion: "",
      imagen: "/proyectos/tapas/viuda-federal.jpg"
    },
  ];
  return (
    <ProyectosPage categoria="diseño gráfico" titulo="TAPAS" proyectos={proyectos} colorHover="#f0ec10" />
  );
}
export default Tapas;
