import React from "react";
import TrabajosPage from "../TrabajosPage";

function PosterElMatoNocheNegra() {
  const trabajo = {
    imagenes: [
      "/proyectos/posters/el-mato-noche-negra.jpg"
    ],
    descripcion: "Póster para El Mato - Noche Negra",
    cliente: "El Mato a un Policia Motorizado",
    año: "2024",
    tecnicas: ["Diseño gráfico", "Ilustración digital"]
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="EL MATO - NOCHE NEGRA"
      trabajo={trabajo}
      colorHover="#c4a312"
      rutaVolver="/diseno-grafico/posters"
    />
  );
}

export default PosterElMatoNocheNegra;
