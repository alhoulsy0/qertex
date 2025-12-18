"use client";

import { FadeIn } from "../ui/FadeIn";
import { TrainingCard } from "../ui/TrainingCard";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Academy() {
    const { t } = useLanguage();

    const courses = [
        {
            title: t("academy_card_ai_title"),
            description: t("academy_card_ai_desc"),
        },
        {
            title: t("academy_card_ml_title"),
            description: t("academy_card_ml_desc"),
        },
        {
            title: t("academy_card_istqb_title"),
            description: t("academy_card_istqb_desc"),
        },
        {
            title: t("academy_card_agile_title"),
            description: t("academy_card_agile_desc"),
        },
        {
            title: t("academy_card_auto_title"),
            description: t("academy_card_auto_desc"),
        },
    ];

    return (
        <section id="academy" className="py-24 bg-white relative z-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <FadeIn>
                        <span className="text-[var(--color-cobalt)] font-semibold tracking-wider text-sm uppercase">{t("academy_subtitle")}</span>
                        <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">{t("academy_title")}</h2>
                        <p className="text-slate-500 text-lg max-w-xl">
                            {t("academy_desc")}
                        </p>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course, index) => (
                        <TrainingCard
                            key={index}
                            title={course.title}
                            description={course.description}
                            delay={index * 0.1}
                            cta={t("academy_cta_view")}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
