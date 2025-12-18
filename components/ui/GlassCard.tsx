"use client";

import { motion } from "framer-motion";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export function GlassCard({ children, className, delay = 0 }: GlassCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={cn(
                "relative overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-8 shadow-[var(--glass-shadow)] backdrop-blur-md transition-all",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 opacity-0 transition-opacity hover:opacity-100" />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
