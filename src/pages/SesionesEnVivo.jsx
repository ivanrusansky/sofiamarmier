import React from "react";
import ProyectosPage from "../ProyectosPage";

function SesionesEnVivo() {
  const proyectos = [
    {
      nombre: "BABEBLADE",
      descripcion: "",
      imagen: "/babeblade.png" // Imagen directa desde Google Drive
    },
    {
      nombre: "VON FRIX",
      descripcion: "",
      imagen: "/von frix.png" // Cambia la ruta cuando tengas la imagen real
    },
  ];
  return (
    <ProyectosPage categoria="audiovisual" titulo="SESIONES EN VIVO" proyectos={proyectos} colorHover="#e53935" />
  );
}
export default SesionesEnVivo;
