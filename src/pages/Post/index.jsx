import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import styles from './Post.module.scss';
import Card from "components/Card"; // Certifique-se de que o caminho está correto
import carregando from '../../public/assets/img/carregando.gif';
import { useContent } from "hook/useContent";
import Btn from "components/Btn";

export default function Post() {
    const content = useContent(); // Use o hook useContent
    const [projeto, setProjeto] = useState(null);
    const { id } = useParams();
    const navegar = useNavigate ();

    useEffect(() => {
        if (content.projetos || content.projects) {
            const projetos = content.language === 'pt-br' ? content.projetos : content.projects;
            const projetoEncontrado = projetos?.find(projeto => projeto.id === parseInt(id));
            setProjeto(projetoEncontrado);
        }
    }, [id, content.language, content.projetos, content.projects]);

    const projetosParaMostrar = content.language === 'pt-br' ? content.projetos : content.projects;

    return (
        <article className={styles.post}>
            <div className={styles.post__botao} onClick={() => navegar(-1)}>
                <Btn >{content.language === 'pt-br' ? 'Voltar' : 'Back'}</Btn>
            </div>
            {projeto ? (
                <div className={styles.post__artigo}>
                    <img src={projeto.imagem || projeto.image} alt={projeto.titulo || projeto.title} />
                    <h2>{projeto.titulo || projeto.title}</h2>
                    <ReactMarkdown>
                        {projeto.post.replace(/\\n/g, '\n')}
                    </ReactMarkdown>
                </div>
            ) : (
                <img src={carregando} alt="Carregando..." />
            )}
            <h2>{content.language === 'pt-br' ? 'Veja mais projetos:' : 'See more projects:'}</h2>
            <div className={styles.post__cards}>
                {projetosParaMostrar && projetosParaMostrar.length > 0 ? (
                    projetosParaMostrar
                        .sort(() => Math.random() - 0.5)
                        .slice(0, 3)
                        .map(projeto => (
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
                    <img src={carregando} alt="Carregando..." />
                )}
            </div>
        </article>
    );
}
