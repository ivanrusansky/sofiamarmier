import React from "react";
import ProyectosPage from "../ProyectosPage";

function Tarjetas() {
  const proyectos = [
    {
      nombre: "IVÁN RUSANSKY",
      descripcion: "",
      imagen: "/proyectos/tarjetas/ivan-rusansky.jpg"
    },
    {
      nombre: "MARTINA CANO",
      descripcion: "",
      imagen: "/proyectos/tarjetas/martina-cano.jpg"
    },
  ];
  return (
    <ProyectosPage categoria="diseño gráfico" titulo="TARJETAS" proyectos={proyectos} colorHover="#f0ec10" />
  );
}
export default Tarjetas;
