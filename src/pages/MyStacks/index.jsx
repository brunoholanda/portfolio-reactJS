import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './MyStacks.module.scss';
import eftest from '../../public/assets/img/certifcados/english-prof.jpg';
import { useLanguage } from 'Context/LanguageContext';
import { useTheme } from 'Context/ThemeContext';
import { skillCategories, skillsList } from 'components/Skills/skillsData';
import { Link } from 'react-router-dom';

function SkillIcon({ skill, isDark, className }) {
    const Icon = skill.Icon;
    const iconColor = skill.titulo === 'Fastify' && isDark ? '#E8EBF7' : skill.cor;

    if (Icon) {
        return <Icon className={className} style={{ color: iconColor }} aria-hidden />;
    }

    return <img src={skill.imagem} alt="" />;
}

export default function MyStacks() {
    const { language } = useLanguage();
    const { isDark } = useTheme();
    const isPt = language === 'pt-br';
    const [showEnglish, setShowEnglish] = useState(false);

    const closeEnglishModal = () => setShowEnglish(false);

    useEffect(() => {
        if (!showEnglish) return undefined;

        const onKeyDown = (event) => {
            if (event.key === 'Escape') setShowEnglish(false);
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [showEnglish]);

    const englishTitle = isPt ? 'Teste de proficiência em inglês' : 'English proficiency test';

    const englishModal =
        showEnglish &&
        createPortal(
            <div
                className={styles.lightbox}
                role="dialog"
                aria-modal="true"
                aria-labelledby="english-modal-title"
                onClick={closeEnglishModal}
            >
                <div
                    className={styles.lightbox__panel}
                    onClick={(event) => event.stopPropagation()}
                >
                    <div className={styles.lightbox__header}>
                        <h3 id="english-modal-title">{englishTitle}</h3>
                        <button
                            type="button"
                            className={styles.lightbox__close}
                            onClick={closeEnglishModal}
                            aria-label={isPt ? 'Fechar teste' : 'Close test'}
                        >
                            ×
                        </button>
                    </div>
                    <div className={styles.lightbox__body}>
                        <img src={eftest} alt={englishTitle} />
                    </div>
                    <div className={styles.lightbox__footer}>
                        <button
                            type="button"
                            className={styles.lightbox__dismiss}
                            onClick={closeEnglishModal}
                        >
                            {isPt ? 'Fechar' : 'Close'}
                        </button>
                    </div>
                </div>
            </div>,
            document.body
        );

    return (
        <main className={styles.page}>
            <section className={styles.intro} aria-labelledby="skills-page-title">
                <p className={styles.eyebrow}>
                    {isPt ? 'O que eu domino' : 'What I work with'}
                </p>
                <h1 id="skills-page-title">
                    {isPt ? 'Habilidades' : 'Skills'}
                </h1>
                <p className={styles.lead}>
                    {isPt
                        ? 'Stack organizada por área — do cloud ao mobile — com as ferramentas que uso para entregar em produção.'
                        : 'A stack organized by area — from cloud to mobile — with the tools I use to ship in production.'}
                </p>
                <div className={styles.intro__actions}>
                    <Link to="/projetos" className={`${styles.cta} ${styles.ctaPrimary}`}>
                        {isPt ? 'Ver projetos' : 'View projects'}
                    </Link>
                    <Link to="/sobre" className={`${styles.cta} ${styles.ctaSecondary}`}>
                        {isPt ? 'Minha trajetória' : 'My journey'}
                    </Link>
                </div>
            </section>

            <div className={styles.groups}>
                {skillCategories.map((category) => {
                    const items = skillsList.filter((skill) => skill.categoria === category.id);
                    if (!items.length) return null;

                    return (
                        <section
                            key={category.id}
                            className={styles.group}
                            aria-labelledby={`cat-${category.id}`}
                        >
                            <div className={styles.group__head}>
                                <h2 id={`cat-${category.id}`}>
                                    {isPt ? category.tituloPt : category.tituloEn}
                                </h2>
                                <p>{isPt ? category.descricaoPt : category.descricaoEn}</p>
                            </div>
                            <ul className={styles.grid}>
                                {items.map((skill) => (
                                    <li key={skill.titulo} className={styles.card}>
                                        <SkillIcon
                                            skill={skill}
                                            isDark={isDark}
                                            className={styles.card__icon}
                                        />
                                        <span>{skill.titulo}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    );
                })}
            </div>

            <section className={styles.idioma} aria-labelledby="language-title">
                <div className={styles.idioma__content}>
                    <p className={styles.eyebrow}>
                        {isPt ? 'Comunicação' : 'Communication'}
                    </p>
                    <h2 id="language-title">
                        {isPt ? 'Segundo idioma' : 'Second language'}
                    </h2>
                    <p>
                        {isPt
                            ? 'Inglês avançado — consigo me comunicar, ler documentação e participar de discussões técnicas com segurança.'
                            : 'Advanced English — I can communicate, read docs and join technical discussions with confidence.'}
                    </p>
                    <button
                        type="button"
                        className={styles.idioma__action}
                        onClick={() => setShowEnglish(true)}
                    >
                        {isPt ? 'Ver teste de proficiência' : 'View proficiency test'}
                    </button>
                </div>
            </section>

            {englishModal}
        </main>
    );
}
