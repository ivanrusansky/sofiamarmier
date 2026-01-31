import React from "react";
import TrabajosPage from "../TrabajosPage";

function CrisaCCMatienzo() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/14_WsDSArL8YjjzEvwLPiXSZz0YmtDZp6"
    ],
    descripcion: `Cobertura y escenografía para Crisá en el CC Matienzo. Fue una fecha muy emocionante por el aniversario del EP -cuál es el último recuerdo que guardas?-.\nLa escenografía fue realizada en conjunto con Coty Casolati.`,
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="CRISÁ CC MATIENZO"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default CrisaCCMatienzo;
