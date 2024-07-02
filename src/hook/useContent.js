import { useState, useEffect } from 'react';
import dataPtBr from '../components/json/db.json';
import dataEn from '../components/json/db_en.json';
import { useLanguage } from 'Context/LanguageContext';

export const useContent = () => {
    const { language } = useLanguage();
    const [content, setContent] = useState(language === 'pt-br' ? dataPtBr : dataEn);

    useEffect(() => {
        if (language === 'pt-br') {
            setContent(dataPtBr);
        } else {
            setContent(dataEn);
        }
    }, [language]);

    return { ...content, language };
};
