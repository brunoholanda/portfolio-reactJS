import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import styles from './Post.module.scss';
import Card from 'components/Card';
import { useContent } from 'hook/useContent';

function hasValidLink(url) {
    if (!url || typeof url !== 'string') return false;
    const normalized = url.trim().toLowerCase();
    return (
        normalized.startsWith('http') &&
        !normalized.includes('nao disponivel') &&
        !normalized.includes('não disponivel') &&
        !normalized.includes('n/a')
    );
}

export default function Post() {
    const content = useContent();
    const [projeto, setProjeto] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    const isPt = content.language === 'pt-br';

    const projetos = useMemo(() => {
        if (isPt) return content.projetos || [];
        return content.projects || content.projetos || [];
    }, [isPt, content.projetos, content.projects]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [id]);

    useEffect(() => {
        if (!projetos.length) {
            setProjeto(null);
            setNotFound(false);
            return;
        }

        const found = projetos.find((item) => item.id === parseInt(id, 10));
        setProjeto(found || null);
        setNotFound(!found);
    }, [id, projetos]);

    const related = useMemo(() => {
        if (!projetos.length || !projeto) return [];

        const others = projetos.filter((item) => item.id !== projeto.id);
        const seed = projeto.id * 17;
        return [...others]
            .sort((a, b) => {
                const scoreA = (a.id * seed) % 97;
                const scoreB = (b.id * seed) % 97;
                return scoreA - scoreB;
            })
            .slice(0, 3);
    }, [projetos, projeto]);

    const stacks = useMemo(() => {
        if (!projeto?.stacks) return [];
        return projeto.stacks
            .split(',')
            .map((stack) => stack.trim())
            .filter(Boolean);
    }, [projeto]);

    const deployUrl = projeto?.deploy;
    const repoUrl = projeto?.repositorio || projeto?.repository;
    const showDeploy = hasValidLink(deployUrl);
    const showRepo = hasValidLink(repoUrl);

    return (
        <main className={styles.page}>
            <div className={styles.toolbar}>
                <button
                    type="button"
                    className={styles.back}
                    onClick={() => navigate(-1)}
                >
                    ← {isPt ? 'Voltar' : 'Back'}
                </button>
                <Link to="/projetos" className={styles.toolbar__link}>
                    {isPt ? 'Todos os projetos' : 'All projects'}
                </Link>
            </div>

            {!projeto && !notFound && (
                <div className={styles.loading} role="status">
                    <span className={styles.loading__pulse} aria-hidden />
                    <p>{isPt ? 'Carregando projeto…' : 'Loading project…'}</p>
                </div>
            )}

            {notFound && (
                <section className={styles.empty}>
                    <h1>{isPt ? 'Projeto não encontrado' : 'Project not found'}</h1>
                    <p>
                        {isPt
                            ? 'Esse case pode ter sido movido. Veja a lista completa de projetos.'
                            : 'This case may have been moved. Browse the full project list.'}
                    </p>
                    <Link to="/projetos" className={`${styles.cta} ${styles.ctaPrimary}`}>
                        {isPt ? 'Ver projetos' : 'View projects'}
                    </Link>
                </section>
            )}

            {projeto && (
                <article className={styles.article}>
                    <header className={styles.hero}>
                        <p className={styles.eyebrow}>
                            {isPt ? 'Case study' : 'Case study'}
                        </p>
                        <h1>{projeto.titulo || projeto.title}</h1>
                        {(projeto.resumo || projeto.summary) && (
                            <p className={styles.lead}>
                                {projeto.resumo || projeto.summary}
                            </p>
                        )}

                        {stacks.length > 0 && (
                            <ul className={styles.stacks}>
                                {stacks.map((stack) => (
                                    <li key={stack}>{stack}</li>
                                ))}
                            </ul>
                        )}

                        {(showDeploy || showRepo) && (
                            <div className={styles.actions}>
                                {showDeploy && (
                                    <a
                                        className={`${styles.cta} ${styles.ctaPrimary}`}
                                        href={deployUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {isPt ? 'Ver site' : 'View site'}
                                    </a>
                                )}
                                {showRepo && (
                                    <a
                                        className={`${styles.cta} ${styles.ctaSecondary}`}
                                        href={repoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {isPt ? 'Repositório' : 'Repository'}
                                    </a>
                                )}
                            </div>
                        )}
                    </header>

                    <div className={styles.cover}>
                        <img
                            src={projeto.imagem || projeto.image}
                            alt={projeto.titulo || projeto.title}
                        />
                    </div>

                    <div className={styles.content}>
                        <ReactMarkdown>
                            {(projeto.post || '').replace(/\\n/g, '\n')}
                        </ReactMarkdown>
                    </div>
                </article>
            )}

            {projeto && related.length > 0 && (
                <section className={styles.related} aria-labelledby="related-title">
                    <div className={styles.related__head}>
                        <h2 id="related-title">
                            {isPt ? 'Mais projetos' : 'More projects'}
                        </h2>
                        <p>
                            {isPt
                                ? 'Continue explorando outros cases em produção.'
                                : 'Keep exploring other live cases.'}
                        </p>
                    </div>
                    <div className={styles.related__grid}>
                        {related.map((item) => (
                            <Card
                                key={item.id}
                                id={item.id}
                                image={item.imagem || item.image}
                                title={item.titulo || item.title}
                                summary={item.resumo || item.summary}
                                skills={item.stacks}
                                project_link={item.deploy}
                                repo_link={item.repositorio || item.repository}
                            />
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}
