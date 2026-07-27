import React, { useEffect, useRef, useState } from 'react';
import * as S from './Styles';
import { useLanguage } from 'Context/LanguageContext';
import { getOfflineReply, suggestedQuestions } from './knowledge';

export default function Chatbot({ onClose }) {
  const { language } = useLanguage();
  const isPt = language === 'pt-br';
  const suggestions = suggestedQuestions[isPt ? 'pt-br' : 'en'];

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    setMessages([
      {
        sender: 'bot',
        text: isPt
          ? 'Oi! Sou o Bruno IA 👋 Posso responder perguntas simples sobre o Bruno — sem internet. Escolha uma sugestão ou digite sua dúvida.'
          : "Hi! I’m Bruno IA 👋 I can answer simple questions about Bruno — offline. Pick a suggestion or type your question.",
      },
    ]);
  }, [isPt]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const pushBotReply = (userText) => {
    setIsTyping(true);
    window.setTimeout(() => {
      const reply = getOfflineReply(userText, language);
      setMessages((current) => [...current, { sender: 'bot', text: reply }]);
      setIsTyping(false);
    }, 350 + Math.min(userText.length * 8, 450));
  };

  const handleSend = (rawText) => {
    const text = (rawText ?? input).trim();
    if (!text || isTyping) return;

    setMessages((current) => [...current, { sender: 'user', text }]);
    setInput('');
    pushBotReply(text);
  };

  return (
    <S.ChatContainer role="dialog" aria-label={isPt ? 'Chat Bruno IA' : 'Bruno IA chat'}>
      <S.ChatHeader>
        <div>
          <strong>Bruno IA</strong>
          <span>{isPt ? 'Respostas locais · offline' : 'Local answers · offline'}</span>
        </div>
        <button type="button" onClick={onClose} aria-label={isPt ? 'Fechar chat' : 'Close chat'}>
          ×
        </button>
      </S.ChatHeader>

      <S.ChatMessages>
        {messages.map((message, index) => (
          <S.Bubble key={`${message.sender}-${index}`} $from={message.sender}>
            {message.sender === 'bot' ? (
              <div dangerouslySetInnerHTML={{ __html: message.text }} />
            ) : (
              <p>{message.text}</p>
            )}
          </S.Bubble>
        ))}

        {isTyping && (
          <S.Bubble $from="bot">
            <S.Typing>
              <span />
              <span />
              <span />
            </S.Typing>
          </S.Bubble>
        )}
        <div ref={messagesEndRef} />
      </S.ChatMessages>

      <S.Suggestions aria-label={isPt ? 'Perguntas sugeridas' : 'Suggested questions'}>
        {suggestions.map((question) => (
          <button
            key={question}
            type="button"
            onClick={() => handleSend(question)}
            disabled={isTyping}
          >
            {question}
          </button>
        ))}
      </S.Suggestions>

      <S.Composer
        onSubmit={(event) => {
          event.preventDefault();
          handleSend();
        }}
      >
        <S.ChatInput
          ref={inputRef}
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={isPt ? 'Pergunte algo sobre o Bruno…' : 'Ask something about Bruno…'}
          disabled={isTyping}
        />
        <S.SendButton type="submit" disabled={isTyping || !input.trim()}>
          {isPt ? 'Enviar' : 'Send'}
        </S.SendButton>
      </S.Composer>
    </S.ChatContainer>
  );
}
