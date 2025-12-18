"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useLanguage();

    // Aurora Mint Hex: #00D1FF
    const mintColor = "#00D1FF";

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-20 right-0 w-[350px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
                    >
                        {/* Chat Header */}
                        <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[var(--color-cobalt)] flex items-center justify-center">
                                    <Sparkles size={16} className="text-white" />
                                </div>
                                <span className="font-semibold text-sm font-[family-name:var(--font-sora)]">Qertex AI</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Chat Body */}
                        <div className="p-4 h-[300px] bg-slate-50 overflow-y-auto">
                            <div className="flex gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[var(--color-cobalt)] flex-shrink-0 flex items-center justify-center text-white text-xs">AI</div>
                                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 text-sm text-slate-700">
                                    {t("chatbot_welcome")}
                                </div>
                            </div>
                        </div>

                        {/* Chat Input */}
                        <div className="p-4 bg-white border-t border-slate-100">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder={t("chatbot_placeholder")}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[var(--color-cobalt)] transition-colors pr-10"
                                />
                                <button className="absolute top-1/2 right-3 -translate-y-1/2 text-[var(--color-cobalt)] hover:scale-110 transition-transform">
                                    <Send size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Glass Orb Trigger - Aurora Mint Pulse */}
            <motion.button
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(0,209,255,0.4)] backdrop-blur-md border border-white/40 bg-white/20 overflow-hidden group"
            >
                {/* Soft Aurora Mint Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00D1FF]/20 to-white/0 opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Pulse Ring */}
                <div className="absolute inset-0 rounded-full border border-[#00D1FF]/30 animate-ping opacity-20" />

                {/* Thinking Dots (on Hover) */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-1"
                    variants={{
                        hover: { opacity: 1 },
                        initial: { opacity: 0 }
                    }}
                    initial="initial"
                >
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-1.5 h-1.5 bg-[#00D1FF] rounded-full"
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        />
                    ))}
                </motion.div>

                {/* Default Icon */}
                <motion.div
                    variants={{
                        hover: { opacity: 0, scale: 0.5 },
                        initial: { opacity: 1, scale: 1 }
                    }}
                    className="relative z-10 text-[#00D1FF]"
                >
                    {isOpen ? <X size={28} /> : <MessageSquare size={28} strokeWidth={2.5} />}
                </motion.div>
            </motion.button>
        </div>
    );
}
