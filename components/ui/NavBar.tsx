"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import { QertexLogo } from "./QertexLogo";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { t } = useLanguage();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const navLinks = [
    { name: t("nav_services"), href: "#services" },
    { name: t("nav_products"), href: "#products" },
    { name: t("nav_academy"), href: "#academy" },
    { name: t("nav_projects"), href: "#projects" },
  ];

  return (
    <>
      <motion.nav
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "py-2 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm"
          : "py-4 bg-transparent border-b border-transparent"
          } `}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo Group */}
          <div className="flex-shrink-0">
            <QertexLogo />
          </div>

          {/* Desktop Navigation & Actions */}
          <div className="hidden lg:flex items-center gap-10">
            {/* Links */}
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold text-slate-600 hover:text-[var(--color-cobalt)] transition-colors tracking-wide font-[family-name:var(--font-sora)]"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Only */}
            <div className="flex items-center gap-4 pl-4 border-l border-slate-200">
              <a href="mailto:info@qertex.com">
                <Button size="sm" className="font-[family-name:var(--font-sora)]">{t("nav_get_started")}</Button>
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              className="p-2 text-slate-800 hover:text-[var(--color-cobalt)] transition-colors"
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
          className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl pt-32 px-6 lg:hidden"
        >
          <div className="flex flex-col gap-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-bold text-slate-800 hover:text-[var(--color-cobalt)] transition-colors font-[family-name:var(--font-sora)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <a href="mailto:info@qertex.com" className="w-full max-w-xs mt-8">
              <Button className="w-full text-lg py-6 font-[family-name:var(--font-sora)]">{t("nav_get_started")}</Button>
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}
