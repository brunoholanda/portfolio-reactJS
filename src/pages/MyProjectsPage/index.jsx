import { useEffect, useState } from 'react';
import styles from './MyProjectsPage.module.scss';
import Card from 'components/Card';
import { useContent } from 'hook/useContent';
import { Link } from 'react-router-dom';

export default function MyProjectsPage() {
    const content = useContent();
    const [projetos, setProjetos] = useState([]);
    const isPt = content.language === 'pt-br';

    useEffect(() => {
        if (content.projetos) {
            setProjetos(content.projetos);
        } else if (content.projects) {
            setProjetos(content.projects);
        } else {
            setProjetos([]);
        }
    }, [content]);

    return (
        <main className={styles.page}>
            <section className={styles.intro} aria-labelledby="projects-page-title">
                <p className={styles.eyebrow}>
                    {isPt ? 'Trabalho em produção' : 'Live work'}
                </p>
                <h1 id="projects-page-title">
                    {isPt ? 'Projetos profissionais' : 'Professional projects'}
                </h1>
                <p className={styles.lead}>
                    {isPt
                        ? 'Cases reais: SAAS, sites e produtos no ar — com deploy, código e detalhes de cada entrega.'
                        : 'Real cases: SAAS, sites and live products — with deploy, code and details for each delivery.'}
                </p>
                <div className={styles.intro__meta}>
                    <span>
                        {projetos.length > 0
                            ? `${projetos.length} ${isPt ? 'projetos' : 'projects'}`
                            : isPt
                              ? 'Carregando…'
                              : 'Loading…'}
                    </span>
                    <Link to="/hobbies" className={styles.intro__link}>
                        {isPt ? 'Ver hobbies →' : 'See hobbies →'}
                    </Link>
                </div>
            </section>

            <section className={styles.grid} aria-label={isPt ? 'Lista de projetos' : 'Project list'}>
                {projetos.length > 0 ? (
                    projetos.map((projeto) => (
                        <Card
                            key={projeto.id}
                            id={projeto.id}
                            image={projeto.imagem || projeto.image}
                            title={projeto.titulo || projeto.title}
                            summary={projeto.resumo || projeto.summary}
                            skills={projeto.stacks}
                            project_link={projeto.deploy}
                            repo_link={projeto.repositorio || projeto.repository}
                        />
                    ))
                ) : (
                    <div className={styles.loading} role="status">
                        <span className={styles.loading__pulse} aria-hidden />
                        <p>{isPt ? 'Carregando projetos…' : 'Loading projects…'}</p>
                    </div>
                )}
            </section>
        </main>
    );
}
