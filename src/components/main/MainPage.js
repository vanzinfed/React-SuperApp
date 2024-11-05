import React from "react";
import "./MainPage.css";
import phoneImage from "./phone-image.png";

function MainPage() {
  return (
    <div className="main-page">
      <div className="content">
        <div className="title">
          <h1>Суперприложения:</h1>
          <h1>Будущее Мобильной Экосистемы</h1>
        </div>
        <p>
          Откройте для себя мир суперприложений – универсальных инструментов
          цифрового века.
        </p>
        <div className="buttons">
          <a href="#about">
            <button className="learn-more">Узнать больше</button>
          </a>
          <a href="#contact">
            <button className="demo-version">Связаться с нами</button>
          </a>
        </div>
      </div>
      <div className="phone-image">
        <img src={phoneImage} alt="Phone with icons" />
      </div>
    </div>
  );
}

export default MainPage;