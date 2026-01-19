import React from "react";
import ProyectosPage from "../ProyectosPage";

function SesionesEnVivo() {
  const proyectos = [
    {
      nombre: "BABEBLADE",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/u/0/d/1BL7Q06zVLXcqGGfiaIE_DPkE4TrnthWD"
    },
    {
      nombre: "VON FRIX",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/u/0/d/1xAN9t46LyLFoGo1b74WGaWmR9BuWKIyi"
    },
  ];
  return (
    <ProyectosPage categoria="audiovisual" titulo="SESIONES EN VIVO" proyectos={proyectos} colorHover="#e53935" />
  );
}
export default SesionesEnVivo;
