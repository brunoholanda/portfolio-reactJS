import HotmartButton from './HotMartBook';
import curso from '../../public/assets/img/curso-min.webp';
import livro from '../../public/assets/img/livro.webp';
import styles from './SellerItens.module.scss';
import { useLanguage } from 'Context/LanguageContext';

const ItensParaVenda = () => {
    const { language } = useLanguage();
    const isPt = language === 'pt-br';

    return (
        <div className={styles.cards}>
            <article className={styles.card}>
                <div className={styles.card__media}>
                    <a href="https://curso.brunoholanda.com" target="_blank" rel="noreferrer">
                        <img
                            className={styles.card__imagem}
                            src={curso}
                            alt={
                                isPt
                                    ? 'Curso Programação do Zero'
                                    : 'Programming from Zero course'
                            }
                        />
                    </a>
                </div>
                <div className={styles.card__body}>
                    <p className={styles.card__eyebrow}>
                        {isPt ? 'Curso' : 'Course'}
                    </p>
                    <h3>
                        {isPt ? 'Programação do Zero' : 'Programming from Zero'}
                    </h3>
                    <p className={styles.card__copy}>
                        {isPt
                            ? 'Roteiro prático para dar os primeiros passos com confiança.'
                            : 'A practical path to take your first steps with confidence.'}
                    </p>
                    <a
                        className={styles.card__cta}
                        href="https://curso.brunoholanda.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {isPt ? 'Conhecer o curso' : 'Explore the course'}
                    </a>
                </div>
            </article>

            <article className={styles.card}>
                <div className={styles.card__media}>
                    <img
                        className={styles.card__imagem}
                        src={livro}
                        alt={
                            isPt
                                ? 'Livro sobre mudança de carreira'
                                : 'Career change book'
                        }
                    />
                </div>
                <div className={styles.card__body}>
                    <p className={styles.card__eyebrow}>
                        {isPt ? 'Livro' : 'Book'}
                    </p>
                    <h3>
                        {isPt ? 'Mudança de carreira' : 'Career change'}
                    </h3>
                    <p className={styles.card__copy}>
                        {isPt
                            ? 'Para quem quer migrar para tech com clareza e método.'
                            : 'For anyone moving into tech with clarity and method.'}
                    </p>
                    <div className={styles.card__botao}>
                        <HotmartButton />
                    </div>
                </div>
            </article>
        </div>
    );
};

export default ItensParaVenda;
