import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import cadeado from '../../public/assets/img/cadeado.png';
import { BASE_URL } from 'config';

const Authentication = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('authToken', data.access_token);
        setIsAuthenticated(true);
        navigate('/operador');
      } else {
        alert('Authentication failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container>
      <IconContainer>
        <h1>Acesso ao Painel do Operador</h1>
        <img src={cadeado} alt="imagem de cadeado" />
      </IconContainer>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username"></label>
          <StyledInput
            type="text"
            id="username"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <StyledInput
            type="password"
            id="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <StyledButton type="submit">Entrar</StyledButton>
      </form>
    </Container>
  );
};

export default Authentication;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1, p {
    color: var(--preto-texto);
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 3.5rem 0;

  img {
    width: 40px;
    height: 40px;
    margin-left: 2rem;
  }
`;

const StyledInput = styled.input`
  margin-bottom: 1.5em;
  border-style: none;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  width: 423px;
  height: 20px;
  font-size: 18px;
  padding: 1rem;
  border-radius: 8px;
`;

const StyledButton = styled.button`
  font-weight: 600;
  font-size: 18px;
  color: var(--branco);
  background: var(--preto-texto);
  border-style: none;
  cursor: pointer;
  transition: 0.4s all;
  width: 457px;
  height: 45px;
  margin-bottom: 1em;
  margin-bottom: 4rem;
  border-radius: 8px;

  &:hover {
    background: var(--azul);
    transform: scale(1.02);
  }
`;
