import React from "react";
import TrabajosPage from "../TrabajosPage";

function BrooksCiudadJardin() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1wEgPKBY0ggh2nyESpwu_b9NFYvnKC9qD"
    ],
    descripcion: "Cobertura para Brooks en Ciudad Jardín, Tres de Febrero.",
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="BROOKS CIUDAD JARDÍN"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default BrooksCiudadJardin;
