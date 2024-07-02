import { useEffect, useState } from 'react';
import styles from './Hobbies.module.scss';
import carregando from '../../public/assets/img/carregando.gif';
import CardHobbie from './CardHobbie';
import { useContent } from 'hook/useContent';

export default function Hobbies() {
    const content = useContent(); // Use o hook useContent
    const [hobbies, setHobbies] = useState([]);

    useEffect(() => {
        setHobbies(content.hobbies || []); // Defina um valor padrão vazio
    }, [content]);

    return (
        <div className={styles.hobbies}>
            <h1>{content.language === 'pt-br' ? 'Meus Hobbies' : 'My Hobbies'}</h1>
            <p>{content.language === 'pt-br' ? 'Aqui você pode conferir o que gosto de fazer no meu tempo livre' : 'Here you can check out what I like to do in my free time'}</p>
            <h2>{content.language === 'pt-br' ? 'Criar coisas que outras pessoas podem usar' : 'Creating things that others can use'}</h2>
            <p>{content.language === 'pt-br' ? 'Em 2013 subi meu primeiro vídeo no Youtube e nele eu mostrava uma fechadura eletrônica feita com sucata de um gravador de DVD.' : 'In 2013, I uploaded my first video on YouTube, showing an electronic lock made from a DVD recorder scrap.'}</p>
            <p>{content.language === 'pt-br' ? 'Desde então sempre que tenho um tempo livre posto novos vídeos ensinando as pessoas a fazerem algumas engenhocas interessantes, e a seguir você pode conferir algumas delas:' : 'Since then, whenever I have free time, I post new videos teaching people how to make some interesting gadgets. Check out some of them below:'}</p>
            <div className={styles.hobbies__cards}>
                {hobbies.length > 0 ? (
                    hobbies.map((hobbie) => <CardHobbie {...hobbie} key={hobbie.id} />)
                ) : (
                    <img src={carregando} alt="Carregando..." />
                )}
            </div>
        </div>
    );
}
