import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function DematteiLaberinto() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1OSC2t_FqOd-H81g5LtQ8Dtf1Cbev6-rl"
    ],
    descripción: "Registro de Demattei en Laberinto.",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="DEMATTEI LABERINTO"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default DematteiLaberinto;
