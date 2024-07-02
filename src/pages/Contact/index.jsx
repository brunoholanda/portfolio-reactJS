import ItensParaVenda from 'components/SellerItens';
import styles from './Contact.module.scss';
import { useLanguage } from 'Context/LanguageContext';
import instagramIcon from '../../public/assets/icons/instagram.webp';
import linkedinIcon from '../../public/assets/icons/linkedin-2.png';
import githubIcon from '../../public/assets/icons/github-fill.svg';
import youtubeIcon from '../../public/assets/icons/youtube-2.png';

export default function Contact() {
    const { language } = useLanguage(); // Use o contexto de idioma

    return (
        <div className={styles.contato}>
            <h1>{language === 'pt-br' ? 'Entre em contato' : 'Contact Me'}</h1>
            <div className={styles.contato__meios}>
                <h2>Email:</h2>
                <p>holanda_rodrigues@hotmail.com</p>
                <h2>{language === 'pt-br' ? 'Telefone' : 'Phone'}</h2>
                <p>(83) 9 9815-0712</p>
                <h2>{language === 'pt-br' ? 'Onde eu Resido' : 'Where I Live'}</h2>
                <p>João Pessoa - PB</p>
            </div>
            <h1>{language === 'pt-br' ? 'Redes Sociais' : 'Social Networks'}</h1>
            <div className={styles.contato__redes}>

                <a href="https://www.linkedin.com/in/brunoholanda/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" />
                </a>
                <a href="https://github.com/brunoholanda" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://www.youtube.com/nerdkingteam" target="_blank" rel="noopener noreferrer">
                    <img src={youtubeIcon} alt="YouTube" />
                </a>
                <a href="https://www.instagram.com/brunoholandaa" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" />
                </a>
            </div>
            <ItensParaVenda />
        </div>
    );
}
