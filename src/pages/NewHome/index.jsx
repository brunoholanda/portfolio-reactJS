import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Server,
  GitBranch,
  BookOpen,
  GraduationCap,
  ArrowRight,
  Download,
  ExternalLink,
  Mail,
  Linkedin,
  Github
} from 'lucide-react';
import { useLanguage } from 'Context/LanguageContext';
import profile from '../../public/assets/img/profile.png';
import curso from '../../public/assets/img/curso-min.webp';
import livro from '../../public/assets/img/livro.webp';

// Animações
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  animation: ${fadeInUp} 0.8s ease-out;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Hero = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  background: transparent;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  max-width: 600px;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #f0f8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #fff;

  .highlight {
    background: linear-gradient(45deg, #00a1ff, #a100ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ProfileImageContainer = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background: linear-gradient(45deg, #00a1ff, #a100ff);
  padding: 5px;
  animation: ${float} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }

  @media (max-width: 480px) {
    width: 240px;
    height: 240px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const SkillsSection = styled(Section)`
  background: #fff;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1.5rem;
  }
`;

const SkillCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 2rem 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 1rem;
    color: #667eea;
  }

  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #333;
    margin: 0;
  }
`;

const ProjectsSection = styled(Section)`
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProjectCard = styled.div`
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProductsSection = styled(Section)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  text-align: center;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProductCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  border-radius: 12px;
  margin-bottom: 1.5rem;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #00a1ff, #a100ff);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  animation: ${pulse} 2s infinite;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 161, 255, 0.3);
    animation: none;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const ContactSection = styled(Section)`
  background: #2c3e50;
  text-align: center;
  color: white;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

// Componente Principal
export default function NewHome() {
  const { language } = useLanguage();

  const skills = [
    { icon: Code2, name: 'Frontend', color: '#61dafb' },
    { icon: Server, name: 'Backend', color: '#339933' },
    { icon: Database, name: 'Database', color: '#336791' },
    { icon: Smartphone, name: 'Mobile', color: '#ff6b6b' },
    { icon: Globe, name: 'Web Apps', color: '#4ecdc4' },
    { icon: GitBranch, name: 'Version Control', color: '#f39c12' },
  ];

  return (
    <Container>
      {/* Hero Section */}
      <Hero>
        <HeroContent>
          <HeroTitle>
            {language === 'pt-br' ? 'Oi 👋,' : 'Hi 👋,'}
          </HeroTitle>
          <HeroSubtitle>
            {language === 'pt-br' ? (
              <>Eu sou <span className="highlight">Bruno Holanda</span></>
            ) : (
              <>I am <span className="highlight">Bruno Holanda</span></>
            )}
          </HeroSubtitle>
          <HeroSubtitle>
            <span className="highlight">
              {language === 'pt-br' ? 'Desenvolvedor FullStack' : 'FullStack Developer'}
            </span>
          </HeroSubtitle>
          <HeroDescription>
            {language === 'pt-br'
              ? 'Criando experiências digitais incríveis com tecnologias modernas. Especializado em React, Node.js e desenvolvimento web completo.'
              : 'Creating amazing digital experiences with modern technologies. Specialized in React, Node.js and full-stack web development.'
            }
          </HeroDescription>
          <Button href="#projects">
            {language === 'pt-br' ? 'Ver Projetos' : 'View Projects'}
            <ArrowRight />
          </Button>
        </HeroContent>
        <ProfileImageContainer>
          <ProfileImage
            src={profile}
            alt={language === 'pt-br'
              ? 'Bruno Holanda - Desenvolvedor FullStack'
              : 'Bruno Holanda - FullStack Developer'
            }
          />
        </ProfileImageContainer>
      </Hero>

      {/* Skills Section */}
      <SkillsSection id="skills">
        <SectionTitle>
          {language === 'pt-br' ? 'Minhas Habilidades' : 'My Skills'}
        </SectionTitle>
        <SectionSubtitle>
          {language === 'pt-br'
            ? 'Tecnologias que domino e utilizo em meus projetos'
            : 'Technologies I master and use in my projects'
          }
        </SectionSubtitle>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard key={index}>
              <skill.icon style={{ color: skill.color }} />
              <h3>{skill.name}</h3>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsSection>

      {/* Projects Section */}
      <ProjectsSection id="projects">
        <SectionTitle>
          {language === 'pt-br' ? 'Meus Projetos' : 'My Projects'}
        </SectionTitle>
        <SectionSubtitle>
          {language === 'pt-br'
            ? 'Alguns dos projetos que desenvolvi recentemente'
            : 'Some of the projects I have developed recently'
          }
        </SectionSubtitle>
        <ProjectsGrid>
          <ProjectCard>
            <ProjectImage src="/api/placeholder/400/200" alt="Projeto 1" />
            <ProjectContent>
              <h3>E-commerce Platform</h3>
              <p>
                {language === 'pt-br'
                  ? 'Plataforma completa de e-commerce com React e Node.js'
                  : 'Complete e-commerce platform with React and Node.js'
                }
              </p>
              <Button href="#" target="_blank">
                {language === 'pt-br' ? 'Ver Projeto' : 'View Project'}
                <ExternalLink />
              </Button>
            </ProjectContent>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage src="/api/placeholder/400/200" alt="Projeto 2" />
            <ProjectContent>
              <h3>Task Management App</h3>
              <p>
                {language === 'pt-br'
                  ? 'Aplicativo de gerenciamento de tarefas com interface moderna'
                  : 'Task management app with modern interface'
                }
              </p>
              <Button href="#" target="_blank">
                {language === 'pt-br' ? 'Ver Projeto' : 'View Project'}
                <ExternalLink />
              </Button>
            </ProjectContent>
          </ProjectCard>
        </ProjectsGrid>
      </ProjectsSection>

      {/* Products Section */}
      <ProductsSection id="products">
        <SectionTitle style={{ color: 'white' }}>
          {language === 'pt-br' ? 'Meus Produtos' : 'My Products'}
        </SectionTitle>
        <SectionSubtitle style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
          {language === 'pt-br'
            ? 'Conteúdos educacionais para acelerar sua carreira'
            : 'Educational content to accelerate your career'
          }
        </SectionSubtitle>
        <ProductsGrid>
          <ProductCard>
            <GraduationCap size={48} color="white" style={{ marginBottom: '1rem' }} />
            <h3 style={{ color: 'white', marginBottom: '1rem' }}>
              {language === 'pt-br' ? 'Curso Programação do Zero' : 'Programming from Zero Course'}
            </h3>
            <ProductImage src={curso} alt="Curso de Programação" />
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '2rem' }}>
              {language === 'pt-br'
                ? 'Aprenda programação do absoluto zero com método prático e direto ao ponto.'
                : 'Learn programming from absolute zero with practical and direct method.'
              }
            </p>
            <Button href="https://curso.brunoholanda.com" target="_blank">
              {language === 'pt-br' ? 'Acessar Curso' : 'Access Course'}
              <ExternalLink />
            </Button>
          </ProductCard>

          <ProductCard>
            <BookOpen size={48} color="white" style={{ marginBottom: '1rem' }} />
            <h3 style={{ color: 'white', marginBottom: '1rem' }}>
              {language === 'pt-br' ? 'Livro Mudança de Carreira' : 'Career Change Book'}
            </h3>
            <ProductImage src={livro} alt="Livro sobre mudança de carreira" />
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '2rem' }}>
              {language === 'pt-br'
                ? 'Guia completo para migrar para a área de tecnologia com sucesso.'
                : 'Complete guide to successfully migrate to the technology area.'
              }
            </p>
            <Button href="#" target="_blank">
              {language === 'pt-br' ? 'Baixar Livro' : 'Download Book'}
              <Download />
            </Button>
          </ProductCard>
        </ProductsGrid>
      </ProductsSection>

      {/* Contact Section */}
      <ContactSection id="contact">
        <SectionTitle>
          {language === 'pt-br' ? 'Vamos Conversar?' : "Let's Talk?"}
        </SectionTitle>
        <SectionSubtitle style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
          {language === 'pt-br'
            ? 'Entre em contato para projetos ou oportunidades'
            : 'Get in touch for projects or opportunities'
          }
        </SectionSubtitle>
        <SocialLinks>
          <SocialLink href="mailto:contato@brunoholanda.com">
            <Mail />
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/brunoholanda" target="_blank">
            <Linkedin />
          </SocialLink>
          <SocialLink href="https://github.com/brunoholanda" target="_blank">
            <Github />
          </SocialLink>
        </SocialLinks>
      </ContactSection>
    </Container>
  );
}