import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function CrisaCCMatienzo() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/14_WsDSArL8YjjzEvwLPiXSZz0YmtDZp6"
    ],
    descripción: `Cobertura y escenograf�a para Cris� en el CC Matienzo. Fue una fecha muy emocionante por el aniversario del EP -cu�l es el �ltimo recuerdo que guardas?-.\nLa escenograf�a fue realizada en conjunto con Coty Casolati.`,
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="CRIS� CC MATIENZO"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default CrisaCCMatienzo;
