import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FiArrowLeft,
    FiArrowRight,
    FiAward,
    FiBookOpen,
    FiBriefcase,
    FiChevronLeft,
    FiChevronRight,
    FiCloud,
    FiCode,
    FiCpu,
    FiHardDrive,
    FiHome,
    FiMinus,
    FiMonitor,
    FiPlus,
    FiTool,
    FiUsers,
    FiZap,
} from 'react-icons/fi';
import { useLanguage } from 'Context/LanguageContext';
import { milestonesByLang } from './milestones';
import styles from './LifeTimeline.module.scss';

const MILESTONE_ICONS = {
    '1992': FiHome,
    '1997': FiCpu,
    '2002': FiTool,
    '2004': FiMonitor,
    '2008': FiBriefcase,
    '2010': FiHardDrive,
    '2011': FiUsers,
    '2014': FiAward,
    '2019': FiBookOpen,
    '2021': FiCode,
    '2022': FiZap,
    hoje: FiCloud,
};

function useCarouselWindow() {
    const [windowSize, setWindowSize] = useState(() => {
        if (typeof window === 'undefined') return 5;
        if (window.matchMedia('(max-width: 480px)').matches) return 2;
        if (window.matchMedia('(max-width: 768px)').matches) return 3;
        return 5;
    });

    useEffect(() => {
        const mqMobile = window.matchMedia('(max-width: 480px)');
        const mqTablet = window.matchMedia('(max-width: 768px)');

        const update = () => {
            if (mqMobile.matches) setWindowSize(2);
            else if (mqTablet.matches) setWindowSize(3);
            else setWindowSize(5);
        };

        update();
        mqMobile.addEventListener('change', update);
        mqTablet.addEventListener('change', update);
        return () => {
            mqMobile.removeEventListener('change', update);
            mqTablet.removeEventListener('change', update);
        };
    }, []);

    return windowSize;
}

export default function LifeTimeline() {
    const { language } = useLanguage();
    const isPt = language === 'pt-br';
    const milestones = isPt ? milestonesByLang.pt : milestonesByLang.en;
    const carouselWindow = useCarouselWindow();

    const [activeId, setActiveId] = useState(milestones[0]?.id);
    const [expandedId, setExpandedId] = useState(milestones[0]?.id);
    const [progress, setProgress] = useState(0);
    const [carouselStart, setCarouselStart] = useState(0);
    const itemRefs = useRef({});
    const timelinePaneRef = useRef(null);
    const skipObserver = useRef(false);
    const pendingScrollId = useRef(null);

    const activeIndex = Math.max(
        0,
        milestones.findIndex((m) => m.id === activeId)
    );

    const maxCarouselStart = Math.max(0, milestones.length - carouselWindow);

    const visibleMilestones = useMemo(
        () => milestones.slice(carouselStart, carouselStart + carouselWindow),
        [milestones, carouselStart, carouselWindow]
    );

    const journeyProgress = milestones.length > 1
        ? activeIndex / (milestones.length - 1)
        : 0;

    useEffect(() => {
        setActiveId(milestones[0]?.id);
        setExpandedId(milestones[0]?.id);
        setCarouselStart(0);
        pendingScrollId.current = null;
        if (timelinePaneRef.current) timelinePaneRef.current.scrollTop = 0;
    }, [language]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const idealStart = Math.min(
            maxCarouselStart,
            Math.max(0, activeIndex - Math.floor(carouselWindow / 2))
        );
        setCarouselStart(idealStart);
    }, [activeIndex, maxCarouselStart, carouselWindow]);

    useEffect(() => {
        const root = timelinePaneRef.current;
        const nodes = milestones
            .map((m) => itemRefs.current[m.id])
            .filter(Boolean);

        if (!root || !nodes.length) return undefined;

        const observer = new IntersectionObserver(
            (entries) => {
                if (skipObserver.current) return;

                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible[0]?.target?.dataset?.id) {
                    setActiveId(visible[0].target.dataset.id);
                }
            },
            {
                root,
                rootMargin: '-8% 0px -60% 0px',
                threshold: [0.2, 0.4, 0.6],
            }
        );

        nodes.forEach((node) => observer.observe(node));
        return () => observer.disconnect();
    }, [milestones]);

    useEffect(() => {
        const pane = timelinePaneRef.current;
        if (!pane) return undefined;

        const onScroll = () => {
            const max = pane.scrollHeight - pane.clientHeight;
            setProgress(max > 0 ? Math.min(1, pane.scrollTop / max) : 0);
        };

        onScroll();
        pane.addEventListener('scroll', onScroll, { passive: true });
        return () => pane.removeEventListener('scroll', onScroll);
    }, []);

    const scrollMilestoneIntoPane = (id) => {
        const pane = timelinePaneRef.current;
        const el = itemRefs.current[id];
        if (!pane || !el) return;

        const pageY = window.scrollY;
        const nextTop =
            pane.scrollTop +
            el.getBoundingClientRect().top -
            pane.getBoundingClientRect().top;

        pane.scrollTo({ top: Math.max(0, nextTop), behavior: 'smooth' });

        // Evita que o browser empurre a página e coloque a história sob a barra.
        window.requestAnimationFrame(() => {
            window.scrollTo(0, pageY);
        });
    };

    useEffect(() => {
        const id = pendingScrollId.current;
        if (!id || id !== activeId) return undefined;

        const frame = window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
                scrollMilestoneIntoPane(id);
                pendingScrollId.current = null;
                window.setTimeout(() => {
                    skipObserver.current = false;
                }, 750);
            });
        });

        return () => window.cancelAnimationFrame(frame);
    }, [activeId, expandedId]); // eslint-disable-line react-hooks/exhaustive-deps

    const goTo = (id) => {
        skipObserver.current = true;
        pendingScrollId.current = id;
        setActiveId(id);
        setExpandedId(id);
    };

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.target instanceof HTMLElement) {
                const tag = event.target.tagName;
                if (
                    tag === 'INPUT' ||
                    tag === 'TEXTAREA' ||
                    event.target.isContentEditable
                ) {
                    return;
                }
            }

            if (event.key === 'ArrowLeft' && activeIndex > 0) {
                event.preventDefault();
                goTo(milestones[activeIndex - 1].id);
            }
            if (
                event.key === 'ArrowRight' &&
                activeIndex < milestones.length - 1
            ) {
                event.preventDefault();
                goTo(milestones[activeIndex + 1].id);
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [activeIndex, milestones]); // eslint-disable-line react-hooks/exhaustive-deps

    const toggleExpand = (id) => {
        setExpandedId((prev) => (prev === id ? null : id));
        setActiveId(id);
    };

    const goPrevMilestone = () => {
        if (activeIndex <= 0) return;
        goTo(milestones[activeIndex - 1].id);
    };

    const goNextMilestone = () => {
        if (activeIndex >= milestones.length - 1) return;
        goTo(milestones[activeIndex + 1].id);
    };

    const ActiveIcon = MILESTONE_ICONS[activeId] || FiZap;

    return (
        <main className={styles.page}>
            <div
                className={styles.progress}
                style={{ transform: `scaleX(${progress})` }}
                aria-hidden="true"
            />

            <header className={styles.hero}>
                <div className={styles.hero__glow} aria-hidden="true" />
                <Link to="/sobre" className={styles.back}>
                    <FiArrowLeft aria-hidden size={16} />
                    {isPt ? 'Voltar para Sobre' : 'Back to About'}
                </Link>
                <p className={styles.eyebrow}>
                    {isPt ? 'Trajetória pessoal' : 'Personal journey'}
                </p>
                <h1>
                    {isPt ? 'Minha vida em linha do tempo' : 'My life on a timeline'}
                </h1>
                <p className={styles.lead}>
                    {isPt
                        ? 'Da curiosidade com brinquedos desmontados até soluções fullstack em cloud — um caminho de esforço, aprendizado e reinvenção.'
                        : 'From dismantling toys out of curiosity to fullstack cloud solutions — a path of effort, learning and reinvention.'}
                </p>
                <ul className={styles.hero__chips}>
                    <li>
                        <span className={styles.hero__chipIcon} aria-hidden="true">
                            <FiZap size={14} />
                        </span>
                        {isPt
                            ? `${milestones.length} marcos`
                            : `${milestones.length} milestones`}
                    </li>
                    <li>
                        <span className={styles.hero__chipIcon} aria-hidden="true">
                            <FiBookOpen size={14} />
                        </span>
                        1992 — {isPt ? 'hoje' : 'today'}
                    </li>
                    <li>
                        <span className={styles.hero__chipIcon} aria-hidden="true">
                            <FiCloud size={14} />
                        </span>
                        {isPt ? 'FullStack & cloud' : 'FullStack & cloud'}
                    </li>
                </ul>
            </header>

            <section className={styles.storyBoard}>
                <div className={styles.navigator} aria-label={isPt ? 'Navegação' : 'Navigation'}>
                    <div className={styles.navigator__top}>
                        <div className={styles.navigator__current}>
                            <span className={styles.navigator__icon} aria-hidden="true">
                                <ActiveIcon size={18} />
                            </span>
                            <div>
                                <p className={styles.navigator__label}>
                                    {isPt ? 'Marco atual' : 'Current milestone'}
                                </p>
                                <p className={styles.navigator__title}>
                                    <strong>
                                        {activeIndex + 1}/{milestones.length}
                                    </strong>
                                    <span>{milestones[activeIndex]?.title}</span>
                                </p>
                            </div>
                        </div>
                        <p className={styles.navigator__hint}>
                            {isPt ? 'Use ← → no teclado' : 'Use ← → on keyboard'}
                        </p>
                    </div>

                    <div className={styles.journeyBar} aria-hidden="true">
                        <div
                            className={styles.journeyBar__fill}
                            style={{ transform: `scaleX(${journeyProgress})` }}
                        />
                    </div>

                    <nav
                        className={styles.carousel}
                        aria-label={
                            isPt ? 'Navegar pela linha do tempo' : 'Browse the timeline'
                        }
                    >
                        <button
                            type="button"
                            className={styles.carousel__arrow}
                            onClick={goPrevMilestone}
                            disabled={activeIndex === 0}
                            aria-label={isPt ? 'Marco anterior' : 'Previous milestone'}
                        >
                            <FiChevronLeft aria-hidden size={22} />
                        </button>

                        <div className={styles.carousel__viewport}>
                            <ol
                                className={styles.carousel__track}
                                style={{
                                    gridTemplateColumns: `repeat(${visibleMilestones.length}, minmax(0, 1fr))`,
                                }}
                                key={`${carouselStart}-${carouselWindow}`}
                            >
                                {visibleMilestones.map((m) => {
                                    const isActive = m.id === activeId;
                                    const Icon = MILESTONE_ICONS[m.id] || FiZap;

                                    return (
                                        <li key={m.id} className={styles.carousel__slide}>
                                            <button
                                                type="button"
                                                className={`${styles.carousel__btn} ${
                                                    isActive ? styles.carousel__btnActive : ''
                                                }`}
                                                onMouseDown={(event) => event.preventDefault()}
                                                onClick={() => goTo(m.id)}
                                                aria-current={isActive ? 'step' : undefined}
                                            >
                                                <span
                                                    className={styles.carousel__icon}
                                                    aria-hidden="true"
                                                >
                                                    <Icon size={15} />
                                                </span>
                                                <span className={styles.carousel__year}>
                                                    {m.year}
                                                </span>
                                                <span className={styles.carousel__age}>
                                                    {m.age}
                                                </span>
                                            </button>
                                        </li>
                                    );
                                })}
                            </ol>
                        </div>

                        <button
                            type="button"
                            className={styles.carousel__arrow}
                            onClick={goNextMilestone}
                            disabled={activeIndex === milestones.length - 1}
                            aria-label={isPt ? 'Próximo marco' : 'Next milestone'}
                        >
                            <FiChevronRight aria-hidden size={22} />
                        </button>
                    </nav>

                    <div
                        className={styles.dots}
                        role="tablist"
                        aria-label={isPt ? 'Marcos' : 'Milestones'}
                    >
                        {milestones.map((m) => (
                            <button
                                key={m.id}
                                type="button"
                                role="tab"
                                aria-selected={m.id === activeId}
                                aria-label={`${m.year} — ${m.title}`}
                                className={`${styles.dots__item} ${
                                    m.id === activeId ? styles.dots__itemActive : ''
                                }`}
                                onMouseDown={(event) => event.preventDefault()}
                                onClick={() => goTo(m.id)}
                            />
                        ))}
                    </div>
                </div>

                <div
                    className={styles.timelinePane}
                    ref={timelinePaneRef}
                    tabIndex={0}
                    aria-label={isPt ? 'Histórias da linha do tempo' : 'Timeline stories'}
                >
                    <ol className={styles.timeline}>
                        {milestones.map((m, index) => {
                            const isActive = m.id === activeId;
                            const isOpen = expandedId === m.id;
                            const isLast = index === milestones.length - 1;
                            const Icon = MILESTONE_ICONS[m.id] || FiZap;

                            return (
                                <li
                                    key={m.id}
                                    id={`marco-${m.id}`}
                                    data-id={m.id}
                                    ref={(node) => {
                                        itemRefs.current[m.id] = node;
                                    }}
                                    className={`${styles.item} ${
                                        isActive ? styles.itemActive : ''
                                    } ${isOpen ? styles.itemOpen : ''} ${
                                        isLast ? styles.itemLast : ''
                                    }`}
                                >
                                    <div className={styles.item__rail} aria-hidden="true">
                                        <span className={styles.item__dot}>
                                            <Icon size={12} className={styles.item__dotIcon} />
                                        </span>
                                    </div>

                                    <article className={styles.card}>
                                        <button
                                            type="button"
                                            className={styles.card__header}
                                            onClick={() => toggleExpand(m.id)}
                                            aria-expanded={isOpen}
                                            aria-controls={`timeline-body-${m.id}`}
                                        >
                                            <div className={styles.card__top}>
                                                <span
                                                    className={styles.card__icon}
                                                    aria-hidden="true"
                                                >
                                                    <Icon size={18} />
                                                </span>
                                                <div className={styles.card__labels}>
                                                    <span className={styles.card__tag}>
                                                        {m.tag}
                                                    </span>
                                                    <span className={styles.card__age}>
                                                        {m.age}
                                                    </span>
                                                </div>
                                                <span
                                                    className={styles.card__toggle}
                                                    aria-hidden="true"
                                                >
                                                    {isOpen ? (
                                                        <FiMinus size={16} strokeWidth={2.5} />
                                                    ) : (
                                                        <FiPlus size={16} strokeWidth={2.5} />
                                                    )}
                                                </span>
                                            </div>

                                            <div className={styles.card__titleRow}>
                                                <h2>
                                                    <span className={styles.card__year}>
                                                        {m.year}
                                                    </span>
                                                    {m.title}
                                                </h2>
                                            </div>
                                            <p className={styles.card__summary}>{m.summary}</p>
                                            <span className={styles.card__hint}>
                                                {isOpen
                                                    ? isPt
                                                        ? 'Toque para recolher'
                                                        : 'Tap to collapse'
                                                    : isPt
                                                      ? 'Toque para ler a história'
                                                      : 'Tap to read the story'}
                                            </span>
                                        </button>

                                        <div
                                            id={`timeline-body-${m.id}`}
                                            className={`${styles.card__body} ${
                                                isOpen ? styles.card__bodyOpen : ''
                                            }`}
                                        >
                                            <div className={styles.card__bodyInner}>
                                                <p>{m.body}</p>
                                                <div className={styles.card__nav}>
                                                    {index > 0 && (
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                goTo(milestones[index - 1].id)
                                                            }
                                                        >
                                                            <FiArrowLeft size={14} aria-hidden />
                                                            {milestones[index - 1].year}
                                                        </button>
                                                    )}
                                                    {index < milestones.length - 1 && (
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                goTo(milestones[index + 1].id)
                                                            }
                                                        >
                                                            {milestones[index + 1].year}
                                                            <FiArrowRight size={14} aria-hidden />
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </section>

            <section className={styles.closing} aria-labelledby="timeline-closing">
                <span className={styles.closing__icon} aria-hidden="true">
                    <FiCloud size={22} />
                </span>
                <h2 id="timeline-closing">
                    {isPt ? 'O próximo capítulo' : 'The next chapter'}
                </h2>
                <p>
                    {isPt
                        ? 'Se você tem uma ideia e precisa de alguém para torná-la real — robusta, escalável e de baixo custo — vamos conversar.'
                        : 'If you have an idea and need someone to make it real — robust, scalable and cost-efficient — let’s talk.'}
                </p>
                <div className={styles.closing__actions}>
                    <Link to="/projetos" className={`${styles.cta} ${styles.ctaPrimary}`}>
                        {isPt ? 'Ver projetos' : 'View projects'}
                        <FiArrowRight size={16} aria-hidden />
                    </Link>
                    <Link to="/contato" className={`${styles.cta} ${styles.ctaSecondary}`}>
                        {isPt ? 'Falar comigo' : 'Get in touch'}
                    </Link>
                </div>
            </section>
        </main>
    );
}
