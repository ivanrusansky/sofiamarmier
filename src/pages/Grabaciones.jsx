import React from "react";
import ProyectosPage from "../ProyectosPage";

function Grabaciones() {
  const proyectos = [
    {
      nombre: "BASTRO DELTA SOUND",
      descripcion: "",
      imagen: "/proyectos/grabaciones/bastro-delta-sound.jpg" // Cambia la ruta cuando tengas la imagen real
    },
    {
      nombre: "BROCKS ROMAPHONIC",
      descripcion: "",
      imagen: "/proyectos/grabaciones/brocks-romaphonic.jpg" // Cambia la ruta cuando tengas la imagen real
    },
    {
      nombre: "CRISÁ LA CASONA",
      descripcion: "",
      imagen: "/proyectos/grabaciones/crisa-la-casona.jpg" // Cambia la ruta cuando tengas la imagen real
    },
    {
      nombre: "SATURNO Y LAS IDEAS MAGDALENA SOUND",
      descripcion: "",
      imagen: "/proyectos/grabaciones/saturno-y-las-ideas-magdalena-sound.jpg" // Cambia la ruta cuando tengas la imagen real
    },
    {
      nombre: "VIUDA FEDERAL ESTUDIOS ION",
      descripcion: "",
      imagen: "/proyectos/grabaciones/viuda-federal-estudios-ion.jpg" // Cambia la ruta cuando tengas la imagen real
    },
    {
      nombre: "VIUDA FEDERAL SALDIAS",
      descripcion: "",
      imagen: "/proyectos/grabaciones/viuda-federal-saldias.jpg" // Cambia la ruta cuando tengas la imagen real
    },
  ];
  return (
    <ProyectosPage categoria="fotografía" titulo="GRABACIONES" proyectos={proyectos} colorHover="#00c853" />
  );
}
export default Grabaciones;
