// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "home": "Home",
      "about": "About",
      "skills": "Skills",
      "projects": "Projects",
      "contact": "Contact",
      "hobbies": "Hobbies",
      "download_cv": "Download CV",
      "portuguese": "Portuguese",
      "english": "English"
    }
  },
  ptBR: {
    translation: {
      "home": "Início",
      "about": "Sobre",
      "skills": "Habilidades",
      "projects": "Projetos",
      "contact": "Contato",
      "hobbies": "Hobbies",
      "download_cv": "Baixar CV",
      "portuguese": "Português",
      "english": "Inglês"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ptBR',
    debug: true,
    interpolation: {
      escapeValue: false, // react already safes from xss
    }
  });

export default i18n;
