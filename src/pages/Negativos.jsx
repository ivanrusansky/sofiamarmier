import React from "react";
import ProyectosPage from "../ProyectosPage";

function Negativos() {
  const proyectos = [
    {
      nombre: "BLANCO Y NEGRO",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/u/0/d/1bFX66pWo13piH3szUbqqcEtekBYVtl9g"
    },
    {
      nombre: "COLOR",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/u/0/d/14TQzvvpozfZwN7d_uklfMjW-FooShXMb"
    },
  ];
  return (
    <ProyectosPage categoria="fotografía" titulo="NEGATIVOS" proyectos={proyectos} colorHover="#00c853" />
  );
}
export default Negativos;
