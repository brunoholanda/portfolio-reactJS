import Chatbot from 'components/Chatboot';
import React, { useState } from 'react';
import styled from 'styled-components';
import chatIcon from '../../public/assets/icons/chat-icon.png';

const Button = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 80;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--accent-gradient);
  color: white;
  border: none;
  box-shadow: 0 10px 24px rgba(0, 161, 255, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  img {
    width: 32px;
  }

  &:hover {
    transform: translateY(-2px) scale(1.04);
    box-shadow: 0 14px 28px rgba(161, 0, 255, 0.28);
  }

  @media screen and (max-width: 768px) {
    bottom: 16px;
    right: 16px;
  }
`;

const FloatingButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatbotClick = () => {
    setIsChatOpen((open) => !open);
  };

  return (
    <>
      <Button
        type="button"
        onClick={handleChatbotClick}
        title="Conversar com Bruno IA"
        aria-expanded={isChatOpen}
        aria-label="Conversar com Bruno IA"
      >
        <img src={chatIcon} alt="" />
      </Button>
      {isChatOpen && <Chatbot onClose={handleChatbotClick} />}
    </>
  );
};

export default FloatingButton;
