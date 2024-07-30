import React from 'react'
import * as S from './Styles';
import { Link } from 'react-router-dom';

export default function MembersArea() {
  return (
    <S.MembersArea>
    
      <S.WelcomeMessage>Olá Bruno Holanda</S.WelcomeMessage>
      <S.Programs>
        <S.SectionTitle>Cusrsos Disponiveis</S.SectionTitle>
        <S.Card>
          <S.CardTitle>Do zero a primeira pagina web</S.CardTitle>
          <p>Tenha o poder do html e css nas suas maõs 🫵</p>

          <Link to="/course-details">
            <S.StartButton>Comece Aqui</S.StartButton>
          </Link>
        </S.Card>
      </S.Programs>
      <S.BeginnerSection>
        <S.SectionTitle>Conteudo Extra</S.SectionTitle>
        <S.Card>
          <S.CardTitle>Lógica de Programação Básica</S.CardTitle>
        </S.Card>
        <S.Card>
          <S.CardTitle>Lógica de Programação Avançada</S.CardTitle>
        </S.Card>
        <S.Card>
          <S.CardTitle>Ping Pong</S.CardTitle>
        </S.Card>
      </S.BeginnerSection>
    </S.MembersArea>
  )
}
