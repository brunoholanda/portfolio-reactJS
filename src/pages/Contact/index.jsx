import ItensParaVenda from 'components/SellerItens';
import styles from './Contact.module.scss';
import { useLanguage } from 'Context/LanguageContext';
import instagramIcon from '../../public/assets/icons/instagram.webp';
import linkedinIcon from '../../public/assets/icons/linkedin-2.png';
import githubIcon from '../../public/assets/icons/github-fill.svg';
import youtubeIcon from '../../public/assets/icons/youtube-2.png';
import SocialNetworks from 'components/SocialNetworks';

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
            <SocialNetworks />

            <ItensParaVenda />
        </div>
    );
}
