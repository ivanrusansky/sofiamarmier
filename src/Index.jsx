import React, { useState } from "react";
import "./Index.css";

function Index() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [photoMenuOpen, setPhotoMenuOpen] = useState(false);
  const [audioMenuOpen, setAudioMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <span className="navbar-brand">sofia marmier</span>
        <ul>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); setDropdownOpen(!dropdownOpen); }}>
              MIS PROYECTOS
            </a>
          </li>
        </ul>
      </nav>

      {dropdownOpen && (
        <div className="fullscreen-menu" onClick={() => setDropdownOpen(false)}>
          <div className="menu-content" onClick={e => e.stopPropagation()}>
            <a
              href="#"
              className="menu-item"
              onClick={e => {
                e.preventDefault();
                setSubMenuOpen(!subMenuOpen);
              }}
            >
              <span>DISEÑO GRÁFICO</span>
              <span className="menu-arrow">{subMenuOpen ? '▲' : '▼'}</span>
            </a>

            {subMenuOpen && (
              <>
                <div className="submenu-divider"></div>
                <a href="/diseno-grafico/fanzine" className="submenu-item">
                  <span>FANZINE</span>
                  <span className="submenu-number">#01</span>
                </a>
                <div className="submenu-divider"></div>
                <a href="/diseno-grafico/flyers-de-musica" className="submenu-item">
                  <span>FLYERS DE MÚSICA</span>
                  <span className="submenu-number">#02</span>
                </a>
                <div className="submenu-divider"></div>
                <a href="/diseno-grafico/posters" className="submenu-item">
                  <span>POSTERS</span>
                  <span className="submenu-number">#03</span>
                </a>
                <div className="submenu-divider"></div>
                <a href="/diseno-grafico/tapas" className="submenu-item">
                  <span>TAPAS</span>
                  <span className="submenu-number">#04</span>
                </a>
                <div className="submenu-divider"></div>
                <a href="/diseno-grafico/tarjetas" className="submenu-item">
                  <span>TARJETAS</span>
                  <span className="submenu-number">#05</span>
                </a>
                <div className="submenu-divider"></div>
              </>
            )}

            <a
              href="#"
              className="menu-item"
              onClick={e => {
                e.preventDefault();
                setPhotoMenuOpen(!photoMenuOpen);
              }}
            >
              <span>FOTOGRAFÍA</span>
              <span className="menu-arrow">{photoMenuOpen ? '▲' : '▼'}</span>
            </a>
            {photoMenuOpen && (
              <>
                <div className="submenu-divider"></div>
                <a href="/fotografia/amueblados" className="submenu-item photo-sub">
                  <span>AMUEBLADOS</span>
                  <span className="submenu-number">#01</span>
                </a>
                <div className="submenu-divider"></div>
                <a href="/fotografia/gastronomia" className="submenu-item photo-sub">
                  <span>GASTRONOMÍA</span>
                  <span className="submenu-number">#02</span>
                </a>
                <div className="submenu-divider"></div>
                <a href="/fotografia/grabaciones" className="submenu-item photo-sub">
                  <span>GRABACIONES</span>
                  <span className="submenu-number">#03</span>
                </a>
                <div className="submenu-divider"></div>
                <a href="/fotografia/indumentaria" className="submenu-item photo-sub">
                  <span>INDUMENTARIA</span>
                  <span className="submenu-number">#04</span>
                </a>
                <div className="submenu-divider"></div>
                <a href="/fotografia/negativos" className="submenu-item photo-sub">
                  <span>NEGATIVOS</span>
                  <span className="submenu-number">#05</span>
                </a>
                <div className="submenu-divider"></div>
                <a href="/fotografia/sesiones" className="submenu-item photo-sub">
                  <span>SESIONES</span>
                  <span className="submenu-number">#06</span>
                </a>
                <div className="submenu-divider"></div>
                <a href="/fotografia/vivo" className="submenu-item photo-sub">
                  <span>VIVO</span>
                  <span className="submenu-number">#07</span>
                </a>
                <div className="submenu-divider"></div>
              </>
            )}

            <a
              href="#"
              className="menu-item"
              onClick={e => {
                e.preventDefault();
                setAudioMenuOpen(!audioMenuOpen);
              }}
            >
              <span>AUDIOVISUAL</span>
              <span className="menu-arrow">{audioMenuOpen ? '▲' : '▼'}</span>
            </a>
            {audioMenuOpen && (
              <>
                <div className="submenu-divider"></div>
                <a href="/audiovisual/sesiones-en-vivo" className="submenu-item audio-sub">
                  <span>SESIONES EN VIVO</span>
                  <span className="submenu-number">#01</span>
                </a>
                <div className="submenu-divider"></div>
                <a href="/audiovisual/shows-en-vivo" className="submenu-item audio-sub">
                  <span>SHOWS EN VIVO</span>
                  <span className="submenu-number">#02</span>
                </a>
                <div className="submenu-divider"></div>
              </>
            )}
          </div>
        </div>
      )}
      {/* <div className="image-container">
        <img src="/logo png.png" alt="Background" className="background-image" />
      </div> */}
      <div className="video-container">
        <video src="/logo.mp4" className="background-video" autoPlay muted loop></video>
      </div>
    </>
  );
}

export default Index;
