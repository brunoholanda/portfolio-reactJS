import React, { useState } from 'react';
import HamburgerMenu from 'hamburger-react';
import styles from './MenuMobile.module.scss';
import { Link } from 'react-router-dom';
import { GoDownload } from "react-icons/go";
import brflag from '../../public/assets/icons/BR.webp';
import euflag from '../../public/assets/icons/eua.webp';
import { useLanguage } from 'Context/LanguageContext';

export default function MenuMobile() {
    const [isOpen, setOpen] = useState(false);
    const { language } = useLanguage(); // Use o contexto de idioma

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    const handleItemClick = () => {
        setOpen(false);
    };

    return (
        <>
            <nav>
                <HamburgerMenu
                    toggled={isOpen}
                    toggle={toggleMenu}
                    color="#3f51b5"
                    size={60}
                />
            </nav>
            {isOpen && (
                <ul className={styles.mobileMenu} onClick={handleItemClick}>
                    <Link to="./">
                        <li>{language === 'pt-br' ? 'Inicio' : 'Home'}</li>
                    </Link>
                    <Link to="./sobre">
                        <li>{language === 'pt-br' ? 'Sobre Mim' : 'About Me'}</li>
                    </Link>
                    <Link to="./habilidades">
                        <li>{language === 'pt-br' ? 'Habilidades' : 'Skills'}</li>
                    </Link>
                    <Link to="./projetos">
                        <li>{language === 'pt-br' ? 'Projetos' : 'Projects'}</li>
                    </Link>
                    <Link to="./contato">
                        <li>{language === 'pt-br' ? 'Contato' : 'Contact'}</li>
                    </Link>
                    <Link to="./hobbies">
                        <li>{language === 'pt-br' ? 'Hobbies' : 'Hobbies'}</li>
                    </Link>
                    <div className={styles.mobileMenu__cv}>
                        <a href="https://drive.google.com/file/d/1n_LfAgGwAXUYOQV4Kr1pKdIe9E__ukBb/view?usp=sharing" rel="noreferrer" target="_blank"><GoDownload /> CV BR</a>
                    </div>
                    <div className={styles.mobileMenu__cv}>
                        <a href="https://drive.google.com/file/d/1rOYKPQFoZ00veHIbaxrLT2v6fTVwNiin/view?usp=sharing" rel="noreferrer" target="_blank"><GoDownload /> CV EUA</a>
                    </div>

                </ul>
            )}
        </>
    );
}
