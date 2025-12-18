"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-cobalt)]/10 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-mint)]/10 rounded-full blur-3xl animate-[pulse_10s_ease-in-out_infinite_reverse]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                        Engineering the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cobalt)] to-[var(--color-mint)]">
                            Intelligence
                        </span>{" "}
                        of Tomorrow.
                    </h1>

                    <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                        A Tri-Continental Powerhouse. From the tech hubs of Canada and Jordan to the innovation peaks of the UAE.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button size="lg">Start Your Journey</Button>
                        <Button size="lg" variant="secondary">Explore Solutions</Button>
                    </div>
                </motion.div>

                {/* Visual: Glass Sphere Representation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative h-[500px] w-full flex items-center justify-center"
                >
                    <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                        {/* Core Sphere */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md shadow-[var(--glass-shadow)]"
                        />

                        {/* Orbiting Rings */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[-20px] rounded-full border border-[var(--color-cobalt)]/20 border-t-[var(--color-cobalt)]/80"
                            style={{ borderRadius: "45%" }}
                        />

                        <motion.div
                            animate={{ rotate: 180 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[-60px] rounded-full border border-[var(--color-mint)]/20 border-b-[var(--color-mint)]/80"
                            style={{ borderRadius: "38%" }}
                        />

                        {/* Glowing Core */}
                        <div className="absolute inset-20 rounded-full bg-gradient-to-tr from-[var(--color-cobalt)]/20 to-[var(--color-mint)]/20 blur-xl animate-pulse" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
