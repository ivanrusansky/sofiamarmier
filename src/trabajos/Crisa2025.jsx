import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function Crisa2025() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1H4AfMde95tzlnJxr7N9iquy0HPaaP9c6"
    ],
    descripción: `sesión de fotos para Cris� y la promoci�n del aniversario de su EP -cu�l es el �ltimo recuerdo que guardas?-.\nRealizada en nuestro querido y amado Oeste. El Palomar.`,
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="CRIS� 2025"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/sesiones"
    />
  );
}

export default Crisa2025;
