import React from "react";
import ProyectosPage from "../ProyectosPage";

function Fanzine() {
  const proyectos = [
    {
      nombre: "SATURNO Y LAS IDEAS",
      descripcion: "",
      imagen: "/proyectos/fanzine/saturno-y-las-ideas.jpg" // Cambia la ruta cuando tengas la imagen real
    },
  ];

  return (
    <ProyectosPage
      categoria="diseño gráfico"
      titulo="FANZINE"
      proyectos={proyectos}
      colorHover="#f0ec10"
    />
  );
}

export default Fanzine;
