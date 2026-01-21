import React from "react";
import ProyectosPage from "../ProyectosPage";

function Vivo() {
    const proyectos = [
        { nombre: "BROOKS  CIUDAD JARDÍN", descripcion: "", imagen: "https://lh3.googleusercontent.com/u/0/d/1wEgPKBY0ggh2nyESpwu_b9NFYvnKC9qD", ruta: "/trabajo/brooks-ciudad-jardin" },
        { nombre: "BROOKS  LABERINTO", descripcion: "", imagen: "https://lh3.googleusercontent.com/u/0/d/1To4npZva-WUbaWFzVrxhFQmHb3R7fbiu", ruta: "/trabajo/brooks-laberinto" },
        { nombre: "BROOKS  QUILMES ROCK", descripcion: "", imagen: "https://lh3.googleusercontent.com/u/0/d/1XLtD-C5F91F-rmIhpyoFemLBAWjFi5zz", ruta: "/trabajo/brooks-quilmes-rock" },
        { nombre: "CATA CARPENA  KONEX", descripcion: "", imagen: "https://lh3.googleusercontent.com/u/0/d/1MJOkqzLUQlt7l3RBUTLiOnoPYHjjg2QU", ruta: "/trabajo/cata-carpena-konex" },
        { nombre: "CRISÁ  AUDITORIO OESTE", descripcion: "", imagen: "https://lh3.googleusercontent.com/u/0/d/1ViyYU0mS8Qtf8nWiare1-WayOm46gAuW", ruta: "/trabajo/crisa-auditorio-oeste" },
        { nombre: "CRISÁ  CC MATIENZO", descripcion: "", imagen: "https://lh3.googleusercontent.com/u/0/d/14_WsDSArL8YjjzEvwLPiXSZz0YmtDZp6", ruta: "/trabajo/crisa-cc-matienzo" },
        { nombre: "CRISÁ  KONEX", descripcion: "", imagen: "https://lh3.googleusercontent.com/u/0/d/1lWo6sBr7NeVXrn7SlqEDRnY1chPIZixh", ruta: "/trabajo/crisa-konex" },
        { nombre: "CRISÁ  NICETO", descripcion: "", imagen: "https://lh3.googleusercontent.com/u/0/d/1gHXzJ5GjOCWOKuq2a7ywQUvkCQbV2yQg", ruta: "/trabajo/crisa-niceto" },
        { nombre: "DEMATTEI  LABERINTO", descripcion: "", imagen: "https://lh3.googleusercontent.com/u/0/d/1OSC2t_FqOd-H81g5LtQ8Dtf1Cbev6-rl", ruta: "/trabajo/demattei-laberinto" },
        { nombre: "ESTOY BIEN  CC MATIENZO", descripcion: "", imagen: "https://lh3.googleusercontent.com/u/0/d/1YH64QjWKfzP6grtj51h5jRevp3Rb_Ov-", ruta: "/trabajo/estoy-bien-cc-matienzo" },
        { nombre: "JEREMÍAS MARFUL", descripcion: "", imagen: "https://lh3.googleusercontent.com/d/1BwRNLk2jGestsO3N_obsATQ_Q48IQlyj=w1000", ruta: "/trabajo/jeremias-marful" },
        { nombre: "REVISTAS  AUDITORIO OESTE", descripcion: "", imagen: "https://lh3.googleusercontent.com/d/1gQ9DGdjed0Jkr9JGQNR3usfJaOcCzoVX=w1000", ruta: "/trabajo/revistas-auditorio-oeste" },
        { nombre: "VIUDA FEDERAL  BIBLIOTECA POPULAR", descripcion: "", imagen: "https://lh3.googleusercontent.com/d/1oXk2f0DPyLlw-OHMyEufJX3n1dGzpxmL=w1000", ruta: "/trabajo/viuda-federal-biblioteca-popular" },
        { nombre: "VIUDA FEDERAL  LABERINTO", descripcion: "", imagen: "https://lh3.googleusercontent.com/d/1C3tmag-90b8Ww8-o2IEE1gZrDBcrj0Zz=w1000", ruta: "/trabajo/viuda-federal-laberinto" },
        { nombre: "VIUDA FEDERAL  MOSCÚ", descripcion: "", imagen: "https://lh3.googleusercontent.com/d/1M1gd3OCogapihhz-Nwzo1Oo4SLxE6ztM=w1000", ruta: "/trabajo/viuda-federal-moscu-vivo" },
        { nombre: "VIUDA FEDERAL  SALA 41", descripcion: "", imagen: "https://lh3.googleusercontent.com/d/1ReFK2T5krEDhwsNTkp7zXAG_W0IB6Qs2=w1000", ruta: "/trabajo/viuda-federal-sala-41" },
        { nombre: "VON FRIX  CAMPING", descripcion: "", imagen: "https://lh3.googleusercontent.com/d/11m0O7wYjmXuP-2YUWCojxS7a2DsYBFyN=w1000", ruta: "/trabajo/von-frix-camping" },
    ];
    return (
        <ProyectosPage categoria="fotografía" titulo="VIVO" proyectos={proyectos} colorHover="#00c853" />
    );
}
export default Vivo;
