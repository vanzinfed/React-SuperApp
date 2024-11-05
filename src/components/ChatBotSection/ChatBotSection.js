import React, { useState } from "react";
import "./ChatBotSection.css";

const ChatBotSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chat-bot-section">
      {isOpen ? (
        <div className="chat-bot-iframe-wrapper">
          <button className="close-chat-btn" onClick={handleToggleChat}>Закрыть чат</button>
          <iframe
            src="https://share.imagica.ai/?q=74cad891-0b2a-45da-bd8c-24fd342aed11"
            title="Chat Bot"
            className="chat-bot-iframe"
          ></iframe>
        </div>
      ) : (
        <div className="open-chat-btn" onClick={handleToggleChat}>
          Отправьте нам сообщение
        </div>
      )}
    </div>
  );
};

export default ChatBotSection;
