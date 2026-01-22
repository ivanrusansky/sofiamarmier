import React from "react";
import TrabajosPage from "../TrabajosPage";

function EstoyBienCCMatienzo() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1YH64QjWKfzP6grtj51h5jRevp3Rb_Ov-"
    ],
    descripcion: "Fotografía en vivo de Estoy Bien en CC Matienzo",
    cliente: "Estoy Bien",
    año: "2024",
    tecnicas: ["Fotografía en vivo", "Fotografía de conciertos"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="ESTOY BIEN CC MATIENZO"
      trabajo={trabajo}
      colorHover="#4b9b6c"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default EstoyBienCCMatienzo;
