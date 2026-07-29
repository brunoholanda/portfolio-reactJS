import { Link } from 'react-router-dom';
import { useEffect, useId, useRef, useState } from 'react';
import styles from './MenuLinks.module.scss';
import { FaBriefcase, FaChevronDown, FaDownload, FaFileAlt, FaPuzzlePiece } from 'react-icons/fa';
import brflag from '../../public/assets/icons/BR.webp';
import euflag from '../../public/assets/icons/eua.webp';
import { useLanguage } from 'Context/LanguageContext';

function Dropdown({ label, open, onToggle, onClose, children, align = 'left' }) {
    const id = useId();
    const menuId = `${id}-menu`;

    return (
        <div className={`${styles.dropdown} ${open ? styles.dropdownOpen : ''}`}>
            <button
                type="button"
                className={styles.dropdown__trigger}
                aria-expanded={open}
                aria-haspopup="menu"
                aria-controls={menuId}
                onClick={onToggle}
            >
                <span>{label}</span>
                <FaChevronDown className={styles.dropdown__chevron} aria-hidden />
            </button>
            {open && (
                <div
                    id={menuId}
                    className={`${styles.dropdown__menu} ${
                        align === 'right' ? styles.dropdown__menuRight : ''
                    }`}
                    role="menu"
                >
                    {typeof children === 'function' ? children(onClose) : children}
                </div>
            )}
        </div>
    );
}

export default function MenuLinks() {
    const { language } = useLanguage();
    const isPt = language === 'pt-br';
    const [openMenu, setOpenMenu] = useState(null);
    const navRef = useRef(null);

    useEffect(() => {
        if (!openMenu) return undefined;

        const onPointerDown = (event) => {
            if (!navRef.current?.contains(event.target)) {
                setOpenMenu(null);
            }
        };

        const onKeyDown = (event) => {
            if (event.key === 'Escape') setOpenMenu(null);
        };

        document.addEventListener('pointerdown', onPointerDown);
        window.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('pointerdown', onPointerDown);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [openMenu]);

    const toggle = (menu) => {
        setOpenMenu((current) => (current === menu ? null : menu));
    };

    const close = () => setOpenMenu(null);

    return (
        <nav className={styles.menuLinks} ref={navRef} aria-label={isPt ? 'Menu principal' : 'Main menu'}>
            <Link to="/" className={styles.menuLinks__link} onClick={close}>
                {isPt ? 'Início' : 'Home'}
            </Link>
            <Link to="/sobre" className={styles.menuLinks__link} onClick={close}>
                {isPt ? 'Sobre' : 'About'}
            </Link>
            <Link to="/habilidades" className={styles.menuLinks__link} onClick={close}>
                {isPt ? 'Habilidades' : 'Skills'}
            </Link>

            <Dropdown
                label={isPt ? 'Projetos' : 'Projects'}
                open={openMenu === 'projects'}
                onToggle={() => toggle('projects')}
                onClose={close}
            >
                {(onClose) => (
                    <>
                        <Link
                            to="/projetos"
                            className={styles.dropdown__item}
                            role="menuitem"
                            onClick={onClose}
                        >
                            <span className={styles.dropdown__icon} aria-hidden>
                                <FaBriefcase />
                            </span>
                            <span className={styles.dropdown__copy}>
                                <strong>{isPt ? 'Profissionais' : 'Professional'}</strong>
                                <small>
                                    {isPt
                                        ? 'Cases, SAAS e produtos no ar'
                                        : 'Cases, SAAS and live products'}
                                </small>
                            </span>
                        </Link>
                        <Link
                            to="/hobbies"
                            className={styles.dropdown__item}
                            role="menuitem"
                            onClick={onClose}
                        >
                            <span className={styles.dropdown__icon} aria-hidden>
                                <FaPuzzlePiece />
                            </span>
                            <span className={styles.dropdown__copy}>
                                <strong>Hobbies</strong>
                                <small>
                                    {isPt
                                        ? 'Maker, automação e YouTube'
                                        : 'Maker, automation and YouTube'}
                                </small>
                            </span>
                        </Link>
                    </>
                )}
            </Dropdown>

            <Link to="/contato" className={styles.menuLinks__link} onClick={close}>
                {isPt ? 'Contato' : 'Contact'}
            </Link>
            <Link to="/aprenda-programacao" className={styles.menuLinks__link} onClick={close}>
                {isPt ? 'Aprenda programação' : 'Learn programming'}
            </Link>

            <Dropdown
                label={isPt ? 'Baixar CV' : 'Resume'}
                open={openMenu === 'cv'}
                onToggle={() => toggle('cv')}
                onClose={close}
                align="right"
            >
                {(onClose) => (
                    <>
                        <a
                            className={styles.dropdown__item}
                            role="menuitem"
                            href="https://drive.google.com/file/d/1-R9jxd51oo7prkAWmcfHh1bITrzq1pEZ/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                            onClick={onClose}
                        >
                            <span className={styles.dropdown__icon} aria-hidden>
                                <img src={brflag} alt="" />
                            </span>
                            <span className={styles.dropdown__copy}>
                                <strong>Português</strong>
                                <small>{isPt ? 'Currículo em PDF' : 'Resume in Portuguese'}</small>
                            </span>
                            <FaDownload className={styles.dropdown__hint} aria-hidden />
                        </a>
                        <a
                            className={styles.dropdown__item}
                            role="menuitem"
                            href="https://drive.google.com/file/d/1KcMfJEVAf05Aiy9oYjDXeJpMgj9b59DG/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                            onClick={onClose}
                        >
                            <span className={styles.dropdown__icon} aria-hidden>
                                <img src={euflag} alt="" />
                            </span>
                            <span className={styles.dropdown__copy}>
                                <strong>English</strong>
                                <small>{isPt ? 'Resume in English' : 'PDF resume'}</small>
                            </span>
                            <FaDownload className={styles.dropdown__hint} aria-hidden />
                        </a>
                        <a
                            className={styles.dropdown__item}
                            role="menuitem"
                            href="https://drive.google.com/file/d/11Z29BuZJH1rJJNW0xZQ6vkdKhX6Assfy/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                            onClick={onClose}
                        >
                            <span className={styles.dropdown__icon} aria-hidden>
                                <FaFileAlt />
                            </span>
                            <span className={styles.dropdown__copy}>
                                <strong>{isPt ? 'Carta de apresentação' : 'Cover letter'}</strong>
                                <small>{isPt ? 'PDF para candidaturas' : 'PDF for applications'}</small>
                            </span>
                            <FaDownload className={styles.dropdown__hint} aria-hidden />
                        </a>
                    </>
                )}
            </Dropdown>
        </nav>
    );
}
