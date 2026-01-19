import React from "react";
import ProyectosPage from "../ProyectosPage";

function Posters() {
  const proyectos = [
    {
      nombre: "BASTRO",
      descripcion: "",
      imagen: "/proyectos/posters/bastro.jpg"
    },
    {
      nombre: "EL MATO - NOCHE NEGRA",
      descripcion: "",
      imagen: "/proyectos/posters/el-mato-noche-negra.jpg"
    },
    {
      nombre: "INDIO SOLARI TANDIL",
      descripcion: "",
      imagen: "/proyectos/posters/indio-solari-tandil.jpg"
    },
  ];
  return (
    <ProyectosPage categoria="diseño gráfico" titulo="POSTERS" proyectos={proyectos} colorHover="#f0ec10" />
  );
}
export default Posters;
