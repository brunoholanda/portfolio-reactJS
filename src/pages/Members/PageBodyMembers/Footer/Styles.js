import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: #111;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 350px;
  margin-bottom: 20px;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const SocialLink = styled.a`
  margin: 0 10px;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #00a9ce;
  }
`;

export const FooterText = styled.div`
  margin-bottom: 10px;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;

  a {
    color: #00a9ce;
    margin: 0 5px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FooterLink = styled.a``;
