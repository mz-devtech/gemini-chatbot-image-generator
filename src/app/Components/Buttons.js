"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import "../css/Buttons.css";

const BUTTON_LABELS = [
    "Beautiful",
    "Moody Lighting",
    "Backlight",
    "Color Grading",
    "Depth Of Field",
    "TXAA",
    "Beautiful",
    "Moody Lighting",
    "Backlight",
    "Color Grading",
    "Depth Of Field",
    "TXAA",
];

// Duplicated once so the -50% translateX loop is seamless
const BUTTONS = [...BUTTON_LABELS, ...BUTTON_LABELS];

const Buttons = () => {
    const wrapperRef = useRef(null);
    const [bleed, setBleed] = useState(null); // null until measured, avoids a flash of wrong size

    useLayoutEffect(() => {
        const measure = () => {
            const el = wrapperRef.current;
            if (!el || !el.parentElement) return;

            // How far the wrapper's parent currently sits from the real left
            // edge of the browser window. This is the ONLY number that
            // matters - it already accounts for any padding, max-width,
            // mx-auto, or nested containers above it, because it's read
            // directly from the rendered layout instead of assumed.
            const parentRect = el.parentElement.getBoundingClientRect();

            // clientWidth excludes the scrollbar, matching the same
            // coordinate space getBoundingClientRect() uses. Using
            // window.innerWidth here (which INCLUDES the scrollbar)
            // was the cause of the horizontal overflow/scrollbar bug.
            const viewportWidth = document.documentElement.clientWidth;

            setBleed({
                width: `${viewportWidth}px`,
                marginLeft: `${-parentRect.left}px`,
            });
        };

        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    return (
        <div
            ref={wrapperRef}
            className="marquee-wrapper"
            // Fall back to the old vw approach only for the very first frame
            // before JS has measured anything (prevents a layout jump).
            style={
                bleed ?? {
                    width: "100%",
                    marginLeft: "0px",
                }
            }
        >
            <div className="marquee-track py-4 lg:py-4">
                {BUTTONS.map((text, index) => (
                    <button
                        key={index}
                        className="marquee-btn rounded-2xl bg-[#171a24] text-[#fdfdfd] px-6 py-2 lg:px-10 lg:py-5 font-semibold whitespace-nowrap shrink-0"
                    >
                        {text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Buttons;