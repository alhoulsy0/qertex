"use client";

import { motion } from "framer-motion";

export function BackgroundMesh() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-slate-50">

            {/* Drifting Blobs */}
            {/* 1. Light Blue */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-blue-100/60 rounded-full blur-[100px]"
            />

            {/* 2. Soft Teal */}
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 50, 0]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                className="absolute top-[20%] right-[-20%] w-[60vw] h-[60vw] bg-teal-50/60 rounded-full blur-[120px]"
            />

            {/* 3. White / Highlight */}
            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] bg-white/80 rounded-full blur-[100px]"
            />

            {/* Noise Texture Overlay */}
            <div
                className="absolute inset-0 opacity-[0.4] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
}
