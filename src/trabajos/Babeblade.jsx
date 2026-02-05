import React from "react";
import TrabajosPage from "../TrabajosPage";

function Babeblade() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/AUDIOVISUAL/SESIONES EN VIVO/BABEBLADE/1.webp",
      "/trabajosimg/AUDIOVISUAL/SESIONES EN VIVO/BABEBLADE/2.webp",
      "/trabajosimg/AUDIOVISUAL/SESIONES EN VIVO/BABEBLADE/3.webp",
      "/trabajosimg/AUDIOVISUAL/SESIONES EN VIVO/BABEBLADE/4.webp",
      "/trabajosimg/AUDIOVISUAL/SESIONES EN VIVO/BABEBLADE/HISTORIAS.webp",
      "/trabajosimg/AUDIOVISUAL/SESIONES EN VIVO/BABEBLADE/HISTORIAS 2.webp"
    ],
    descripcion: "Sesión en vivo de Babeblade",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="audiovisual"
      titulo="BABEBLADE"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/audiovisual/sesiones-en-vivo"
    />
  );
}

export default Babeblade;
