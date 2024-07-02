import { useEffect } from 'react';
import { useLanguage } from 'Context/LanguageContext';
import axios from 'axios';

export default function useGeoLanguage() {
    const { setLanguage } = useLanguage();

    useEffect(() => {
        axios.get('https://ipinfo.io/json?token=a9ae02f91d9e85')
            .then((response) => {
                const country = response.data.country.toLowerCase();
                if (['us', 'gb', 'ca', 'au', 'nz'].includes(country)) {
                    setLanguage('en');
                } else {
                    setLanguage('pt-br');
                }
            })
            .catch((error) => {
                console.error("Error getting geolocation: ", error);
            });
    }, [setLanguage]);
}
