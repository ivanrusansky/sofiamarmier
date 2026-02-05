import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./TrabajosPage.css";
import MasInfo from "./components/MasInfo";

function TrabajosPage({ categoria, titulo, trabajo, colorHover, rutaVolver }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getSubMenuType = (ruta) => {
    if (ruta.includes('diseno-grafico')) return 'diseno';
    if (ruta.includes('fotografia')) return 'fotografia';
    if (ruta.includes('audiovisual')) return 'audiovisual';
    return null;
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          <img src="/logopng.png" alt="sofia marmier" />
        </Link>
        <ul>
          <li>
            <Link 
              to={rutaVolver} 
              state={{ openMenu: true, openSubMenu: getSubMenuType(rutaVolver) }}
              className="navbar-proyectos"
            >
              [volver]
            </Link>
          </li>
        </ul>
      </nav>

      <MasInfo titulo={titulo} trabajo={trabajo} />

      <div className="trabajo-container">
        <div className="trabajo-contenido">
          {trabajo.imagenes && trabajo.imagenes.length > 0 && (
            <div className="trabajo-galeria">
              {trabajo.imagenes.map((imagen, index) => (
                <div key={index} className="trabajo-imagen-wrapper">
                  <img
                    src={imagen}
                    alt={`${titulo} - imagen ${index + 1}`}
                    onLoad={(e) => {
                      e.target.classList.add('loaded');
                    }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              ))}
            </div>
          )}

          <div className="trabajo-footer">
            <Link 
              to={rutaVolver} 
              state={{ openMenu: true, openSubMenu: getSubMenuType(rutaVolver) }}
              className="btn-volver" 
              style={{ '--hover-color': colorHover }}
            >
              volver a {categoria.toLowerCase()}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrabajosPage;
