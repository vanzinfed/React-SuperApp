import React from "react";
import "./BusinessSection.css";

const BusinessSection = () => {
  return (
    <div className="business-section">
      <h1>Возможности для бизнеса</h1>
      <div className="business-content">
        <div className="business-item">
          <h2>Расширение аудитории</h2>
          <p>Суперприложения позволяют вам достигать новых пользователей и расширять вашу аудиторию. Это создает новые возможности для роста и развития вашего бизнеса.</p>
        </div>
        <div className="business-item">
          <h2>Увеличение вовлеченности</h2>
          <p>Интерактивные функции суперприложений помогают увеличить вовлеченность пользователей. Это повышает лояльность клиентов и улучшает их опыт взаимодействия с вашим продуктом.</p>
        </div>
        <div className="business-item">
          <h2>Новые бизнес-модели</h2>
          <p>Суперприложения открывают новые бизнес-модели и возможности для монетизации. Это позволяет вам адаптироваться к изменяющимся условиям рынка и находить новые источники дохода.</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessSection;
