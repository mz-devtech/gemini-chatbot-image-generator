'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function SkillBar({ label, percent, delay = 0 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [displayPercent, setDisplayPercent] = useState(0);

    // animate the numeric label in sync with the bar fill
    useEffect(() => {
        if (!isInView) return;
        const start = performance.now();
        const duration = 1200;

        const tick = (now) => {
            const elapsed = now - start - delay * 1000;
            if (elapsed < 0) {
                requestAnimationFrame(tick);
                return;
            }
            const progress = Math.min(elapsed / duration, 1);
            setDisplayPercent(Math.round(progress * percent));
            if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [isInView, percent, delay]);

    return (
        <div ref={ref} className="mb-8 last:mb-0 mx-10">
            <div className="mb-3 flex items-center justify-between">
                <span className="text-xl font-bold text-[#fdfdfd]">{label}</span>
                <span className="text-xl font-bold text-[#fdfdfd]">
                    {displayPercent}%
                </span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-500"
                    initial={{ width: '0%' }}
                    animate={{ width: isInView ? `${percent}%` : '0%' }}
                    transition={{ duration: 1.2, delay, ease: 'easeOut' }}
                />
            </div>
        </div>
    );
}

export default function SkillsSection({
    eyebrow = 'OUR PRACTICE',
    heading = 'Skills',
    paragraphs = [
        'Dict sunt explicabo nemo ipsam voluptatem voluptas. Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis exercitation.',
        'Dicta sunt explicabo. Nemo enim ipsam voluptatem qui aspernatur aut odit aut fugit, sed quia consequuntur.',
    ],
    skills = [
        { label: 'Design', percent: 80 },
        { label: 'Technology', percent: 90 },
        { label: 'Animation', percent: 85 },
    ],
}) {
    return (
        <section className="w-[96%] mx-auto py-5 md:py-7 lg:py-10">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
                {/* left: skill bars */}
                <div className="flex flex-col justify-center">
                    {skills.map((skill, i) => (
                        <SkillBar
                            key={skill.label}
                            label={skill.label}
                            percent={skill.percent}
                            delay={i * 0.15}
                        />
                    ))}
                </div>

                {/* right: copy */}
                <div className="flex flex-col justify-center">
                    <h6 className="uppercase text-[#fdfdfd] font-bold text-xl leading-5 tracking-[0.9] opacity-100">
                        {eyebrow}
                    </h6>
                    <p className="relative text-[#fdfdfd] lg:leading-[80px] text-3xl lg:mt-7 mt-3 font-bold lg:text-7xl">
                        {heading}
                    </p>
                    {paragraphs.map((p, i) => (
                        <p
                            key={i}
                            className={`text-[#a9a7b0] text-xl font-medium opacity-50 ${i < paragraphs.length - 1 ? 'mb-4' : 'mt-3'
                                }`}
                        >
                            {p}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}