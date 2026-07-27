import styles from './CardHobbie.module.scss';
import youtube from '../../../public/assets/icons/youtube.png';
import github from '../../../public/assets/icons/mini-git-hub.png';
import { useLanguage } from 'Context/LanguageContext';

export default function CardHobbie({ imagem, titulo, resumo, stacks, video, repositorio }) {
    const { language } = useLanguage();
    const isPt = language === 'pt-br';

    return (
        <article className={styles.card}>
            <div className={styles.card__media}>
                <img src={imagem} alt={titulo} />
            </div>
            <div className={styles.card__body}>
                <h3>{titulo}</h3>
                <p className={styles.card__summary}>{resumo}</p>
                {stacks && (
                    <p className={styles.card__stacks}>
                        <span>{isPt ? 'Stacks' : 'Skills'}</span>
                        {stacks}
                    </p>
                )}
            </div>
            <div className={styles.card__links}>
                {video && (
                    <a href={video} target="_blank" rel="noopener noreferrer">
                        <img src={youtube} alt="" />
                        <span>{isPt ? 'Ver vídeo' : 'Watch video'}</span>
                    </a>
                )}
                {repositorio && (
                    <a href={repositorio} target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="" />
                        <span>{isPt ? 'Repositório' : 'Repository'}</span>
                    </a>
                )}
            </div>
        </article>
    );
}
