import React from "react";
import styles from "../css/Buttons.module.css";

const Buttons = () => {
    const buttons = [
        "Beautiful",
        "Moody Lighting",
        "Backlight",
        "Color Grading",
        "Depth Of Field",
        "TXAA",
    ];

    // Duplicate for seamless scrolling
    const loopButtons = [...buttons, ...buttons];

    return (
        <div className={styles.wrapper}>
            <div className={styles.track}>
                {loopButtons.map((text, index) => (
                    <button
                        key={index}
                        className="rounded-2xl bg-[#171a24] text-white px-10 py-5 font-semibold whitespace-nowrap shrink-0"
                    >
                        {text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Buttons;