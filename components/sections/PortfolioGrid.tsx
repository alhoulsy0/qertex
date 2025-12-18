"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../ui/FadeIn";
import { ArrowUpRight } from "lucide-react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "@/components/providers/LanguageProvider";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function PortfolioGrid() {
    const { t } = useLanguage();

    const projects = [
        {
            id: 1,
            title: t("project_vat_title"),
            category: "FinTech & Governance",
            image: "bg-blue-50",
            span: "md:col-span-2",
        },
        {
            id: 2,
            title: t("project_smart_city_title"),
            category: "IoT & AI",
            image: "bg-teal-50",
            span: "md:col-span-1",
        },
        {
            id: 3,
            title: t("project_banking_title"),
            category: "Cybersecurity",
            image: "bg-indigo-50",
            span: "md:col-span-1",
        },
        {
            id: 4,
            title: t("project_health_title"),
            category: "Digital Transformation",
            image: "bg-sky-50",
            span: "md:col-span-2",
        },
    ];

    return (
        <section id="projects" className="py-24 bg-slate-50/50 relative z-10">
            <div className="container mx-auto px-6">
                <FadeIn className="mb-12">
                    <span className="text-[var(--color-cobalt)] font-semibold tracking-wider text-sm uppercase">{t("projects_subtitle")}</span>
                    <h2 className="text-4xl font-bold mt-2">{t("projects_title")}</h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {projects.map((project, index) => (
                        <FadeIn
                            key={project.id}
                            delay={index * 0.1}
                            className={cn(
                                "group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-500",
                                project.span
                            )}
                        >
                            {/* Background Placeholder / Image */}
                            <div className={cn("absolute inset-0 transition-transform duration-700 group-hover:scale-105", project.image)} />

                            {/* Overlay with Blur Effect */}
                            <div className="absolute inset-0 bg-white/0 backdrop-blur-none transition-all duration-500 group-hover:bg-white/20 group-hover:backdrop-blur-md" />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <span className="text-xs font-bold text-[var(--color-cobalt)] uppercase tracking-wider mb-2 block">
                                                {project.category}
                                            </span>
                                            <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                                            <span className="text-xs font-medium text-slate-600 mt-2 block">{t("project_view_case")}</span>
                                        </div>
                                        <div className="p-3 rounded-full bg-[var(--color-cobalt)] text-white shadow-lg">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Initial State Title */}
                            <div className="absolute top-8 left-8 transition-opacity duration-300 group-hover:opacity-0">
                                <h3 className="text-xl font-bold text-slate-900/40">{project.title}</h3>
                            </div>

                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
