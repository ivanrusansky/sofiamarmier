import React from "react";
import TrabajosPage from "../TrabajosPage";

function Crisa2025() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1H4AfMde95tzlnJxr7N9iquy0HPaaP9c6"
    ],
    descripcion: `Sesión de fotos para Crisá y la promoción del aniversario de su EP -cuál es el último recuerdo que guardas?-.\nRealizada en nuestro querido y amado Oeste. El Palomar.`,
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="CRISÁ 2025"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/sesiones"
    />
  );
}

export default Crisa2025;
