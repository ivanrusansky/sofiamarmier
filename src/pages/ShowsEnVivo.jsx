import React from "react";
import ProyectosPage from "../ProyectosPage";

function ShowsEnVivo() {
  const proyectos = [
    {
      nombre: "BROCKS",
      descripcion: "",
      imagen: "/proyectos/shows-en-vivo/brocks.jpg",
      sinImagen: true
    },
    {
      nombre: "HILARIO PROSERPIO",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/u/0/d/161Q2R1I9iWzKtd_x3vnX71jmn6M8XBMY"
    },
    {
      nombre: "RESBALADIZOS",
      descripcion: "",
      imagen: "/proyectos/shows-en-vivo/resbaladizos.jpg",
      sinImagen: true
    },
    {
      nombre: "SAD POP CLUB",
      descripcion: "",
      imagen: "/proyectos/shows-en-vivo/sad-pop-club.jpg",
      sinImagen: true
    },
    {
      nombre: "VIUDA FEDERAL",
      descripcion: "",
      imagen: "/proyectos/shows-en-vivo/viuda-federal.jpg",
      sinImagen: true
    },
  ];
  return (
    <ProyectosPage categoria="audiovisual" titulo="SHOWS EN VIVO" proyectos={proyectos} colorHover="#e53935" />
  );
}
export default ShowsEnVivo;
