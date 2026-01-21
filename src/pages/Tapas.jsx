import React from "react";
import ProyectosPage from "../ProyectosPage";

function Tapas() {
  const proyectos = [
    {
      nombre: "BASTRO",
      descripcion: "",
      imagen: "/proyectos/tapas/bastro.jpg",
      sinImagen: true,
      ruta: "/trabajo/tapa-bastro"
    },
    {
      nombre: "BROCKS",
      descripcion: "",
      imagen: "/proyectos/tapas/brocks.jpg",
      sinImagen: true,
      ruta: "/trabajo/tapa-brocks"
    },
    {
      nombre: "SANTIAGO LEAVY",
      descripcion: "",
      imagen: "/proyectos/tapas/santiago-leavy.jpg",
      sinImagen: true,
      ruta: "/trabajo/tapa-santiago-leavy"
    },
    {
      nombre: "SATURNO Y LAS IDEAS",
      descripcion: "",
      imagen: "/proyectos/tapas/saturno-y-las-ideas.jpg",
      sinImagen: true,
      ruta: "/trabajo/tapa-saturno-y-las-ideas"
    },
    {
      nombre: "VIUDA FEDERAL",
      descripcion: "",
      imagen: "/proyectos/tapas/viuda-federal.jpg",
      sinImagen: true,
      ruta: "/trabajo/tapa-viuda-federal"
    },
  ];
  return (
    <ProyectosPage categoria="diseño gráfico" titulo="TAPAS" proyectos={proyectos} colorHover="#f0ec10" />
  );
}
export default Tapas;
