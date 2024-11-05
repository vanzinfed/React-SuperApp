import React from "react";
import "./TimelineSection.css";

const TimelineSection = () => {
  const timelineData = [
    {
      year: "2023",
      description: "Суперприложения становятся трендом в мобильной разработке. Крупные компании начинают инвестировать в эту технологию.",
    },
    {
      year: "2025",
      description: "Ожидается широкое распространение суперприложений в различных отраслях. Пользователи привыкают к новому формату.",
    },
    {
      year: "2027",
      description: "По прогнозам Gartner, более 50% населения мира будут ежедневно использовать суперприложения.",
    },
  ];

  return (
    <section className="timeline-section">
      <h2 className="timeline-title">Рост популярности суперприложений
</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
