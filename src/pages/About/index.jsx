import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './About.module.scss';
import aws from '../../public/assets/img/aws-cert.webp';
import awsAi from '../../public/assets/img/certifcados/aws-ai-practitioner.png';
import adm from '../../public/assets/img/certifcados/superioradm.jpg';
import ads from '../../public/assets/img/certifcados/ads.webp';
import ItensParaVenda from 'components/SellerItens';
import { useLanguage } from 'Context/LanguageContext';
import { Link } from 'react-router-dom';

export default function About() {
    const { language } = useLanguage();
    const isPt = language === 'pt-br';
    const [activeCert, setActiveCert] = useState(null);

    const closeCertModal = () => setActiveCert(null);

    useEffect(() => {
        if (!activeCert) return undefined;

        const onKeyDown = (event) => {
            if (event.key === 'Escape') setActiveCert(null);
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [activeCert]);

    const experiences = isPt
        ? [
              {
                  role: 'Desenvolvedor FullStack Pleno',
                  company: 'RPE — Processadora de pagamentos varejo',
                  companyUrl: 'https://www.rpe.tech/',
                  period: 'Maio 2023 — presente',
                  summary:
                      'Atuo como Desenvolvedor FullStack Pleno na RPE, a maior processadora de pagamentos do varejo no Brasil no ramo de cartões para lojas (Private Label, CDC/BNPL e crédito digital). Entrego soluções ponta a ponta em frontend (React), backend, banco de dados e cloud, em times ágeis — com foco em performance, usabilidade, qualidade e escalabilidade do produto.',
              },
              {
                  role: 'Desenvolvedor Web FullStack',
                  company: 'Autônomo',
                  period: 'Janeiro 2022 — presente',
                  summary:
                      'Entrego sites e sistemas fullstack Mobile First com React, JavaScript e APIs — com foco em prazo, qualidade e funcionalidades que resolvem o negócio.',
                  projects: [
                      { label: 'Marquei Agenda Clínica', href: 'https://marquei.com.br/' },
                      { label: 'NerdKing Loja', href: 'https://nerdkingloja.com.br/' },
                      { label: 'Amor e Vida', href: 'https://amorevida.org/' },
                      { label: 'Waleska Caetano', href: 'https://waleskacaetano.com.br/' },
                      { label: 'NerdKing Blog', href: 'https://nerdking.net.br/' },
                      { label: 'Site de aniversário', href: 'https://niver-org-presentes.vercel.app/' },
                  ],
              },
              {
                  role: 'Gerente Administrativo',
                  company: 'Banco Bradesco',
                  period: 'Março 2012 — Janeiro 2024',
                  summary:
                      'Liderei uma equipe de 32 pessoas, compliance e processos. Usei visão de tecnologia para sugerir melhorias sistêmicas que reduziram custo e risco.',
              },
          ]
        : [
              {
                  role: 'Mid-level FullStack Web Developer',
                  company: 'RPE — Retail payment processor',
                  companyUrl: 'https://www.rpe.tech/',
                  period: 'May 2023 — present',
                  summary:
                      'I work as a Mid-level FullStack Developer at RPE, Brazil’s largest retail payment processor in store cards (Private Label, CDC/BNPL and digital credit). I deliver end-to-end solutions across frontend (React), backend, databases and cloud in agile teams — with a focus on performance, usability, quality and product scalability.',
              },
              {
                  role: 'FullStack Web Developer',
                  company: 'Freelance',
                  period: 'January 2022 — present',
                  summary:
                      'I deliver Mobile First fullstack websites and systems with React, JavaScript and APIs — with a focus on deadlines, quality and features that solve real needs.',
                  projects: [
                      { label: 'Marquei Clinic Agenda', href: 'https://marquei.com.br/' },
                      { label: 'NerdKing Store', href: 'https://nerdkingloja.com.br/' },
                      { label: 'Amor e Vida', href: 'https://amorevida.org/' },
                      { label: 'Waleska Caetano', href: 'https://waleskacaetano.com.br/' },
                      { label: 'NerdKing Blog', href: 'https://nerdking.net.br/' },
                      { label: 'Birthday site', href: 'https://niver-org-presentes.vercel.app/' },
                  ],
              },
              {
                  role: 'Administrative Manager',
                  company: 'Banco Bradesco',
                  period: 'March 2012 — January 2024',
                  summary:
                      'Led a team of 32 people across compliance and operations. Used technology insight to propose systemic improvements that reduced cost and risk.',
              },
          ];

    const education = [
        {
            id: 'aws-ai',
            title: 'AWS Certified AI Practitioner',
            image: awsAi,
            action: isPt ? 'Ver certificado' : 'View certificate',
        },
        {
            id: 'aws-ccp',
            title: 'AWS Certified Cloud Practitioner',
            image: aws,
            action: isPt ? 'Ver certificado' : 'View certificate',
        },
        {
            id: 'ads',
            title: isPt
                ? 'Análise e Desenvolvimento de Sistemas — Unopar'
                : 'Systems Analysis and Development — Unopar',
            image: ads,
            action: isPt ? 'Ver certificado' : 'View certificate',
        },
        {
            id: 'adm',
            title: isPt
                ? 'Administração de Empresas e Negócios — IFPB'
                : 'Business Management — IFPB',
            image: adm,
            action: isPt ? 'Ver certificado' : 'View certificate',
        },
        {
            id: 'tech',
            title: isPt ? 'Formações específicas — Tech' : 'Specific tech training',
            href: 'https://drive.google.com/drive/folders/1f4zdAjwkLz2SMdjLoIk9YBc2rqtywP1s?usp=sharing',
            action: isPt ? 'Ver pasta' : 'Open folder',
        },
    ];

    const activeItem = education.find((item) => item.id === activeCert);

    const certModal =
        activeItem?.image &&
        createPortal(
            <div
                className={styles.lightbox}
                role="dialog"
                aria-modal="true"
                aria-labelledby="cert-modal-title"
                onClick={closeCertModal}
            >
                <div
                    className={styles.lightbox__panel}
                    onClick={(event) => event.stopPropagation()}
                >
                    <div className={styles.lightbox__header}>
                        <h3 id="cert-modal-title">{activeItem.title}</h3>
                        <button
                            type="button"
                            className={styles.lightbox__close}
                            onClick={closeCertModal}
                            aria-label={isPt ? 'Fechar certificado' : 'Close certificate'}
                        >
                            ×
                        </button>
                    </div>
                    <div className={styles.lightbox__body}>
                        <img src={activeItem.image} alt={activeItem.title} />
                    </div>
                    <div className={styles.lightbox__footer}>
                        <button
                            type="button"
                            className={styles.lightbox__dismiss}
                            onClick={closeCertModal}
                        >
                            {isPt ? 'Fechar' : 'Close'}
                        </button>
                    </div>
                </div>
            </div>,
            document.body
        );

    return (
        <main className={styles.sobre}>
            <section className={styles.intro} aria-labelledby="about-title">
                <p className={styles.eyebrow}>{isPt ? 'Quem eu sou' : 'Who I am'}</p>
                <h1 id="about-title">{isPt ? 'Sobre mim' : 'About me'}</h1>
                <p className={styles.lead}>
                    {isPt
                        ? 'FullStack que entrega do frontend ao deploy — com uma trajetória de bancário a desenvolvedor que prova constância e aprendizado rápido.'
                        : 'A FullStack developer who ships from frontend to deploy — with a banker-to-developer path that proves consistency and fast learning.'}
                </p>
                <div className={styles.intro__body}>
                    <p>
                        {isPt
                            ? 'Construo páginas e sistemas Mobile First com React, Node e infraestrutura. Já entreguei um SAAS de clínicas, além de sites para restaurante, barbearia, lojas e profissionais de saúde.'
                            : 'I build Mobile First pages and systems with React, Node and infrastructure. I have shipped a clinic SAAS, plus sites for restaurants, barbershops, stores and healthcare professionals.'}
                    </p>
                    <p>
                        {isPt
                            ? 'Sempre gostei de criar: aos 16 anos automatizei a casa dos meus pais com Arduino. Desde 2010 atuei no Bradesco; em paralelo migrei para tech com freelas e produto em produção.'
                            : 'I have always liked building things: at 16 I automated my parents’ home with Arduino. Since 2010 I worked at Bradesco; in parallel I moved into tech with freelance work and products in production.'}
                    </p>
                </div>
                <div className={styles.intro__actions}>
                    <Link to="/projetos" className={`${styles.cta} ${styles.ctaPrimary}`}>
                        {isPt ? 'Ver projetos' : 'View projects'}
                    </Link>
                    <Link
                        to="/sobre/linha-do-tempo"
                        className={`${styles.cta} ${styles.ctaSecondary}`}
                    >
                        {isPt ? 'Minha vida em linha do tempo' : 'My life on a timeline'}
                    </Link>
                    <Link to="/contato" className={`${styles.cta} ${styles.ctaGhost}`}>
                        {isPt ? 'Falar comigo' : 'Get in touch'}
                    </Link>
                </div>
            </section>

            <section className={styles.experiencia} aria-labelledby="experience-title">
                <div className={styles.sectionHead}>
                    <h2 id="experience-title">
                        {isPt ? 'Experiência' : 'Experience'}
                    </h2>
                    <p>
                        {isPt
                            ? 'Produto, freelas e gestão — o caminho até o FullStack.'
                            : 'Product, freelance and management — the path to FullStack.'}
                    </p>
                </div>
                <ol className={styles.timeline}>
                    {experiences.map((job) => (
                        <li key={`${job.company}-${job.period}`} className={styles.timeline__item}>
                            <span className={styles.timeline__period}>{job.period}</span>
                            <h3>
                                {job.role}
                                <span>
                                    {' '}
                                    ·{' '}
                                    {job.companyUrl ? (
                                        <a
                                            href={job.companyUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={styles.timeline__company}
                                        >
                                            {job.company}
                                        </a>
                                    ) : (
                                        job.company
                                    )}
                                </span>
                            </h3>
                            <p>{job.summary}</p>
                            {job.projects && (
                                <ul className={styles.projectLinks}>
                                    {job.projects.map((project) => (
                                        <li key={project.href}>
                                            <a href={project.href} target="_blank" rel="noreferrer">
                                                {project.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ol>
            </section>

            <section className={styles.formacaoSection} aria-labelledby="education-title">
                <div className={styles.sectionHead}>
                    <h2 id="education-title">
                        {isPt ? 'Formação acadêmica' : 'Education'}
                    </h2>
                    <p>
                        {isPt
                            ? 'Certificações e diplomas que sustentam a prática.'
                            : 'Certifications and degrees behind the craft.'}
                    </p>
                </div>
                <ul className={styles.certs}>
                    {education.map((item) => (
                        <li key={item.id} className={styles.certs__item}>
                            <p>{item.title}</p>
                            {item.href ? (
                                <a
                                    className={styles.certs__action}
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {item.action}
                                </a>
                            ) : (
                                <button
                                    type="button"
                                    className={styles.certs__action}
                                    onClick={() => setActiveCert(item.id)}
                                >
                                    {item.action}
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            </section>

            {certModal}

            <section className={styles.mentorship} aria-labelledby="about-mentorship">
                <div className={styles.sectionHead}>
                    <h2 id="about-mentorship">
                        {isPt ? 'Para quem está começando' : 'For those just starting'}
                    </h2>
                    <p>
                        {isPt
                            ? 'Curso e livro para quem quer entrar na área com direção.'
                            : 'A course and a book for anyone entering the field with direction.'}
                    </p>
                </div>
                <ItensParaVenda />
            </section>
        </main>
    );
}
