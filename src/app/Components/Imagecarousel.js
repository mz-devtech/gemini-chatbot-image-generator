'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ImageCarousel({
    images,
    autoPlayInterval = 5000,
    aspectRatio = 16 / 9,
}) {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const count = images.length;
    const timerRef = useRef(null);

    const goTo = useCallback(
        (next) => {
            setDirection(next > index || (index === count - 1 && next === 0) ? 1 : -1);
            setIndex(((next % count) + count) % count);
        },
        [index, count]
    );

    const next = useCallback(() => goTo(index + 1), [goTo, index]);
    const prev = useCallback(() => goTo(index - 1), [goTo, index]);

    // autoplay
    useEffect(() => {
        if (!autoPlayInterval) return;
        timerRef.current = setInterval(next, autoPlayInterval);
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [next, autoPlayInterval]);

    // keyboard nav
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [next, prev]);

    const pause = () => timerRef.current && clearInterval(timerRef.current);
    const resume = () => {
        if (!autoPlayInterval) return;
        timerRef.current = setInterval(next, autoPlayInterval);
    };

    // helper to compute the relative position (-2,-1,0,1,2...) of a slide vs active
    const relativeIndex = (i) => {
        let diff = i - index;
        if (diff > count / 2) diff -= count;
        if (diff < -count / 2) diff += count;
        return diff;
    };

    return (
        <div
            className="relative w-full select-none"
            onMouseEnter={pause}
            onMouseLeave={resume}
        >
            <div
                className="relative mx-auto flex items-center justify-center overflow-hidden"
                style={{ aspectRatio, maxWidth: '1100px' }}
            >
                {images.map((img, i) => {
                    const rel = relativeIndex(i);
                    // only render neighbors within +/-2 for perf
                    if (Math.abs(rel) > 2) return null;

                    const isActive = rel === 0;
                    const scale = isActive ? 1 : 0.82 - Math.abs(rel) * 0.06;
                    const opacity = isActive ? 1 : Math.abs(rel) === 1 ? 0.45 : 0.15;
                    const translateXPercent = rel * 62; // how far each neighbor peeks
                    const zIndex = 10 - Math.abs(rel);

                    return (
                        <motion.div
                            key={img.src + i}
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ zIndex }}
                            animate={{
                                x: `${translateXPercent}%`,
                                scale,
                                opacity,
                            }}
                            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                            onClick={() => !isActive && goTo(i)}
                        >
                            <div
                                className={`relative h-full w-full overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10 ${!isActive ? 'cursor-pointer' : ''
                                    }`}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="h-full w-full object-cover"
                                    draggable={false}
                                />
                                {!isActive && (
                                    <div className="absolute inset-0 bg-slate-950/40" />
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* prev / next hit areas */}
            <button
                aria-label="Previous slide"
                onClick={prev}
                className="group absolute left-0 top-0 h-full w-1/4 cursor-pointer"
            >
                <span className="sr-only">Previous</span>
            </button>
            <button
                aria-label="Next slide"
                onClick={next}
                className="group absolute right-0 top-0 h-full w-1/4 cursor-pointer"
            >
                <span className="sr-only">Next</span>
            </button>

            {/* dots */}
            <div className="mt-6 flex items-center justify-center gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => goTo(i)}
                        className="h-2.5 rounded-full transition-all duration-300"
                        style={{
                            width: i === index ? '20px' : '10px',
                            backgroundColor:
                                i === index ? '#a3e635' : 'rgba(255,255,255,0.25)',
                        }}
                    />
                ))}
            </div>
        </div>
    );
}