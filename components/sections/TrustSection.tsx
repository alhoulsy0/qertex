"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

const AnimatedCounter = ({ from, to, suffix = "", label }: { from: number; to: number; suffix?: string; label: string }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "-10%" });

    useEffect(() => {
        const node = nodeRef.current;
        if (!node) return;

        // Initialize immediately to avoid empty flash
        node.textContent = from.toString();

        if (inView) {
            const controls = animate(from, to, {
                duration: 2.5,
                ease: "easeOut",
                onUpdate(value) {
                    node.textContent = Math.round(value).toString();
                },
            });
            return () => controls.stop();
        }
    }, [from, to, inView]);

    return (
        <div className="flex flex-col items-start justify-center">
            <h3 className="text-4xl md:text-5xl font-bold font-sora text-[#0052FF] tracking-tight mb-2">
                <span ref={nodeRef} />
                {suffix}
            </h3>
            <p className="text-sm font-semibold font-inter text-slate-600 uppercase tracking-wide">{label}</p>
        </div>
    );
};

const ExpertiseRotator = () => {
    const topics = ["VAT Implementation", "Excise Tax Systems", "DMT Integration"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % topics.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [topics.length]);

    return (
        <div className="flex flex-col items-start justify-center h-full">
            <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-inter">Live Expertise In:</span>
            </div>

            <div className="h-8 overflow-hidden relative w-full">
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                        key={topics[index]}
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                        className="text-lg md:text-xl font-bold leading-tight bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent"
                    >
                        {topics[index]}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export const TrustSection = () => {
    return (
        <section className="relative w-full py-24 px-4 md:px-0">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full relative z-10"
                >
                    {/* Glassmorphism Bar - Best-in-Market */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full bg-white/40 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-12 shadow-sm">

                        {/* Column 1: Experience */}
                        <AnimatedCounter from={0} to={15} suffix="+" label="Years of Experience" />

                        {/* Column 2: Global Offices */}
                        <AnimatedCounter from={0} to={3} suffix="" label="Global Offices" />

                        {/* Column 3: Clients Served */}
                        <AnimatedCounter from={0} to={50} suffix="+" label="Clients Served" />

                        {/* Column 4: Expertise Rotator */}
                        <ExpertiseRotator />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
