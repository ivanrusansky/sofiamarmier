import React, { useState } from 'react';
import './MasInfo.css';

function MasInfo({ titulo, trabajo }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`masinfo-container ${isOpen ? 'masinfo-open' : ''}`}>
      <button 
        className="masinfo-tab" 
        onClick={toggleOpen}
        aria-label={isOpen ? 'Cerrar información' : 'Abrir información'}
      >
        <span className="masinfo-tab-text">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      
      <div className="masinfo-content">
        <div className="masinfo-text">
          <div className="masinfo-header">
            <h1 className="masinfo-titulo">{titulo}</h1>
          </div>

          {trabajo.descripcion && (
            <div className="masinfo-descripcion">
              <p>{trabajo.descripcion}</p>
            </div>
          )}

          {trabajo.cliente && (
            <div className="masinfo-info-item">
              <h3>Cliente</h3>
              <p>{trabajo.cliente}</p>
            </div>
          )}

          {trabajo.año && (
            <div className="masinfo-info-item masinfo-año">
              <span className="año-label">año</span>
              <span className="año-numero">{trabajo.año}</span>
            </div>
          )}

          {trabajo.tecnicas && trabajo.tecnicas.length > 0 && (
            <div className="masinfo-info-item">
              <h3>Técnicas</h3>
              <ul>
                {trabajo.tecnicas.map((tecnica, index) => (
                  <li key={index}>{tecnica}</li>
                ))}
              </ul>
            </div>
          )}

          {trabajo.info && (
            <div className="masinfo-info-adicional">
              {trabajo.info}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MasInfo;
