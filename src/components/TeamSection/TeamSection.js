import React from "react";
import "./TeamSection.css";
import member1 from "./member1.jpg"; // Замените на путь к вашему изображению
import member2 from "./member2.jpg"; // Замените на путь к вашему изображению
import member3 from "./member3.jpg"; // Замените на путь к вашему изображению

const TeamSection = () => {
  const teamMembers = [
    { image: member1, name: "Проданов Иван", role: "Разработчик" },
    { image: member2, name: "Краснажон Дмитрий", role: "Разработчик" },
    { image: member3, name: "Козий Александр", role: "Разработчик" },
  ];

  return (
    <div className="team-section">
      <h2>Наша Команда</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="image-container">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;