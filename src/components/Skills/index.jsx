import { useState } from 'react';
import styles from './Skills.module.scss';
import { useLanguage } from 'Context/LanguageContext';
import { useTheme } from 'Context/ThemeContext';
import { skillsList } from './skillsData';

export default function Skills() {
    const { language } = useLanguage();
    const { isDark } = useTheme();
    const isPt = language === 'pt-br';
    const [expanded, setExpanded] = useState(false);

    return (
        <section className={styles.habilidades} aria-labelledby="skills-title">
            <h2 id="skills-title">{isPt ? 'Stack que uso no dia a dia' : 'Stack I use day to day'}</h2>
            <p>
                {isPt
                    ? 'Ferramentas com as quais entrego produtos em produção.'
                    : 'Tools I use to ship products in production.'}
            </p>
            <div
                className={`${styles.habilidades__frame} ${
                    expanded ? '' : styles.habilidades__frameCollapsed
                }`}
            >
                <ul className={styles.habilidades__icones}>
                    {skillsList.map((habilidade) => {
                        const Icon = habilidade.Icon;
                        const iconColor =
                            habilidade.titulo === 'Fastify' && isDark
                                ? '#E8EBF7'
                                : habilidade.cor;

                        return (
                            <li key={habilidade.titulo} className={styles.habilidades__item}>
                                {Icon ? (
                                    <Icon
                                        className={styles.habilidades__icon}
                                        style={{ color: iconColor }}
                                        aria-hidden
                                    />
                                ) : (
                                    <img src={habilidade.imagem} alt="" />
                                )}
                                <span>{habilidade.titulo}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <button
                type="button"
                className={styles.habilidades__toggle}
                onClick={() => setExpanded((value) => !value)}
                aria-expanded={expanded}
            >
                {expanded
                    ? isPt
                        ? 'Ver menos'
                        : 'Show less'
                    : isPt
                      ? 'Ver todas'
                      : 'See all'}
            </button>
        </section>
    );
}
