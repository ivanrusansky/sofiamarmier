import React from "react";
import ProyectosPage from "../ProyectosPage";

function Tarjetas() {
  const proyectos = [
    {
      nombre: "IVÁN RUSANSKY",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/d/10mlk7vUYqmJ-RttFPI5PYV3Flv0p1w7E",
      ruta: "/trabajo/tarjeta-ivan-rusansky"
    },
    {
      nombre: "MARTINA CANO",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/d/1o3oITXnvfUkb2S_wQZvv3YN9BHKvgZk6",
      ruta: "/trabajo/tarjeta-martina-cano"
    },
  ];
  return (
    <ProyectosPage categoria="diseño gráfico" titulo="TARJETAS" proyectos={proyectos} colorHover="#c4a312" />
  );
}
export default Tarjetas;
