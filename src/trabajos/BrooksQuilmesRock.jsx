import React from "react";
import TrabajosPage from "../TrabajosPage";

function BrooksQuilmesRock() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (1).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (2).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (3).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (4).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (5).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (6).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (7).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (8).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (9).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (10).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (11).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (12).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (13).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (14).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (15).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (16).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (17).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (18).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (19).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (20).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (21).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (22).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (23).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (24).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (25).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (26).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (27).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (28).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (29).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/QUIMES ROCK BROOKS  (30).webp"
    ],
    descripcion: `Cobertura para Brooks en Tecnópolis, en el marco del Quilmes Rock 2025. Una fecha muy especial para la banda y para mí. Fue nuestra primera experiencia en un evento tan grande, importante y extenso.`,
    año: "2025"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="BROOKS QUILMES ROCK"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/vivo"
    />
  );
}

export default BrooksQuilmesRock;
