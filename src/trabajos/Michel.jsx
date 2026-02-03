import React from "react";
import TrabajosPage from "../TrabajosPage";

function Michel() {
  const trabajo = {
    imagenes: [
      "https://lh3.googleusercontent.com/u/0/d/1fFcJulkLCIzbpBmoW4bP3Yb2xZhnIvZH",
      "https://lh3.googleusercontent.com/u/0/d/1XDkJk4zqE39tCTCohjB69n5Z_4wIlEKd",
      "https://lh3.googleusercontent.com/u/0/d/1MAqf_cRULA2Qdkqoh9i-KxVNQyxbLiGR",
      "https://lh3.googleusercontent.com/u/0/d/1mcyMFtIRowXFp3phchJNWSQyOgPDXEoe",
      "https://lh3.googleusercontent.com/u/0/d/1rFFE8sWtWOMK5PmZfJtGBQtEcbwlxtnR",
      "https://lh3.googleusercontent.com/u/0/d/1n5hb37F7s3Lc_3xJAr5FlsMBUw6VHNOM",
      "https://lh3.googleusercontent.com/u/0/d/1GPgKCNLMEcW7iiPvdQDM8QBGT610fZxU",
      "https://lh3.googleusercontent.com/u/0/d/1AzcnlKNMhzW_f2LERLj-4w8FT_-pd4BH",
      "https://lh3.googleusercontent.com/u/0/d/19J7W5gWF0MVyGBNWalnXjDStv_ptemny",
      "https://lh3.googleusercontent.com/u/0/d/1EVdPT8oEQB5rJUBUPJK4z8T2cruqDnim",
      "https://lh3.googleusercontent.com/u/0/d/1soI214iO3aZu4NkLzofnCNTmaYliu7Q0",
      "https://lh3.googleusercontent.com/u/0/d/1evsqb_uv9B7ZGmO9CwQgsQjJRXMzuyon",
      "https://lh3.googleusercontent.com/u/0/d/1NSEbQ-twK9FLXwnSLdeiqqwMBVlzEY71",
      "https://lh3.googleusercontent.com/u/0/d/14Qe7QQcbXoct55ljZifh7DXJmMC9dkwH",
      "https://lh3.googleusercontent.com/u/0/d/1o_hpZYAgET97tPcmo2QGTTEONCtz_9hf",
      "https://lh3.googleusercontent.com/u/0/d/1Gi7CuzGjApJCB8el1F5tm4MGp6oVMt9h"
    ],
    descripcion: `Sesión de fotos para Michel.\nEstilismo por Denisse Calzone.\nModelos Camila Herman y Pedro Oliver\nEstudio Deofi`,
    año: "2024"
  };

  return (
    <TrabajosPage
      categoria="fotografía"
      titulo="MICHEL"
      trabajo={trabajo}
      colorHover="#bbbbbb"
      rutaVolver="/fotografia/indumentaria"
    />
  );
}

export default Michel;
