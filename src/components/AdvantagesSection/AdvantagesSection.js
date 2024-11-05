import React from "react";
import "./AdvantagesSection.css";
import icon1 from './icon1.png'; // Замените на путь к вашей иконке
import icon2 from './icon2.png'; // Замените на путь к вашей иконке
import icon3 from './icon3.png'; // Замените на путь к вашей иконке

const AdvantagesSection = () => {
  return (
    <div className="advantages-section">
      <h1>Преимущества для пользователей</h1>
      <div className="advantages-content">
        <div className="advantage-block">
          <img src={icon1} alt="Icon 1" className="icon" />
          <div className="text-content">
            <h2>Упрощение взаимодействия</h2>
            <p>Все необходимые сервисы в одном приложении. Это экономит время и упрощает навигацию.</p>
          </div>
        </div>
        <div className="advantage-block">
          <img src={icon2} alt="Icon 2" className="icon" />
          <div className="text-content">
            <h2>Персонализация</h2>
            <p>Пользователи могут настраивать интерфейс под свои нужды. Это повышает удобство использования.</p>
          </div>
        </div>
        <div className="advantage-block">
          <img src={icon3} alt="Icon 3" className="icon" />
          <div className="text-content">
            <h2>Единая аутентификация</h2>
            <p>Один аккаунт для всех сервисов. Это повышает безопасность и удобство использования.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSection;
