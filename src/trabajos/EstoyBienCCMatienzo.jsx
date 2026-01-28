import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function EstoyBienCCMatienzo() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1YH64QjWKfzP6grtj51h5jRevp3Rb_Ov-"
    ],
    descripción: "fotografía en vivo de Estoy Bien en CC Matienzo",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="ESTOY BIEN CC MATIENZO"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default EstoyBienCCMatienzo;
