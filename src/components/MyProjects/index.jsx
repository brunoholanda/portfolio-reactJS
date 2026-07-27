import { useEffect, useState } from 'react';
import styles from './MyProjects.module.scss';
import Card from '../Card';
import { useContent } from 'hook/useContent';
import Btn from 'components/Btn';
import { Link } from 'react-router-dom';

export default function MyProjects() {
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
        <section className={styles.projetos} aria-labelledby="projects-title">
            <div className={styles.projetos__descricao}>
                <h2 id="projects-title">{isPt ? 'Projetos em destaque' : 'Featured projects'}</h2>
                <p>
                    {isPt
                        ? 'Cases reais: SAAS, sites e produtos que estão no ar.'
                        : 'Real cases: SAAS, sites and products live in production.'}
                </p>
            </div>
            <div className={styles.projetos__cards}>
                {projetos.slice(0, 6).map((projeto) => (
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
                ))}
            </div>
            <div className={styles.projetos__verMais}>
                <Link to="./projetos">
                    <Btn>{isPt ? 'Ver todos os projetos' : 'See all projects'}</Btn>
                </Link>
            </div>
        </section>
    );
}
