"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, MapPin, Globe, LayoutTemplate, ArrowRight } from "lucide-react";
import { BackgroundMesh } from "@/components/ui/BackgroundMesh";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export default function SoftwareTestingPage() {
    return (
        <main className="min-h-screen bg-white text-slate-900 overflow-hidden font-inter relative">
            <BackgroundMesh />

            {/* Navigation / Back Button */}
            <div className="absolute top-6 left-6 z-50">
                <Link href="/">
                    <Button variant="ghost" className="gap-2 backdrop-blur-md bg-white/50 border border-white/40 hover:bg-white/80 transition-all">
                        <ArrowLeft size={16} /> Back to Home
                    </Button>
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-5xl text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-[var(--color-cobalt)] text-sm font-semibold mb-6 border border-blue-100">
                        Core Expertise
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold font-sora text-slate-900 mb-6 tracking-tight">
                        Mastering Software Quality & <br />
                        <span className="text-[var(--color-cobalt)]">Digital Assurance</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        15+ years of ensuring flawless performance through precision testing and global standards.
                        We don't just find bugs; we engineer resilience.
                    </p>
                </div>
            </section>

            {/* Engagement Models */}
            <section className="py-20 px-6 relative z-10">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold font-sora mb-4">Flexible Engagement Models</h2>
                        <p className="text-slate-500">Tailored to fit your operational needs and scale.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <GlassCard className="p-8 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6 text-[var(--color-cobalt)]">
                                <CheckCircle2 size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-sora">Managed Services</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                End-to-end testing ownership where Qertex manages the entire QA lifecycle, from strategy to execution and reporting.
                            </p>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> SLA-driven delivery</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Full accountability</li>
                            </ul>
                        </GlassCard>

                        <GlassCard className="p-8 hover:-translate-y-2 transition-transform duration-300 border-t-4 border-t-[var(--color-cobalt)]">
                            <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-6 text-[var(--color-mint)]">
                                <LayoutTemplate size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-sora">Time & Material (T&M)</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                Flexible scaling for evolving projects. Pay only for the expert hours you need, adapting instantly to changing requirements.
                            </p>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Agile adaptability</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Cost-efficient scaling</li>
                            </ul>
                        </GlassCard>

                        <GlassCard className="p-8 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-6 text-purple-600">
                                <Globe size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-sora">Staff Augmentation</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                Seamlessly integrate our elite testers into your existing team to boost capacity and inject specialized expertise.
                            </p>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Instant onboard</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Knowledge transfer</li>
                            </ul>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Delivery Modes */}
            <section className="py-20 bg-slate-50/50 border-y border-slate-100 relative z-10">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
                        <div className="px-4 py-4">
                            <div className="mx-auto w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 mb-4 shadow-sm">
                                <MapPin size={20} />
                            </div>
                            <h4 className="font-bold text-lg mb-2">Onsite</h4>
                            <p className="text-sm text-slate-500">High-security integration at your physical location.</p>
                        </div>
                        <div className="px-4 py-4">
                            <div className="mx-auto w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 mb-4 shadow-sm">
                                <Globe size={20} />
                            </div>
                            <h4 className="font-bold text-lg mb-2">Remote</h4>
                            <p className="text-sm text-slate-500">High-efficiency testing delivered from our global centers.</p>
                        </div>
                        <div className="px-4 py-4">
                            <div className="mx-auto w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 mb-4 shadow-sm">
                                <LayoutTemplate size={20} />
                            </div>
                            <h4 className="font-bold text-lg mb-2">Hybrid</h4>
                            <p className="text-sm text-slate-500">A strategic mix of onsite leadership and remote execution.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Showcase */}
            <section className="py-24 px-6 relative z-10">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold font-sora mb-12 text-center">Strategic Impact & Successes</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="group relative bg-slate-100 rounded-2xl h-80 overflow-hidden flex flex-col justify-end p-6 transition-all hover:bg-slate-200 cursor-default">
                                <div className="absolute inset-0 border-2 border-dashed border-slate-300 rounded-2xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                                    <h5 className="text-lg font-bold text-slate-800 mb-1">[Project Name Placeholder]</h5>
                                    <p className="text-xs uppercase tracking-wider text-slate-500 mb-4">[Industry/Country]</p>
                                    <div className="text-2xl font-bold text-[var(--color-cobalt)]">[Key Metric]</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}
