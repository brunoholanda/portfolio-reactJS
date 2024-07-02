// FloatingButton.js
import Chatbot from 'components/Chatboot';
import React, { useState } from 'react';
import styled from 'styled-components';
import chatIcon from '../../public/assets/icons/chat-icon.png';

const Button = styled.button`
  position: fixed;
  bottom: 100px;
  right: 80px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(to right, #00A1FF, #A100FF); 
  color: white;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease;

  img {
    width: 35px;
  }

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    bottom: 20px;
  right: 20px;
}
`;

const FloatingButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatbotClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <Button onClick={handleChatbotClick} title='Conversar com Bruno IA'>
        <img src={chatIcon} alt="icone de chat" />
      </Button>
      {isChatOpen && <Chatbot onClose={handleChatbotClick} />}
    </>
  );
};

export default FloatingButton;
