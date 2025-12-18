"use client";

import { SpotlightCard } from "../ui/SpotlightCard";
import { FadeIn } from "../ui/FadeIn";
import { Button } from "../ui/Button";
import { Bot, FileCheck } from "lucide-react";

export function InnovationHub() {
    return (
        <section id="products" className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <FadeIn className="text-center mb-16">
                    <span className="text-[var(--color-cobalt)] font-semibold tracking-wider text-sm uppercase">Proprietary Technology</span>
                    <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">The Innovation Hub</h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Tools designed to define the next generation of digital excellence.
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Product 1: Faheem - Neural Glow */}
                    <FadeIn delay={0.1}>
                        <SpotlightCard className="h-full p-8 flex flex-col group border border-slate-100 transition-all duration-500 hover:border-[var(--color-cobalt)]/50 hover:shadow-[0_0_40px_-10px_rgba(0,82,255,0.3)]">
                            <div className="mb-6 relative">
                                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 w-fit text-[var(--color-cobalt)] relative z-10">
                                    <Bot size={40} strokeWidth={1.5} />
                                </div>
                                <div className="absolute inset-0 bg-[var(--color-cobalt)]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                            </div>
                            <h3 className="text-3xl font-bold mb-3 font-[family-name:var(--font-sora)]">Faheem</h3>
                            <p className="text-sm font-semibold text-[var(--color-cobalt)] mb-4 uppercase tracking-wide">Agentic QA Intelligence</p>
                            <p className="text-slate-600 leading-relaxed text-lg mb-8 flex-grow">
                                AI agent that generates test cases, logs defects, and manages the end-to-end testing cycle autonomously.
                            </p>
                            <a href="mailto:info@qertex.com"><Button variant="secondary" className="w-full">Request Demo</Button></a>
                        </SpotlightCard>
                    </FadeIn>

                    {/* Product 2: Compliance Assessor - Status Scan */}
                    <FadeIn delay={0.2}>
                        <SpotlightCard className="h-full p-8 flex flex-col group relative overflow-hidden border border-slate-100">
                            {/* Scanning Line Animation */}
                            <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-mint)] to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_linear_infinite] z-0 pointer-events-none" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100/50 w-fit text-[var(--color-mint)]">
                                    <FileCheck size={40} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-3xl font-bold mb-3 font-[family-name:var(--font-sora)]">Compliance Assessor</h3>
                                <p className="text-sm font-semibold text-[var(--color-mint)] mb-4 uppercase tracking-wide">Enterprise Governance</p>
                                <p className="text-slate-600 leading-relaxed text-lg mb-8 flex-grow">
                                    Professional tool for assessing org compliance against ISO 9001, TMMi, and global standards.
                                </p>
                                <a href="mailto:info@qertex.com"><Button variant="secondary" className="w-full">Start Assessment</Button></a>
                            </div>
                        </SpotlightCard>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
