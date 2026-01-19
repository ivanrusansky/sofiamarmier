import React from "react";
import ProyectosPage from "../ProyectosPage";

function Vivo() {
    const proyectos = [
        { nombre: "BROOKS  CIUDAD JARDÍN", descripcion: "", imagen: "https://lh3.googleusercontent.com/u/0/d/1wEgPKBY0ggh2nyESpwu_b9NFYvnKC9qD" },
        { nombre: "BROOKS  LABERINTO", descripcion: "", imagen: "https://lh3.googleusercontent.com/u/0/d/1To4npZva-WUbaWFzVrxhFQmHb3R7fbiu" },
        { nombre: "BROOKS  QUILMES ROCK", descripcion: "", imagen: "https://lh3.googleusercontent.com/u/0/d/1XLtD-C5F91F-rmIhpyoFemLBAWjFi5zz" },
        { nombre: "CATA CARPENA  KONEX", descripcion: "", imagen: "https://lh3.googleusercontent.com/u/0/d/1MJOkqzLUQlt7l3RBUTLiOnoPYHjjg2QU" },
        { nombre: "CRISÁ  AUDITORIO OESTE", descripcion: "", imagen: "https://lh3.googleusercontent.com/u/0/d/1ViyYU0mS8Qtf8nWiare1-WayOm46gAuW" },
        { nombre: "CRISÁ  CC MATIENZO", descripcion: "", imagen: "https://lh3.googleusercontent.com/u/0/d/14_WsDSArL8YjjzEvwLPiXSZz0YmtDZp6" },
        { nombre: "CRISÁ  KONEX", descripcion: "", imagen: "https://lh3.googleusercontent.com/u/0/d/1lWo6sBr7NeVXrn7SlqEDRnY1chPIZixh" },
        { nombre: "CRISÁ  NICETO", descripcion: "", imagen: "https://lh3.googleusercontent.com/u/0/d/1gHXzJ5GjOCWOKuq2a7ywQUvkCQbV2yQg" },
        { nombre: "DEMATTEI  LABERINTO", descripcion: "", imagen: "https://lh3.googleusercontent.com/u/0/d/1OSC2t_FqOd-H81g5LtQ8Dtf1Cbev6-rl" },
        { nombre: "ESTOY BIEN  CC MATIENZO", descripcion: "", imagen: "https://lh3.googleusercontent.com/u/0/d/1YH64QjWKfzP6grtj51h5jRevp3Rb_Ov-" },
        { nombre: "JEREMÍAS MARFUL", descripcion: "", imagen: "https://lh3.googleusercontent.com/d/1BwRNLk2jGestsO3N_obsATQ_Q48IQlyj=w1000" },
        { nombre: "REVISTAS  AUDITORIO OESTE", descripcion: "", imagen: "https://lh3.googleusercontent.com/d/1gQ9DGdjed0Jkr9JGQNR3usfJaOcCzoVX=w1000" },
        { nombre: "VIUDA FEDERAL  BIBLIOTECA POPULAR", descripcion: "", imagen: "https://lh3.googleusercontent.com/d/1oXk2f0DPyLlw-OHMyEufJX3n1dGzpxmL=w1000" },
        { nombre: "VIUDA FEDERAL  LABERINTO", descripcion: "", imagen: "https://lh3.googleusercontent.com/d/1C3tmag-90b8Ww8-o2IEE1gZrDBcrj0Zz=w1000" },
        { nombre: "VIUDA FEDERAL  MOSCÚ", descripcion: "", imagen: "https://lh3.googleusercontent.com/d/1M1gd3OCogapihhz-Nwzo1Oo4SLxE6ztM=w1000" },
        { nombre: "VIUDA FEDERAL  SALA 41", descripcion: "", imagen: "https://lh3.googleusercontent.com/d/1ReFK2T5krEDhwsNTkp7zXAG_W0IB6Qs2=w1000" },
        { nombre: "VON FRIX  CAMPING", descripcion: "", imagen: "https://lh3.googleusercontent.com/d/11m0O7wYjmXuP-2YUWCojxS7a2DsYBFyN=w1000" },
    ];
    return (
        <ProyectosPage categoria="fotografía" titulo="VIVO" proyectos={proyectos} colorHover="#00c853" />
    );
}
export default Vivo;
