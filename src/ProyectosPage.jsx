import React from "react";
import { Link } from "react-router-dom";
import "./ProyectosPage.css";

function ProyectosPage({ categoria, titulo, proyectos, colorHover }) {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-brand">sofia marmier</Link>
        <ul>
          <li>
            <Link to="/">VOLVER</Link>
          </li>
        </ul>
      </nav>

      <div className="proyectos-container">
        <h1 className="proyectos-titulo">{titulo}</h1>

        <div className="proyectos-grid">
          {proyectos.map((proyecto, index) => {

            if (proyecto.sinImagen) return null;

            return (
              <Link 
                key={index} 
                to={proyecto.ruta || '#'} 
                className="proyecto-item" 
                style={{ '--hover-color': colorHover }}
              >
                <div className="proyecto-imagen">
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.nombre}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <div className="proyecto-info">
                  <h3>{proyecto.nombre}</h3>
                  <p>{proyecto.descripcion}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProyectosPage;
