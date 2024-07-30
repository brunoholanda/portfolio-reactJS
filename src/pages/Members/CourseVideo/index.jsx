import React, { useState } from 'react';
import * as S from './Styles';

export default function CourseVideo() {
  const [expandedSection, setExpandedSection] = useState(null);

  const handleSectionClick = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <S.CourseVideo>
      <S.Sidebar>
        <S.CourseTitle>Curso</S.CourseTitle>
        <S.CourseSubtitle>Lógica de Programação Básica</S.CourseSubtitle>
        <S.ProgressBar />
        <S.LessonList>
          <S.Section>
            <S.SectionHeader onClick={() => handleSectionClick(1)}>
              <S.SectionTitle>Modulo 01 - Preparando a Mente e o Computador</S.SectionTitle>
              <S.ToggleButton>{expandedSection === 1 ? '-' : '+'}</S.ToggleButton>
            </S.SectionHeader>
            {expandedSection === 1 && (
              <S.LessonItem active>
                <S.LessonTitle>Introdução à programação</S.LessonTitle>
                <S.LessonDuration>09:36</S.LessonDuration>
              </S.LessonItem>
            )}
          </S.Section>
          <S.Section>
            <S.SectionHeader onClick={() => handleSectionClick(2)}>
              <S.SectionTitle>O que é ser um programador?</S.SectionTitle>
              <S.ToggleButton>{expandedSection === 2 ? '-' : '+'}</S.ToggleButton>
            </S.SectionHeader>
            {expandedSection === 2 && (
              <S.LessonItem>
                <S.LessonTitle>O que é ser um programador?</S.LessonTitle>
                <S.LessonDuration>11:32</S.LessonDuration>
              </S.LessonItem>
            )}
          </S.Section>
          <S.Section>
            <S.SectionHeader onClick={() => handleSectionClick(3)}>
              <S.SectionTitle>Criando seu primeiro programa mentalmente</S.SectionTitle>
              <S.ToggleButton>{expandedSection === 3 ? '-' : '+'}</S.ToggleButton>
            </S.SectionHeader>
            {expandedSection === 3 && (
              <S.LessonItem>
                <S.LessonTitle>Criando seu primeiro programa mentalmente</S.LessonTitle>
                <S.LessonDuration>10:00</S.LessonDuration>
              </S.LessonItem>
            )}
          </S.Section>
          <S.Section>
            <S.SectionHeader onClick={() => handleSectionClick(4)}>
              <S.SectionTitle>Desafio Lógica de Programação</S.SectionTitle>
              <S.ToggleButton>{expandedSection === 4 ? '-' : '+'}</S.ToggleButton>
            </S.SectionHeader>
            {expandedSection === 4 && (
              <S.LessonItem>
                <S.LessonTitle>Desafio Lógica de Programação</S.LessonTitle>
                <S.LessonDuration>10:00</S.LessonDuration>
              </S.LessonItem>
            )}
          </S.Section>
        </S.LessonList>
      </S.Sidebar>
      <S.Content>
        <S.VideoTitle>O que é ser um programador?</S.VideoTitle>
        <S.VideoPlayer controls>
          <source src="path_to_video" type="video/mp4" />
          Your browser does not support the video tag.
        </S.VideoPlayer>
        <S.VideoActions>
          <S.ConcludedButton>Concluído</S.ConcludedButton>
          <S.RateLesson>
            Avalie esta aula 👌
            <S.Stars>
              <S.Star>★</S.Star>
              <S.Star>★</S.Star>
              <S.Star>★</S.Star>
              <S.Star>★</S.Star>
              <S.Star>★</S.Star>
            </S.Stars>
          </S.RateLesson>
          <S.Attachments>
            <S.AttachmentTitle>Anexos 📎</S.AttachmentTitle>
            <S.AttachmentLink href="path_to_attachment">ANEXO 1 - ARQUIVO<br />Slide - O que é ser um Programador?</S.AttachmentLink>
          </S.Attachments>
          <S.Attachments>
            <S.AttachmentTitle>Transcrição da Aula 📄</S.AttachmentTitle>
          </S.Attachments>
        </S.VideoActions>
      </S.Content>
    </S.CourseVideo>
  );
}
