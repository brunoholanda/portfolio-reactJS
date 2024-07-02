import styles from './Home.module.scss';
import Skills from "components/Skills";
import MyProjects from "components/MyProjects";
import TextoDuasCores from "components/TwoColorsText";
import profile from '../../public/assets/img/profile.webp';
import ItensParaVenda from 'components/SellerItens';
import { useLanguage } from 'Context/LanguageContext';

export default function Home() {
    return (
        <>
            <Presentation />
            <Skills />
            <MyProjects />
            <ItensParaVenda />
        </>
    );
}

function Presentation() {
    const { language } = useLanguage(); // Use o contexto de idioma

    return (
        <div className={styles.introducao}>
            <div className={styles.introducao__texto}>
                <h1>{language === 'pt-br' ? 'Oi 👋,' : 'Hi 👋,'}</h1>
                <TextoDuasCores
                    texto={language === 'pt-br' ? 'Eu sou o Bruno Holanda' : 'I am Bruno Holanda'}
                    palavra1="Bruno"
                    palavra2="Holanda"
                />
                <TextoDuasCores
                    texto={language === 'pt-br' ? 'Desenvolvedor Web FullStack' : 'FullStack Web Developer'}
                    palavra1="FullStack"
                />
            </div>
            <div className={styles.introducao__imagem}>
                <img src={profile} alt={language === 'pt-br' ? 'foto do perfil bruno holanda' : 'Bruno Holanda profile picture'} />
            </div>
        </div>
    );
}
