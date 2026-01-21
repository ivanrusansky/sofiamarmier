import React from "react";
import ProyectosPage from "../ProyectosPage";

function Sesiones() {
  const proyectos = [
    {
      nombre: "BASTRO 2025",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/u/0/d/1RSwP-AWn_dAsp9qBxQocrU77_EDbHRnd",
      ruta: "/trabajo/bastro-2025"
    },
    {
      nombre: "CRISÁ 2023",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/u/0/d/1iJB_lUrj4bcPyAkuxv_na7-tukc__FgY",
      ruta: "/trabajo/crisa-2023"
    },
    {
      nombre: "CRISÁ 2025",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/u/0/d/1H4AfMde95tzlnJxr7N9iquy0HPaaP9c6",
      ruta: "/trabajo/crisa-2025"
    },
    {
      nombre: "GAIA",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/u/0/d/17_gu2V5eghmfpXT0imB7d7cNVOrXB2-P",
      ruta: "/trabajo/gaia"
    },
    {
      nombre: "VIUDA FEDERAL 2025",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/u/0/d/1cYqMpmeOMsVL3D4Foxx6lAqfd9Szl4SE",
      ruta: "/trabajo/viuda-federal-2025-sesion"
    },
  ];
  return (
    <ProyectosPage categoria="fotografía" titulo="SESIONES" proyectos={proyectos} colorHover="#00c853" />
  );
}
export default Sesiones;
