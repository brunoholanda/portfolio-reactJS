import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import Skills from 'components/Skills';
import MyProjects from 'components/MyProjects';
import TextoDuasCores from 'components/TwoColorsText';
import profile from '../../public/assets/img/profile.png';
import ItensParaVenda from 'components/SellerItens';
import { useLanguage } from 'Context/LanguageContext';
import { SiYoutube } from 'react-icons/si';

const CV_PT = 'https://drive.google.com/file/d/1-R9jxd51oo7prkAWmcfHh1bITrzq1pEZ/view?usp=sharing';
const CV_EN = 'https://drive.google.com/file/d/1KcMfJEVAf05Aiy9oYjDXeJpMgj9b59DG/view?usp=sharing';
const YOUTUBE_CHANNEL = 'https://www.youtube.com/@NerdKing';

export default function Home() {
    return (
        <main className={styles.home}>
            <Presentation />
            <Journey />
            <Skills />
            <MyProjects />
            <Mentorship />
            <YouTubeChannel />
        </main>
    );
}

function Presentation() {
    const { language } = useLanguage();
    const isPt = language === 'pt-br';
    const cvHref = isPt ? CV_PT : CV_EN;

    return (
        <section className={styles.hero} aria-labelledby="hero-name">
            <div className={styles.hero__glow} aria-hidden="true" />
            <div className={styles.hero__content}>
                <p className={styles.hero__greeting}>
                    {isPt ? 'Oi, bem-vindo ao meu portfólio' : 'Hi, welcome to my portfolio'}
                </p>
                <div id="hero-name" className={styles.hero__brand}>
                    <TextoDuasCores
                        texto={isPt ? 'Bruno Holanda' : 'Bruno Holanda'}
                        palavra1="Bruno"
                        palavra2="Holanda"
                    />
                </div>
                <h2 className={styles.hero__role}>
                    {isPt ? 'Desenvolvedor Web FullStack' : 'FullStack Web Developer'}
                </h2>
                <p className={styles.hero__lead}>
                    {isPt
                        ? 'Entrego soluções ponta a ponta com tecnologias modernas de frontend, backend, banco de dados e cloud — escaláveis e de baixo custo, da ideia à produção.'
                        : 'I deliver end-to-end solutions with modern frontend, backend, database and cloud technologies — scalable and cost-efficient, from idea to production.'}
                </p>
                <div className={styles.hero__actions}>
                    <Link to="./projetos" className={`${styles.cta} ${styles.ctaPrimary}`}>
                        {isPt ? 'Ver projetos' : 'View projects'}
                    </Link>
                    <a
                        href={cvHref}
                        className={`${styles.cta} ${styles.ctaSecondary}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {isPt ? 'Baixar CV' : 'Download CV'}
                    </a>
                    <Link to="./contato" className={`${styles.cta} ${styles.ctaGhost}`}>
                        {isPt ? 'Falar comigo' : 'Get in touch'}
                    </Link>
                </div>
                <ul className={styles.hero__signals}>
                    <li>{isPt ? 'FullStack Pleno na RPE' : 'Mid-level FullStack at RPE'}</li>
                    <li>React · Node · AWS</li>
                    <li>{isPt ? 'SAAS & freelas em produção' : 'SAAS & live freelance work'}</li>
                </ul>
            </div>
            <div className={styles.hero__visual}>
                <div className={styles.hero__portrait}>
                    <img
                        src={profile}
                        alt={
                            isPt
                                ? 'Bruno Holanda - Desenvolvedor Web FullStack'
                                : 'Bruno Holanda - FullStack Web Developer'
                        }
                    />
                </div>
            </div>
        </section>
    );
}

function Journey() {
    const { language } = useLanguage();
    const isPt = language === 'pt-br';

    const steps = isPt
        ? [
              {
                  label: '2010',
                  title: 'Bancário',
                  text: 'Gestão, clientes e disciplina no Bradesco — base que ainda uso em times ágeis.',
              },
              {
                  label: 'Arduino → Web',
                  title: 'Virada de chave',
                  text: 'Dos 16 anos automatizando a casa até migrar de carreira com projetos reais.',
              },
              {
                  label: 'Hoje',
                  title: 'FullStack',
                  text: 'Produto em produção, freelas entregues e conteúdo para quem está começando.',
              },
          ]
        : [
              {
                  label: '2010',
                  title: 'Banking',
                  text: 'Management, clients and discipline at Bradesco — still useful in agile teams.',
              },
              {
                  label: 'Arduino → Web',
                  title: 'Career shift',
                  text: 'From home automation at 16 to a full career change with real shipped projects.',
              },
              {
                  label: 'Today',
                  title: 'FullStack',
                  text: 'Production products, delivered freelance work, and content for beginners.',
              },
          ];

    return (
        <section className={styles.journey} aria-labelledby="journey-title">
            <div className={styles.sectionHead}>
                <h2 id="journey-title">
                    {isPt ? 'Uma trajetória que inspira' : 'A path worth sharing'}
                </h2>
                <p>
                    {isPt
                        ? 'Para recrutadores: contexto e entrega. Para iniciantes: prova de que dá para mudar.'
                        : 'For recruiters: context and delivery. For beginners: proof that change is possible.'}
                </p>
            </div>
            <ol className={styles.journey__steps}>
                {steps.map((step) => (
                    <li key={step.label} className={styles.journey__step}>
                        <span className={styles.journey__label}>{step.label}</span>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                    </li>
                ))}
            </ol>
            <Link to="./sobre" className={styles.journey__link}>
                {isPt ? 'Conhecer a história completa →' : 'Read the full story →'}
            </Link>
        </section>
    );
}

function Mentorship() {
    const { language } = useLanguage();
    const isPt = language === 'pt-br';

    return (
        <section className={styles.mentorship} aria-labelledby="mentorship-title">
            <div className={styles.sectionHead}>
                <h2 id="mentorship-title">
                    {isPt ? 'Para quem está começando' : 'For those just starting'}
                </h2>
                <p>
                    {isPt
                        ? 'Curso e livro pensados para quem quer entrar na área com direção clara.'
                        : 'A course and a book for anyone entering the field with clear direction.'}
                </p>
            </div>
            <ItensParaVenda />
        </section>
    );
}

function YouTubeChannel() {
    const { language } = useLanguage();
    const isPt = language === 'pt-br';

    return (
        <section className={styles.youtube} aria-labelledby="youtube-title">
            <div className={styles.youtube__inner}>
                <div className={styles.youtube__icon} aria-hidden>
                    <SiYoutube />
                </div>
                <div className={styles.youtube__copy}>
                    <p className={styles.youtube__eyebrow}>YouTube</p>
                    <h2 id="youtube-title">
                        {isPt ? 'Aprenda tecnologia comigo no NerdKing' : 'Learn tech with me on NerdKing'}
                    </h2>
                    <p>
                        {isPt
                            ? 'Tutoriais, projetos maker e conteúdo prático de programação e tecnologia. Inscreva-se no canal e acompanhe as novidades.'
                            : 'Tutorials, maker projects and practical content on programming and tech. Subscribe to the channel and follow along.'}
                    </p>
                </div>
                <a
                    className={styles.youtube__cta}
                    href={YOUTUBE_CHANNEL}
                    target="_blank"
                    rel="noreferrer"
                >
                    {isPt ? 'Conhecer o canal' : 'Visit the channel'}
                </a>
            </div>
            <div className={styles.youtube__video}>
                <iframe
                    src="https://www.youtube.com/embed/jTretXpBXQk?si=-E-tKeAx-VkOhVJ_"
                    title={isPt ? 'Vídeo do canal NerdKing' : 'NerdKing channel video'}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </div>
        </section>
    );
}
