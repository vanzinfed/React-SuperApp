import React from "react";
import "./FutureSection.css";
import arrow1 from './arrow.png';

const FutureSection = () => {
  return (
    <div className="future-section">
      <h1>Будущее супер приложений</h1>
      <div className="future-content">
        <div className="future-block">
          <div className="arrow-block">
            <img src={arrow1} alt="Arrow 1" />
            <span className="arrow-number">1</span>
          </div>
          <h2>Интеграция</h2>
          <p>Суперприложения будут взаимодействовать с умными устройствами. Это создаст единую экосистему цифрового и физического мира.</p>
        </div>
        <div className="future-block">
          <div className="arrow-block">
            <img src={arrow1} alt="Arrow 2" />
            <span className="arrow-number">2</span>
          </div>
          <h2>AI-асистенты</h2>
          <p>Искусственный интеллект улучшит персонализацию и автоматизацию в суперприложениях. Это повысит удобство использования.</p>
        </div>
        <div className="future-block">
          <div className="arrow-block">
            <img src={arrow1} alt="Arrow 3" />
            <span className="arrow-number">3</span>
          </div>
          <h2>Метавселенные</h2>
          <p>Суперприложения станут порталами в виртуальные миры. Это откроет новые возможности для взаимодействия и коммерции.</p>
        </div>
      </div>
    </div>
  );
};

export default FutureSection;
