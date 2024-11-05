import React, { useState } from "react";
import "./Navbar.css";
import logoImage from "./logo.png"; // Укажите путь к вашему изображению логотипа

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
      <a href="#main" onClick={closeMenu}>
          <img src={logoImage} alt="Logo" className="logo" />
        </a>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className="burger"></div>
          <div className="burger"></div>
          <div className="burger"></div>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><button className="close-button" onClick={closeMenu}>×</button></li>
          <li><a href="#main" onClick={closeMenu}>Главная</a></li>
          <li><a href="#about" onClick={closeMenu}>О</a></li>
          <li><a href="#timeline" onClick={closeMenu}>История</a></li>
          <li><a href="#advantages" onClick={closeMenu}>Преимущества</a></li>
          <li><a href="#future" onClick={closeMenu}>Будущее</a></li>
          <li><a href="#video-review" onClick={closeMenu}>Видео</a></li>
          <li><a href="#example" onClick={closeMenu}>Примеры</a></li>
          <li><a href="#business" onClick={closeMenu}>Бизнес</a></li>
          <li><a href="#team" onClick={closeMenu}>Команда</a></li>
          <li><a href="#contact" onClick={closeMenu}>Контакты</a></li>
        </ul>
      </nav>
      <div className={`overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
    </>
  );
}

export default Navbar;
