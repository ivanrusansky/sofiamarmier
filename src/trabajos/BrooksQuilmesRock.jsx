import React from "react";
import TrabajosPage from "../TrabajosPage";

function BrooksQuilmesRock() {
  const trabajo = {
    imagenes: [
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (1).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (2).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (3).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (4).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (5).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (6).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (7).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (8).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (9).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (10).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (11).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (12).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (13).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (14).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (15).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (16).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (17).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (18).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (19).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (20).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (21).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (22).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (23).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (24).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (25).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (26).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (27).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (28).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (29).webp",
      "/trabajosimg/FOTOGRAFÍA/VIVO/BROOKS QUILMES ROCK/BROOKS QUILMES ROCK (30).webp"
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
