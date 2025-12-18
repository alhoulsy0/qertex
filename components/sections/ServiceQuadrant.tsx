"use client";

import { GlassCard } from "../ui/GlassCard";
import { Brain, ShieldCheck, Lock, Building2 } from "lucide-react";

const services = [
    {
        title: "AI Solutions",
        description: "Beyond Automation. We build neural ecosystems that think, learn, and scale.",
        icon: Brain,
        color: "text-[var(--color-cobalt)]",
    },
    {
        title: "Software Quality",
        description: "Zero-Defect Engineering. Because your reputation is written in your code.",
        icon: ShieldCheck,
        color: "text-[var(--color-mint)]",
    },
    {
        title: "Cybersecurity",
        description: "The Qertex Shield. Military-grade defense for the digital-first enterprise.",
        icon: Lock,
        color: "text-[var(--color-cobalt)]",
    },
    {
        title: "IT Governance",
        description: "Architectural Clarity. Aligning global standards with local business agility.",
        icon: Building2,
        color: "text-purple-500", // Using a distinct accent for the 4th, or stick to palette. Let's stick to theme but maybe mix?
        // User asked for "Electric Cobalt" and "Aurora Mint". Let's alternate or use gradient text.
        // I will use Cobalt for 1 & 3, Mint for 2, and maybe a mix/purple for 4 to balance?
        // Or just alternating.
        // Let's use Mint for 4.
    },
];

export function ServiceQuadrant() {
    return (
        <section id="services" className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold tracking-tight mb-4">The Core Four</h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Comprehensive digital mastery across the technological spectrum.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <GlassCard key={service.title} delay={index * 0.1}>
                            <div className="flex flex-col h-full">
                                <div className={`mb-6 p-4 rounded-xl bg-white/50 w-fit ${service.color === 'text-[var(--color-cobalt)]' ? 'text-blue-600' : 'text-teal-400'}`}>
                                    <service.icon size={32} strokeWidth={1.5} />
                                </div>

                                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed flex-grow">
                                    {service.description}
                                </p>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
