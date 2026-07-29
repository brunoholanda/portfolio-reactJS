import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FiArrowLeft,
    FiArrowRight,
    FiCheck,
    FiCopy,
    FiExternalLink,
    FiPlay,
    FiStar,
    FiTag,
    FiYoutube,
} from 'react-icons/fi';
import { useLanguage } from 'Context/LanguageContext';
import {
    COURSE_URL,
    PORTFOLIO_COUPON,
    PORTFOLIO_COUPON_DISCOUNT,
    YOUTUBE_CHANNEL,
    lessons,
} from './lessons';
import styles from './LearnProgramming.module.scss';

const STORAGE_KEY = 'portfolio-learn-progress-v1';

function loadWatched() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        const parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function CouponHighlight({ isPt, compact = false }) {
    const [copied, setCopied] = useState(false);

    const copyCoupon = async () => {
        try {
            await navigator.clipboard.writeText(PORTFOLIO_COUPON);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
        } catch {
            setCopied(false);
        }
    };

    return (
        <div
            className={`${styles.coupon} ${compact ? styles.couponCompact : ''}`}
            role="note"
            aria-label={
                isPt
                    ? `Cupom ${PORTFOLIO_COUPON} com ${PORTFOLIO_COUPON_DISCOUNT}% de desconto`
                    : `Coupon ${PORTFOLIO_COUPON} with ${PORTFOLIO_COUPON_DISCOUNT}% off`
            }
        >
            <div className={styles.coupon__badge}>
                <FiTag aria-hidden />
                {isPt ? 'Exclusivo do portfólio' : 'Portfolio exclusive'}
            </div>
            <div className={styles.coupon__body}>
                <p className={styles.coupon__discount}>
                    {PORTFOLIO_COUPON_DISCOUNT}% OFF
                </p>
                <p className={styles.coupon__text}>
                    {isPt
                        ? 'Use o cupom abaixo na compra e garanta 30% de desconto por ter vindo do meu portfólio.'
                        : 'Use the coupon below at checkout and get 30% off for coming from my portfolio.'}
                </p>
                <div className={styles.coupon__row}>
                    <code className={styles.coupon__code}>{PORTFOLIO_COUPON}</code>
                    <button
                        type="button"
                        className={styles.coupon__copy}
                        onClick={copyCoupon}
                    >
                        {copied ? (
                            <>
                                <FiCheck aria-hidden />
                                {isPt ? 'Copiado' : 'Copied'}
                            </>
                        ) : (
                            <>
                                <FiCopy aria-hidden />
                                {isPt ? 'Copiar cupom' : 'Copy coupon'}
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function LearnProgramming() {
    const { language } = useLanguage();
    const isPt = language === 'pt-br';
    const [activeId, setActiveId] = useState(lessons[0].id);
    const [watched, setWatched] = useState(() => loadWatched());
    const [curriculumOpen, setCurriculumOpen] = useState(false);

    const activeIndex = Math.max(
        0,
        lessons.findIndex((lesson) => lesson.id === activeId)
    );
    const activeLesson = lessons[activeIndex] || lessons[0];

    const progress = useMemo(
        () => Math.round((watched.length / lessons.length) * 100),
        [watched]
    );

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(watched));
    }, [watched]);

    useEffect(() => {
        setCurriculumOpen(false);
    }, [activeId]);

    const markWatched = (id) => {
        setWatched((prev) => (prev.includes(id) ? prev : [...prev, id]));
    };

    const selectLesson = (id) => {
        setActiveId(id);
        markWatched(id);
    };

    const goPrev = () => {
        if (activeIndex <= 0) return;
        selectLesson(lessons[activeIndex - 1].id);
    };

    const goNext = () => {
        if (activeIndex >= lessons.length - 1) return;
        selectLesson(lessons[activeIndex + 1].id);
    };

    const title = (lesson) => (isPt ? lesson.titlePt : lesson.titleEn);
    const moduleName = (lesson) => (isPt ? lesson.modulePt : lesson.moduleEn);

    return (
        <main className={styles.page}>
            <header className={styles.hero}>
                <div className={styles.hero__glow} aria-hidden="true" />
                <p className={styles.eyebrow}>
                    {isPt ? 'Trilha gratuita' : 'Free track'}
                </p>
                <h1>
                    {isPt ? 'Aprenda programação' : 'Learn programming'}
                </h1>
                <p className={styles.lead}>
                    {isPt
                        ? 'Uma sequência prática de aulas no YouTube para começar do zero, criar páginas reais e treinar lógica — e, quando estiver pronto, acelerar com o curso completo.'
                        : 'A practical YouTube sequence to start from zero, build real pages and train logic — then accelerate with the full course when you’re ready.'}
                </p>
                <div className={styles.hero__meta}>
                    <span>
                        {lessons.length} {isPt ? 'aulas' : 'lessons'}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>
                        {progress}% {isPt ? 'concluído' : 'complete'}
                    </span>
                    <span aria-hidden="true">·</span>
                    <a href={YOUTUBE_CHANNEL} target="_blank" rel="noreferrer">
                        <FiYoutube aria-hidden />
                        YouTube
                    </a>
                </div>
                <div className={styles.progressTrack} aria-hidden="true">
                    <div
                        className={styles.progressTrack__fill}
                        style={{ transform: `scaleX(${progress / 100})` }}
                    />
                </div>
                <CouponHighlight isPt={isPt} />
            </header>

            <div className={styles.workspace}>
                {curriculumOpen && (
                    <button
                        type="button"
                        className={styles.curriculumBackdrop}
                        aria-label={isPt ? 'Fechar aulas' : 'Close lessons'}
                        onClick={() => setCurriculumOpen(false)}
                    />
                )}
                <aside
                    className={`${styles.curriculum} ${
                        curriculumOpen ? styles.curriculumOpen : ''
                    }`}
                >
                    <div className={styles.curriculum__head}>
                        <h2>{isPt ? 'Conteúdo do curso' : 'Course content'}</h2>
                        <p>
                            {watched.length}/{lessons.length}{' '}
                            {isPt ? 'assistidas' : 'watched'}
                        </p>
                    </div>
                    <ol className={styles.curriculum__list}>
                        {lessons.map((lesson, index) => {
                            const isActive = lesson.id === activeId;
                            const isDone = watched.includes(lesson.id);

                            return (
                                <li key={lesson.id}>
                                    <button
                                        type="button"
                                        className={`${styles.lessonBtn} ${
                                            isActive ? styles.lessonBtnActive : ''
                                        } ${isDone ? styles.lessonBtnDone : ''}`}
                                        onClick={() => selectLesson(lesson.id)}
                                        aria-current={isActive ? 'true' : undefined}
                                    >
                                        <span className={styles.lessonBtn__index}>
                                            {isDone ? (
                                                <FiCheck aria-hidden size={14} />
                                            ) : (
                                                String(index + 1).padStart(2, '0')
                                            )}
                                        </span>
                                        <span className={styles.lessonBtn__copy}>
                                            <small>{moduleName(lesson)}</small>
                                            <strong>{title(lesson)}</strong>
                                        </span>
                                        <span className={styles.lessonBtn__tag}>
                                            {lesson.durationHint}
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ol>
                </aside>

                <section className={styles.player} aria-labelledby="lesson-title">
                    <div className={styles.player__toolbar}>
                        <button
                            type="button"
                            className={styles.curriculumToggle}
                            onClick={() => setCurriculumOpen((v) => !v)}
                        >
                            {curriculumOpen
                                ? isPt
                                    ? 'Fechar aulas'
                                    : 'Close lessons'
                                : isPt
                                  ? 'Ver aulas'
                                  : 'View lessons'}
                        </button>
                        <p className={styles.player__module}>
                            {moduleName(activeLesson)} ·{' '}
                            {isPt ? 'Aula' : 'Lesson'} {activeIndex + 1}/
                            {lessons.length}
                        </p>
                    </div>

                    <div className={styles.player__frame}>
                        <iframe
                            key={activeLesson.youtubeId}
                            title={title(activeLesson)}
                            src={`https://www.youtube.com/embed/${activeLesson.youtubeId}?rel=0`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>

                    <div className={styles.player__body}>
                        <h2 id="lesson-title">{title(activeLesson)}</h2>
                        <p>
                            {isPt
                                ? 'Assista com calma, pause e pratique. Marque as aulas como concluídas e avance na trilha.'
                                : 'Watch at your pace, pause and practice. Mark lessons as done and move through the track.'}
                        </p>

                        <div className={styles.player__actions}>
                            <button
                                type="button"
                                className={styles.btnGhost}
                                onClick={goPrev}
                                disabled={activeIndex === 0}
                            >
                                <FiArrowLeft aria-hidden />
                                {isPt ? 'Anterior' : 'Previous'}
                            </button>
                            <button
                                type="button"
                                className={styles.btnPrimary}
                                onClick={() => {
                                    markWatched(activeLesson.id);
                                    goNext();
                                }}
                                disabled={activeIndex === lessons.length - 1}
                            >
                                {isPt ? 'Próxima aula' : 'Next lesson'}
                                <FiArrowRight aria-hidden />
                            </button>
                            <a
                                className={styles.btnGhost}
                                href={`https://youtu.be/${activeLesson.youtubeId}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FiExternalLink aria-hidden />
                                YouTube
                            </a>
                        </div>
                    </div>

                    <aside className={styles.upsell} aria-labelledby="upsell-title">
                        <div className={styles.upsell__badge}>
                            <FiStar aria-hidden />
                            {isPt ? 'Próximo nível' : 'Next level'}
                        </div>
                        <h3 id="upsell-title">
                            {isPt
                                ? 'Gostou da trilha? Acelere com o curso completo'
                                : 'Enjoying the track? Accelerate with the full course'}
                        </h3>
                        <p>
                            {isPt
                                ? 'No curso você tem roteiro completo, projetos guiados e o caminho para migrar para tech com mais confiança.'
                                : 'In the full course you get a complete roadmap, guided projects and a clearer path into tech.'}
                        </p>
                        <CouponHighlight isPt={isPt} compact />
                        <ul>
                            <li>
                                <FiPlay aria-hidden />
                                {isPt
                                    ? 'Conteúdo estruturado além do YouTube'
                                    : 'Structured content beyond YouTube'}
                            </li>
                            <li>
                                <FiCheck aria-hidden />
                                {isPt
                                    ? 'Prática com foco em resultado'
                                    : 'Practice focused on results'}
                            </li>
                            <li>
                                <FiStar aria-hidden />
                                {isPt
                                    ? 'Feito por quem mudou de carreira de verdade'
                                    : 'Built by someone who actually changed careers'}
                            </li>
                        </ul>
                        <a
                            className={styles.upsell__cta}
                            href={COURSE_URL}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {isPt ? 'Quero o curso completo' : 'I want the full course'}
                            <FiArrowRight aria-hidden />
                        </a>
                    </aside>
                </section>
            </div>

            <section className={styles.closing} aria-labelledby="closing-title">
                <h2 id="closing-title">
                    {isPt
                        ? 'Continue estudando comigo'
                        : 'Keep learning with me'}
                </h2>
                <p>
                    {isPt
                        ? 'Inscreva-se no canal para novas aulas e, quando quiser ir além, entre no curso completo com o cupom exclusivo do portfólio.'
                        : 'Subscribe to the channel for new lessons and, when you want to go further, join the full course with the portfolio-exclusive coupon.'}
                </p>
                <CouponHighlight isPt={isPt} />
                <div className={styles.closing__actions}>
                    <a
                        className={styles.btnPrimary}
                        href={COURSE_URL}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {isPt ? 'Adquirir curso completo' : 'Get the full course'}
                    </a>
                    <a
                        className={styles.btnGhost}
                        href={YOUTUBE_CHANNEL}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FiYoutube aria-hidden />
                        {isPt ? 'Ver canal no YouTube' : 'Open YouTube channel'}
                    </a>
                    <Link to="/contato" className={styles.btnGhost}>
                        {isPt ? 'Falar comigo' : 'Get in touch'}
                    </Link>
                </div>
            </section>
        </main>
    );
}
