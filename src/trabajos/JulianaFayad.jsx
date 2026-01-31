import React from "react";
import TrabajosPage from "../TrabajosPage";

function JulianaFayad() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1IJT2DLqGXE1gbQXAY6Oqq7btm4oGga2-"
    ],
    descripcion: `Sesión de fotos para Juliana Fayad con su proyecto RASGO.\nUn proyecto inspirado en la naturaleza humana. Explora lo crudo, lo contradictorio y lo instintivo del ser humano. Expone lo que persiste bajo la superficie: impulsos, tensiones y conductas que nos hacen pasar de ser entes sensibles a seres erráticos.\n\nDiseño y dirección creativa Juliana Fayad.\nModelos Vinicius, Ian Ferreira, Maru Arz, Agus Franco, Cami Jara y Azul Valle\nEstudio La Isla`,
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="JULIANA FAYAD"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/indumentaria"
    />
  );
}

export default JulianaFayad;
