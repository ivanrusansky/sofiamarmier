import React, { useState } from "react";
import "./index.css";

function Index() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [photoMenuOpen, setPhotoMenuOpen] = useState(false);
  const [audioMenuOpen, setAudioMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <span className="navbar-brand navbar-brand-custom">sofia marmier</span>
        <ul>
          <li>
            <a href="#" className="navbar-proyectos" onClick={(e) => { e.preventDefault(); setDropdownOpen(!dropdownOpen); }}>
              [mis proyectos]
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
                  <span>fanzine</span>
                  <span className="submenu-number">#01</span>
                </a>
                <div className="submenu-divider"></div>
                <a href="/diseno-grafico/flyers-de-musica" className="submenu-item">
                  <span>flyers de música</span>
                  <span className="submenu-number">#02</span>
                </a>
                <div className="submenu-divider"></div>
                <a href="/diseno-grafico/posters" className="submenu-item">
                  <span>posters</span>
                  <span className="submenu-number">#03</span>
                </a>
                <div className="submenu-divider"></div>
                <a href="/diseno-grafico/tapas" className="submenu-item">
                  <span>tapas</span>
                  <span className="submenu-number">#04</span>
                </a>
                <div className="submenu-divider"></div>
                <a href="/diseno-grafico/tarjetas" className="submenu-item">
                  <span>tarjetas</span>
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
                  <span>amueblados</span>
                  <span className="submenu-number">#01</span>
                </a>
                <div className="submenu-divider"></div>
                <a href="/fotografia/gastronomia" className="submenu-item photo-sub">
                  <span>gastronomía</span>
                  <span className="submenu-number">#02</span>
                </a>
                <div className="submenu-divider"></div>
                <a href="/fotografia/grabaciones" className="submenu-item photo-sub">
                  <span>grabaciones</span>
                  <span className="submenu-number">#03</span>
                </a>
                <div className="submenu-divider"></div>
                <a href="/fotografia/indumentaria" className="submenu-item photo-sub">
                  <span>indumentaria</span>
                  <span className="submenu-number">#04</span>
                </a>
                <div className="submenu-divider"></div>
                <a href="/fotografia/negativos" className="submenu-item photo-sub">
                  <span>negativos</span>
                  <span className="submenu-number">#05</span>
                </a>
                <div className="submenu-divider"></div>
                <a href="/fotografia/sesiones" className="submenu-item photo-sub">
                  <span>sesiones</span>
                  <span className="submenu-number">#06</span>
                </a>
                <div className="submenu-divider"></div>
                <a href="/fotografia/vivo" className="submenu-item photo-sub">
                  <span>vivo</span>
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
                  <span>sesiones en vivo</span>
                  <span className="submenu-number">#01</span>
                </a>
                <div className="submenu-divider"></div>
                <a href="/audiovisual/shows-en-vivo" className="submenu-item audio-sub">
                  <span>shows en vivo</span>
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
        {/* Video para PC */}
        <video
          src="/logo en formato pc.mp4"
          className="background-video video-pc"
          autoPlay
          muted
          loop
          playsInline
          style={{ display: window.innerWidth > 768 ? 'block' : 'none' }}
        ></video>
        {/* Video para Celular */}
        <video
          src="/logo en formato celular con types de fondo .mp4"
          className="background-video video-mobile"
          autoPlay
          muted
          loop
          playsInline
          style={{ display: window.innerWidth <= 768 ? 'block' : 'none' }}
        ></video>
      </div>
    </>
  );
}

export default Index;
