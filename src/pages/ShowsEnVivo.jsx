import React from "react";
import ProyectosPage from "../ProyectosPage";

function ShowsEnVivo() {
  const proyectos = [
    {
      nombre: "BROCKS",
      descripcion: "",
      imagen: "/proyectos/shows-en-vivo/brocks.jpg" // Cambia la ruta cuando tengas la imagen real
    },
    {
      nombre: "HILARIO PROSERPIO",
      descripcion: "",
      imagen: "/proyectos/shows-en-vivo/hilario-proserpio.jpg" // Cambia la ruta cuando tengas la imagen real
    },
    {
      nombre: "RESBALADIZOS",
      descripcion: "",
      imagen: "/proyectos/shows-en-vivo/resbaladizos.jpg" // Cambia la ruta cuando tengas la imagen real
    },
    {
      nombre: "SAD POP CLUB",
      descripcion: "",
      imagen: "/proyectos/shows-en-vivo/sad-pop-club.jpg" // Cambia la ruta cuando tengas la imagen real
    },
    {
      nombre: "VIUDA FEDERAL",
      descripcion: "",
      imagen: "/proyectos/shows-en-vivo/viuda-federal.jpg" // Cambia la ruta cuando tengas la imagen real
    },
  ];
  return (
    <ProyectosPage categoria="audiovisual" titulo="SHOWS EN VIVO" proyectos={proyectos} colorHover="#e53935" />
  );
}
export default ShowsEnVivo;
