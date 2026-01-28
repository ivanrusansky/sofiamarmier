import React from "react";
import ProyectosPage from "../components/ProyectosPage";

function Negativos() {
  const proyectos = [
    {
      nombre: "BLANCO Y NEGRO",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/u/0/d/1bFX66pWo13piH3szUbqqcEtekBYVtl9g",
      ruta: "/trabajo/negativos-blanco-y-negro"
    },
    {
      nombre: "COLOR",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/u/0/d/14TQzvvpozfZwN7d_uklfMjW-FooShXMb",
      ruta: "/trabajo/negativos-color"
    },
  ];
  return (
    <ProyectosPage categoria="fotografía" titulo="NEGATIVOS" proyectos={proyectos} colorHover="#4b9b6c" />
  );
}
export default Negativos;
