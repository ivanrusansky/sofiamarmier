import React from "react";
import ProyectosPage from "../components/ProyectosPage";

function Gastronomia() {
  const proyectos = [
    {
      nombre: "BARRIO CAFÉ",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/u/0/d/1_vi5X9oeimvx91xO7EZDvacrBpq0eezN",
      ruta: "/trabajo/barrio-cafe"
    },
    {
      nombre: "VINERA VINOS",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/u/0/d/1MJHikRUxX5dzUhAmaUE9WtNR-kz4maJH",
      ruta: "/trabajo/vinera-vinos"
    },
  ];
  return (
    <ProyectosPage categoria="fotografía" titulo="GASTRONOMÍA" proyectos={proyectos} colorHover="#4b9b6c" />
  );
}
export default Gastronomia;
