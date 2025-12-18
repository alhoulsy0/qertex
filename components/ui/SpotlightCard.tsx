"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function SpotlightCard({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={cn(
                "group relative border border-[var(--glass-border)] bg-[var(--glass-bg)] overflow-hidden rounded-xl shadow-2xl backdrop-blur-md",
                className
            )}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(45, 212, 191, 0.15),
              transparent 80%
            )
          `,
                }}
            />

            {/* Subtle consistent inner glow */}
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-[var(--glass-border)] group-hover:ring-[var(--color-cobalt)]/30 transition-all duration-500" />

            <div className="relative h-full">{children}</div>
        </div>
    );
}
