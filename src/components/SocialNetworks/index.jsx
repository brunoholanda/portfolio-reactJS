import React from 'react'

import instagramIcon from '../../public/assets/icons/instagram.webp';
import linkedinIcon from '../../public/assets/icons/linkedin-2.png';
import githubIcon from '../../public/assets/icons/github-fill.svg';
import youtubeIcon from '../../public/assets/icons/youtube-2.png';
import { useLanguage } from 'Context/LanguageContext';
import styles from './SocialNetworks.module.scss';

export default function SocialNetworks () {
    const { language } = useLanguage();

    return (
        <div className={styles.contato}>
            <h1>{language === 'pt-br' ? 'Minhas Redes' : 'Social Networks'}</h1>
            <div className={styles.contato__redes}>

                <a href="https://www.linkedin.com/in/brunoholanda/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" />
                </a>
                <a href="https://github.com/brunoholanda" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://www.youtube.com/nerdkingteam" target="_blank" rel="noopener noreferrer">
                    <img src={youtubeIcon} alt="YouTube" />
                </a>
                <a href="https://www.instagram.com/brunoholandaa" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" />
                </a>
            </div>
        </div>
    )
}
