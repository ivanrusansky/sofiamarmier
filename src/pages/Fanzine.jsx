import React from "react";
import ProyectosPage from "../ProyectosPage";

function Fanzine() {
  const proyectos = [
    {
      nombre: "SATURNINO Y LAS IDEAS",
      descripcion: "",
      imagen: "/proyectos/fanzine/saturno-y-las-ideas.jpg",
      sinImagen: true,
      ruta: "/trabajo/fanzine-saturnino-y-las-ideas"
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
