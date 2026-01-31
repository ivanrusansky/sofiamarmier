import React from "react";
import ProyectosPage from "../ProyectosPage";

function Posters() {
  const proyectos = [
    {
      nombre: "BASTRO",
      descripcion: "",
      imagen: "/proyectos/posters/bastro.jpg",
      sinImagen: true,
      ruta: "/trabajo/poster-bastro"
    },
    {
      nombre: "EL MATO - NOCHE NEGRA",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/d/1s7gghIWP1_0Jycyr4DIYYZJnipfQMalB",
      ruta: "/trabajo/poster-el-mato-noche-negra"
    },
    {
      nombre: "INDIO SOLARI TANDIL",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/d/1YCdjQ5izsyG8FfS5HdXO4Fl-roXCQucN",
      ruta: "/trabajo/poster-indio-solari-tandil"
    },
  ];
  return (
    <ProyectosPage categoria="diseño gráfico" titulo="POSTERS" proyectos={proyectos} colorHover="#c4a312" />
  );
}
export default Posters;
