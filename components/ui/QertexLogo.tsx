"use client";

import { motion } from "framer-motion";

export function QertexLogo() {
    const gradientId = "unified-chroma-gradient";

    return (
        <div className="flex flex-col select-none cursor-pointer group items-start">
            {/* Unified Wordmark SVG */}
            <div className="relative">
                <svg
                    width="190"
                    height="46"
                    viewBox="0 0 190 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="overflow-visible"
                >
                    <defs>
                        {/* Global Gradient Definition - Flows across the entire width */}
                        <linearGradient
                            id={gradientId}
                            x1="0" y1="0" x2="190" y2="0"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#0052FF">
                                <animate attributeName="stop-color" values="#0052FF; #7000FF; #00D1FF; #0052FF" dur="6s" repeatCount="indefinite" />
                            </stop>
                            <stop offset="0.5" stopColor="#7000FF">
                                <animate attributeName="stop-color" values="#7000FF; #00D1FF; #0052FF; #7000FF" dur="6s" repeatCount="indefinite" />
                            </stop>
                            <stop offset="1" stopColor="#00D1FF">
                                <animate attributeName="stop-color" values="#00D1FF; #0052FF; #7000FF; #00D1FF" dur="6s" repeatCount="indefinite" />
                            </stop>
                        </linearGradient>
                    </defs>

                    {/* Custom "Q" */}
                    <g>
                        {/* The Circle */}
                        <path
                            d="M 23 23 m -16 0 a 16 16 0 1 0 32 0 a 16 16 0 1 0 -32 0"
                            stroke={`url(#${gradientId})`}
                            strokeWidth="8.5"
                            fill="none"
                        />

                        {/* The Tail - Sharp diagonal extending towards 'E' */}
                        {/* Visual bridge: Starts effectively inside, cuts out and points to E */}
                        <path
                            d="M 28 30 L 42 44"
                            stroke={`url(#${gradientId})`}
                            strokeWidth="8.5"
                            strokeLinecap="square"
                        />
                    </g>

                    {/* "ERTEX" Text - Positioned tightly next to Q */}
                    <text
                        x="48"
                        y="38"
                        fontFamily="var(--font-sora), sans-serif"
                        fontWeight="800"
                        fontSize="38"
                        fill={`url(#${gradientId})`}
                        className="tracking-tighter"
                        style={{ fontVariationSettings: '"wght" 800' }}
                    >
                        ERTEX
                    </text>
                </svg>
            </div>

            {/* Slogan Reveal Animation */}
            <div className="flex mt-1 overflow-hidden">
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.03 } }
                    }}
                    className="text-[0.6rem] font-medium tracking-[0.14em] text-slate-500 uppercase font-[family-name:var(--font-sora)] flex"
                >
                    {/* Split text into characters for 'terminal reveal' effect */}
                    {Array.from("Global Intelligence. Local Precision.").map((char, index) => (
                        <motion.span
                            key={index}
                            variants={{
                                hidden: { opacity: 0, filter: "blur(4px)" },
                                visible: { opacity: 1, filter: "blur(0px)" }
                            }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                    {/* Blinking Cursor */}
                    <motion.span
                        animate={{ opacity: [1, 1, 0, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear", times: [0, 0.5, 0.5, 1] }}
                        className="w-[2px] h-[10px] bg-[var(--color-cobalt)] ml-1 self-center"
                    />
                </motion.p>
            </div>
        </div>
    );
}
