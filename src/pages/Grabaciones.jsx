import React from "react";
import ProyectosPage from "../ProyectosPage";

function Grabaciones() {
  const proyectos = [
    {
      nombre: "BASTRO, DELTA SOUND",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/u/0/d/1SZuioC6t4ED2h2a81r9wfNBnmrOOx4-I",
      ruta: "/trabajo/bastro-delta-sound"
    },
    {
      nombre: "BROOKS, ROMAPHONIC",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/u/0/d/1Xr-2wDCFu1rgI1VizLMxzb6EBp308sEe",
      ruta: "/trabajo/brooks-romaphonic"
    },
    {
      nombre: "CRISÁ, LA CASONA",
      descripcion: "",
      imagen: "/proyectos/grabaciones/crisa-la-casona.jpg",
      sinImagen: true,
      ruta: "/trabajo/crisa-la-casona"
    },
    {
      nombre: "SATURNINOO Y LAS IDEAS, MAGDALENA SOUND",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/u/0/d/1QxZbAefQGJvzYcE1aCtd59peAHMl9WPI",
      ruta: "/trabajo/saturninoo-y-las-ideas-magdalena"
    },
    {
      nombre: "VIUDA FEDERAL, ESTUDIOS ION",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/u/0/d/1hKSVfHEMdKNyDf0EZLelWFZeFAiOpD_M",
      ruta: "/trabajo/viuda-federal-estudios-ion"
    },
    {
      nombre: "VIUDA FEDERAL, SALDIAS",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/u/0/d/1RVIg4Zc_oBih7cItZ-xM2aR3nWHj0S1K",
      ruta: "/trabajo/viuda-federal-saldias"
    },
  ];
  return (
    <ProyectosPage categoria="fotografía" titulo="GRABACIONES" proyectos={proyectos} colorHover="#00c853" />
  );
}
export default Grabaciones;
