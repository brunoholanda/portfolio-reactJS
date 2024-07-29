import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  padding: 5px 0;
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  border-radius: 10px;
  padding: 2px 25px;
  margin: 5px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1200px;

  img {
    width: 100%;
    max-width: 400px;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    img {
      width: 32rem;
      margin-top: 0;
    }
  }
`;

export const HeroText = styled.div`
  flex: 1;
  padding: 20px;
  
  @media (min-width: 768px) {
    padding: 50px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 1.5em;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 2em;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1em;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`;

export const HeroForm = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const EmailInput = styled(Input)``;

export const WhatsappInput = styled(Input)``;

export const EmailSuggestions = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  background-color: #fff;
  position: absolute;
  top: 70px;
  width: calc(100% - 22px);
  z-index: 1000;
`;

export const Suggestion = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ConsentCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  label {
    margin-left: 10px;
    font-size: 0.9em;
    color: #fff;
  }

  input {
    margin: 0;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: #000;
  font-weight: bold;
  background-color: #ffcb01;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const InfoSection = styled.section`
  background-color: #000;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1200px;
  margin: 20px 0;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  background-color: #202226;
  border-radius: 8px;
  padding: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const InfoIcon = styled.div`
  font-size: 2em;
  color: #f0ad4e;
  margin-right: 0;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

export const InfoText = styled.div`
  flex: 1;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const InfoTitle = styled.h3`
  font-size: 1.2em;
  color: #fff;
  margin-bottom: 5px;
`;

export const InfoDescription = styled.p`
  font-size: 1em;
  color: #fff;
`;

export const AboutMeSection = styled.div`
  background-color: #202226;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 20px;
  text-align: center;

  .aboutme {
    padding: 5px;
    margin: 20px 0;

    img {
      width: 150%;
      max-width: 380px;
      height: auto;
      object-fit: cover;
      border-radius: 50px;
    }
  }

  .aboutme-text {
    color: #fff;
    margin: 20px 0;

    .white-text {
      color: #fff;
    }

    .yellow-text {
      color: #ffcb01;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;

    .aboutme {
      margin: 0 5rem;
    }

    .aboutme-text {
      margin: 0 5rem 0 1rem;
    }
  }
`;

export const Footer = styled.footer`
  padding: 20px;
  background-color: #000;
  color: #fff;
  text-align: center;
  width: 100%;
`;


export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 500px;
  width: 100%;
  margin: 0 20px; /* Adicionado para garantir o espaçamento em telas menores */
`;

export const ModalMessage = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const CloseButton = styled.button`
  width: 150px;
  background: var(--azul);
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;