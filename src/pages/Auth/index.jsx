import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Auth.module.scss';
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
    <div className={styles.autenticar}>
      <div className={styles.icone}>
        <h1>Acesso ao Painel do Operador</h1>
        <img src={cadeado} alt="imagem de cadeado" />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Authentication;
