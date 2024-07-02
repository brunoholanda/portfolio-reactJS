import React from 'react';
import HotmartButton from './HotMartBook';
import HotmartCursoButton from './HotMartCurso';
import curso from '../../public/assets/img/curso-min.webp';
import livro from '../../public/assets/img/livro.webp';
import styles from './SellerItens.module.scss';
import { useLanguage } from 'Context/LanguageContext';

const ItensParaVenda = () => {
    const { language } = useLanguage(); // Use o contexto de idioma

    return (
        <div className={styles.cards}>
            <div className={styles.card}>
                <h5>{language === 'pt-br' ? 'Adquira meu livro' : 'Get my book'}</h5>
                <img className={styles.card__imagem} src={livro} alt={language === 'pt-br' ? 'Livro para quem quer migrar de carreira' : 'Book for those who want to change careers'} />
                <div className={styles.card__botao}>
                    <HotmartButton />
                </div>
            </div>
            <div className={styles.card}>
                <h5>{language === 'pt-br' ? 'Adquira meu curso para iniciantes' : 'Get my beginner course'}</h5>
                <a href="https://go.hotmart.com/X92541881K" target='__blank'>
                    <img className={styles.card__imagem} src={curso} alt={language === 'pt-br' ? 'Compre o curso para iniciantes em programação' : 'Buy the course for beginners in programming'} />
                </a>
                <div className={styles.card__botao}>
                    <HotmartCursoButton />
                </div>
            </div>
        </div>
    );
};

export default ItensParaVenda;
