import React from "react";
import TrabajosPage from "../components/TrabajosPage";

function NegativosColor() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/14TQzvvpozfZwN7d_uklfMjW-FooShXMb"
    ],
    descripción: "Serie fotográfica en color",
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="COLOR"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/negativos"
    />
  );
}

export default NegativosColor;
