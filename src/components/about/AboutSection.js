import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>Что такое суперприложение?</h2>
        <div className="features">
          <div className="feature-block">
            <h3>Многофункциональность</h3>
            <p>
              Суперприложение объединяет множество сервисов в одном интерфейсе.
              Это как швейцарский нож для цифрового мира.
            </p>
          </div>
          <div className="feature-block">
            <h3>Модульность</h3>
            <p>
              Пользователи могут добавлять и удалять мини-приложения по
              необходимости. Это обеспечивает гибкость и персонализацию.
            </p>
          </div>
          <div className="feature-block">
            <h3>Единая экосистема</h3>
            <p>
              Суперприложение создает целостную экосистему сервисов. Это
              упрощает взаимодействие пользователя с различными функциями.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
