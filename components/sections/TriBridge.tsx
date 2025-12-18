"use client";

import { motion } from "framer-motion";

export function TriBridge() {
    // Locations are placed via absolute positioning for simplified visual demo

    return (
        <section id="global-reach" className="py-32 relative overflow-hidden bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="mb-12 text-center">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium uppercase tracking-wider mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        System Operational
                    </span>
                    <h2 className="text-4xl font-bold mb-4">The Tri-Bridge Network</h2>
                    <p className="text-slate-500">Real-time collaboration across three time zones.</p>
                </div>

                {/* Schematic Map Visualization */}
                <div className="relative h-[400px] w-full max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px]" />

                    {/* Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <motion.path
                            d="M 120,120 Q 400,100 500,180 T 650,220"
                            // Approximation of path between points based on relative positions for a nice curve
                            // Ideally needs to match the dot positions precisely.
                            // Let's rely on absolute positioning for dots and simpler SVG lines.
                            fill="none"
                            stroke="url(#gradient-line)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }} // Changed layoutId to basic animate
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                        <defs>
                            <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="var(--color-cobalt)" />
                                <stop offset="100%" stopColor="var(--color-mint)" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Custom Path for Pulse Animation - simplified for this demo without precise coordinates logic */}
                    <div className="absolute inset-0">
                        {/* We will just place dots and connect them visually with CSS for reliability without complex SVG math in one-shot */}

                        {/* Ottawa */}
                        <div className="absolute top-[30%] left-[15%] flex flex-col items-center group cursor-pointer">
                            <div className="relative">
                                <div className="w-4 h-4 rounded-full bg-[var(--color-cobalt)] z-10 relative shadow-lg shadow-blue-500/50 group-hover:scale-125 transition-transform" />
                                <div className="absolute inset-0 rounded-full bg-[var(--color-cobalt)] animate-ping opacity-75" />
                            </div>
                            <span className="mt-3 text-sm font-semibold text-slate-700 bg-white/80 px-2 py-1 rounded-md backdrop-blur-sm">Ottawa</span>
                            <span className="text-xs text-slate-400">HQ • Innovation</span>
                        </div>

                        {/* Amman */}
                        <div className="absolute top-[45%] left-[50%] flex flex-col items-center group cursor-pointer">
                            <div className="relative">
                                <div className="w-4 h-4 rounded-full bg-[var(--color-cobalt)] z-10 relative shadow-lg shadow-blue-500/50 group-hover:scale-125 transition-transform" />
                                <div className="absolute inset-0 rounded-full bg-[var(--color-cobalt)] animate-ping opacity-75 delay-700" />
                            </div>
                            <span className="mt-3 text-sm font-semibold text-slate-700 bg-white/80 px-2 py-1 rounded-md backdrop-blur-sm">Amman</span>
                            <span className="text-xs text-slate-400">R&D Center</span>
                        </div>

                        {/* Dubai */}
                        <div className="absolute top-[55%] left-[75%] flex flex-col items-center group cursor-pointer">
                            <div className="relative">
                                <div className="w-4 h-4 rounded-full bg-[var(--color-mint)] z-10 relative shadow-lg shadow-teal-500/50 group-hover:scale-125 transition-transform" />
                                <div className="absolute inset-0 rounded-full bg-[var(--color-mint)] animate-ping opacity-75 delay-1000" />
                            </div>
                            <span className="mt-3 text-sm font-semibold text-slate-700 bg-white/80 px-2 py-1 rounded-md backdrop-blur-sm">Dubai</span>
                            <span className="text-xs text-slate-400">Expansion Hub</span>
                        </div>

                        {/* Connecting Lines (CSS approx) */}
                        {/* Ottawa -> Amman */}
                        <div className="absolute top-[32%] left-[17%] w-[34%] h-[1px] bg-gradient-to-r from-blue-500 to-blue-400 opacity-20 transform rotate-[12deg] origin-left" />
                        {/* Amman -> Dubai */}
                        <div className="absolute top-[47%] left-[51%] w-[25%] h-[1px] bg-gradient-to-r from-blue-400 to-teal-400 opacity-20 transform rotate-[10deg] origin-left" />

                    </div>
                </div>
            </div>
        </section>
    );
}
