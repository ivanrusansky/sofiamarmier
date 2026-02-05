import React from "react";
import TrabajosPage from "../TrabajosPage";

function HilarioProserpioShow() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/AUDIOVISUAL/SHOWS EN VIVO/HILARIO PROSERPIO/PRIMERA IMAGEN.webp",
      "/trabajosimg/AUDIOVISUAL/SHOWS EN VIVO/HILARIO PROSERPIO/DISEÑO GRÁFICO (1).webp",
      "/trabajosimg/AUDIOVISUAL/SHOWS EN VIVO/HILARIO PROSERPIO/DISEÑO GRÁFICO (2).webp",
      "/trabajosimg/AUDIOVISUAL/SHOWS EN VIVO/HILARIO PROSERPIO/DISEÑO GRÁFICO (3).webp",
      "/trabajosimg/AUDIOVISUAL/SHOWS EN VIVO/HILARIO PROSERPIO/DISEÑO GRÁFICO (4).webp"
    ],
    descripcion: "Show en vivo de Hilario Proserpio",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="audiovisual"
      titulo="HILARIO PROSERPIO"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/audiovisual/shows-en-vivo"
    />
  );
}

export default HilarioProserpioShow;
