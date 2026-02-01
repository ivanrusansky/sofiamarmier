import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import "./AcercaDeMi.css";

function AcercaDeMi() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          <img src="/logopng.png" alt="sofia marmier" style={{height: '40px', width: 'auto'}} />
        </Link>
        <ul>
          <li>
            <Link to="/" className="navbar-proyectos">[volver]</Link>
          </li>
        </ul>
      </nav>

      <div className="acercademi-page">
        <div className="acercademi-container">
          <img src="/acercademi.jpg" alt="Sofía Marmier" className="acercademi-img" onLoad={e => e.target.classList.add('loaded')} />
          
          <div className="acercademi-content">
            <div className="acercademi-texto">
              <p>
                Soy Sofía Marmier, artista visual y fotógrafa. Trabajo con fotografía digital y analógica, explorando la imagen como un espacio de encuentro entre la música, las personas y el momento presente. Mi mirada parte de lo cotidiano y lo íntimo, buscando construir atmósferas sensibles y cercanas.
              </p>
              
              <p>
                A lo largo del tiempo, la fotografía pasó de ser una necesidad personal a convertirse en mi forma de trabajo y de vínculo con otrxs: creando junto a músicxs, artistas y proyectos que encuentran en la imagen una manera de expandir su identidad.
              </p>
              
              <p>
                En los últimos años incorporé el diseño gráfico como extensión natural de este proceso creativo. Desde ahí sigo investigando la creación de universos visuales donde conviven lo fotográfico, lo editorial y lo musical, en un aprendizaje constante y colectivo.
              </p>
              
              <p>
                Podés contactarme por email o Instagram para trabajar juntxs o proponer proyectos.
              </p>
              
              <p className="acercademi-despedida">
                Gracias por leer y por tomarte el tiempo de recorrer este portfolio.<br />
                Beso, So.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AcercaDeMi;
