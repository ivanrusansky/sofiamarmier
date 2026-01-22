import React from "react";
import { Link } from "react-router-dom";
import "./TrabajosPage.css";

function TrabajosPage({ categoria, titulo, trabajo, colorHover, rutaVolver }) {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-brand">sofia marmier</Link>
        <ul>
          <li>
            <Link to={rutaVolver}>VOLVER</Link>
          </li>
        </ul>
      </nav>

      <div className="trabajo-container">
        <div className="trabajo-header">
          <span className="trabajo-categoria">{categoria}</span>
          <h1 className="trabajo-titulo">{titulo}</h1>
        </div>

        <div className="trabajo-contenido">
          {trabajo.imagenes && trabajo.imagenes.length > 0 && (
            <div className="trabajo-galeria">
              {trabajo.imagenes.map((imagen, index) => (
                <div key={index} className="trabajo-imagen-wrapper">
                  <img
                    src={imagen}
                    alt={`${titulo} - imagen ${index + 1}`}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              ))}
            </div>
          )}

          {trabajo.descripcion && (
            <div className="trabajo-descripcion">
              <h2>Descripción</h2>
              <p>{trabajo.descripcion}</p>
            </div>
          )}

          {trabajo.cliente && (
            <div className="trabajo-info-item">
              <h3>Cliente</h3>
              <p>{trabajo.cliente}</p>
            </div>
          )}

          {trabajo.año && (
            <div className="trabajo-info-item">
              <h3>Año</h3>
              <p>{trabajo.año}</p>
            </div>
          )}

          {trabajo.tecnicas && trabajo.tecnicas.length > 0 && (
            <div className="trabajo-info-item">
              <h3>Técnicas</h3>
              <ul>
                {trabajo.tecnicas.map((tecnica, index) => (
                  <li key={index}>{tecnica}</li>
                ))}
              </ul>
            </div>
          )}

          {trabajo.info && (
            <div className="trabajo-info-adicional">
              {trabajo.info}
            </div>
          )}
        </div>

        <div className="trabajo-footer">
          <Link to={rutaVolver} className="btn-volver" style={{ '--hover-color': colorHover }}>
            ← volver a {categoria.toUpperCase()}
          </Link>
        </div>
      </div>
    </>
  );
}

export default TrabajosPage;
