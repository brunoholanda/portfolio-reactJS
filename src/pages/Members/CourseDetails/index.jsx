import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Styles';

export default function CourseDetails() {
  return (
    <S.CourseDetails>
      <S.ProgressBar />
      <S.TitleContent>
        <S.CourseSidebar>
          <S.CourseTitle>A Arte de Programar: Do Zero à Primeira Página Web</S.CourseTitle>
          <S.CourseSubtitle>Aprenda a fazer páginas para a internet em menos de 30 dias.</S.CourseSubtitle>
          <S.ActionButtons>
            <Link to="/course-video">
              <S.Button primary>Começar</S.Button>
            </Link>
            <S.Button>Certificado</S.Button>
          </S.ActionButtons>
          <S.CourseInfo>
            <S.Rating>
              <S.RatingValue>4,9</S.RatingValue> NOTA
            </S.Rating>
            <S.Enrollment>3 MIL INSCRITOS</S.Enrollment>
          </S.CourseInfo>

          <S.CourseDuration>
            <S.DurationItem>
              <S.DurationTime>5 horas</S.DurationTime>
              para conclusão
            </S.DurationItem>
            <S.DurationItem>
              <S.DurationTime>120 minutos</S.DurationTime>
              de videoaulas
            </S.DurationItem>
          </S.CourseDuration>
        </S.CourseSidebar>
        <S.VideoPromo>
          <iframe width="540" height="315" src="https://www.youtube.com/embed/Kai5ZsS7ozY?si=q-tm6aDayf7WrxMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </S.VideoPromo>
      </S.TitleContent>
      <S.CourseContent>
        <S.ContentTitle>Programação é o futuro!</S.ContentTitle>
        <S.ContentDescription>
          Parece que o mundo gira em torno da programação. Basicamente tudo hoje precisa de um computador, que consequentemente precisa de um programa por trás. De uma simples site para profissionais diversos até os novos algoritimos de IA.
          <br /><br />
          Por isso, hoje os programadores são tão desejados no mercado. Sendo assim você precisa entrar nesse mercado e o primeiro passo é aprender a fazendo sua primeira página web.
          <br /><br />
          Neste curso você vai aprender:
          <ul>
            <li>IDE's de programação, os editores de código</li>
            <li>Como fazer sua primeira página web</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Como hospedar seu site de graça</li>
            <li>Como começar a ganhar dinheiro com o que aprendeu</li>
            <li>Para onde seguir após esse treinamento</li>
          </ul>
          E tudo isso se de uma forma dinâmica e rápida pois tempo é dinheiro sim ;)
        </S.ContentDescription>
      </S.CourseContent>
      <S.CourseSidebar>
        <S.SidebarItem>Requisitos do curso</S.SidebarItem>
        <S.SidebarItem> - Computador ou notebook, pode ser o mais simples que for 😱</S.SidebarItem>
      </S.CourseSidebar>
    </S.CourseDetails>
  );
}
