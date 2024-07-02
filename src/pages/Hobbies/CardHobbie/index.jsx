import styles from './CardHobbie.module.scss';
import youtube from '../../../public/assets/icons/youtube.png';
import github from '../../../public/assets/icons/mini-git-hub.png';
import { useLanguage } from 'Context/LanguageContext';

export default function CardHobbie({ id, imagem, titulo, resumo, stacks, video, repositorio }) {
    const { language } = useLanguage(); // Use o contexto de idioma

    return (
        <div className={styles.card}>
            <div className={styles.card__imagem}>
                <img src={imagem} alt={titulo} />
                <div className={styles.card__texto}>
                    <h3>{titulo}</h3>
                    <h4>{resumo}</h4>
                    <p>{language === 'pt-br' ? 'Habilidades' : 'Skills'}: {stacks}</p>
                </div>
            </div>
            <div className={styles.card__links}>
                <a href={video} target="_blank" rel="noopener noreferrer">
                    <div className={styles.link__icone}>
                        <img src={youtube} alt="icone pequeno do YouTube" />
                        <p>{language === 'pt-br' ? 'Ver Vídeo' : 'Watch Video'}</p>
                    </div>
                </a>
                <a href={repositorio} target="_blank" rel="noopener noreferrer">
                    <div className={styles.link__icone}>
                        <img src={github} alt="icone pequeno do GitHub" />
                        <p>{language === 'pt-br' ? 'Repositório' : 'Repository'}</p>
                    </div>
                </a>
            </div>
        </div>
    );
}
