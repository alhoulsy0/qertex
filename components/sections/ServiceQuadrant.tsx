"use client";

import { GlassCard } from "../ui/GlassCard";
import { Brain, ShieldCheck, Lock, Building2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import Link from "next/link";

export function ServiceQuadrant() {
    const { t } = useLanguage();

    const services = [
        {
            title: t("service_ai_title"),
            description: t("service_ai_desc"),
            icon: Brain,
            color: "text-[var(--color-cobalt)]",
            link: null
        },
        {
            title: t("service_qa_title"),
            description: t("service_qa_desc"),
            icon: ShieldCheck,
            color: "text-[var(--color-mint)]",
            link: "/services/software-testing"
        },
        {
            title: t("service_cyber_title"),
            description: t("service_cyber_desc"),
            icon: Lock,
            color: "text-[var(--color-cobalt)]",
            link: null
        },
        {
            title: t("service_gov_title"),
            description: t("service_gov_desc"),
            icon: Building2,
            color: "text-purple-500",
            link: null
        },
    ];

    return (
        <section id="services" className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold tracking-tight mb-4">{t("services_title")}</h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        {t("services_subtitle")}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {services.map((service, index) => {
                        const CardContent = (
                            <GlassCard delay={index * 0.1} className="h-full transition-all duration-300 hover:scale-[1.02]">
                                <div className="flex flex-col h-full">
                                    <div className={`mb-6 p-4 rounded-xl bg-white/50 w-fit ${service.color === 'text-[var(--color-cobalt)]' ? 'text-blue-600' : 'text-teal-400'}`}>
                                        <service.icon size={32} strokeWidth={1.5} />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-slate-600 leading-relaxed flex-grow">
                                        {service.description}
                                    </p>

                                    {service.link && (
                                        <div className="mt-6 flex items-center text-sm font-semibold text-[var(--color-cobalt)] opacity-0 group-hover:opacity-100 transition-opacity">
                                            Learn More <ArrowRight className="ml-2 w-4 h-4" />
                                        </div>
                                    )}
                                </div>
                            </GlassCard>
                        );

                        return service.link ? (
                            <Link href={service.link} key={index} className="block group h-full">
                                {CardContent}
                            </Link>
                        ) : (
                            <div key={index} className="h-full">
                                {CardContent}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
