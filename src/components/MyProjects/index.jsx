import { useEffect, useState } from 'react';
import styles from './MyProjects.module.scss';
import Card from '../Card';
import { useContent } from 'hook/useContent';
import Btn from 'components/Btn';
import { Link } from 'react-router-dom';

export default function MyProjects() {
    const content = useContent();
    const [projetos, setProjetos] = useState([]);

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
        <section className={styles.projetos}>
            <div className={styles.projetos__descricao}>
                <h2>{content.language === 'pt-br' ? 'Projetos' : 'Projects'}</h2>
                <h3>{content.language === 'pt-br' ? 'Meus projetos mais recentes' : 'My latest projects'}</h3>
            </div>
            <div className={styles.projetos__cards}>
                {projetos.slice(0, 6).map((projeto) => {
                    return (
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
                    );
                })}
            </div>
            <div className={styles.projetos__verMais}>
                <Link to='./projetos'>
                    <Btn >
                    {content.language === 'pt-br' ? 'Ver mais...' : 'See more...'}
                    </Btn>
                </Link>
            </div>
        </section>
    );
}
