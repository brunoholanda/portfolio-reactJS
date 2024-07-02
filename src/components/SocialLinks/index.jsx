import { useLanguage } from 'Context/LanguageContext';
import styles from './SocialLinks.module.scss';
import brflag from '../../public/assets/icons/BR.webp';
import euflag from '../../public/assets/icons/eua.webp';
export default function SocialLinks() {

    const { language, toggleLanguage } = useLanguage(); // Use o contexto de idioma


    return (
        <div className={styles.socialLinks}>
            <a href="https://github.com/brunoholanda" target="_blank" rel="noreferrer">
                <div className={styles.socialLinks__git}></div>
            </a>
            <a href="https://www.linkedin.com/in/brunoholanda/" target="_blank" rel="noreferrer">
                <div className={styles.socialLinks__li}></div>
            </a>
            <a href="https://wa.me/5583998150712" target="_blank" rel="noreferrer">
                <div className={styles.socialLinks__wp}></div>
            </a>
            <div className={styles.languageSwitcher}>
                <button onClick={toggleLanguage} className={styles.languageButton} title={language === 'pt-br' ? 'Switch to English' : 'Mudar para Português'}>
                    <img src={language === 'pt-br' ? euflag : brflag} alt={language === 'pt-br' ? 'Switch to English' : 'Mudar para Português'} />
                </button>
            </div>
        </div>
    )
}