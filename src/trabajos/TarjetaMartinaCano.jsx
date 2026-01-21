import React from "react";
import TrabajosPage from "../TrabajosPage";

function TarjetaMartinaCano() {
  const trabajo = {
    imagenes: [
      "/proyectos/tarjetas/martina-cano.jpg"
    ],
    descripcion: "Diseño de tarjeta personal para Martina Cano",
    cliente: "Martina Cano",
    año: "2024",
    tecnicas: ["Diseño gráfico", "Diseño de identidad"]
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="MARTINA CANO"
      trabajo={trabajo}
      colorHover="#f0ec10"
      rutaVolver="/diseno-grafico/tarjetas"
    />
  );
}

export default TarjetaMartinaCano;
