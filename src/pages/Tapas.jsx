import React from "react";
import ProyectosPage from "../components/ProyectosPage";

function Tapas() {
  const proyectos = [
    {
      nombre: "BASTRO",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/d/1sWXAt5dyYSJz0qj-OWbKhZExF9JlNgsq",
      ruta: "/trabajo/tapa-bastro"
    },
    {
      nombre: "BROOKS",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/d/112BbyLRb9aAcdOqrzSzWTo6HiLPmAl0Z",
      ruta: "/trabajo/tapa-brooks"
    },
    {
      nombre: "SANTIAGO LEAVY",
      descripcion: "",
      imagen: "https://lh3.googleusercontent.com/d/1XsVn4-voIkhqAvcU8BGoxLpp6kUKTGra",
      ruta: "/trabajo/tapa-santiago-leavy"
    },
        {
          nombre: "SATURNINO Y LAS IDEAS",
          descripcion: "",
          imagen: "https://lh3.googleusercontent.com/d/15MHP5UvKMXmVVYigWoAaFQUORSh2V8C-",
          ruta: "/trabajo/tapa-saturno-y-las-ideas"
        },
        {
          nombre: "VIUDA FEDERAL",
          descripcion: "",
          imagen: "https://lh3.googleusercontent.com/d/1uZd79vyk7JIBBuC1ZEKUhQ8OuNicu9sF",
          ruta: "/trabajo/tapa-viuda-federal"
        },
  ];
  return (
    <ProyectosPage categoria="diseño gráfico" titulo="TAPAS" proyectos={proyectos} colorHover="#c4a312" />
  );
}
export default Tapas;
