import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import { useLanguage } from 'Context/LanguageContext';
import {
    SiGithub,
    SiLinkedin,
    SiYoutube,
    SiInstagram,
} from 'react-icons/si';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const EMAIL = 'holanda_rodrigues@hotmail.com';
const YEAR = new Date().getFullYear();

const socials = [
    {
        id: 'github',
        label: 'GitHub',
        href: 'https://github.com/brunoholanda',
        Icon: SiGithub,
    },
    {
        id: 'linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/brunoholanda/',
        Icon: SiLinkedin,
    },
    {
        id: 'whatsapp',
        label: 'WhatsApp',
        href: 'https://wa.me/5583998150712',
        Icon: FaWhatsapp,
    },
    {
        id: 'youtube',
        label: 'YouTube',
        href: 'https://www.youtube.com/nerdkingteam',
        Icon: SiYoutube,
    },
    {
        id: 'instagram',
        label: 'Instagram',
        href: 'https://www.instagram.com/brunoholandaa',
        Icon: SiInstagram,
    },
];

export default function Footer() {
    const { language } = useLanguage();
    const isPt = language === 'pt-br';

    const navLinks = [
        { to: '/', label: isPt ? 'Início' : 'Home' },
        { to: '/sobre', label: isPt ? 'Sobre' : 'About' },
        { to: '/habilidades', label: isPt ? 'Habilidades' : 'Skills' },
        { to: '/projetos', label: isPt ? 'Projetos' : 'Projects' },
        { to: '/hobbies', label: 'Hobbies' },
        { to: '/contato', label: isPt ? 'Contato' : 'Contact' },
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__inner}>
                <div className={styles.footer__brand}>
                    <Link to="/" className={styles.footer__logo}>
                        Bruno <span>Holanda</span>
                    </Link>
                    <p>
                        {isPt
                            ? 'Desenvolvedor FullStack. Produtos web, mobile e cloud — da ideia ao deploy.'
                            : 'FullStack developer. Web, mobile and cloud products — from idea to deploy.'}
                    </p>
                    <div className={styles.footer__social}>
                        {socials.map(({ id, label, href, Icon }) => (
                            <a
                                key={id}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={label}
                                title={label}
                            >
                                <Icon aria-hidden />
                            </a>
                        ))}
                    </div>
                </div>

                <nav className={styles.footer__nav} aria-label={isPt ? 'Navegação do rodapé' : 'Footer navigation'}>
                    <h2>{isPt ? 'Navegação' : 'Navigation'}</h2>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <Link to={link.to}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.footer__contact}>
                    <h2>{isPt ? 'Contato' : 'Contact'}</h2>
                    <a
                        className={styles.footer__mail}
                        href={`mailto:${EMAIL}?subject=${encodeURIComponent(isPt ? 'Contato pelo portfólio' : 'Portfolio contact')}`}
                    >
                        <FaEnvelope aria-hidden />
                        <span>{EMAIL}</span>
                    </a>
                    <p className={styles.footer__location}>
                        <FaMapMarkerAlt aria-hidden />
                        <span>{isPt ? 'João Pessoa — PB' : 'João Pessoa — PB, Brazil'}</span>
                    </p>
                    <Link to="/contato" className={styles.footer__cta}>
                        {isPt ? 'Falar comigo' : 'Get in touch'}
                    </Link>
                </div>
            </div>

            <div className={styles.footer__bottom}>
                <div className={styles.footer__bottomInner}>
                    <p>
                        © {YEAR} Bruno Holanda.{' '}
                        {isPt ? 'Todos os direitos reservados.' : 'All rights reserved.'}
                    </p>
                    <p className={styles.footer__credit}>
                        {isPt ? 'Desenvolvido por' : 'Built by'}{' '}
                        <span>Bruno Holanda</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
