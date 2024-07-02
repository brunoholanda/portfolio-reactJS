import { useEffect, useState } from 'react';
import styles from './MyProjectsPage.module.scss';
import Card from 'components/Card'; // Verifique o caminho
import carregando from '../../public/assets/img/carregando.gif';
import { useContent } from 'hook/useContent';

export default function MyProjectsPage() {
    const content = useContent(); // Use o hook useContent
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
                <h2>{content.language === 'pt-br' ? 'Projetos Publicados' : 'Published Projects'}</h2>
            </div>
            <div className={styles.projetos__cards}>
                {projetos.length > 0 ? (
                    projetos.map((projeto) => (
                        <Card
                            key={projeto.id}
                            id={projeto.id}
                            image={projeto.imagem || projeto.image}
                            title={projeto.titulo || projeto.title}
                            summary={projeto.resumo || projeto.summary}
                            skills={projeto.stacks} // Assumindo que 'skills' corresponda a 'stacks'
                            project_link={projeto.deploy}
                            repo_link={projeto.repositorio || projeto.repository}
                        />
                    ))
                ) : (
                    <img src={carregando} alt="Carregando..." />
                )}
            </div>
        </section>
    );
}
