import React from 'react';
import Escudo from '../assets/escudovb.png';
import '../styles/globals.css';
import '../styles/header.css';
import config from '../config';


const Header = () => {
  const { urlPrincipal: angularURL } = config;

  return (
    <>
      <header className="header">
        <a href={angularURL} className="logo">
          <img src={Escudo} alt="escudo"/>
        </a>
        <nav className="navbar">
          <div id="nav-close" className="fas fa-times"></div>
          <div className="iconBurguer stylesIcon">☰</div>
          <div className="iconXBurguer stylesIcon">
            <span>X</span>
          </div>
          <div className="contentHref">
            <a href={angularURL}>Inicio</a>
            <a href={angularURL + "que_hacer"}>¿Qué hacer?</a>
            <a href={angularURL + "eventos"}>Eventos</a>
          </div>
        </nav>
      
        <div className="icons">
          <div id="menu-btn" className="fas fa-bars"></div>
        </div>
      </header>
    </>
  )
}

export default Header