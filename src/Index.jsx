import React from "react";
import "./Index.css";

function Index() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Sobre mí</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
      <div className="inicio-container">
        <h1>Bienvenido a mi página</h1>
        <p>¡Este es el inicio de tu proyecto con React y Vite!</p>
      </div>
    </>
  );
}

export default Index;
