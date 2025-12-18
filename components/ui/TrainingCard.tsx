"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface TrainingCardProps {
    title: string;
    description: string;
    delay?: number;
    cta: string;
}

export function TrainingCard({ title, description, delay = 0, cta }: TrainingCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="group relative bg-white border border-slate-100 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[var(--color-cobalt)]/30"
        >
            <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-[var(--color-cobalt)] transition-colors font-[family-name:var(--font-sora)]">
                    {title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {description}
                </p>

                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-[var(--color-cobalt)] transition-colors mt-auto">
                    <span>{cta}</span>
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
            </div>

            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
        </motion.div>
    );
}
