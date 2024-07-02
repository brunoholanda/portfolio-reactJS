import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import * as S from './Styles';

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Oi! Como posso ajudar você?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const systemMessageContent = `
    Você é um chatbot especializado em responder perguntas sobre Bruno de Holanda Rodrigues. 
    Bruno é um desenvolvedor web fullstack com 3 anos de experiência. Ele atualmente trabalha na Elevaty, 
    uma processadora de faturas de cartão de credito, onde desenvolve aplicações fullstack. Ele é o criador do sistema de agenda para clínicas, marquei.com.br.
    Antes de se tornar desenvolvedor, Bruno trabalhou por 12 anos no Banco Bradesco, onde chegou a ser Gerente Administrativo.
    Ele é formado em Análise e Desenvolvimento de Sistemas pela Universidade Norte do Paraná e em Administração pelo Instituto Federal de Ciência e Tecnologia da Paraíba.
    Bruno começou a trabalhar aos 12 anos em uma LanHouse, onde aprendeu a montar e formatar computadores. 
    Ele automatizou a casa dos pais aos 16 anos usando Arduino e programação em C.
    Bruno é apaixonado por tecnologia e sempre busca criar soluções inovadoras. 
    Ele tem experiência em ReactJS, JavaScript, Node.js, HTML, SASS, CSS, Git, SQL, Scrum e Agile. 
    Seus projetos notáveis incluem o desenvolvimento de um espelho inteligente programado em Python e várias aplicações de automação residencial.
    Bruno é casado e não possui filhos. 
    Sua maior motivação é proporcionar experiencias para sua familia. 
    Bruno se esforça para ser o melhor desenvolvedor, proporcionando soluções inovadoras para as empresas em que trabalha. 
    Bruno já escreveu um livro que pode ser adquirido no link 'https://pay.hotmart.com/G93146509W', também já gravou um curso de programação para iniciantes que pode ser adquirido em 'https://holanda-rodrigues.hotmart.host/pagina-de-vendas-e61fa6ec-b7eb-4574-be27-67a83e395a3f'.
    Bruno possui visto de trabalho americano e pode se comunicar em inglês. Também arrisca no Espanhol. 
    Bruno já visitou os Estados Unidos, Chile, Argentina e já conheceu 11 estados brasileiros.
    Bruno pratica esportes como ciclismo, natação e musculação.
    Bruno se alimenta bem e acredita que possui alto desempenho devido à sua disciplina com exercícios e alimentação.
    Cor preferida é azul, comida preferida é hamburguer, ama viajar. 
  `;

  useEffect(() => {
    if (!localStorage.getItem('systemMessage')) {
      localStorage.setItem('systemMessage', systemMessageContent);
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (input.trim()) {
      const newMessages = [...messages, { sender: 'user', text: input }];
      setMessages(newMessages);
      setInput('');

      const isContactRequest = checkContactRequest(input);
      if (isContactRequest) {
        const contactResponse = getContactResponse();
        setMessages([...newMessages, { sender: 'bot', text: contactResponse }]);
        return;
      }

      const isResumeRequest = checkResumeRequest(input);
      if (isResumeRequest) {
        const resumeResponse = getResumeResponse();
        setMessages([...newMessages, { sender: 'bot', text: resumeResponse }]);
      } else {
        const relevance = await checkRelevance(input);
        if (relevance === 'Sim') {
          const response = await getBotResponse(input);
          setMessages([...newMessages, { sender: 'bot', text: response }]);
        } else {
          setMessages([...newMessages, { sender: 'bot', text: 'Desculpe, só posso responder perguntas sobre Bruno de Holanda Rodrigues.' }]);
        }
      }
    }
  };

  const checkRelevance = async (userInput) => {
    const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
    const checkRelevanceMessage = {
      role: 'system',
      content: `
        Você é um chatbot que deve verificar se a pergunta é relevante para Bruno de Holanda Rodrigues. 
        Responda apenas "Sim" se a pergunta for relevante e "Não" se a pergunta não for relevante.
      `
    };

    try {
      const relevanceResponse = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            checkRelevanceMessage,
            { role: 'user', content: userInput }
          ],
          max_tokens: 10
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
          }
        }
      );

      return relevanceResponse.data.choices[0].message.content.trim();
    } catch (error) {
      console.error('Error checking relevance:', error);
      return 'Não';
    }
  };

  const getBotResponse = async (userInput) => {
    const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
    const systemMessage = {
      role: 'system',
      content: localStorage.getItem('systemMessage')
    };

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            systemMessage,
            { role: 'user', content: userInput }
          ],
          max_tokens: 100
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
          }
        }
      );

      return response.data.choices[0].message.content.trim();
    } catch (error) {
      console.error('Error fetching the bot response:', error);
      return 'Desculpe, houve um problema ao obter a resposta. Tente novamente mais tarde.';
    }
  };

  const checkResumeRequest = (userInput) => {
    const resumeKeywords = ['currículo', 'resumo', 'resume', 'CV'];
    return resumeKeywords.some(keyword => userInput.toLowerCase().includes(keyword));
  };

  const checkContactRequest = (userInput) => {
    const contactKeywords = ['falar com uma pessoa', 'falar com Bruno', 'falar com um humano'];
    return contactKeywords.some(keyword => userInput.toLowerCase().includes(keyword));
  };

  const getResumeResponse = () => {
    return `
      Claro! Aqui estão os links para os meus currículos:
      <br/><br/>
      <a href="curriculo-pt.pdf" target="_blank" rel="noopener noreferrer">Currículo em Português</a>
      <br/>
      <a href="curriculo-en.pdf" target="_blank" rel="noopener noreferrer">Resume in English</a>
    `;
  };

  const getContactResponse = () => {
    return `
      Claro, você pode falar com o Bruno pelo WhatsApp clicando <a href="https://api.whatsapp.com/send/?phone=5583998150712&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">aqui</a>!
    `;
  };

  return (
    <S.ChatContainer>
      <S.ChatHeader>
        Bruno IA
        <button onClick={onClose} style={{ float: 'right', color: 'white', background: 'none', border: 'none' }}>X</button>
      </S.ChatHeader>
      <S.ChatMessages>
        {messages.map((message, index) => (
          <div key={index} style={{ textAlign: message.sender === 'bot' ? 'left' : 'right' }}>
            {message.sender === 'bot' ? (
              <div dangerouslySetInnerHTML={{ __html: message.text }} />
            ) : (
              <p>{message.text}</p>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </S.ChatMessages>
      <S.ChatInput
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        placeholder="Digite sua mensagem..."
      />
    </S.ChatContainer>
  );
};

export default Chatbot;
