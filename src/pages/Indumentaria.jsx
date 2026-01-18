import React from "react";
import ProyectosPage from "../ProyectosPage";

function Indumentaria() {
  const proyectos = [
    {
      nombre: "IMP SALE OTOÑO",
      descripcion: "",
      imagen: "/proyectos/indumentaria/imp-sale-otono.jpg" // Cambia la ruta cuando tengas la imagen real
    },
    {
      nombre: "IMP SALE PRIMAVERA",
      descripcion: "",
      imagen: "/proyectos/indumentaria/imp-sale-primavera.jpg" // Cambia la ruta cuando tengas la imagen real
    },
    {
      nombre: "JULIANA FAVIO",
      descripcion: "",
      imagen: "/proyectos/indumentaria/juliana-favio.jpg" // Cambia la ruta cuando tengas la imagen real
    },
    {
      nombre: "MICHEL",
      descripcion: "",
      imagen: "/proyectos/indumentaria/michel.jpg" // Cambia la ruta cuando tengas la imagen real
    },
  ];
  return (
    <ProyectosPage categoria="fotografía" titulo="INDUMENTARIA" proyectos={proyectos} colorHover="#00c853" />
  );
}
export default Indumentaria;
