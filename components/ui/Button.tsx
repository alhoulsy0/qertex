"use client";

import React, { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
}

// Omit the onDrag props from motion to avoid conflicts if needed, or simply don't pass specialized drag handlers that conflict 
// The error was mostly about spreading ButtonProps into motion.button where onDrag types might clash.
// We can use a typed component.

export const Button = ({
    className,
    variant = "primary",
    size = "md",
    children,
    ...props
}: ButtonProps) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const btnRef = useRef<HTMLButtonElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!btnRef.current) return;
        const rect = btnRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    const variants = {
        primary:
            "bg-gradient-to-r from-[var(--color-cobalt)] to-[var(--color-cobalt)] text-white shadow-lg shadow-blue-500/20 border border-blue-400/20",
        secondary:
            "bg-white/80 backdrop-blur-md text-[var(--foreground)] border border-[var(--glass-border)] hover:bg-white",
        ghost: "bg-transparent text-[var(--foreground)] hover:bg-slate-100/50",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <motion.button
            ref={btnRef}
            whileTap={{ scale: 0.95 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative rounded-full font-medium transition-all duration-300 overflow-hidden flex items-center justify-center gap-2",
                variants[variant],
                sizes[size],
                className
            )}
            {...(props as HTMLMotionProps<"button">)}
        >
            <span className="relative z-10">{children}</span>

            {/* Shimmer Effect */}
            {variant === "primary" && (
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{
                        background: `radial-gradient(150px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.3), transparent 80%)`,
                    }}
                    style={{ opacity }}
                />
            )}
        </motion.button>
    );
};
