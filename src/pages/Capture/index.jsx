import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import banner from '../../public/assets/img/banner-capture.webp';
import brunoholanda from '../../public/assets/img/brunoholanda.webp';

import * as S from './Styles';
import { useNavigate } from 'react-router-dom';
import SocialNetworks from 'components/SocialNetworks';
import { BASE_URL } from 'config';


const CapturePage = () => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();


  const handleCloseModal = () => {
    setIsModalVisible(false);
    navigate('/sobre');  // Redirecionar para a rota "sobre"
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const whatsapp = event.target.elements.whatsapp.value;

    const leadData = {
      name,
      whatsapp,
    };

    try {
      const response = await fetch(`${BASE_URL}/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Lead created successfully:', data);
      setSuccessMessage(data.message);
      setIsModalVisible(true);
      // Adicione qualquer lógica adicional aqui, como limpar o formulário ou exibir uma mensagem de sucesso
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      // Adicione qualquer lógica adicional aqui, como exibir uma mensagem de erro
    }
  };

  return (
    <S.PageContainer>
      <S.HeroSection>
        <S.HeroText>
          <S.HeroTitle>
            Descubra como Você pode mudar de carreira e trabalhar com o que você ama!
          </S.HeroTitle>
          <S.HeroSubtitle>
            Insira seu nome e WhatsApp abaixo e conheça o passo a passo validado para mudar de carreira.
          </S.HeroSubtitle>
          <S.HeroForm onSubmit={handleSubmit}>
            <S.Input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Informe seu nome"
              required
            />
            <InputMask
              mask="(99) 9 9999-9999"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            >
              {() => <S.WhatsappInput type="text" name="whatsapp" placeholder="Informe seu WhatsApp" required />}
            </InputMask>
            <S.ConsentCheckbox>
              <input type="checkbox" name="consent" required />
              <label>Eu concordo em receber comunicações via WhatsApp.</label>
            </S.ConsentCheckbox>
            <S.SubmitButton type="submit">OBTER EBOOK AGORA</S.SubmitButton>
          </S.HeroForm>
        </S.HeroText>
        <div>
          <img src={banner} alt="Imagem ilustrativa" />
        </div>
      </S.HeroSection>
      <S.InfoSection>
        <S.InfoItem>
          <S.InfoIcon>📈</S.InfoIcon>
          <S.InfoText>
            <S.InfoTitle>Transformando sua Carreira após os 30</S.InfoTitle>
            <S.InfoDescription>
              Descubra como a mudança de carreira pode renovar sua paixão pelo trabalho e trazer novos propósitos para sua vida.
            </S.InfoDescription>
          </S.InfoText>
        </S.InfoItem>
        <S.InfoItem>
          <S.InfoIcon>💡</S.InfoIcon>
          <S.InfoText>
            <S.InfoTitle>Identificando suas Paixões e Habilidades</S.InfoTitle>
            <S.InfoDescription>
              Avalie suas paixões e interesses para descobrir a carreira ideal e as habilidades transferíveis que você já possui.
            </S.InfoDescription>
          </S.InfoText>
        </S.InfoItem>
        <S.InfoItem>
          <S.InfoIcon>🎯</S.InfoIcon>
          <S.InfoText>
            <S.InfoTitle>Planejamento e Organização Financeira</S.InfoTitle>
            <S.InfoDescription>
              Aprenda a organizar suas finanças e a criar um fundo de emergência para uma transição de carreira segura e sem estresse.
            </S.InfoDescription>
          </S.InfoText>
        </S.InfoItem>
        <S.InfoItem>
          <S.InfoIcon>🎓</S.InfoIcon>
          <S.InfoText>
            <S.InfoTitle>Capacitação e Educação Contínua</S.InfoTitle>
            <S.InfoDescription>
              Invista em cursos, certificações e outras formas de educação para aumentar suas chances de sucesso na nova carreira.
            </S.InfoDescription>
          </S.InfoText>
        </S.InfoItem>
        <S.InfoItem>
          <S.InfoIcon>🌐</S.InfoIcon>
          <S.InfoText>
            <S.InfoTitle>Networking e Mentoria</S.InfoTitle>
            <S.InfoDescription>
              Construa uma rede de contatos sólida e encontre mentores que possam guiar e apoiar sua jornada de transição.
            </S.InfoDescription>
          </S.InfoText>
        </S.InfoItem>
        <S.InfoItem>
          <S.InfoIcon>🚀</S.InfoIcon>
          <S.InfoText>
            <S.InfoTitle>Adaptação e Crescimento na Nova Carreira</S.InfoTitle>
            <S.InfoDescription>
              Aprenda a se adaptar à nova cultura organizacional e a continuar crescendo profissionalmente após a mudança de carreira.
            </S.InfoDescription>
          </S.InfoText>
        </S.InfoItem>
      </S.InfoSection>
      <S.AboutMeSection>
        <div className='aboutme'>
          <img src={brunoholanda} alt="Bruno Holanda" />
        </div>
        <div className='aboutme-text'>
          <h2>
            <span className="white-text">Quem é</span> <span className="yellow-text">Bruno Holanda?</span>
          </h2>
          <p>
            Após 12 anos como bancário, chegando a ser gerente executivo de operações, Bruno decidiu mudar de profissão para seguir sua paixão por tecnologia. Ele se tornou um especialista em tecnologia com vasta experiência em grandes empresas e fundou sua própria empresa de SaaS para clínicas e profissionais de saúde. Desde os 20 anos, ele compartilha seu conhecimento por meio do YouTube, ensinando e capacitando pessoas a alcançarem seus objetivos.
          </p>
        </div>
      </S.AboutMeSection>
      <S.Footer>
        <p>© 2024 · Bruno Holanda · Todos os direitos reservados.</p>
      </S.Footer>
      {isModalVisible && (
        <S.Modal>
          <S.ModalContent>
            <S.ModalMessage>{successMessage}</S.ModalMessage>
            <SocialNetworks />
            <S.CloseButton onClick={handleCloseModal}>Fechar</S.CloseButton>
          </S.ModalContent>
        </S.Modal>
      )}
    </S.PageContainer>
  );
};

export default CapturePage;
