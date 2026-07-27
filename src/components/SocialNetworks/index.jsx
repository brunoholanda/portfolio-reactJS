import { useLanguage } from 'Context/LanguageContext';
import styles from './SocialNetworks.module.scss';
import {
    SiGithub,
    SiLinkedin,
    SiYoutube,
    SiInstagram,
} from 'react-icons/si';

const networks = [
    {
        id: 'linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/brunoholanda/',
        Icon: SiLinkedin,
    },
    {
        id: 'github',
        label: 'GitHub',
        href: 'https://github.com/brunoholanda',
        Icon: SiGithub,
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

export default function SocialNetworks() {
    const { language } = useLanguage();
    const isPt = language === 'pt-br';

    return (
        <section className={styles.redes} aria-labelledby="social-networks-title">
            <h2 id="social-networks-title">
                {isPt ? 'Minhas redes' : 'Social networks'}
            </h2>
            <ul className={styles.redes__lista}>
                {networks.map(({ id, label, href, Icon }) => (
                    <li key={id}>
                        <a
                            className={styles.redes__link}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={label}
                            title={label}
                        >
                            <Icon aria-hidden />
                            <span>{label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
