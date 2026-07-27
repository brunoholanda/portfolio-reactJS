import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
  40% { transform: translateY(-4px); opacity: 1; }
`;

export const ChatContainer = styled.div`
  position: fixed;
  bottom: 90px;
  right: 24px;
  z-index: 90;
  width: min(380px, calc(100vw - 24px));
  height: min(560px, calc(100vh - 120px));
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 18px;
  background: var(--superficie-elevada);
  border: 1px solid var(--borda-suave);
  box-shadow: 0 22px 50px rgba(0, 0, 0, 0.28);
  color: var(--preto-texto);

  @media screen and (max-width: 768px) {
    right: 12px;
    bottom: 88px;
    width: calc(100vw - 24px);
    height: min(70vh, 560px);
  }
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.95rem 1rem;
  background: var(--accent-gradient);
  color: #fff;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    text-align: left;
  }

  strong {
    font-size: 1rem;
    font-weight: 700;
  }

  span {
    font-size: 0.75rem;
    opacity: 0.9;
  }

  button {
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.18);
    color: #fff;
    font-size: 1.35rem;
    line-height: 1;
    cursor: pointer;
  }
`;

export const ChatMessages = styled.div`
  flex: 1;
  padding: 0.9rem;
  overflow-y: auto;
  background: var(--superficie);
`;

export const Bubble = styled.div`
  max-width: 88%;
  margin-bottom: 0.7rem;
  margin-left: ${(props) => (props.$from === 'user' ? 'auto' : '0')};
  margin-right: ${(props) => (props.$from === 'user' ? '0' : 'auto')};
  padding: 0.7rem 0.85rem;
  border-radius: ${(props) =>
    props.$from === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px'};
  background: ${(props) =>
    props.$from === 'user' ? 'var(--accent-gradient)' : 'var(--superficie-suave)'};
  color: ${(props) => (props.$from === 'user' ? '#fff' : 'var(--preto-texto)')};
  border: ${(props) =>
    props.$from === 'user' ? 'none' : '1px solid var(--borda-suave)'};
  box-shadow: var(--sombra-suave);
  font-size: 0.92rem;
  line-height: 1.45;

  p {
    margin: 0;
    color: inherit;
  }

  a {
    color: ${(props) => (props.$from === 'user' ? '#fff' : 'var(--accent-start)')};
    font-weight: 600;
  }
`;

export const Typing = styled.div`
  display: inline-flex;
  gap: 0.28rem;
  align-items: center;
  min-height: 1rem;

  span {
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 50%;
    background: var(--cinza-texto);
    animation: ${bounce} 1s infinite;

    &:nth-child(2) {
      animation-delay: 0.15s;
    }

    &:nth-child(3) {
      animation-delay: 0.3s;
    }
  }
`;

export const Suggestions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  padding: 0.65rem 0.85rem 0.35rem;
  border-top: 1px solid var(--borda-suave);
  background: var(--superficie-elevada);
  max-height: 7.5rem;
  overflow-y: auto;

  button {
    border: 1px solid var(--borda-suave);
    border-radius: 999px;
    background: var(--superficie-suave);
    color: var(--preto-texto);
    font-family: var(--fonte-secundaria);
    font-size: 0.78rem;
    font-weight: 500;
    padding: 0.4rem 0.7rem;
    cursor: pointer;
    transition: border-color 0.25s ease, transform 0.25s ease, color 0.25s ease;

    &:hover:not(:disabled) {
      transform: translateY(-1px);
      border-color: rgba(0, 161, 255, 0.4);
      color: var(--accent-start);
    }

    &:disabled {
      opacity: 0.55;
      cursor: not-allowed;
    }
  }
`;

export const Composer = styled.form`
  display: flex;
  gap: 0.45rem;
  padding: 0.65rem 0.85rem 0.85rem;
  background: var(--superficie-elevada);
  border-top: 1px solid transparent;
`;

export const ChatInput = styled.input`
  flex: 1;
  min-width: 0;
  border: 1px solid var(--borda-suave);
  background: var(--superficie);
  color: var(--preto-texto);
  padding: 0.7rem 0.85rem;
  border-radius: 10px;
  outline: none;

  &::placeholder {
    color: var(--cinza-texto);
  }

  &:focus {
    border-color: rgba(0, 161, 255, 0.45);
  }
`;

export const SendButton = styled.button`
  flex-shrink: 0;
  border: none;
  border-radius: 10px;
  padding: 0 0.95rem;
  background: var(--accent-gradient);
  color: #fff;
  font-family: var(--fonte-secundaria);
  font-weight: 600;
  font-size: 0.88rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
