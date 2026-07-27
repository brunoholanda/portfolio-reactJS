import { useEffect, useState } from 'react';
import styles from './Hobbies.module.scss';
import CardHobbie from './CardHobbie';
import { useContent } from 'hook/useContent';
import { Link } from 'react-router-dom';

export default function Hobbies() {
    const content = useContent();
    const [hobbies, setHobbies] = useState([]);
    const isPt = content.language === 'pt-br';

    useEffect(() => {
        setHobbies(content.hobbies || []);
    }, [content]);

    return (
        <main className={styles.page}>
            <section className={styles.intro} aria-labelledby="hobbies-title">
                <p className={styles.eyebrow}>
                    {isPt ? 'Fora do escritório' : 'Off the clock'}
                </p>
                <h1 id="hobbies-title">
                    {isPt ? 'Hobbies' : 'Hobbies'}
                </h1>
                <p className={styles.lead}>
                    {isPt
                        ? 'Criar coisas que outras pessoas podem usar — automação, hardware e tutoriais no YouTube desde 2013.'
                        : 'Building things others can use — automation, hardware and YouTube tutorials since 2013.'}
                </p>
                <div className={styles.intro__story}>
                    <p>
                        {isPt
                            ? 'Em 2013 subi meu primeiro vídeo mostrando uma fechadura eletrônica feita com sucata de um gravador de DVD. Sempre que dá, posto engenhocas novas e ensino o passo a passo.'
                            : 'In 2013 I uploaded my first video showing an electronic lock made from a DVD recorder scrap. Whenever I can, I post new gadgets and teach the step-by-step.'}
                    </p>
                </div>
                <div className={styles.intro__meta}>
                    <span>
                        {hobbies.length > 0
                            ? `${hobbies.length} ${isPt ? 'projetos maker' : 'maker projects'}`
                            : isPt
                              ? 'Carregando…'
                              : 'Loading…'}
                    </span>
                    <Link to="/projetos" className={styles.intro__link}>
                        {isPt ? 'Ver projetos profissionais →' : 'See professional projects →'}
                    </Link>
                </div>
            </section>

            <section className={styles.grid} aria-label={isPt ? 'Lista de hobbies' : 'Hobbies list'}>
                {hobbies.length > 0 ? (
                    hobbies.map((hobbie) => <CardHobbie {...hobbie} key={hobbie.id} />)
                ) : (
                    <div className={styles.loading} role="status">
                        <span className={styles.loading__pulse} aria-hidden />
                        <p>{isPt ? 'Carregando hobbies…' : 'Loading hobbies…'}</p>
                    </div>
                )}
            </section>
        </main>
    );
}
