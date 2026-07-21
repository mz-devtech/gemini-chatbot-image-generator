import React from "react";
import "../css/Buttons.css";

const Buttons = () => {
    const buttons = [
        "Beautiful ",
        "Moody Lighting",
        "Backlight",
        "Color Grading",
        "Depth Of Field",
        "TXAA",
        "Beautiful ",
        "Moody Lighting",
        "Backlight",
        "Color Grading",
        "Depth Of Field",
        "TXAA",

    ];

    return (
        <div className="marquee-wrapper">
            <div className="marquee-track">
                {buttons.map((text, index) => (
                    <button
                        key={`a-${index}`}
                        className="marquee-btn rounded-2xl bg-[#171a24] text-white px-6 py-2 lg:px-10 lg:py-5 font-semibold whitespace-nowrap shrink-0"
                    >
                        {text}
                    </button>
                ))}
                {buttons.map((text, index) => (
                    <button
                        key={`b-${index}`}
                        className="marquee-btn rounded-2xl bg-[#171a24] text-white px-6 py-2 lg:px-10 lg:py-5 font-semibold whitespace-nowrap shrink-0"
                    >
                        {text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Buttons;