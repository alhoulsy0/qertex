"use client";

import React, { useRef, useState } from "react";
import { motion, HTMLMotionProps, useSpring, useTransform } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
}

export const Button = ({
    className,
    variant = "primary",
    size = "md",
    children,
    ...props
}: ButtonProps) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Magnetic Springs
    const x = useSpring(0, { stiffness: 150, damping: 15 });
    const y = useSpring(0, { stiffness: 150, damping: 15 });

    // Internal text motion - moves slightly less for depth
    const textX = useTransform(x, (current) => current * 0.2);
    const textY = useTransform(y, (current) => current * 0.2);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!btnRef.current) return;
        const rect = btnRef.current.getBoundingClientRect();

        // Calculate distance from center
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        // Pull button towards cursor
        x.set(distanceX * 0.3);
        y.set(distanceY * 0.3);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    const variants = {
        primary:
            "bg-gradient-to-r from-[var(--color-cobalt)] to-[var(--color-cobalt)] text-white shadow-lg shadow-blue-500/20 border border-blue-400/20",
        secondary:
            "bg-white/80 backdrop-blur-md text-[var(--foreground)] border border-[var(--glass-border)] hover:bg-white",
        ghost: "bg-transparent text-[var(--foreground)] hover:bg-slate-100/50",
    };

    const sizes = {
        sm: "px-5 py-2 text-sm",
        md: "px-7 py-3 text-base",
        lg: "px-9 py-4 text-lg",
    };

    return (
        <motion.button
            ref={btnRef}
            whileTap={{ scale: 0.95 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{ x, y }}
            className={cn(
                "relative rounded-full font-medium transition-colors duration-300 flex items-center justify-center gap-2",
                variants[variant],
                sizes[size],
                className
            )}
            {...(props as HTMLMotionProps<"button">)}
        >
            {/* Text Content Layer */}
            <motion.span
                className="relative z-10 flex items-center gap-2 font-[family-name:var(--font-sora)]"
                style={{ x: textX, y: textY }}
            >
                {children}
            </motion.span>

            {/* Shimmer/Glow on Hover */}
            {variant === "primary" && (
                <div
                    className={`absolute inset-0 rounded-full transition-opacity duration-500 bg-white/20 blur-md ${isHovered ? "opacity-30" : "opacity-0"}`}
                />
            )}
        </motion.button>
    );
};
