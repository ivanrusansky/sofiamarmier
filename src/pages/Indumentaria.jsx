import React from "react";
import ProyectosPage from "../ProyectosPage";

function Indumentaria() {
  const proyectos = [
    {
      nombre: "IMP SALE OTOÑO",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/u/0/d/1bx-SSsBe1RXi55uaybQhQPf1PBnKFtvK",
      ruta: "/trabajo/imp-sale-otono"
    },
    {
      nombre: "JULIANA FAYAD",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/u/0/d/1IJT2DLqGXE1gbQXAY6Oqq7btm4oGga2-",
      ruta: "/trabajo/juliana-fayad"
    },
    {
      nombre: "MICHEL",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/u/0/d/1fFcJulkLCIzbpBmoW4bP3Yb2xZhnIvZH",
      ruta: "/trabajo/michel"
    },
  ];
  return (
    <ProyectosPage categoria="fotografía" titulo="INDUMENTARIA" proyectos={proyectos} colorHover="#00c853" />
  );
}
export default Indumentaria;
