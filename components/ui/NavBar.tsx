"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";

export function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    const navLinks = [
        { name: "Services", href: "#services" },
        { name: "Global Reach", href: "#global-reach" },
        { name: "Our Vision", href: "#vision" },
    ];

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "py-4 bg-white/60 backdrop-blur-xl border-b border-white/20 shadow-[var(--glass-shadow)]"
                    : "py-6 bg-transparent"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <span className="text-2xl font-bold font-sans tracking-[0.2em] text-[var(--foreground)] group-hover:text-[var(--color-cobalt)] transition-colors duration-300">
                            QERTEX
                        </span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-600 hover:text-[var(--color-cobalt)] transition-colors tracking-wide"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:block">
                            <Button size="sm">Get Started</Button>
                        </div>

                        <button
                            className="md:hidden p-2 text-slate-800"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-32 px-6 md:hidden"
                >
                    <div className="flex flex-col gap-6 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-medium text-slate-800"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button className="w-full max-w-xs mt-4">Get Started</Button>
                    </div>
                </motion.div>
            )}
        </>
    );
}
