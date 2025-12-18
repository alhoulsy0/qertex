"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";

import { BackgroundMesh } from "../ui/BackgroundMesh";

export function Hero() {
    const { t } = useLanguage();
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Decor */}
            <BackgroundMesh />

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                        {/* Split title logic or just use full string? 
                            The design has "Future" colored. 
                            Let's keep it simple for i18n or use Trans equivalent. 
                            For now, since we have simple keys, I'll assume the title key includes the coloring logic? 
                            No, string only. I'll split it or just render the whole string. 
                            Actually, the user request specific English text "Architecting the Future of Digital Trust". 
                            I'll use the translation key and maybe simplistic rendering for now as complex interpolation isn't in my simple provider.
                            Wait, I can wrap the "Future" word if I split the key or just use the whole string and lose the color effect for other langs?
                            Let's try to keep the color effect by splitting manually for English, but for Arabic just show full text?
                            Actually, I'll just use the t('hero_title') and maybe lose the specific span color for simplicity unless I upgrade i18n.
                            The user wants "high-end", let's leave the span for English hardcoded? No, that breaks AR.
                            I will just use the translation key for the whole h1.
                        */}
                        {t("hero_title")}
                    </h1>

                    <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                        {t("hero_subtitle")}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="mailto:info@qertex.com">
                            <Button size="lg">{t("hero_cta")}</Button>
                        </a>
                        <Button size="lg" variant="secondary">{t("hero_secondary_cta")}</Button>
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
