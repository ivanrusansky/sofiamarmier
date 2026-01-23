import React from "react";
import TrabajosPage from "../TrabajosPage";

function HilarioProserpioShow() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/161Q2R1I9iWzKtd_x3vnX71jmn6M8XBMY"
    ],
    descripcion: "Show en vivo de Hilario Proserpio",
    cliente: "Hilario Proserpio",
    año: "2024",
    tecnicas: ["Video", "Producción audiovisual", "Show en vivo"]
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
