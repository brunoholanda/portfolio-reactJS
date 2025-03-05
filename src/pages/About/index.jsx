import { useState } from 'react';
import styles from './About.module.scss';
import aws from '../../public/assets/img/aws-cert.webp';
import adm from '../../public/assets/img/certifcados/superioradm.jpg';
import ads from '../../public/assets/img/certifcados/ads.jpg';
import divisor from '../../public/assets/img/divisor-2.png';
import Botao from 'components/Btn';
import styled from 'styled-components';
import ItensParaVenda from 'components/SellerItens';
import { useLanguage } from 'Context/LanguageContext';

export default function About() {
    const { language } = useLanguage(); // Use o contexto de idioma
    const [showAws, setShowAws] = useState(false);

    const [showAds, setShowAds] = useState(false);
    const [showAdm, setShowAdm] = useState(false);

    function handleLinkClickAws(event) {
        event.preventDefault();
        setShowAws(true);
    }

    function handleLinkClickAds(event) {
        event.preventDefault();
        setShowAds(true);
    }

    function handleLinkClickAdm(event) {
        event.preventDefault();
        setShowAdm(true);
    }
    
    function handleCloseClickAws() {
        setShowAws(false);
    }
    function handleCloseClickAds() {
        setShowAds(false);
    }

    function handleCloseClickAdm() {
        setShowAdm(false);
    }

    const Titulo = styled.h2`
         font-size: 2.62rem;
        font-weight: 700;
        color: var(--preto-texto);
    `;

    return (
        <>
            <div className={styles.sobre}>
                <div className={styles.sobre__descricao}>
                    <Titulo>
                        {language === 'pt-br' ? 'Sobre Mim' : 'About Me'}
                    </Titulo>
                    <p>{language === 'pt-br'
                        ? 'Desenvolvedor Web FullStack codando páginas Mobile First com responsividade, aplicando SASS e JavaScript, foco em entrega rápida, qualidade e ótimas funcionalidades, sendo capaz de entregar solucoes completas com backend e infra estrutura.'
                        : 'FullStack Web Developer coding Mobile First pages with responsiveness, applying SASS and JavaScript, focusing on fast delivery, quality, and great features.'}
                    </p>
                    <p>{language === 'pt-br'
                        ? 'Já criei um SAAS de agendamentos e gestão de clínicas, bem como sites para restaurante, barbearia, lojas online, e sites profissionais para dentistas e outros profissionais. Atualmente minha stack principal é o React e possuo capacidade rápida de aprendizado.'
                        : 'I have created websites for restaurants, barbershops, online stores, and art selling marketplaces. Currently developing in React and having a quick learning capability.'}
                    </p>
                    <p>{language === 'pt-br'
                        ? 'Sempre gostei de criar coisas, aos 16 anos automatizei a casa dos meus pais usando Arduino, programando em C. Já desenvolvi alguns aplicativos para automação vendidos na internet, como um app para controlar o motor do portão pelo WIFI e Espelho inteligente em Python;'
                        : 'I have always liked creating things; at 16, I automated my parents\' house using Arduino, programming in C. I have developed some automation apps sold online, such as an app to control the gate motor via WIFI and a smart mirror in Python;'}
                    </p>
                    <p>{language === 'pt-br'
                        ? 'Estou inserido no mercado de trabalho como bancário desde 2010. Também atuo na área de desenvolvimento criando projetos pessoais como freelancer para clientes.'
                        : 'I have been working in the banking sector since 2010. I also work in development, creating personal projects as a freelancer for clients.'}
                    </p>
                </div>

                <div className={styles.sobre__experiencia}>
                    <Titulo>
                        {language === 'pt-br' ? 'Experiência de Trabalho' : 'Work Experience'}
                    </Titulo>

                    <h3>{language === 'pt-br' ? 'Desenvolvedor Web FullStack na Elevaty' : 'FullStack Web Developer at Elevaty'}</h3>
                    <h4>{language === 'pt-br' ? 'O que eu faço:' : 'What I do:'}</h4>
                    <p>{language === 'pt-br'
                        ? 'Estou envolvido na criação e modificação de componentes React sob demanda. Participo das fases do ciclo de vida do desenvolvimento de software. Trabalho em estreita colaboração com equipes multifuncionais, empregando metodologias ágeis para garantir a entrega eficiente e de alta qualidade do nosso produto. Com um forte entendimento das melhores práticas de codificação e padrões, procuro sempre melhorar o desempenho e a usabilidade do nosso sistema. Adicionalmente, dedico-me a aprender novas tecnologias e técnicas para permanecer na vanguarda da inovação na indústria de desenvolvimento de software.'
                        : 'I am involved in the creation and modification of React components on demand. I participate in the phases of the software development lifecycle. I work closely with cross-functional teams, employing agile methodologies to ensure efficient and high-quality delivery of our product. With a strong understanding of coding best practices and standards, I always strive to improve the performance and usability of our system. Additionally, I am dedicated to learning new technologies and techniques to stay at the forefront of innovation in the software development industry.'}
                    </p>
                    <p>| {language === 'pt-br' ? 'Maio 2023 - presente' : 'May 2023 - present'}</p>
                    <img className={styles.divisorImg} src={divisor} alt="divisor de experiencias" />
                    <h3>{language === 'pt-br' ? 'Desenvolvedor Web FullStack - Autônomo' : 'FullStack Web Developer - Freelancer'}</h3>
                    <h4>{language === 'pt-br' ? 'O que eu faço:' : 'What I do:'}</h4>
                    <p>{language === 'pt-br'
                        ? 'Desenvolvimento de websites e Sistemas Web Fullstack Mobile First com responsividade, utilizando ReactJS, JavaScript, CSS, SASS e HTML aplicando conceitos de API`s. Foco em entrega rápida, qualidade e ótimas funcionalidades.'
                        : 'Development of websites and Fullstack Web Systems Mobile First with responsiveness, using ReactJS, JavaScript, CSS, SASS, and HTML applying API concepts. Focus on fast delivery, quality, and great features.'}
                    </p>
                    <p><strong>{language === 'pt-br' ? 'Projetos mais relevantes:' : 'Most relevant projects:'}</strong></p>
                    <ul>
                        <li>
                            <strong>{language === 'pt-br' ? 'Marquei Agenda Clínica:' : 'Marquei Clinic Agenda:'}</strong> <a href="https://marquei.com.br/" target="_blank" rel='noreferrer'>https://marquei.com.br/</a>
                        </li>
                        <li>
                            <strong>{language === 'pt-br' ? 'Loja:' : 'Store:'}</strong> <a href="https://nerdkingloja.com.br/" target="_blank" rel='noreferrer'>https://nerdkingloja.com.br/</a>
                        </li>
                        <li>
                            <strong>{language === 'pt-br' ? 'Amor e Vida:' : 'Love and Life:'}</strong> <a href="https://amorevida.org/" target="_blank" rel='noreferrer'>https://amorevida.org/</a>
                        </li>
                        <li>
                            <strong>{language === 'pt-br' ? 'Dentista:' : 'Dentist:'}</strong> <a href="https://waleskacaetano.com.br/" target="_blank" rel='noreferrer'>https://waleskacaetano.com.br/</a>
                        </li>
                        <li>
                            <strong>{language === 'pt-br' ? 'Blog de Tecnologia:' : 'Technology Blog:'}</strong> <a href="https://nerdking.net.br/" target="_blank" rel='noreferrer'>https://nerdking.net.br/</a>
                        </li>
                        <li>
                            <strong>{language === 'pt-br' ? 'Aniversário:' : 'Birthday:'}</strong> <a href="https://niver-org-presentes.vercel.app/" target="_blank" rel='noreferrer'>https://niver-org-presentes.vercel.app/</a>
                        </li>
                    </ul>

                    <p>| {language === 'pt-br' ? 'Janeiro 2022 - presente' : 'January 2022 - present'}</p>
                    <img className={styles.divisorImg} src={divisor} alt="divisor de experiencias" />
                    <h3>{language === 'pt-br' ? 'Gerente Administrativo - Banco Bradesco' : 'Administrative Manager - Banco Bradesco'}</h3>
                    <h4>{language === 'pt-br' ? 'O que eu faço:' : 'What I do:'}</h4>
                    <p>{language === 'pt-br'
                        ? 'Conduzi uma equipe com 32 funcionários, sendo o grande propagador do compliance da empresa lidando com pessoas e alta quantidade de informações. Sugeri alterações e melhorias sistêmicas com base nos meus conhecimentos em tecnologia com a finalidade de reduzir custos e riscos.'
                        : 'Led a team of 32 employees, being the main propagator of the company\'s compliance, dealing with people and a high amount of information. Suggested systemic changes and improvements based on my technology knowledge to reduce costs and risks.'}
                    </p>
                    <p>| {language === 'pt-br' ? 'Março 2012 - Janeiro 2024' : 'March 2012 - January 2024'}</p>
                    <img className={styles.divisorImg} src={divisor} alt="divisor de experiencias" />
                </div>
                <div className={styles.sobre__formacao}>
                <Titulo>{language === 'pt-br' ? 'Formação Acadêmica' : 'Education'}</Titulo>
                    <div className={styles.formacao}>
                        <p>{language === 'pt-br' ? 'AWS Certified Cloud Practitioner' : 'AWS Certified Cloud Practitioner'}</p>
                        <Botao><a href="#" onClick={handleLinkClickAws}>{language === 'pt-br' ? 'Ver Certificado' : 'View Certificate'}</a></Botao>
                    </div>
                    {showAws && (
                        <div className={styles.imageContainer} onClick={handleCloseClickAws}>
                            <img src={aws} alt={language === 'pt-br' ? 'AWS Certified Cloud Practitioner' : 'AWS Certified Cloud Practitioner'} />
                        </div>
                    )}
                    <img className={styles.divisorImg} src={divisor} alt="divisor de experiencias" />
                    <div className={styles.formacao}>
                        <p>{language === 'pt-br' ? 'Análise e Desenvolvimento de Sistemas - Unopar' : 'System Analysis and Development - Unopar'}</p>
                        <Botao><a href="#" onClick={handleLinkClickAds}>{language === 'pt-br' ? 'Ver Certificado' : 'View Certificate'}</a></Botao>
                    </div>
                    {showAds && (
                        <div className={styles.imageContainer} onClick={handleCloseClickAds}>
                            <img src={ads} alt={language === 'pt-br' ? 'Certificado de Administração' : 'Administration Certificate'} />
                        </div>
                    )}
                    <img className={styles.divisorImg} src={divisor} alt="divisor de experiencias" />
                   
                    <div className={styles.formacao}>
                        <p>{language === 'pt-br' ? 'Administração de Empresas e Negócios - IFPB' : 'Business Management - IFPB'}</p>
                        <Botao><a href="#" onClick={handleLinkClickAdm}>{language === 'pt-br' ? 'Ver Certificado' : 'View Certificate'}</a></Botao>
                    </div>
                </div>
                {showAdm && (
                    <div className={styles.imageContainer} onClick={handleCloseClickAdm}>
                        <img src={adm} alt={language === 'pt-br' ? 'Certificado de Administração' : 'Administration Certificate'} />
                    </div>
                )}
                <img className={styles.divisorImg} src={divisor} alt="divisor de experiencias" />

                <div className={styles.formacao}>
                    <p>{language === 'pt-br' ? 'Formações Especificas - Tech' : 'Specific Training - Tech'}</p>
                    <Botao><a href="https://drive.google.com/drive/folders/1f4zdAjwkLz2SMdjLoIk9YBc2rqtywP1s?usp=sharing" target='_blank'>{language === 'pt-br' ? 'Ver Ambiente' : 'See Repository'}</a></Botao>
                </div>
            </div>
            <ItensParaVenda />
        </>
    );
}
