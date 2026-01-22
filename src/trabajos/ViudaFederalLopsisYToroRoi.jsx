import React from "react";
import TrabajosPage from "../TrabajosPage";

function ViudaFederalLopsisYToroRoi() {
  const trabajo = {
    imagenes: [
      "/flyers_de_musica/viuda_federal_lopsis_y_toro_roi/flyer_3_png"
    ],
    descripcion: "Flyer para Viuda Federal, Lopsis y Toro Roi",
    cliente: "Viuda Federal, Lopsis, Toro Roi",
    año: "2024",
    tecnicas: ["Diseño gráfico", "Ilustración digital"]
  };

  return (
    <TrabajosPage
      categoria="diseño gráfico"
      titulo="VIUDA FEDERAL LOPSIS Y TORO ROI"
      trabajo={trabajo}
      colorHover="#c4a312"
      rutaVolver="/diseno-grafico/flyers-de-musica"
    />
  );
}

export default ViudaFederalLopsisYToroRoi;
