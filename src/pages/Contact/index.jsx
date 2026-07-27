import ItensParaVenda from 'components/SellerItens';
import styles from './Contact.module.scss';
import { useLanguage } from 'Context/LanguageContext';
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaWhatsapp,
} from 'react-icons/fa';
import {
    SiGithub,
    SiLinkedin,
    SiYoutube,
    SiInstagram,
} from 'react-icons/si';

const EMAIL = 'holanda_rodrigues@hotmail.com';
const PHONE_DISPLAY = '(83) 9 9815-0712';
const PHONE_WA = '5583998150712';
const CITY = 'João Pessoa — PB';

export default function Contact() {
    const { language } = useLanguage();
    const isPt = language === 'pt-br';

    const channels = [
        {
            id: 'email',
            label: 'Email',
            value: EMAIL,
            href: `mailto:${EMAIL}?subject=${encodeURIComponent(isPt ? 'Contato pelo portfólio' : 'Portfolio contact')}`,
            Icon: FaEnvelope,
        },
        {
            id: 'phone',
            label: isPt ? 'Telefone' : 'Phone',
            value: PHONE_DISPLAY,
            href: `tel:+${PHONE_WA}`,
            Icon: FaPhoneAlt,
        },
        {
            id: 'whatsapp',
            label: 'WhatsApp',
            value: isPt ? 'Conversar agora' : 'Chat now',
            href: `https://wa.me/${PHONE_WA}`,
            Icon: FaWhatsapp,
            external: true,
        },
        {
            id: 'city',
            label: isPt ? 'Onde eu resido' : 'Where I live',
            value: CITY,
            Icon: FaMapMarkerAlt,
        },
    ];

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

    return (
        <main className={styles.page}>
            <section className={styles.intro} aria-labelledby="contact-title">
                <p className={styles.eyebrow}>
                    {isPt ? 'Vamos conversar' : "Let's talk"}
                </p>
                <h1 id="contact-title">
                    {isPt ? 'Contato' : 'Contact'}
                </h1>
                <p className={styles.lead}>
                    {isPt
                        ? 'Aberto a oportunidades, freelas e parcerias. Escolha o canal que preferir.'
                        : 'Open to opportunities, freelance and partnerships. Pick the channel that works for you.'}
                </p>
            </section>

            <section className={styles.channels} aria-label={isPt ? 'Canais de contato' : 'Contact channels'}>
                {channels.map(({ id, label, value, href, Icon, external }) => {
                    const content = (
                        <>
                            <span className={styles.channels__icon} aria-hidden>
                                <Icon />
                            </span>
                            <span className={styles.channels__text}>
                                <span className={styles.channels__label}>{label}</span>
                                <span className={styles.channels__value}>{value}</span>
                            </span>
                        </>
                    );

                    return href ? (
                        <a
                            key={id}
                            className={styles.channels__item}
                            href={href}
                            {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                        >
                            {content}
                        </a>
                    ) : (
                        <div key={id} className={styles.channels__item}>
                            {content}
                        </div>
                    );
                })}
            </section>

            <section className={styles.networks} aria-labelledby="networks-title">
                <div className={styles.sectionHead}>
                    <h2 id="networks-title">
                        {isPt ? 'Redes sociais' : 'Social networks'}
                    </h2>
                    <p>
                        {isPt
                            ? 'Acompanhe projetos, conteúdo e novidades.'
                            : 'Follow projects, content and updates.'}
                    </p>
                </div>
                <ul className={styles.networks__list}>
                    {networks.map(({ id, label, href, Icon }) => (
                        <li key={id}>
                            <a
                                className={styles.networks__link}
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

            <section className={styles.mentorship} aria-labelledby="contact-mentorship">
                <div className={styles.sectionHead}>
                    <h2 id="contact-mentorship">
                        {isPt ? 'Para quem está começando' : 'For those just starting'}
                    </h2>
                    <p>
                        {isPt
                            ? 'Curso e livro para quem quer entrar na área com direção.'
                            : 'A course and a book for anyone entering the field with direction.'}
                    </p>
                </div>
                <ItensParaVenda />
            </section>
        </main>
    );
}
