
import React from "react";
import ProyectosPage from "../ProyectosPage";

function Amueblados() {
  const proyectos = [
    {
      nombre: "SIMPLE MUEBLES",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/d/1fcgJAqH6fENU-CLaBk_oLSd2OQYkY07O",
      ruta: "/trabajo/simple-muebles"
    }
  ];
  return (
    <ProyectosPage categoria="fotografía" titulo="AMUEBLADOS" proyectos={proyectos} colorHover="#5e662f" />
  );
}
export default Amueblados;
