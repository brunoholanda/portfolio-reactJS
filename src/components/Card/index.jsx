import styles from './Card.module.scss';
import anexo from '../../public/assets/icons/anexo.png';
import github from '../../public/assets/icons/mini-git-hub.png';
import { Link } from 'react-router-dom';
import { useLanguage } from 'Context/LanguageContext';

export default function Card({ id, image, title, summary, skills, project_link, repo_link }) {
    const { language } = useLanguage(); // Use o contexto de idioma

    return (
        <div className={styles.card}>
            <div className={styles.card__imagem}>
                <Link to={`/projetos/${id}`}>
                    <img src={image} alt={title} />
                    <div className={styles.card__verMais}>
                        {language === 'pt-br' ? 'Ver mais' : 'Read more'}
                    </div>
                </Link>
                <div className={styles.card__texto}>
                    <h3>{title}</h3>
                    <h4>{summary}</h4>
                    <p>{language === 'pt-br' ? 'Habilidades' : 'Skills'}: {skills}</p>
                </div>
            </div>
            <div className={styles.card__links}>
                <a href={project_link} target="_blank" rel="noopener noreferrer">
                    <div className={styles.link__icone}>
                        <img src={anexo} alt="icone pequeno de clipe de papel" />
                        <p>{language === 'pt-br' ? 'Ver Site' : 'View Site'}</p>
                    </div>
                </a>
                {repo_link && (
                    <a href={repo_link} target="_blank" rel="noopener noreferrer">
                        <div className={styles.link__icone}>
                            <img src={github} alt="icone pequeno do github" />
                            <p>{language === 'pt-br' ? 'Repositório' : 'Repository'}</p>
                        </div>
                    </a>
                )}
            </div>
        </div>
    );
}
