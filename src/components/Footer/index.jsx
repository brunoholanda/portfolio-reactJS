import SocialLinks from "components/SocialLinks";
import styles from './Footer.module.scss';
import TextoDuasCores from "components/TwoColorsText";
import Divisor from "components/Divisor";
import MenuLinks from "components/LinksMenu";
import { useLanguage } from "Context/LanguageContext";

export default function Footer() {
    const { language } = useLanguage(); // Use o contexto de idioma

    return (
        <footer className={styles.rodape}>
            <div className={styles.rodape__contato}>
                <SocialLinks />
                <a href="mailto:holanda_rodrigues@hotmail.com?subject=Contato">holanda_rodrigues@hotmail.com</a>
            </div>
            <Divisor />
            <div className={styles.rodape__links}>
      
                <TextoDuasCores
                    texto={language === 'pt-br' ? 'Desenvolvido por Bruno Holanda' : 'Developed by Bruno Holanda'}
                    palavra1="Bruno"
                    cor1="#3f51b5"
                    palavra2="Holanda"
                    cor2="#3f51b5"
                />
            </div>
        </footer>
    );
}
