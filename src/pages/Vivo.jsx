import React from "react";
import ProyectosPage from "../ProyectosPage";

function Vivo() {
  const proyectos = [
    { nombre: "BROCKS CIUDAD JARDÍN", descripcion: "", imagen: "/proyectos/vivo/brocks-ciudad-jardin.jpg" },
    { nombre: "BROCKS LABERINTO", descripcion: "", imagen: "/proyectos/vivo/brocks-laberinto.jpg" },
    { nombre: "BROCKS QUILMES ROCK", descripcion: "", imagen: "/proyectos/vivo/brocks-quilmes-rock.jpg" },
    { nombre: "CATA CARPENA KONEX", descripcion: "", imagen: "/proyectos/vivo/cata-carpena-konex.jpg" },
    { nombre: "CRISÁ AUDITORIO OESTE", descripcion: "", imagen: "/proyectos/vivo/crisa-auditorio-oeste.jpg" },
    { nombre: "CRISÁ CC MATIENZO", descripcion: "", imagen: "/proyectos/vivo/crisa-cc-matienzo.jpg" },
    { nombre: "CRISÁ KONEX", descripcion: "", imagen: "/proyectos/vivo/crisa-konex.jpg" },
    { nombre: "CRISÁ NICETO", descripcion: "", imagen: "/proyectos/vivo/crisa-niceto.jpg" },
    { nombre: "DEMATTI LABERINTO", descripcion: "", imagen: "/proyectos/vivo/dematti-laberinto.jpg" },
    { nombre: "ESTOY BIEN CC MATIENZO", descripcion: "", imagen: "/proyectos/vivo/estoy-bien-cc-matienzo.jpg" },
    { nombre: "JEREMÍAS MARFUL", descripcion: "", imagen: "/proyectos/vivo/jeremias-marful.jpg" },
    { nombre: "REVISTAS AUDITORIO OESTE", descripcion: "", imagen: "/proyectos/vivo/revistas-auditorio-oeste.jpg" },
    { nombre: "VIUDA FEDERAL BIBLIOTECA POPULAR", descripcion: "", imagen: "/proyectos/vivo/viuda-federal-biblioteca-popular.jpg" },
    { nombre: "VIUDA FEDERAL LABERINTO", descripcion: "", imagen: "/proyectos/vivo/viuda-federal-laberinto.jpg" },
    { nombre: "VIUDA FEDERAL MOSCÚ", descripcion: "", imagen: "/proyectos/vivo/viuda-federal-moscu.jpg" },
    { nombre: "VIUDA FEDERAL SALA 41", descripcion: "", imagen: "/proyectos/vivo/viuda-federal-sala-41.jpg" },
    { nombre: "VON FRIX CAMPING", descripcion: "", imagen: "/proyectos/vivo/von-frix-camping.jpg" },
  ];
  return (
    <ProyectosPage categoria="fotografía" titulo="VIVO" proyectos={proyectos} colorHover="#00c853" />
  );
}
export default Vivo;
