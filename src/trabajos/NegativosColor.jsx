import React from "react";
import TrabajosPage from "../TrabajosPage";

function NegativosColor() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/14TQzvvpozfZwN7d_uklfMjW-FooShXMb"
    ],
    descripcion: "Serie fotográfica en color",
    año: "2024",
    tecnicas: ["Fotografía analógica", "Color", "Revelado químico"]
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="COLOR"
      trabajo={trabajo}
      colorHover="#4b9b6c"
      rutaVolver="/fotografia/negativos"
    />
  );
}

export default NegativosColor;
