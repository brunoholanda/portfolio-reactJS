import React from 'react';
import logo from '../../../../public/assets/img/logo.png';
import * as S from './Styles';

export default function Footer() {
  return (
    <S.Footer>
      <S.FooterContent>
        <S.Logo src={logo} alt="logo da holanda desenvolvimento de software" />
        <S.SocialLinks>
          <S.SocialLink href="https://www.youtube.com/nerdkingteam" target="_blank">YouTube</S.SocialLink>
          <S.SocialLink href="https://www.instagram.com/brunoholandaa" target="_blank">Instagram</S.SocialLink>
          <S.SocialLink href="https://www.linkedin.com/in/brunoholanda/" target="_blank">LinkedIn</S.SocialLink>
          <S.SocialLink href="https://github.com/brunoholanda" target="_blank">GitHub</S.SocialLink>
        </S.SocialLinks>
        <S.FooterText>
          © Holanda Desenvolvimento de Software - 2024. Todos os direitos reservados. CNPJ: 50.509.731/0001-35 -  Av. Paulista 1106 - SP - SL01 Andar 16.
        </S.FooterText>
        <S.FooterLinks>
          <S.FooterLink href="termos_de_uso_url">Termos de Uso</S.FooterLink> | 
          <S.FooterLink href="politica_de_privacidade_url">Política de Privacidade</S.FooterLink>
        </S.FooterLinks>
      </S.FooterContent>
    </S.Footer>
  );
}
