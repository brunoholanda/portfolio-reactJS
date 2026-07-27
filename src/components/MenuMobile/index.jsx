import React, { useState } from 'react';
import HamburgerMenu from 'hamburger-react';
import styles from './MenuMobile.module.scss';
import { Link } from 'react-router-dom';
import { GoDownload } from "react-icons/go";
import { useLanguage } from 'Context/LanguageContext';
import { useTheme } from 'Context/ThemeContext';

export default function MenuMobile() {
    const [isOpen, setOpen] = useState(false);
    const { language } = useLanguage();
    const { isDark } = useTheme();

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    const handleItemClick = () => {
        setOpen(false);
    };

    return (
        <>
            <nav className={styles.mobileNav}>
                <HamburgerMenu
                    toggled={isOpen}
                    toggle={toggleMenu}
                    color={isDark ? '#e8ebf7' : '#3f51b5'}
                    size={48}
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
                        <a href="https://drive.google.com/file/d/1-R9jxd51oo7prkAWmcfHh1bITrzq1pEZ/view?usp=sharing" rel="noreferrer" target="_blank"><GoDownload /> CV BR</a>
                    </div>
                    <div className={styles.mobileMenu__cv}>
                        <a href="https://drive.google.com/file/d/1KcMfJEVAf05Aiy9oYjDXeJpMgj9b59DG/view?usp=sharing" rel="noreferrer" target="_blank"><GoDownload /> CV EUA</a>
                    </div>

                </ul>
            )}
        </>
    );
}
